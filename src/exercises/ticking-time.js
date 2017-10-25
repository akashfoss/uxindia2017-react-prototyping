import React from 'react';
import { TimeTeller } from '../components/time-teller';

export function TickingTime() {
    return (
        <div style={{ fontSize: '15vw' }}>
            <TimeTeller>
                {
                    (time) => time.format('hh:mm:ss')
                }
            </TimeTeller>
        </div>
    );
}
