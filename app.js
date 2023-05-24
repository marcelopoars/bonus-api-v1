import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bonus API...");
});

app.listen(PORT, () => {
  console.log(`Server read on port ${PORT}...`);
});
