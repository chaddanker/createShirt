import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({title, content, actions, onDismiss}) => {
	return createPortal(
		<div onClick={onDismiss} className="ui dimmer modals visible active" >
			<div className="ui standard modal visible active" onClick={e => e.stopPropagation()}>
				<div className="header">{title}</div>
				<div className="content">{content}</div>
				<div className="actions">
					{actions}
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

//create a #modal div on index.html as sibling to #root div. 
export default Modal;