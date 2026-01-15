import React from 'react';

function PuntitoVerde({ isOnline }) {
  console.log("%cPuntito verde renderizado","color: lightgreen");
  return (
    <div
      style={{
        width: 15,
        height: 15,
        borderRadius: '50%',
        backgroundColor: isOnline ? 'green' : 'red',
        display: 'inline-block',
      }}
    ></div>
  );
}

export default React.memo(PuntitoVerde);



