import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isLight = theme === "light";

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <div
        style={{
          backgroundColor: isLight ? "#f4f6f8" : "#0f172a",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          transition: "all 0.3s ease",
          margin: 0
        }}
      >
        <div
          style={{
            backgroundColor: isLight ? "#ffffff" : "#1e293b",
            color: isLight ? "#0f172a" : "#f8fafc",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: isLight
              ? "0 10px 25px rgba(0, 0, 0, 0.08)"
              : "0 10px 25px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            width: "320px",
            transition: "all 0.3s ease"
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "10px" }}>
            {isLight ? "☀️" : "🌙"}
          </div>
          <h2 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>Theme Switcher</h2>
          <p style={{ color: isLight ? "#64748b" : "#94a3b8", fontSize: "14px", marginBottom: "25px" }}>
            Current Mode: <strong style={{ color: isLight ? "#2563eb" : "#38bdf8" }}>{theme.toUpperCase()}</strong>
          </p>
          <ThemeButton isLight={isLight} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;