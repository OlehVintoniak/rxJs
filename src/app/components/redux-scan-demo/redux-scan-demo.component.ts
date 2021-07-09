import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { merge, Observable, Subject } from 'rxjs';
import { mapTo, map, scan } from 'rxjs/operators';

@Component({
  selector: 'app-redux-scan-demo',
  templateUrl: './redux-scan-demo.component.html',
  styleUrls: ['./redux-scan-demo.component.scss']
})
export class ReduxScanDemoComponent implements OnInit {
  public productForm: FormGroup;

  public undoClick$ = new Subject();
  
  private action$: Observable<Action>;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.action$ = merge(
      this.undoClick$.pipe(mapTo({ type: 'UNDO' })),
      this.productForm.valueChanges.pipe(map(s => ({ type: 'VALUE_CHANGE', payload: s })))
    );
  }

  ngOnInit(): void {
    const reducer = (state: State, action: Action) => {
      switch(action.type) {
        case 'VALUE_CHANGE':
          return {
            undoing: false,
            history: state.undoing ? state.history : [ ...state.history, action.payload ]
          };
        case 'UNDO':
          return {
            undoing: true,
            history: state.history.length <= 1 ? state.history : state.history.slice(0, state.history.length - 1)
          };
      }
    };

    const initialState: State = {
      history: [],
      undoing: false
    };

    const state$ = this.action$.pipe(scan(reducer, initialState));
    state$.subscribe(state => {
      console.log(state);

      if (state.undoing) {
        this.productForm.setValue(state.history[state.history.length - 1]);
      }
    });
  }

}


interface Action {
  type: string;
  payload?: any;
}

interface State {
  history: any[];
  undoing: boolean;
}