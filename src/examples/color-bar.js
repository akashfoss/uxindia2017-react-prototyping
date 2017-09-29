import React from 'react';

export function ColorBar({ color = 'magenta' }) {
    return (
        <div style={{ height: '100%', backgroundColor: color }} />
    );
}
