/*
 *
 * LanguageProvider actions
 *
 */

import {
  EDITORA_VALUE,
  EDITORB_VALUE,
  EDITORC_VALUE,
  EDITORD_VALUE,
  EDITORE_VALUE,
} from './constants';

export function updateEditorA_VALUE(val) {
  
  return {
    type: EDITORA_VALUE,
    val
  };
}

export function updateEditorB_VALUE(val) {
  console.log("I am in ValueB Action")
  return {
    type: EDITORB_VALUE,
    val
  };
}

export function updateEditorC_VALUE(val) {
  console.log("I am in ValueC Action")
  return {
    type: EDITORC_VALUE,
    val
  };
}

export function updateEditorD_VALUE() {
  return {
    type: EDITORD_VALUE,
  };
}

export function updateEditorE_VALUE() {
  return {
    type: EDITORE_VALUE,
  };
}
