import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../history';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import { fetchOrders, fetchCanvasObject } from '../actions';

class Orders extends Component {
	componentDidMount() {
		this.props.fetchOrders();
	}

	renderList(){
		return this.props.orders.map((order) => {
			return (
				<div key={order.id} style={{width: 400, height: 500, overflow: "visible"}}>
					<img src={`${order.canvasImage}`} style={{ width: '100%' }}/>
					<button className="ui button primary" onClick={() => this.onEditClick(order.id)}>Use as template</button>
				</div>
			);
		});
	}

	onEditClick = (id) => {
		this.props.fetchCanvasObject(id);

		history.push('/draft');
	};

	render() {
		const params = {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true
			},
			keyboard: true,
			pagination: {
			el: '.swiper-pagination'
			},
			shouldSwiperUpdate: true
		}

		return (
		<div style={{width: '100%'}}>
			<Swiper {...params} >
				{this.renderList()}
			</Swiper>
		</div>
		);
	}
}

const mapStateToProps = ({ orders, auth }) => {
	return {
		orders: Object.values(orders),
		currentUserId: auth.userId,
		isSignedIn: auth.isSignedIn
	};
};

export default connect(mapStateToProps, { fetchOrders, fetchCanvasObject })(Orders);

