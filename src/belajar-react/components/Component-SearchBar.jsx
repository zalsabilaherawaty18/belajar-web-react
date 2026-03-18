export default function SearchBar({ search, setSearch, setSkip }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setSkip(0);
        }}
        className="w-1/2 p-3 border rounded-lg shadow"
      />
    </div>
  );
}
