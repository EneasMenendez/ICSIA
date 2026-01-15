import React from 'react';
import PuntitoVerde from './PuntitoVerde';

function IconoOnline({ isOnline }) {
  console.log("%cIcono online renderizada","color: lightgray");
  return (
    <div style={{ display: 'inline-block', marginLeft: 10 }}>
      <PuntitoVerde isOnline={isOnline} />
    </div>
  );
}

export default React.memo(IconoOnline);




