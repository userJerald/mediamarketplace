import { ITEM_ACTION_ADD , ITEM_ACTION_REMOVE } from './action'
import { combineReducers } from 'redux'

const InitialValue = {
    textArray: []
};

function item (state = InitialValue, action ){
    switch (action.type){

        case ITEM_ACTION_ADD : {
            return { ...state,
                textArray: [ ...state.textArray, 
                    action.text]
            }
        }
        
        case ITEM_ACTION_REMOVE : {
            return action.text;
        }

        default: {
            return state;
        }
    }
}

export default combineReducers({item})