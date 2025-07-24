// server.js
const express = require("express");
const cors = require("cors");
const app = express();

const apiData = require("./data");
// console.log("Data dari data.js:", apiData )
const PORT = process.env.PORT || 3000;

app.use(cors()); // agar bisa diakses dari frontend
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Sepatu API");
});

app.get("/catalog-sepatu", (req, res) => {
  res.json(apiData);
})

app.get("/produk-utama", (req, res) => {
  // console.log(apiData.api.produk_utama);
  res.json(apiData.api.produk_utama);
});

app.get("/sepatu-lari", (req, res) => {
  res.json(apiData.api.sepatu_lari);
});

app.get("/sepatu-gunung", (req, res) => {
  res.json(apiData.api.sepatu_gunung);
});

// Detail endpoint by id
app.get("/sepatu-lari/:id", (req, res) => {
  const item = apiData.api.sepatu_lari.find((i) => i.id == req.params.id);
  if (!item) return res.status(404).json({ message: "Data tidak ditemukan" });
  res.json(item);
});

app.get("/sepatu-gunung/:id", (req, res) => {
  const item = apiData.api.sepatu_gunung.find((i) => i.id == req.params.id);
  if (!item) return res.status(404).json({ message: "Data tidak ditemukan" });
  res.json(item);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
