import { useState } from "react"
import { motion } from "framer-motion"

export default function DarkModeToggle({ darkMode, setDarkMode }) {

  const toggleSwitch = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleSwitch}
      style={{
        width: 80,
        height: 40,
        backgroundColor: darkMode ? "#1f2937" : "#f3f4f6",
        borderRadius: 50,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: 5,
        justifyContent: darkMode ? "flex-end" : "flex-start"
      }}
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
        style={{
          width: 30,
          height: 30,
          backgroundColor: darkMode ? "#facc15" : "#6366f1",
          borderRadius: "50%"
        }}
      />
    </button>
  )
}