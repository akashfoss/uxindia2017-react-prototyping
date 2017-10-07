import React from 'react';
import moment from 'moment';
import { Ticker } from '../components/ticker';

export function TimeNow() {
    return (
        <div style={{ fontSize: '15vw' }}>
            {moment().format('hh:mm:ss')}
        </div>
    );
}

export function TickingTime() {
    return (
        <Ticker>
            {
                (time) => (
                    <div style={{ fontSize: '15vw' }}>
                        {time.format('hh:mm:ss')}
                    </div>
                )
            }
        </Ticker>
    );
}
