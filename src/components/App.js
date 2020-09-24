import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../history';
import Display from './Display';
import Canvas from './canvas/Canvas';

import './App.scss';

class App extends Component{
	render() {
		return (
			<div className="canvas-app">
				<Router history={history} >
					<div className="page">
						<h1>Canvas To PNG</h1>
						<div className="ui container">
							<Canvas />
							<Display />
						</div>
					</div>				
				</Router>
			</div>

		);		
	}

};

const mapStateToProps = ({canvasImage}) => {
	return {
		canvasImage
	}
};

export default connect(mapStateToProps, {})(App);


