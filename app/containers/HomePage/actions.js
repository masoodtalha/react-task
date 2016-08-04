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
  return {
    type: EDITORB_VALUE,
    val
  };
}

export function updateEditorC_VALUE(val) {
  return {
    type: EDITORC_VALUE,
    val
  };
}

export function updateEditorD_VALUE(val) {
  return {
    type: EDITORD_VALUE,
    val
  };
}

export function updateEditorE_VALUE(val) {
  return {
    type: EDITORE_VALUE,
    val
  };
}
