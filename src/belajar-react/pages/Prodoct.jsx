import React from "react";

function Product() {
  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">
        Product Penjualan
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold">Laptop</h2>
          <p className="text-gray-500">Rp 10.000.000</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold">Mouse</h2>
          <p className="text-gray-500">Rp 150.000</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold">Keyboard</h2>
          <p className="text-gray-500">Rp 350.000</p>
        </div>

      </div>

    </div>
  );
}

export default Product;