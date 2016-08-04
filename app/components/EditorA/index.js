/**
*
* EditorA
*
*/

import React from 'react';


import styles from './styles.css';
import Textfield from 'components/Textfield';

var options = {
	"type": "text",
	"min": "3",
	"max": "15",
	"required": true
};



function EditorA(props) {
  return (
  	<Textfield data = {options} valA={props.valA} updateValue={props.updateEditorA_VALUE}/>
  );
}

export default EditorA;
