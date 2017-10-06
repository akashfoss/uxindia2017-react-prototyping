import React from 'react';

export function Clock() {
    let dt = new Date();

    return (
        <div>
            {`${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`}
        </div>
    );
}
