import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import fonts from './data/fonts';

import 'swiper/css/swiper.min.css';
import './Text.scss';

class Text extends Component {
  state = { text: '', selectedFont: 'Sketch Gothic School' };

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
                      placeholder="text..." 
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
              <button 
                onClick={() => this.props.addTextToCanvas(this.state.text, this.state.selectedFont, 'Black', 100, 100)} 
                className="ui yellow button add right floated" 
                type="submit"
              >
                +
              </button>
          </div>
    );
  }
}

export default Text;