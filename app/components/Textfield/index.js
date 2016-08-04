/**
*
* Textfield
*
*/

import React from 'react';


import styles from './styles.css';

function Textfield(props) {

	console.log("My props are: ", props.valA);
	var ErrorMsg;

	var validate = function(e){
		console.log(e.target.value);

		props.updateValue(e.target.value);
	};

	var validateText = function(e){
		if(props.valA.length <3 || props.valA.length > 15){
			ErrorMsg = <span> Length should be greater than 3 and less than 15 </span>;
		}
		props.updateValue(e.target.value);
	};

	var validateNumber = function(e){
		
		if(props.valB && props.valC < props.valB){
			alert("Value of editor C should be greater than value of editor B")
		}

		if(props.valB && (props.valB <1 || props.valB > 1000 )){
			alert("Value of editor B should be between 1 and 1000")
		}

		if(props.valC && (props.valC <1 || props.valC > 1000 ) ){
			alert("Value of editor C should be between 1 and 1000")
		}
		props.updateValue(e.target.value);
		
	};

	var inputTag,
		pattern = null;

	if(props.data.type === "text" && props.data.min && props.data.max){
		pattern = ".{" +  props.data.min + "," + props.data.max + "}";
		inputTag = <input className={styles.textfield} type={props.data.type} pattern={pattern} required onChange={validateText}/>;
	}
	else if(props.data.type === "number" && props.data.min && props.data.max){
		pattern = 'min="0" max="100"';
		inputTag = <input className={styles.textfield} type={props.data.type} min = {props.data.min} max = {props.data.max} required  onChange={validateNumber}/>;
	}

	else{
		inputTag = <input className={styles.textfield} type={props.data.type} required onChange={validate}/>;
	}

  return (
   <div>
   	{inputTag}
   	{ErrorMsg} 
   </div>
  );
}

export default Textfield;
