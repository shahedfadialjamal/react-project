export default function Login() {
  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "rgba(255, 214, 231, 0.4)",
      backdropFilter: "blur(4px)"
    }}>
      <h2 style={{ textAlign: "center" }}>تسجيل الدخول 💗</h2>

      <label>الإيميل</label>
      <input
        type="email"
        placeholder="ادخل الإيميل"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #d4a8b1"
        }}
      />

      <label>كلمة المرور</label>
      <input
        type="password"
        placeholder="ادخل كلمة المرور"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #d4a8b1"
        }}
      />

      <button style={{
        width: "100%",
        padding: "12px",
        backgroundColor: "#ff5fa2",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        تسجيل الدخول
      </button>
    </div>
  );
}


