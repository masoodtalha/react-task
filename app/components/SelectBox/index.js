/**
*
* SelectBox
*
*/

import React from 'react';


import styles from './styles.css';

function SelectBox(props) {

  var selected = function(e){
  	//console.log(e.target.value)
    if(props.valD || props.valE){
      if((props.valD === e.target.value) || (props.valE === e.target.value) ){
        alert("These can't be equal")
      }
    }

  	props.updateValue(e.target.value);

    //console.log("valD ****", props.valD )
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
