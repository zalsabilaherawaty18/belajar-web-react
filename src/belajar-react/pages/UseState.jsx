import { useState } from "react";

export default function UseState() {
  const [name, setName] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
      />
      <p className="text-lg mb-4">Hello, {name}!</p>
    </div>
  );
}
