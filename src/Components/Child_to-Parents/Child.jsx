// Child.js
import React from 'react';

const Child = ({ onSendData }) => {
    
    const sendDataToParent = () => {
        const data = "Hello from the Child!";
        onSendData(data);
    };

    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={sendDataToParent}>Send Data to Parent</button>
        </div>
    );
};

export default Child;
