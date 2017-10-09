import React from 'react';
import moment from 'moment';
import { TimeTeller } from '../components/time-teller';

export function TimeNow() {
    return (
        <div style={{ fontSize: '15vw' }}>
            {moment().format('hh:mm:ss')}
        </div>
    );
}

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
