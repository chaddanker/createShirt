import React from 'react';

import './Image.scss';

const Image = ({ onFileUpload }) => {
	return (
		<div className="image">
	        <label id="for-img" htmlFor="img-loader" className="ui button">
	            <i className="ui upload icon"></i>
	        </label>
			<input id="img-loader" type="file" onChange={(e) => onFileUpload(e)} />
		</div>
	);
};

export default Image;

