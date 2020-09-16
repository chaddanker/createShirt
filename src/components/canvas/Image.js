import React,{ useState } from 'react';

import './Image.scss';

const Image = ({ onFileUpload, images }) => {

	// const renderImages = () => {
	// 	return images.map(image => {
	// 		return (
	// 			<div>
	// 				<img src={image} alt="uploaded" width="50px" height="50px" />
	// 			</div>
	// 		);
	// 	});
	// };

	return (
		<div className="image">
			<div>
				{/* {renderImages()} */}
			</div>
	        <label id="for-img" htmlFor="img-loader" className="ui button">
	            upload
	        </label>
			<input id="img-loader" type="file" onChange={(e) => onFileUpload(e)} />
		</div>
	);
};

export default Image;

