import React, { Component } from 'react';

import fonts from '../../fonts';

class Text extends Component {
  state = { text: '', selectedFont: 'Arial' };

  renderFonts() {
    return fonts.map((font) => {
      return <div key={font} className="swiper-sl" onClick={(e) => this.setState({ selectedFont: e.target.style.fontFamily})} style={{fontFamily: font}}>Aa</div>;
    });
  }

  render(){
    return (
          <div className="ui container">
              <div className="ui form inverted container" id="text-form" >
                <div className="field">         
                  <div className="ui input">
                     <input value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} style={{width: '80%', fontSize: '1.5em', fontFamily: this.state.selectedFont}} type="text" placeholder="Text" />
                  </div>
                </div>
                <div className="field">
                  <div className="swiper-cont">
                    <div className="swiper-wrapper">
                      {this.renderFonts()}
                    </div>
                  </div>
                </div>
                <button onClick={() => this.props.addTextToCanvas(this.state.text, this.state.selectedFont, 'Black', 100, 100)} className="ui white button" type="submit" style={{width: '100%'}}>Add</button>
              </div>
          </div>
    );
  }
}

export default Text;