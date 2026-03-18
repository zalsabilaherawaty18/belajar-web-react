import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

      <img src={product.thumbnail} className="w-60 mb-4" />

      <p>{product.description}</p>

      <p className="text-green-600 font-bold">${product.price}</p>
    </div>
  );
}
