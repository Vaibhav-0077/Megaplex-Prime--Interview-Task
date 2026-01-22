const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["https://megaplex-prime-interview-task-978j.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  console.log("LOGIN BODY:", req.body);

  // ✅ allow ANY non-empty credentials
  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required",
    });
  }

  return res.status(200).json({
    token: "dummy-token",
    user: {
      username: username,
    },
  });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));