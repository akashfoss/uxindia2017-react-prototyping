import React from 'react';
import moment from 'moment';
import { Time } from '../time';

export function TimeNow() {
    return (
        <div style={{ fontSize: '15vw' }}>
            {moment().format('hh:mm:ss')}
        </div>
    );
}

export function TickingTime() {
    return (
        <Time>
            {
                (time) => (
                    <div style={{ fontSize: '15vw' }}>
                        {time.format('hh:mm:ss')}
                    </div>
                )
            }
        </Time>
    );
}
