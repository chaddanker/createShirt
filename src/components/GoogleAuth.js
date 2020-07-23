import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '712361285057-1ud6kc69arqoe24ln9spm4499ib54j1n.apps.googleusercontent.com',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	onAuthChange = (isSignedin) => {
		if(isSignedin) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if(this.props.isSignedin === null){
			return   <div className="ui active inline loader"></div>;
		} else if(this.props.isSignedin) {
			return <button className="ui red google button" onClick={this.onSignOutClick}><i className="google icon"/>Sign Out</button>;
		} else {
			return <button className="ui red google button" onClick={this.onSignInClick}><i className="google icon"/>Sign In</button>;
		}
	}

	render() {
		return(<div>{this.renderAuthButton()}</div>);
	}
}

const mapStateToProps = (state) => {
	return {
		isSignedin: state.auth.isSignedIn
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);