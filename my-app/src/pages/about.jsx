import { useState } from "react";

export default function Books() {
  const allBooks = [
    { id: 1, title: "JavaScript Basics", author: "Mark Myers", price: 12, img: "https://i.ibb.co/ZH0bcj9/js-book.jpg" },
    { id: 2, title: "HTML & CSS", author: "Jon Duckett", price: 10, img: "https://i.ibb.co/0ZgTz0C/htmlcss.jpg" },
    { id: 3, title: "Python Crash Course", author: "Eric Matthes", price: 14, img: "https://i.ibb.co/Vv1qqd7/python.jpg" },
    { id: 4, title: "React Made Easy", author: "Alex Banks", price: 11.5, img: "https://i.ibb.co/02WvF3L/react.jpg" },
    { id: 5, title: "Clean Code", author: "Robert C. Martin", price: 15, img: "https://i.ibb.co/64G2Jpty/clean.jpg" },
    { id: 6, title: "You Don’t Know JS", author: "Kyle Simpson", price: 9, img: "https://i.ibb.co/XLS2CkL/ydkjs.jpg" },
    { id: 7, title: "Data Structures", author: "Lafore", price: 13, img: "https://i.ibb.co/1qFq1hc/ds.jpg" },
    { id: 8, title: "Algorithms", author: "Sedgewick", price: 16, img: "https://i.ibb.co/hDpjxPb/algo.jpg" },
    { id: 9, title: "Learning C++", author: "Programming Hub", price: 10, img: "https://i.ibb.co/WgHwJD8/cpp.jpg" },
    { id: 10, title: "Intro to Java", author: "Harvey Deitel", price: 17, img: "https://i.ibb.co/TBfPhzF/java.jpg" },
  ];

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  // فلترة الكتب + ترتيب حسب اختيار المستخدم
  const filteredBooks = allBooks
    .filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "price-asc") return a.price - b.price;
      if (sortType === "price-desc") return b.price - a.price;
      if (sortType === "title-asc") return a.title.localeCompare(b.title);
      if (sortType === "title-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>📚 مكتبة كتب البرمجة</h1>

      {/* أدوات البحث والترتيب */}
      <div style={{
        display: "flex",
        gap: "15px",
        marginBottom: "20px",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 ابحث عن كتاب..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />

        {/* Sort */}
        <select
          onChange={(e) => setSortType(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        >
          <option value="">🔽 ترتيب...</option>
          <option value="title-asc">الاسم (A → Z)</option>
          <option value="title-desc">الاسم (Z → A)</option>
          <option value="price-asc">السعر (من الأقل)</option>
          <option value="price-desc">السعر (من الأعلى)</option>
        </select>
      </div>

      {/* عرض الكتب */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredBooks.map((book) => (
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
            <p>💸 السعر: {book.price} د.أ</p>

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

