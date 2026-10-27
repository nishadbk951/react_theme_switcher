import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton({ isLight }) {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: isLight ? "#0f172a" : "#f8fafc",
        color: isLight ? "#ffffff" : "#0f172a",
        border: "none",
        padding: "12px 24px",
        borderRadius: "8px",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}
    >
      Switch to {isLight ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeButton;