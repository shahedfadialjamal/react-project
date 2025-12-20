const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");
const cors = require("cors");

const User = require("./models/User");
const Book = require("./models/Book");

const app = express();
const PORT = process.env.PORT || 5000;


/* ===== Middleware ===== */
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

/* ===== MongoDB Connection ===== */
mongoose
  .connect("mongodb://127.0.0.1:27017/bookstore")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

/* ===== Auth Middleware ===== */
function isAuthenticated(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  next();
}

/* ===== Test Route ===== */
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

/* ===== Register ===== */
app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== Login ===== */
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    req.session.userId = user._id;
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== Logout ===== */
app.post("/api/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged out successfully" });
  });
});

/* ===== Add Book ===== */
app.post("/api/books", isAuthenticated, async (req, res) => {
  try {
    const { title, author, price, image } = req.body;

    const newBook = new Book({
      title,
      author,
      price,
      image,
      user: req.session.userId,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== Get My Books ===== */
app.get("/api/books", isAuthenticated, async (req, res) => {
  try {
    const books = await Book.find({ user: req.session.userId });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== Update Book ===== */
app.put("/api/books/:id", isAuthenticated, async (req, res) => {
  try {
    const updatedBook = await Book.findOneAndUpdate(
      { _id: req.params.id, user: req.session.userId },
      req.body,
      { new: true }
    );

    if (!updatedBook) {
      return res.status(403).json({ message: "Not allowed" });
    }

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== Delete Book ===== */
app.delete("/api/books/:id", isAuthenticated, async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({
      _id: req.params.id,
      user: req.session.userId,
    });

    if (!deletedBook) {
      return res.status(403).json({ message: "Not allowed" });
    }

    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== Start Server ===== */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

