import {ActionReducer,Action} from '@ngrx/store';
import { PageInfo } from './../models/progressbar.model'
import * as ProgressbarActions from './../actions/progressbar.actions'


const initialState:PageInfo = {
    pageName : 'DefaultPage',
    Address : 2,
    PageCount : 4
}

export function reducer(state: PageInfo[] = [],action:ProgressbarActions.Actions) {

    switch(action.type) {
        case ProgressbarActions.ADD_PAGE:
            alert("Data Stored");
            return[...state,action.payload];
        case ProgressbarActions.GET_PAGE:
            alert("Data Retrieved");
            return state.filter((b)=> b.pageName == action.payload.pageName)
        default:
            return state;
    }
    

}