import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
	render() {
		return (
			<div>
				<img className="image" style={{height: '70vh'}} src={this.props.canvasImage} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		canvasImage: state.canvasImage
	};
};

export default connect(mapStateToProps)(Checkout);