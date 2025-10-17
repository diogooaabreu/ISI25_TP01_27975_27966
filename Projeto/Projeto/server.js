const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/dados", (req, res) => {
  const caminho = path.join(__dirname, "dados.json");
  fs.readFile(caminho, "utf8", (err, data) => {
    if (err) return res.status(500).json({ erro: "Erro ao ler dados.json" });
    try {
      const json = JSON.parse(data);
      res.json(json);
    } catch (e) {
      res.status(500).json({ erro: "JSON inválido" });
    }
  });
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
