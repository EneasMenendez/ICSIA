import React from 'react';
import Avatar from './Avatar';

function TarjetaUsuario({ user }) {
    console.log("%cTarjeta Usuario Renderizada", "color: lightblue");
    return (
        <div className="tarjeta" style={{ border: '1px solid #ccc', margin: 5, padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 20 }}>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <Avatar avatar={user.avatar} isOnline={user.isOnline} />
        </div>
    );
}

// Solo re-renderiza si cambian las props de user
export default React.memo(TarjetaUsuario);



