/**
*
* EditorC
*
*/

import React from 'react';


import styles from './styles.css';
import Textfield from 'components/Textfield';

var options = {
	"type": "number",
	"min": "1",
	"max": "1000",
	"required": true
};

function EditorC(props) {
  return (
  	<Textfield valB={props.valB} valC={props.valC} updateValue={props.updateEditorC_VALUE} data = {options} />
  );
}

export default EditorC;
