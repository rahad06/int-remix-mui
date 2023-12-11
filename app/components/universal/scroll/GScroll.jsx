import React from 'react';
import { Scrollbar } from 'react-scrollbars-custom';

function GScroll(props) {
    return (
        <Scrollbar style={{ width: 250, height: 'calc(100vh - 80px)' }}>
        {props.children}
        </Scrollbar>
    );
}

export default GScroll;