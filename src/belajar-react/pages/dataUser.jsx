import { Component, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import DataUserStyale from "../components/DataUserStyale";
import FilterSort from "../components/Component-FilterSort";
import SearchBar from "../components/Component-SearchBar";
import ProductForm from "../components/Component-ProductForm";

export default function DataUser() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [limit] = useState(10);
  const [skip, setSkip] = useState(0);

  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // 🔥 state untuk ADD PRODUCT
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  // ✅ pagination
  const handleNext = () => setSkip(skip + limit);
  const handlePrev = () => setSkip(skip - limit);

  // ✅ FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      setLoading(true);

      let url = "";

      if (search) {
        url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
      } else if (selectedCategory) {
        url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${limit}&skip=${skip}`;
      } else {
        url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail  `;
      }

      if (sortBy) {
        url += `&sortBy=${sortBy}&order=${order}`;
      }

      const res = await axios.get(url);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ FETCH CATEGORIES (sekali saja)
  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 ADD PRODUCT
  const addProduct = async () => {
    if (!title || !price) {
      alert("Isi dulu title & price!");
      return;
    }

    try {
      const res = await axios.post("https://dummyjson.com/products/add", {
        title,
        price: Number(price),
      });

      console.log("Produk baru:", res.data);

      // ❗ biar langsung tampil di UI
      setProducts((prev) => [res.data, ...prev]);

      setTitle("");
      setPrice("");

      alert("Produk berhasil ditambahkan!");
    } catch (err) {
      console.log(err);
    }
  };

  // ✏️ UPDATE PRODUCT
  const updateProduct = async (id) => {
    try {
      const res = await axios.put(`https://dummyjson.com/products/${id}`, {
        title: "Updated Product 🔥",
      });

      console.log("Update:", res.data);

      // 🔥 update state
      setProducts((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, title: res.data.title } : item
        )
      );

      alert("Produk berhasil diupdate!");
    } catch (err) {
      console.log(err);
    }
  };

  // ❌ DELETE PRODUCT
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/products/${id}`);

      // 🔥 hapus dari UI
      setProducts((prev) => prev.filter((item) => item.id !== id));

      alert("Produk berhasil dihapus!");
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ jalan saat berubah
  useEffect(() => {
    fetchProducts();
  }, [skip, search, sortBy, order, selectedCategory]);

  // ✅ categories hanya sekali
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-2 text-center">Product List</h1>

      {/* 🔥 FORM */}
      <ProductForm
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        addProduct={addProduct}
      />
      {/* 🔥 SEARCH */}
      <SearchBar search={search} setSearch={setSearch} setSkip={setSkip} />

      <p className="text-gray-500 text-center mb-10">
        Browse products with pagination & search
      </p>

      {/* 🔽 FILTER & SORT */}
      <FilterSort
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSkip={setSkip}
      />

      {/* 🔄 LOADING */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <motion.div
            className="w-16 h-16 bg-pink-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </div>
      ) : (
        <DataUserStyale
          carts={[]}
          products={products}
          onNext={handleNext}
          onPrev={handlePrev}
          skip={skip}
          limit={limit}
          onUpdate={updateProduct}
          onDelete={deleteProduct}
        />
      )}
    </div>
  );
}
