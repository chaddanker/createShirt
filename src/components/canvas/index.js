import React, { Component, createRef } from 'react';

import { connect } from 'react-redux';
import { addPhoto, addObject } from '../../actions';

import Tools from './Tools';

import './Canvas.scss';
import './assets/fonts/index.css';

class Canvas extends Component {

  constructor() {
    super();

    this.canvasRef = createRef();

    this.state = {
      done: false,
      displayingDraft: -1,
      deleteButtonAttachedTo: null, 
      canvasImage: '',
      canvasObject: {},
      canvasImages: [],
      canvasObjects: []
    };
  }

  componentDidMount() {
    this.canvas = new window.fabric.Canvas('c');
    this.onDeleteKey(); //adds event listener for 'Delete' key press
    this.deleteButton(); //logic for canvas item's delete button
    const scale = window.innerWidth < 400 ? 0.35 : 0.4;
    this.addImageToCanvas('images/ShortTShirtAdultsTemplate.png', 957, 940, scale, false, 5.5, 0);
    const btnDelete = document.querySelector('.btn-delete');

    if(document.querySelector('.btn-delete')) {
      document.querySelector('.btn-delete').addEventListener('click', () => {
        if(this.canvas.getActiveObject())
        {
            this.canvas.remove(this.canvas.getActiveObject());
            btnDelete.parentNode.removeChild(btnDelete);
        }
      });
    }
  }

  componentDidUpdate() {
    if(this.props.selected !== null && this.state.displayingDraft !== this.props.selected) {
      this.removeDeleteButton();
      this.canvas.clear().renderAll();
      this.canvas.loadFromJSON(this.props.canvasObjects[this.props.selected]);
      this.setState({
        displayingDraft: this.props.selected //index of canvas object
      });
    }
  }

  addImageToCanvas = (url, width, height, scale, selectable, left, right, isDeletable) => {
      this.canvas.isDrawingMode = false;
      window.fabric.Image.fromURL(url, (myImg) => {
      let img = myImg.set({ 
          left: left, 
          top: right, 
          width: width, 
          height: height,
          selectable: selectable,
          scaleX: scale, 
          scaleY: scale,
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
      this.props.addObject(canvasObject);

      this.setState(({canvasImages, canvasObjects}) => ({
        done: true,
        canvasImage,
        canvasObject,
        canvasImages: [...canvasImages, canvasImage],
        canvasObjects: [...canvasObjects, canvasObject]
      }));

  }

  onFileUpload = e => {
    let reader = new window.FileReader();
    reader.onload = event => {
        let imageObject = new window.Image();
        this.setState(({canvasImages}) => ({
          canvasImages: [...canvasImages, event.target.result]
        }));
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
  
  //adds delete button to coordinates (x, y) on a selected canvas object(top right corner)
  addDeleteBtn = (x, y) => {
    
    const btnDelete = document.querySelector('.btn-delete');

    if(btnDelete) {
      btnDelete.parentNode.removeChild(btnDelete);
    }
    let btnLeft = x - 20;
    let btnTop = y - 20;
    var deleteBtn = document.createElement('img');
    deleteBtn.src = "/images/delete.svg";
    deleteBtn.alt = "delete";
    deleteBtn.style = `position:absolute;top:${btnTop}px;left:${btnLeft}px;cursor:pointer;width:40px;height:40px;`;
    deleteBtn.className = "btn-delete";
    document.querySelector('.canvas-container').appendChild(deleteBtn);

    if(document.querySelector('.btn-delete')) {
      this.setState({
        deleteButtonAttachedTo: this.canvas.getActiveObject()
      });
      document.querySelector('.btn-delete').addEventListener('click', e => {
          if(this.canvas.getActiveObject())
          {
              this.canvas.remove(this.canvas.getActiveObject());
              document.querySelector('.btn-delete').parentNode.removeChild(document.querySelector('.btn-delete')); 
          }
      });
    }
  }

removeDeleteButton = () => {
  if(document.querySelector('.btn-delete')) {
    document.querySelector('.btn-delete').parentNode.removeChild(document.querySelector('.btn-delete')); 
  }
}
  
deleteButton = () => {

  this.canvas.on('object:selected', e => {
    this.addDeleteBtn(e.target.oCoords.tr.x, e.target.oCoords.tr.y);
  });

  this.canvas.on('mouse:down', e => {
      if(!this.canvas.getActiveObject()) this.removeDeleteButton();
      if(this.state.deleteButtonAttachedTo !== this.canvas.getActiveObject()) {
        this.removeDeleteButton();
        if(e.target && e.target.cacheKey !== "texture0")
          this.addDeleteBtn(e.target.oCoords.tr.x, e.target.oCoords.tr.y);
      }
  });

  this.canvas.on('object:modified', e => {
    this.addDeleteBtn(e.target.oCoords.tr.x, e.target.oCoords.tr.y);
  });

  this.canvas.on('object:scaling', e => {
    this.removeDeleteButton();
  });

  this.canvas.on('object:moving', e => {
    this.removeDeleteButton();
  });

  this.canvas.on('object:rotating', e => {
    this.removeDeleteButton();
  });

}

  onDeleteKey() {
    document.querySelector('html').addEventListener('keyup', e => {
      if(e.key === 'Delete') {
          this.canvas.remove(this.canvas.getActiveObject());
      }
    });
  }

  render() {
    return (
      <div 
        className="canvas" 
      >
        <canvas 
          ref={this.canvasDom}
          id="c" 
          width={window.innerWidth < 400 ? "350px" : "400px"}
          height="350px"
        >
        </canvas>
        <Tools 
          onFileUpload={this.onFileUpload} 
          addImageToCanvas={this.addImageToCanvas} 
          addTextToCanvas={this.addTextToCanvas}  
          onDoneClick={this.onDoneClick}
          canvasImages={this.state.images}
        />
        <button 
          className="ui button done" 
          onClick={() => {this.onDoneClick()}} 
          id="done"
        >
          <i className="ui inverted check icon"></i>
        </button>
      </div>
    );
  }
};

const mapStateToProps = ({selected, canvasObjects}) => {
  return {
    canvasObjects,
    selected
  }
};

export default connect(mapStateToProps, { addPhoto, addObject })(Canvas);