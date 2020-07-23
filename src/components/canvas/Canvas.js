import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Tools from './Tools';
import Modal from '../Modal';
import history from '../../history';
import { canvasChanged, canvasDone } from '../../actions';
import '../Swiper.css';

class Canvas extends Component {
  state = { isContinued: false };

  componentDidMount() {
    this.canvas = new window.fabric.Canvas('c');

    if(Object.keys(this.props.objects).length === 0 && this.props.objects.constructor === Object){
      this.addImageToCanvas('images/ShortTShirtAdultsTemplate.png', 957, 940, 0.6, false, 0, 0); //bg image  
    } else if(this.state.isContinued === false) {
      this.setState({ isContinued: true });
      this.canvas.loadFromJSON(this.props.objects.canvasObject);
    }

    this.onDeleteKey();
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

      this.props.canvasDone(canvasImage, canvasObject);

      history.push('/checkout');
  }

  onCanvasClick = () => {
    const canvasObject = this.canvas.toObject();

    this.props.canvasChanged(canvasObject);
  }

  onFileUpload = (e) => {
    var reader = new window.FileReader();
    reader.onload = (event) => {
        var imgObj = new window.Image();
        imgObj.src = event.target.result;
        imgObj.onload = () => {
            var image = new window.fabric.Image(imgObj);
            image.set({
                left: 230,
                top: 250,
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
      if(e.keyCode == 46) {
          this.canvas.remove(this.canvas.getActiveObject());
      }
    });
  }

  render() {
    return (
      <div>
        <div className="ui row">
          <div id="canvas-div" onClick={() => {this.onCanvasClick()}}>
    		      <canvas id="c" width="600px" height="600px"></canvas>
    	   </div>
        </div>
        <Tools onFileUpload={this.onFileUpload} onDoneClick={this.onDoneClick} addImageToCanvas={this.addImageToCanvas} addTextToCanvas={this.addTextToCanvas}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
   return {
      objects: state.canvasObject
   };
};

export default connect(mapStateToProps, { canvasChanged, canvasDone })(Canvas);