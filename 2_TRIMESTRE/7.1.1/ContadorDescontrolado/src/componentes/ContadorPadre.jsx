import { useState, useMemo } from 'react';
import ListaIntermedia from './ListaIntermedia';

export default function ContadorPadre() {
    console.log("%cContador padre renderizado", "color: lightpink");

    const [count, setCount] = useState(0);

    //useMemo evita regenerar la lista en cada render
    const users = useMemo(() => {
        return Array.from({ length: 500 }, (_, i) => ({
            id: i + 1,
            name: `Usuario ${i + 1}`,
            email: `usuario${i + 1}@correo.com`,
            avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
            isOnline: Math.random() > 0.5,
        }));
    }, []);

    return (
        <div style={{ padding: '20px'}}>
            <h1>ContadorPadre (nivel2)</h1>
            <p style={{ display: 'flex', justifyContent: 'center'}}>Contador local: {count} </p>
            <button onClick={() => setCount(count + 1)}>Incrementar </button>
            <ListaIntermedia users={users} />
        </div>
    );
}


