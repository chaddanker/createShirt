// const canvas = new window.fabric.Canvas('c');

//   export const addImageToCanvas = (url, width, height, scale, selectable, left, right) => {
//     this.canvas.isDrawingMode = false;
//     window.fabric.Image.fromURL(url, (myImg) => {
//     let img = myImg.set({ 
//         left: left, 
//         top: right, 
//         width: width, 
//         height: height,
//         selectable: selectable,
//         scaleX: scale, 
//         scaleY: scale
//     });
//     this.canvas.add(img);
//   });
// };

// export const addTextToCanvas = (text, fontFamily, color, left, top) => {
//   let Text = new window.fabric.Text(text, {
//       left: left, 
//       top: top,
//       fontFamily: fontFamily
//   });
//   Text.setColor(color);
//   this.canvas.add(Text);
// }

// export const onFileUpload = e => {
//     let reader = new window.FileReader();
//     reader.onload = event => {
//         let imageObject = new window.Image();
//         imageObject.src = event.target.result;
//         imageObject.onload = () => {
//             let image = new window.fabric.Image(imageObject);
//             image.set({
//                 left: 50,
//                 top: 50,
//                 angle: 0,
//                 padding: 10,
//                 cornersize: 10,
//                 height: image.height,
//                 width: image.width,
//                 scaleX: .05, 
//                 scaleY: .05,
//             });
//             this.canvas.add(image);
//         };
//     };
//     reader.readAsDataURL(e.target.files[0]);
// }


// export const addDeleteBtn = (x, y) => {
        
//     const btnDelete = document.querySelector('.btn-delete');

//     if(btnDelete) {
//       btnDelete.parentNode.removeChild(btnDelete);
//     }
//     let btnLeft = x - 30;
//     let btnTop = y - 30;
//     var deleteBtn = document.createElement('img');
//     deleteBtn.src = "https://upload.wikimedia.org/wikipedia/commons/0/0f/Icons8_flat_delete_generic.svg";
//     deleteBtn.alt = "delete button";
//     deleteBtn.style = `position:absolute;top:${btnTop}px;left:${btnLeft}px;cursor:pointer;width:60px;height:60px;`;
//     deleteBtn.className = "btn-delete";
//     document.querySelector('.canvas-container').appendChild(deleteBtn);
//   }

  
// export const deleteButton = () => {

//   this.canvas.on('object:selected',(e) => {
//       this.addDeleteBtn(e.target.oCoords.tr.x, e.target.oCoords.tr.y);
//   });

//   this.canvas.on('mouse:down',(e) => {
//       if(!this.canvas.getActiveObject())
//       {
//           document.querySelector('.btn-delete').parentNode.removeChild(document.querySelector('.btn-delete'));
//       }
//   });

//   this.canvas.on('object:modified',(e) => {
//   this.addDeleteBtn(e.target.oCoords.tr.x, e.target.oCoords.tr.y);
//   });

//   this.canvas.on('object:scaling',(e) => {
//       if(document.querySelector('.btn-delete')) {
//         document.querySelector('.btn-delete').parentNode.removeChild(document.querySelector('.btn-delete')); 
//       }
//     });

//     this.canvas.on('object:moving',(e) => {
//       if(document.querySelector('.btn-delete')) {
//         document.querySelector('.btn-delete').parentNode.removeChild(document.querySelector('.btn-delete')); 
//       }
//     });

//     this.canvas.on('object:rotating',(e) => {
//       if(document.querySelector('.btn-delete')) {
//         document.querySelector('.btn-delete').parentNode.removeChild(document.querySelector('.btn-delete')); 
//       }
//     });

//     if(document.querySelector('.btn-delete')) {
//         document.querySelector('.btn-delete').addEventListener('click', e => {
//             if(this.canvas.getActiveObject())
//             {
//                 this.canvas.remove(this.canvas.getActiveObject());
//                 document.querySelector('.btn-delete').parentNode.removeChild(document.querySelector('.btn-delete')); 
//             }
//         });
//     }

// }


// export const onDeleteKey = () => {
//     document.querySelector('html').addEventListener('keyup', (e) => {
//         if(e.key === 'Delete') {
//             this.canvas.remove(this.canvas.getActiveObject());
//         }
//     });
// }

