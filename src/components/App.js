import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

import Header from './Header';
import Canvas from './canvas/Canvas';
import Text from './canvas/Text';
import Emoji from './canvas/Emoji';
import Checkout from './Checkout';
import Orders from './Orders';
import Draft from './canvas/Draft';

const App = () => {
	return (
		<div>
			<Router history={history} >
				<div>
					<div className="ui container">
						<Header />
						<Switch>
							<Route path="/" exact component={Canvas}/>
							<Route path="/text" exact component={Text}/>
							<Route path="/emoji" exact component={Emoji}/>
							<Route path="/checkout" exact component={Checkout}/>
							<Route path="/orders" exact component={Orders}/>
							<Route path="/draft" exact component={Draft}/>
						</Switch>
					</div>
				</div>				
			</Router>
		</div>

	);
};

export default App;


