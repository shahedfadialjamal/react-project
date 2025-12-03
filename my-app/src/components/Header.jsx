import { Link } from "react-router-dom";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <div
      style={{
        padding: "15px 20px",
        backgroundColor: darkMode ? "#442437" : "#ffd6e7",
        color: darkMode ? "white" : "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* الروابط */}
      <div style={{ display: "flex", gap: "20px", fontSize: "17px" }}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}
        >
          الرئيسية
        </Link>

        <Link
          to="/about"
          style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}
        >
          عن الموقع
        </Link>

        <Link
          to="/login"
          style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}
        >
          تسجيل الدخول
        </Link>

        <Link
          to="/register"
          style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}
        >
          إنشاء حساب
        </Link>

        {/* 🔥 رابط صفحة الكتب */}
        <Link
          to="/books"
          style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}
        >
          الكتب
        </Link>
        <Link to="/books">الكتب</Link>

      </div>

      {/* زر الشمس/القمر */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          background: "none",
          border: "none",
          fontSize: "22px",
          cursor: "pointer",
          color: "inherit"
        }}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
}


