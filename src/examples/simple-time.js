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
        <TimeTeller>
            {
                (time) => (
                    <div style={{ fontSize: '15vw' }}>
                        {time.format('hh:mm:ss')}
                    </div>
                )
            }
        </TimeTeller>
    );
}
