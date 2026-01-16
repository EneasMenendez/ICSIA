import UserCard from './UserCard';

export default function UserList({ users }) {
  console.log('UserList render');
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}
