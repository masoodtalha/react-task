/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {connect} from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {createStructuredSelector} from 'reselect';
import messages from './messages';
import EditorA from 'components/EditorA';
import EditorB from 'components/EditorB';
import EditorC from 'components/EditorC';
import EditorD from 'components/EditorD';
import EditorE from 'components/EditorE';
import Button from 'components/Button';

import {updateEditorA_VALUE, updateEditorB_VALUE, updateEditorC_VALUE, updateEditorD_VALUE, updateEditorE_VALUE} from './actions'
import {selectValueA, selectValueB, selectValueC, selectValueD, selectValueE} from './selectors'

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function



  render() {
  	console.log("hello World", this.props);

    return (

    <div>
	      <label> Editor A </label>
	      <EditorA updateEditorA_VALUE={this.props.updateEditorA_VALUE} valA={this.props.valA} /> 

	      <br />

	      <label> Editor B </label>
	      <EditorB updateEditorB_VALUE={this.props.updateEditorB_VALUE} valB={this.props.valB} />  

	      <br />

	      <label> Editor C </label>
	      <EditorC updateEditorC_VALUE={this.props.updateEditorC_VALUE} valB={this.props.valB} valC={this.props.valC} /> 

	      <br />

	      <label> Editor D </label> <br />
	      <EditorD valD={this.props.valD} updateEditorD_VALUE={this.props.updateEditorD_VALUE} />

	      <br /> <br />

	      <label> Editor E </label> <br />
	      <EditorE updateEditorE_VALUE={this.props.updateEditorE_VALUE} valD = {this.props.valD} />

	      <br /> <br />

	      <Button vals = {[this.props.valA, this.props.valB, this.props.valC, this.props.valD, this.props.valE]} />
    </div>
    
    );
  }
}


function mapDispatchToPops(dispatch) {
	console.log(dispatch,"Kuta");
	return {
		updateEditorA_VALUE: function(value){ dispatch(updateEditorA_VALUE(value))},
		updateEditorB_VALUE: function(value)  {dispatch(updateEditorB_VALUE(value))},
		updateEditorC_VALUE: function(value)  {dispatch(updateEditorC_VALUE(value))},
		updateEditorD_VALUE: function(value)  {dispatch(updateEditorD_VALUE(value))},
		updateEditorE_VALUE: function(value)  {dispatch(updateEditorE_VALUE(value))},
		dispatch
	};
}

const mapStateToProps =  state => createStructuredSelector({
  // routeState : selectRouteState(),
  // assignments: selectAssignmentsSuccess(),
  // loading: selectAssignmentsLoading(),
  // error: selectAssignmentsError(),
  valA: selectValueA(),
  valB: selectValueB(),
  valC: selectValueC(),
  valD: selectValueD(),
  valE: selectValueE(),
});


export default connect(mapStateToProps, mapDispatchToPops)(HomePage)