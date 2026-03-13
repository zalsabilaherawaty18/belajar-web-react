import { useEffect, useState } from "react";
import axios from "axios";
import * as motion from "motion/react-client";

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

  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-left mb-6">Shopping Cart</h1>
      <p className="text-gray-600 text-left mb-8">
        Here is the detailed view of your cart items:
      </p>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="border p-6 rounded-lg shadow-md bg-white"
            >
              <h2 className="font-bold text-xl mb-4 text-blue-600 text-left">
                Cart ID: {cart.id}
              </h2>
              <p className="text-gray-700 mb-4 text-left">
                <span className="font-semibold">Total Quantity:</span>{" "}
                {cart.products.reduce(
                  (sum, product) => sum + product.quantity,
                  0
                )}
              </p>
              <div className="space-y-4">
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center border p-4 rounded-lg shadow-sm bg-gray-50"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-50 h-50 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <p className="font-bold text-lg text-gray-800 text-left">
                        {product.title}
                      </p>
                      <p className="text-gray-600 text-left">
                        Price:{" "}
                        <span className="text-green-600 font-semibold">
                          ${product.price}
                        </span>
                      </p>
                      <p className="text-gray-600 text-left">
                        Quantity:{" "}
                        <span className="text-blue-600 font-semibold">
                          {product.quantity}
                        </span>
                      </p>
                      <p className="text-gray-600 text-left">
                        Total:{" "}
                        <span className="text-red-600 font-semibold">
                          ${product.total}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
