require("dotenv").config();
const express = require("express");
const mysql2 = require("mysql2/promise");
const cors = require("cors");

const { DB_HOST, APP_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const app = express();
const PORT = APP_PORT;

const pool = mysql2.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

app.use(cors());
app.use(express.json());

app.get("/realisation", async (req, res) => {
  try {
    const realisation = await pool.query("SELECT * FROM realisation");
    res.json(realisation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/realisation/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [realisation] = await pool.query(
      "SELECT * FROM realisation WHERE id = ?",
      [id]
    );
    if (realisation.length === 0) {
      return res.status(404).json({ error: "Realisation not found" });
    }
    res.json(realisation[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/realisation/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM realisation WHERE id = ?", [
      id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Realisation not found" });
    }
    res.status(200).json({ message: "Realisation deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/realisation", async (req, res) => {
  const { title, url } = req.body;
  if (!title || !url) {
    return res.status(400).json({ error: "Please provide title and url" });
  }
  try {
    const [result] = await pool.query(
      "INSERT INTO realisation (title, url) VALUES (?, ?)",
      [title, url]
    );
    res.status(201).json({ id: result.insertId, title, url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/contacts", async (req, res) => {
  try {
    const contacts = await pool.query("SELECT * FROM contacts");
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/contacts", async (req, res) => {
  const { fullname, mail, message } = req.body;
  if (!fullname || !mail || !message) {
    return res
      .status(400)
      .json({ error: "Please provide fullname, mail, and message" });
  }
  try {
    const [result] = await pool.query(
      "INSERT INTO contacts (fullname, mail, message) VALUES (?, ?, ?)",
      [fullname, mail, message]
    );
    res.status(201).json({ id: result.insertId, fullname, mail, message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Coucou je suis le ${PORT}, me voila !`));
