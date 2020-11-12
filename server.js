const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API running"));

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/article", require("./routes/api/article"));

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();
