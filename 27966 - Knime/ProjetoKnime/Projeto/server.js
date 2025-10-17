const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

// Caminho para o banco SQLite (agora em data/int/Order.sqlite)
const dbPath = path.join(__dirname, "..", "..", "data", "int", "Order.sqlite");


// Servir a pasta "public" (HTML, JS, CSS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Endpoint que busca dados do SQLite
app.get("/api/dados", (req, res) => {
  const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error("Erro ao abrir o banco:", err);
      return res.status(500).json({ erro: "Erro ao abrir o banco de dados." });
    }
  });

  // 🔹 Ajuste a consulta conforme o nome da sua tabela e colunas
  const query = `
    SELECT STATUS, COUNT(*) AS Total_Pedidos
    FROM "Order"
    GROUP BY STATUS
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Erro ao consultar o banco:", err);
      return res.status(500).json({ erro: "Erro ao consultar o banco." });
    }

    // Enviar resposta no mesmo formato que o gráfico espera
    res.json({ data: rows });
  });

  db.close();
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
