export default function Books() {
  const books = [
    {
      id: 1,
      title: "JavaScript Basics",
      author: "Mark Myers",
      price: "12.00 د.أ",
      img: "https://i.ibb.co/ZH0bcj9/js-book.jpg",
    },
    {
      id: 2,
      title: "HTML & CSS",
      author: "Jon Duckett",
      price: "10.00 د.أ",
      img: "https://i.ibb.co/0ZgTz0C/htmlcss.jpg",
    },
    {
      id: 3,
      title: "Python Crash Course",
      author: "Eric Matthes",
      price: "14.00 د.أ",
      img: "https://i.ibb.co/Vv1qqd7/python.jpg",
    },
    {
      id: 4,
      title: "React Made Easy",
      author: "Alex Banks",
      price: "11.50 د.أ",
      img: "https://i.ibb.co/02WvF3L/react.jpg",
    },
    {
      id: 5,
      title: "Clean Code",
      author: "Robert C. Martin",
      price: "15.00 د.أ",
      img: "https://i.ibb.co/64G2Jpty/clean.jpg",
    },
    {
      id: 6,
      title: "You Don’t Know JS",
      author: "Kyle Simpson",
      price: "9.00 د.أ",
      img: "https://i.ibb.co/XLS2CkL/ydkjs.jpg",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>💻📚 كتب البرمجة</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              background: "#ffd6e7",
              padding: "15px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={book.img}
              alt={book.title}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3 style={{ marginTop: "10px" }}>{book.title}</h3>
            <p>👤 {book.author}</p>
            <p>💸 السعر: {book.price}</p>

            <button
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                borderRadius: "8px",
                border: "none",
                background: "#e75480",
                color: "white",
                cursor: "pointer",
              }}
            >
              شراء
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


