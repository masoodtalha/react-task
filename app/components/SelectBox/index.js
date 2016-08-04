/**
*
* SelectBox
*
*/

import React from 'react';


import styles from './styles.css';

function SelectBox(props) {

  var selected = function(e){
  	//console.log(e.target.value);
  	console.log(props.valD)
  	props.updateValue(e.target.value);
  };

  return (
    <select className = {styles.selectBox} onChange={selected}>
    {
	    props.data.map(function(option) {
		  return <option  value={option}> {option} </option>;
		})
	}
    </select>
  );
}

export default SelectBox;
