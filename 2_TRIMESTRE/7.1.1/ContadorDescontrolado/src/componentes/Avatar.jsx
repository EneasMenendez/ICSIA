import React from 'react';
import IconoOnline from './IconoOnline';

function Avatar({ avatar, isOnline }) {
    console.log('Avatar render');
    return (
        <div>
            <img
                src={avatar}
                alt="avatar"
                width="60"
                height="60"
                style={{ borderRadius: '50%' }}
            />
            <IconoOnline isOnline={isOnline} />
        </div>
    );
}

export default React.memo(Avatar);
