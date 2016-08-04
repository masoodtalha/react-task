/**
*
* Button
*
*/

import React from 'react';


import styles from './styles.css';

function Button(props) {

  var printForm = function(){
  	console.log("*********************************")
  	console.log("Printing Form ", props.vals);
  	console.log("*********************************")
  };
  return (
    <div>
    <button onClick = {printForm} className={styles.button} type="button">Submit Form</button>
    </div>
  );
}

export default Button;
