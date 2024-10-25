import React, { useRef, useState, useEffect } from 'react';

const UseRefTimer = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current); 
        };
    }, []);

    return (
        <div>
            <h1>Timer - {count}</h1>
            <button onClick={() => clearInterval(intervalRef.current)}>STOP</button>
        </div>
    );
};

export default UseRefTimer;
