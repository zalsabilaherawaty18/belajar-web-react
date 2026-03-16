import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";

function Home() {
  const { scrollYProgress } = useScroll();
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 detik loading
  }, []);

  const cardAnimation = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-400 border-t-transparent mx-auto"></div>

          <p className="mt-4 text-gray-600 text-lg">
            Loading My Daily Space...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen w-full px-12 py-10 transition-all duration-500
      ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-800"
      }`}
    >
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
          zIndex: 50,
        }}
      />

      {/* Dark Mode */}
      <div className="flex justify-end mb-6">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Judul */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          MY DAILY SPACE
        </h1>

        <p className="text-gray-500 mt-2">
          Ruang digital untuk catatan dan aktivitas harian.
        </p>
      </motion.div>

      {/* Grid Card */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* Catatan */}
        <Link to="/Catatan">
          <motion.div
            variants={cardAnimation}
            whileHover={{ scale: 1.07 }}
            className="bg-pink-100/70 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-semibold text-lg mb-2">Catatan</h3>
            <p className="text-sm text-gray-600">
              Menyimpan catatan penting dan ide harian.
            </p>
          </motion.div>
        </Link>

        {/* Agenda */}
        <Link to="/Agenda">
          <motion.div
            variants={cardAnimation}
            whileHover={{ scale: 1.07 }}
            className="bg-purple-100/70 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-semibold text-lg mb-2">Agenda Harian</h3>
            <p className="text-sm text-gray-600">
              Menampilkan jadwal kegiatan setiap hari.
            </p>
          </motion.div>
        </Link>

        {/* Playlist YouTube */}
        <Link to="/Playlist">
          <motion.div
            variants={cardAnimation}
            whileHover={{ scale: 1.07 }}
            className="bg-red-100/70 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">🎬</div>
            <h3 className="font-semibold text-lg mb-2">Playlist YouTube</h3>
            <p className="text-sm text-gray-600">
              Kumpulan video favorit dan tutorial.
            </p>
          </motion.div>
        </Link>

        {/* To Do List */}
        <Link to="/Todo">
          <motion.div
            variants={cardAnimation}
            whileHover={{ scale: 1.07 }}
            className="bg-green-100/70 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-semibold text-lg mb-2">To Do List</h3>
            <p className="text-sm text-gray-600">
              Daftar tugas yang harus diselesaikan.
            </p>
          </motion.div>
        </Link>

        {/* Website Favorit */}
        <Link to="/Bookmark">
          <motion.div
            variants={cardAnimation}
            whileHover={{ scale: 1.07 }}
            className="bg-yellow-100/70 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="font-semibold text-lg mb-2">Website Favorit</h3>
            <p className="text-sm text-gray-600">
              Kumpulan website yang sering dikunjungi.
            </p>
          </motion.div>
        </Link>

        {/* Playlist Musik */}
        <Link to="/Music">
          <motion.div
            variants={cardAnimation}
            whileHover={{ scale: 1.07 }}
            className="bg-indigo-100/70 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">🎧</div>
            <h3 className="font-semibold text-lg mb-2">Playlist Musik</h3>
            <p className="text-sm text-gray-600">
              Daftar lagu atau musik favorit.
            </p>
          </motion.div>
        </Link>

        {/* Progress */}
        <Link to="/Progress">
          <motion.div
            variants={cardAnimation}
            whileHover={{ scale: 1.07 }}
            className="bg-blue-100/70 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-lg mb-2">Progress Belajar</h3>
            <p className="text-sm text-gray-600">
              Melihat perkembangan belajar harian.
            </p>
          </motion.div>
        </Link>

        {/* Profile */}
        <Link to="/Profile">
          <motion.div
            variants={cardAnimation}
            whileHover={{ scale: 1.07 }}
            className="bg-teal-100/70 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-3">👤</div>
            <h3 className="font-semibold text-lg mb-2">Profil</h3>
            <p className="text-sm text-gray-600">
              Informasi data diri pengguna.
            </p>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
