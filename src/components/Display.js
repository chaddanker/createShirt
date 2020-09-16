import React, { Component } from 'react';
import { connect } from 'react-redux';

import Swiper from 'react-id-swiper';

import { updateSelectedObject } from '../actions';

import './Display.scss';
import 'swiper/css/swiper.min.css';

class Display extends Component {

    state = {
        hover: null
    };

    renderSlides() {
        return this.props.photos.map((photo, i) => {
            return (
                <div className="image-div" onClick={() => this.props.updateSelectedObject(i)}>
                    <img className="slider-image" alt="slide" src={photo} />
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


const mapStateToProps = ({photos, canvasObjects}) => {
    return {
        photos,
        canvasObjects
    };
};

export default connect(mapStateToProps, {updateSelectedObject})(Display);