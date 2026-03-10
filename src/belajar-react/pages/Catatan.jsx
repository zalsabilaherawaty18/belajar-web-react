import React, { useState } from "react";

function Catatan() {

  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [notes, setNotes] = useState([]);

  const tambahCatatan = () => {
    if (judul === "" || isi === "") {
      alert("Judul dan isi catatan harus diisi!");
      return;
    }

    const newNote = {
      id: Date.now(),
      judul,
      isi
    };

    setNotes([...notes, newNote]);
    setJudul("");
    setIsi("");
  };

  const hapusCatatan = (id) => {
    const dataBaru = notes.filter((note) => note.id !== id);
    setNotes(dataBaru);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-full to-white p-10">

      {/* Judul */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          📝 Catatan Harian
        </h1>
        <p className="text-gray-500">
          Simpan ide, rencana, dan catatan pentingmu
        </p>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg mb-12">

        <input
          type="text"
          placeholder="Judul catatan..."
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="w-full border border-gray-200 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        <textarea
          placeholder="Tulis catatan kamu di sini..."
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          className="w-full border border-gray-200 p-3 rounded-lg mb-4 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        <button
          onClick={tambahCatatan}
          className="w-full bg-pink-500 text-blue py-3 rounded-lg hover:bg-pink-600 transition font-semibold"
        >
          Tambah Catatan
        </button>

      </div>

      {/* List Catatan */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition relative"
          >

            <h3 className="font-bold text-lg text-gray-800 mb-2">
              {note.judul}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {note.isi}
            </p>

            <button
              onClick={() => hapusCatatan(note.id)}
              className="text-red-500 text-sm hover:text-red-700"
            >
              Hapus
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Catatan;