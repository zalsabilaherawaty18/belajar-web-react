export default function FilterSort({
  sortBy,
  setSortBy,
  order,
  setOrder,
  categories,
  selectedCategory,
  setSelectedCategory,
  setSkip,
}) {
  return (
    <>
      <div className="flex justify-center gap-4 mb-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Sort By</option>
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>

        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSkip(0);
          }}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>

          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
