import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../history';
import Create from '../pages/create';

import './App.scss';

class App extends Component{
	render() {
		return (
			<div className="canvas-app">
				<Router history={history} >
					<div className="page">
						<div className="ui container">
							<Switch>
								<Route exact path="/">
									<Create />
								</Route>
							</Switch>
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


