export default function UserCard({ user }) {
  console.log('UserCard render');
  return (
    <div
      style={{
        border: '1px solid #ccc',
        margin: 5,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <img src={user.avatar} alt="avatar" width="40" height="40" style={{ borderRadius: 20 }} />
      <div>
        <p><strong>{user.name}</strong></p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
