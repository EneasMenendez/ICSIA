import React from 'react';
import TarjetaUsuario from './TarjetaUsuario';

function ListaIntermedia({ users }) {
  console.log("%cLista intermedia renderizada","color: lightred");
  return (
    <div>
      {users.map((u) => (
        <TarjetaUsuario key={u.id} user={u} />
      ))}
    </div>
  );
}

//Solo se vuelve a renderizar si cambia la lista de usuarios
export default React.memo(ListaIntermedia);




