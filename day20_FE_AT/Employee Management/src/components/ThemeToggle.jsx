import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        border: "none",
        background: "transparent",
        fontSize: "22px",
        cursor: "pointer",
      }}
    >
      {dark ? <FaSun color="#FFD43B" /> : <FaMoon color="#2563EB" />}
    </button>
  );
}

export default ThemeToggle;
