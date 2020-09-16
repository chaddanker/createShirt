import React, { Component } from 'react';

import Emoji from './Emoji';
import Text from './Text';
import Image from './Image';

import './Tools.scss';

class Tools extends Component {

	state = { selectedTools: 'Text' };

	selectedTool() {

		switch(this.state.selectedTools) {
			case 'Text': return <Text addTextToCanvas={this.props.addTextToCanvas}/>;

			case 'Emoji': return <Emoji addImageToCanvas={this.props.addImageToCanvas} />;

			case 'Image': return <Image onFileUpload={this.props.onFileUpload} images={this.props.images}/>;

			default : return <Text addTextToCanvas={this.props.addTextToCanvas}/>;
		}

	}
	render() {
		return (
			<div className="tools">
				<div className="ui grid tools-select">
					<div className="three wide column">
						<div
							className={`${this.state.selectedTools === "Text" ? 'active' : ''} round-button`} 
							onClick={() => this.setState({ selectedTools: 'Text' })}
						 >
							<i className="ui icon font"></i>
						</div>
						<div 
							className={`${this.state.selectedTools === "Emoji" ? 'active' : ''} round-button`} 
							onClick={() => this.setState({ selectedTools: 'Emoji' })}
						>
							<i className="ui icon smile outline"></i>
						</div>
						<div 
							className={`${this.state.selectedTools === "Image" ? 'active' : ''} round-button`} 
							onClick={() => this.setState({ selectedTools: 'Image' })}
						>
							<i className="ui icon image"></i>
						</div>
					</div>
					<div className="twelve wide column" id="tools-container" >
						{this.selectedTool()}
					</div>
				</div>
			</div>
		);
	}
};

export default Tools;