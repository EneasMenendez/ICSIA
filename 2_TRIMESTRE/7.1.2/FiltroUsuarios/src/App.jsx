import { useState } from 'react';
import SearchInput from './componentes/SearchInput';
import UserList from './componentes/UserList';

export default function App() {
  console.log('App render');

  // Generamos 10.000 usuarios
  const users = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: `Usuario ${i + 1}`,
    email: `usuario${i + 1}@ejemlo.com`,
    avatar: `https://i.pravatar.cc/100?img=${(i + 1) % 70 + 1}`,
  }));

  const [search, setSearch] = useState('');

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ 
      padding: 20, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh' 
    }}>
      <h1>Lista no optimizada</h1>
      <SearchInput value={search} onChange={setSearch} />
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <UserList users={filtered} />
      </div>
    </div>
  );
}
