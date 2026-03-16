import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function DataUser() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCarts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/carts");
      setCarts(response.data.carts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-2 text-center">Shopping Cart</h1>

      <p className="text-gray-500 text-center mb-10">
        View all items inside user carts
      </p>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <motion.div
            className="w-16 h-16 bg-pink-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </div>
      ) : (
        <div className="space-y-10">
          {carts.map((cart) => (
            <div key={cart.id} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-blue-600">
                Cart ID: {cart.id}
              </h2>

              <p className="text-gray-600 mb-6">
                Total Quantity:{" "}
                <span className="font-semibold">
                  {cart.products.reduce(
                    (sum, product) => sum + product.quantity,
                    0
                  )}
                </span>
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cart.products.map((product) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    key={product.id}
                    className="border rounded-xl p-4 shadow-sm bg-gray-50"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />

                    <h3 className="font-bold text-lg mb-1">{product.title}</h3>

                    <p className="text-gray-500">
                      Price:
                      <span className="text-green-600 font-semibold ml-1">
                        ${product.price}
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
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
