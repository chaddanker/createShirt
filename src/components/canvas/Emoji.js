import React, { Component } from 'react';
import emojis from '../../emojis';

class Emoji extends Component {

  renderList() {
    return emojis.map((emojiURL) => {
      return <td key={emojiURL}><img src={`Emojis/Expressions/${emojiURL}`} onClick={() => this.props.addImageToCanvas(`Emojis/Expressions/${emojiURL}`, 512, 512, 0.1, true, 100, 100)} height="30" width="30" /></td>;
    });
  }

  render() {
    return (
      <div>
        <table className="toolsTable" id="emoji-table">
          <tbody>
            <tr>
              {this.renderList()}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}

export default Emoji;