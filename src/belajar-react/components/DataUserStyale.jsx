import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function DataUserStyale({
  carts,
  products,
  onNext,
  onPrev,
  skip,
  limit,
  onUpdate, // 🔥 tambah
  onDelete, // 🔥 tambah
}) {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/detailCart/${id}`);
  };

  return (
    <div className="space-y-10">
      {/* ================= CART ================= */}
      {carts?.map((cart) => (
        <div key={cart.id} className="bg-white p-6 rounded-xl shadow-lg">
          <button
            className="mt-2 mb-5 bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => handleView(cart.id)}
          >
            View Detail
          </button>

          <h2 className="text-xl font-bold mb-4 text-blue-600">
            Cart ID: {cart.id}
          </h2>

          <p className="text-gray-600 mb-6">
            Total Quantity:
            <span className="font-semibold ml-1">
              {cart.products?.reduce(
                (sum, product) => sum + product.quantity,
                0
              )}
            </span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.products?.map((product) => {
              const fullProduct = products?.find((p) => p.id === product.id);

              if (!fullProduct) return null;

              return (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={product.id}
                  className="border rounded-xl p-4 shadow-sm bg-gray-50"
                >
                  <img
                    src={
                      fullProduct.thumbnail || "https://via.placeholder.com/150"
                    }
                    alt={fullProduct.title || "No Image"}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />

                  <h3 className="font-bold text-lg mb-1">
                    {fullProduct.title}
                  </h3>

                  <p className="text-gray-500">
                    Price:
                    <span className="text-green-600 font-semibold ml-1">
                      ${fullProduct.price}
                    </span>
                  </p>

                  <p className="text-gray-500">
                    Quantity:
                    <span className="text-blue-600 font-semibold ml-1">
                      {product.quantity}
                    </span>
                  </p>

                  <p className="text-gray-500">
                    Total:
                    <span className="text-red-600 font-semibold ml-1">
                      ${product.total}
                    </span>
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}

      {/* ================= ALL PRODUCTS ================= */}
      <h2 className="text-2xl font-bold text-center mt-10">All Products</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
          >
            {/* 🔥 klik card ke detail */}
            <div onClick={() => navigate(`/product/${item.id}`)}>
              <img
                src={item.thumbnail || "https://via.placeholder.com/150"}
                alt={item.title}
                className="w-full h-40 object-cover rounded mb-2"
              />

              <h3 className="font-bold">{item.title}</h3>
              <p className="text-green-600 font-semibold">${item.price}</p>
            </div>

            {/* 🔥 BUTTON UPDATE & DELETE */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ❗ biar ga ke detail
                  onUpdate(item.id);
                }}
                className="bg-yellow-400 px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // ❗ biar ga ke detail
                  onDelete(item.id);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={onPrev}
          disabled={skip === 0}
          className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={onNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>

      {/* ================= PAGE INFO ================= */}
      <p className="text-center mt-4">Page: {skip / limit + 1}</p>
    </div>
  );
}
