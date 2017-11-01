import React from 'react';
import { TimeTeller } from '../components/time-teller';

export function TickingTime() {
    return (
        <div style={{ fontSize: '15vw' }}>
            <TimeTeller>
                {
                    (time) => ('12:34:56')
                }
            </TimeTeller>
        </div>
    );
}
