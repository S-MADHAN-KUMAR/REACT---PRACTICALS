// Parent.js
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [childData, setChildData] = useState('');

    const handleChildData = (data) => {
        setChildData(data);
    };

    return (
        <div>
            <h1>Child to Parent in Functional Components</h1>
            <h3>Child data - {childData}</h3>
            <Child onSendData={handleChildData} />
        </div>
    );
};

export default Parent;

