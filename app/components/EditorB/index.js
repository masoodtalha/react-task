/**
*
* EditorB
*
*/

import React from 'react';


import styles from './styles.css';
import Textfield from 'components/Textfield';

var options = {
	"type": "number",
	"min": "1",
	"max": "1000",
	"required": true,
};

function EditorB(props) {
  return (
  	<Textfield data = {options} valB={props.valB}  updateValue={props.updateEditorB_VALUE} />
  );
}

export default EditorB;
