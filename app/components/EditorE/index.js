/**
*
* EditorE
*
*/

import React from 'react';


import styles from './styles.css';
import SelectBox from 'components/SelectBox';

var options = ['option 1', 'option 2', 'option 3', 'option 4'];

function EditorD(props) {
  return (
  	<SelectBox data = {options} updateValue={props.updateEditorE_VALUE} valD = {props.valD} valE = {props.valE} />
  );
}

export default EditorD;

