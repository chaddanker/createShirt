import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Emoji from './Emoji';
import Text from './Text';
import Image from './Image';
import history from '../../history';
import { canvasDone } from '../../actions';

class Tools extends Component {

	state = { selectedTools: 'Text' };

	selectedTool() {
	if(this.state.selectedTools === 'Text')
	  return <Text addTextToCanvas={this.props.addTextToCanvas}/>
	if(this.state.selectedTools === 'Emoji')
	  return <Emoji addImageToCanvas={this.props.addImageToCanvas} />
	if(this.state.selectedTools === 'Image')
	  return <Image onFileUpload={this.props.onFileUpload} />
	}
	render() {
	return (
	  <div id="right-container" className="ui segment">
	    <div className="ui secondary pointing menu">
	      <a className="item" onClick={() => this.setState({ selectedTools: 'Text' })}>
	        Text
	      </a>
	      <a className="item" onClick={() => this.setState({ selectedTools: 'Emoji' })}>
	        Emoji
	      </a>
	      <a className="item" onClick={() => this.setState({ selectedTools: 'Image' })}>
	        Image
	      </a>
	      <div className="right-menu" style={{ float: 'right', marginLeft: '40%' }}>
	        <button onClick={() => {this.props.onDoneClick()}} className="ui right floated primary button" id="">Done</button>
	      </div>
	    </div>
	    <div id="ToolsContainer" >
	      {this.selectedTool()}
	    </div>
	  </div>
	);
	}
};

export default connect(null, { canvasDone })(Tools);