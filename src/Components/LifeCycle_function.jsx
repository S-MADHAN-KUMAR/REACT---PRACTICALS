import React, { useState, useEffect } from 'react';

const LifeCycle_function = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component did mount');

        return () => {
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Component did update');
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default LifeCycle_function