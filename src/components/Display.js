import React, { Component } from 'react';
import { connect } from 'react-redux';

import Swiper from 'react-id-swiper';

import './Display.scss';
import 'swiper/css/swiper.min.css';

class Display extends Component {

    renderSlides() {
        return this.props.photos.map((photo, i) => {
            return (
                <div>
                    <img src={photo} />
                </div>
            );
        });
    }

    render() {

        const params = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
        };
        return (
            <div className="display">
                <Swiper params={params} shouldSwiperUpdate>
                    {this.renderSlides()}
                </Swiper>
            </div>
        );
    }
}


const mapStateToProps = ({photos}) => {
    return {
        photos
    };
};

export default connect(mapStateToProps, null)(Display);