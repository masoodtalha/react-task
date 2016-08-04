/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';
import {
  EDITORA_VALUE,
  EDITORB_VALUE,
  EDITORC_VALUE,
  EDITORD_VALUE,
  EDITORE_VALUE,
} from './constants';

const initialState = fromJS({
  updateSuccessful : true,
  valueA: 'a',
  valueB: 0,
  valueC: 0,
  valueD: '',
  valueE: '',
});

console.log("talja ");
function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case EDITORA_VALUE:
    	console.log("updating ", action.val)
      return state
      	.set('valueA', action.val)    
    case EDITORB_VALUE:
      console.log("updating ", action.val)
    	return state
      	.set('valueB', action.val)
    case EDITORC_VALUE:
      return state
      	.set('valueC', action.val)
    case EDITORD_VALUE:
      return state
      	.set('valueD', action.val)
    case EDITORE_VALUE:
      return state
      	.set('valueE', action.val)
    default:
      return state;
  }
}

export default homePageReducer;
