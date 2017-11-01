import React from 'react';
import moment from 'moment';

export function TimeNow() {
    return (
        <div style={{ fontSize: '15vw' }}>
            {moment().format('hh:mm:ss')}
        </div>
    );
}
