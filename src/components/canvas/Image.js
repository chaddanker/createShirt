import React from 'react';

const Image = ({ onFileUpload }) => {
	return (
		<div>
	        <label id="for-img" for="img-loader" class="ui huge floated button" >
	            <i class="ui upload icon"></i> 
	            Upload image
	        </label>
			<input id="img-loader" type="file" onChange={(e) => onFileUpload(e)} />
		</div>
	);
};

export default Image;

