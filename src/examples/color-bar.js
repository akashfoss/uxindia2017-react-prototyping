import React from 'react';

export function ColorBar({ color = 'magenta' }) {
    return (
        <div style={{ height: '100%', backgroundColor: color }} />
    );
}

// Exercise: Click to change the color

/**
 * Solution hints
 * ===============
 *
 * - Will require using a class based component
 * - Use the ColorBar as a child component
 * - Handle the click with the onClick handler and change the color
 * - Change the color with local state
 */
