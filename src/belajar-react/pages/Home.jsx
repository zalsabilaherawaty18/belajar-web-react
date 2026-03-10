import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";

function Home() {

  const { scrollYProgress } = useScroll();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen w-full px-12 py-10 transition-all duration-500
      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray text-gray-800"}`}>

      {/* Scroll Progress */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "6px",
          backgroundColor: "#ec4899",
          transformOrigin: "0%",
          zIndex: 50
        }}
      />

<div className="flex justify-end mb-6">
  <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
</div>

      {/* Judul */}
      <div className="text-center mb-15">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          MY DAILY SPACE
        </h1>

        <p className="text-gray-500">
          Ruang digital untuk catatan dan aktivitas harian.
        </p>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Catatan */}
        <Link to="/Catatan">
          <div className="bg-pink-100 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-semibold text-lg mb-2">Catatan</h3>
            <p className="text-sm text-gray-600">
              Menyimpan catatan penting dan ide harian.
            </p>
          </div>
        </Link>

        {/* Agenda */}
        <Link to="/Agenda">
          <div className="bg-purple-100 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-semibold text-lg mb-2">Agenda Harian</h3>
            <p className="text-sm text-gray-600">
              Menampilkan jadwal kegiatan setiap hari.
            </p>
          </div>
        </Link>

        {/* Playlist YouTube */}
        <Link to="/Playlist">
          <div className="bg-red-100 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-3xl mb-3">🎬</div>
            <h3 className="font-semibold text-lg mb-2">Playlist YouTube</h3>
            <p className="text-sm text-gray-600">
              Kumpulan video favorit dan tutorial.
            </p>
          </div>
        </Link>

        {/* To Do List */}
        <Link to="/Todo">
          <div className="bg-green-100 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-semibold text-lg mb-2">To Do List</h3>
            <p className="text-sm text-gray-600">
              Daftar tugas yang harus diselesaikan.
            </p>
          </div>
        </Link>

        {/* Website Favorit */}
        <Link to="/Bookmark">
          <div className="bg-yellow-100 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="font-semibold text-lg mb-2">Website Favorit</h3>
            <p className="text-sm text-gray-600">
              Kumpulan website yang sering dikunjungi.
            </p>
          </div>
        </Link>

        {/* Playlist Musik */}
        <Link to="/Music">
          <div className="bg-indigo-100 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-3xl mb-3">🎧</div>
            <h3 className="font-semibold text-lg mb-2">Playlist Musik</h3>
            <p className="text-sm text-gray-600">
              Daftar lagu atau musik favorit.
            </p>
          </div>
        </Link>

        {/* Progress Belajar */}
        <Link to="/Progress">
          <div className="bg-blue-100 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-lg mb-2">Progress Belajar</h3>
            <p className="text-sm text-gray-600">
              Melihat perkembangan belajar harian.
            </p>
          </div>
        </Link>
        

        {/* Profil */}
        <Link to="/Profile">
          <div className="bg-teal-100 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="text-6xl mb-3">👤</div>
            <h3 className="font-semibold text-lg mb-2">Profil</h3>
            <p className="text-sm text-gray-600">
              Informasi data diri pengguna.
            </p>
          </div>
        </Link>

      </div>

    </div>
  );
}

export default Home;