export default function ProductForm({
  title,
  setTitle,
  price,
  setPrice,
  description,
  setDescription,
  addProduct,
}) {
  return (
    <div className="flex flex-col items-center gap-2 mb-6">
      <input
        type="text"
        placeholder="Nama produk"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded w-80"
      />

      <input
        type="number"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="p-2 border rounded w-80"
      />

      {/* <input
        type="text"
        placeholder="Deskripsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border rounded w-80"
      />

      <input
        type="text"
        placeholder="Thumbnail URL"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
        className="p-2 border rounded w-80"
      />

      {thumbnail && (
        <img src={thumbnail} className="w-40 h-40 object-cover rounded" />
      )} */}

      <button
        onClick={addProduct}
        className="bg-green-500 text-white px-4 py-2 rounded w-80"
      >
        Tambah Product
      </button>
    </div>
  );
}
