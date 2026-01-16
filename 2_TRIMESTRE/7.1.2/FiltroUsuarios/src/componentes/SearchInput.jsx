export default function SearchInput({ value, onChange }) {
  console.log('SearchInput render');
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar usuario..."
      style={{ padding: '8px', width: '300px', marginBottom: '20px', backgroundColor: "transparent", borderRadius: 20}}
    />
  );
}
