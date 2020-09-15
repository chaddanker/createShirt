import React, { Component } from 'react';

import './Emoji.scss';
import emojis from './data/emojis';

class Emoji extends Component {

  renderList() {
    return emojis.map((emojiURL, i) => {
      return (
            <div className="img-container">
              <img 
                src={`Emojis/Expressions/${emojiURL}`} 
                onClick={() => this.props.addImageToCanvas(`Emojis/Expressions/${emojiURL}`, 512, 512, 0.1, true, 100, 100)} 
                height="30" width="30" 
              />
            </div>
      );
    });
  }

  render() {
    return (
      <div className="emoji">
        {this.renderList()}
      </div>
    );
  };
}

export default Emoji;