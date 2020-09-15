import React, { Component, createRef } from 'react';

import { connect } from 'react-redux';
import { addPhoto } from '../../actions';

import Tools from './Tools';

import './Canvas.scss';
import './data/fonts/index.css';

class Canvas extends Component {

  constructor() {
    super();

    this.canvasRef = createRef();

    this.state = {
      done: false,
      canvasImage: '',
      canvasObject: {}
    };
  }

  componentDidMount() {
    this.canvas = new window.fabric.Canvas('c');
    
    this.onDeleteKey(); //adds event listener for 'Delete' key press
  }

  addImageToCanvas = (url, width, height, scale, selectable, left, right) => {
      this.canvas.isDrawingMode = false;
      window.fabric.Image.fromURL(url, (myImg) => {
      let img = myImg.set({ 
          left: left, 
          top: right, 
          width: width, 
          height: height,
          selectable: selectable,
          scaleX: scale, 
          scaleY: scale
      });
      this.canvas.add(img);
    });
  };

  addTextToCanvas = (text, fontFamily, color, left, top) => {
    let Text = new window.fabric.Text(text, {
        left: left, 
        top: top,
        fontFamily: fontFamily
    });
    Text.setColor(color);
    this.canvas.add(Text);
  }

  onDoneClick = () => {
      const canvasImage = this.canvas.toDataURL('png');
      const canvasObject = this.canvas.toObject();

      this.props.addPhoto(canvasImage);

      this.setState({
        done: true,
        canvasImage,
        canvasObject
      });

  }

  onCanvasClick = () => {
    const canvasObject = this.canvas.toObject();

    this.setState({
      canvasObject
    });
  }

  onFileUpload = e => {
    let reader = new window.FileReader();
    reader.onload = event => {
        let imageObject = new window.Image();
        imageObject.src = event.target.result;
        imageObject.onload = () => {
            let image = new window.fabric.Image(imageObject);
            image.set({
                left: 50,
                top: 50,
                angle: 0,
                padding: 10,
                cornersize: 10,
                height: image.height,
                width: image.width,
                scaleX: .05, 
                scaleY: .05,
            });
            this.canvas.add(image);
        };
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  onDeleteKey() {
    document.querySelector('html').addEventListener('keyup', (e) => {
      if(e.key === 'Delete') {
          this.canvas.remove(this.canvas.getActiveObject());
      }
    });
  }

  render() {
    return (
      <div 
        className="canvas" 
        onClick={() => {this.onCanvasClick()}}
      >
        <canvas 
          ref={this.canvasDom}
          id="c" 
          width="400px" 
          height="225px"
        >
        </canvas>
        <Tools 
          onFileUpload={this.onFileUpload} 
          addImageToCanvas={this.addImageToCanvas} 
          addTextToCanvas={this.addTextToCanvas}  
          onDoneClick={this.onDoneClick}
        />
        <button 
          className="ui button yellow done" 
          onClick={() => {this.onDoneClick()}} 
          id="done"
        >
          <i className="ui inverted check icon"></i>
        </button>
      </div>
    );
  }
};

export default connect(null, { addPhoto })(Canvas);