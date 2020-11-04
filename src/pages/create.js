import React, { Component } from 'react';
import Canvas from '../components/canvas';
import Display from '../components/Display';

class create extends Component {
    render() {
        return (
            <div class="create">
                <h1 style={{
                    borderBottom: '1px solid #fbbd08 !important', 
                    fontSize: window.innerWidth < 400 ? '4.2em' : '5em',
                }}>
                    {'create a shirt'}
                </h1>
                <Canvas />
                <Display />
            </div>
        );
    }
}

export default create;