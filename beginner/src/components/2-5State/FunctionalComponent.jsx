import React, { useState, useEffect } from 'react'

export const FunctionalComponent = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const interval = setInterval(() => {
            tick();

            return () => {
                clearInterval(interval)
            }
        }, 1000);
    }, [])

    return (
        <div>
            <h1>Functional Component</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}
