import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
	return(
		<div className="ui secondary pointing menu">
			<Link to="/" className="item" style={{fontFamily: 'Lobster', fontSize: '1.8em'}}>Create A Shirt</Link>
			<Link to="/" className="item" >Create</Link>
			<Link to="/orders" className="item" >Your Orders</Link>

			<div className="right menu">
				<div className="item">
					<GoogleAuth />
				</div>
			</div>
		</div>
	);
};

export default Header;