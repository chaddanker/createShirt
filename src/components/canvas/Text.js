import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import fonts from './assets/fonts';

import 'swiper/css/swiper.min.css';
import './Text.scss';

class Text extends Component {
  state = { text: '', selectedFont: 'Arial' };

  renderFonts() {
    return fonts.map((font) => {
      return <div 
                key={font} 
                className="swiper-slide" 
                onClick={(e) => this.setState({ selectedFont: e.target.style.fontFamily})} 
                style={{fontFamily: font}}
              >
                Aa
              </div>;
    });
  }

  render(){
    return (
          <div className="text">
              <div className="ui form" id="text-form" >
                <div className="field">        
                  <div className="ui input">
                     <input 
                      value={this.state.text} 
                      onChange={(e) => this.setState({ text: e.target.value })} 
                      style={{fontFamily: this.state.selectedFont}} 
                      type="text" 
                      placeholder="write something..." 
                      id="text-input"
                    />
                  </div>
                </div>
                <div className="field">
                  <Swiper>
                      {this.renderFonts()}
                  </Swiper>
                </div>
              </div>
              <div 
                onClick={() => this.props.addTextToCanvas(this.state.text, this.state.selectedFont, 'Black', 100, 100)} 
                className="round-button floated-right"
              >
                <i className="ui add icon"></i>
              </div>
          </div>
    );
  }
}

export default Text;