import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){
    // console.log('Action received', action);
    switch (action.type){
        case FETCH_WEATHER:

        //this line below doesn't mutate the state but rather returns a new instance of state in order to save all cities' data a user has searched. 
        return state.concat([action.payload.data]);
        // same thing can also be written in ES6 syntax as:
        // return [action.payload.data, ...state];
    }
    return state;
}
