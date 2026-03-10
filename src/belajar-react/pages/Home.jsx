import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white px-12 py-10">

      {/* Judul */}
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          SELAMAT DATANG
        </h1>

        <p className="text-gray-500">
          Beberapa fitur yang tersedia pada website ini
        </p>
      </div>


      {/* Grid Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <Link to="/Biodata">
        <div className="bg-pink-100 p-8 rounded-xl text-center hover:shadow-lg transition">
          <div className="text-3xl mb-3">👤</div>
          <h3 className="font-semibold text-lg mb-2">Biodata</h3>
          <p className="text-sm text-gray-600">
            Menampilkan informasi data diri pengguna.
          </p>
        </div>
        </Link>

        {/* Card 2 */}
        <Link to="/Product">
        <div className="bg-purple-100 p-8 rounded-xl text-center hover:shadow-lg transition">
          <div className="text-3xl mb-3">🛍️</div>
          <h3 className="font-semibold text-lg mb-2">Product</h3>
          <p className="text-sm text-gray-600">
            Menampilkan daftar produk penjualan.
          </p>
        </div>
        </Link>

        {/* Card 3 */}
        <div className="bg-blue-100 p-8 rounded-xl text-center hover:shadow-lg transition">
          <div className="text-3xl mb-3">💻</div>
          <h3 className="font-semibold text-lg mb-2">Website</h3>
          <p className="text-sm text-gray-600">
            Website dibuat menggunakan React JS.
          </p>
        </div>

        {/* Card 4 */}
        <Link to="/Data">
        <div className="bg-green-100 p-8 rounded-xl text-center hover:shadow-lg transition">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="font-semibold text-lg mb-2">Data</h3>
          <p className="text-sm text-gray-600">
            Menampilkan data dalam bentuk tabel.
          </p>
        </div>
        </Link>

        {/* Card 5 */}
        <div className="bg-yellow-100 p-8 rounded-xl text-center hover:shadow-lg transition">
          <div className="text-3xl mb-3">🔍</div>
          <h3 className="font-semibold text-lg mb-2">Search</h3>
          <p className="text-sm text-gray-600">
            Mempermudah pencarian data.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-red-100 p-8 rounded-xl text-center hover:shadow-lg transition">
          <div className="text-3xl mb-3">⚙️</div>
          <h3 className="font-semibold text-lg mb-2">Settings</h3>
          <p className="text-sm text-gray-600">
            Pengaturan sistem aplikasi.
          </p>
        </div>

        {/* Card 7 */}
        <div className="bg-indigo-100 p-8 rounded-xl text-center hover:shadow-lg transition">
          <div className="text-3xl mb-3">📁</div>
          <h3 className="font-semibold text-lg mb-2">Database</h3>
          <p className="text-sm text-gray-600">
            Penyimpanan data secara digital.
          </p>
        </div>

        {/* Card 8 */}
        <div className="bg-teal-100 p-8 rounded-xl text-center hover:shadow-lg transition">
          <div className="text-3xl mb-3">🔐</div>
          <h3 className="font-semibold text-lg mb-2">Security</h3>
          <p className="text-sm text-gray-600">
            Keamanan sistem website.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;