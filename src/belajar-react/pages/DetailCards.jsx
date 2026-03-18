import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataUserStyale from "../components/DataUserStyale";

export default function DetailCards() {
  const { id } = useParams(); // ✅ FIX: ambil id, bukan userId

  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]); // ✅ tambah products
  const [loading, setLoading] = useState(true);

  // ✅ fetch carts
  const fetchCarts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/carts/user");

      const filtered = response.data.carts.filter(
        (cart) => cart.id == id // ✅ FIX: filter berdasarkan cart.id
      );

      setCarts(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarts();
    fetchProducts();
  }, [id]);

  // loading
  if (loading) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-2 text-center">Detail User Cart</h1>

      <button
        onClick={() => window.history.back()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Back
      </button>

      <p className="text-gray-500 text-center mb-10">
        View all items inside user carts
      </p>

      {carts.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada cart untuk ID ini</p>
      ) : (
        <DataUserStyale carts={carts} products={products} />
      )}
    </div>
  );
}
