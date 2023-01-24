import React, { useState } from "react";

export function CustomComponent(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button type="button" onClick={() => setCount(count + 1)} className="primary">Increment</button>
            <p>{props.name}</p>
        </div>
    );
}