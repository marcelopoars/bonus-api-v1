import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bonus API...");
});

// Create customer / POST
app.post("/customers", (req, res) => {
  const { name, cpf } = req.body;

  res.send({ name, cpf });
});

// Get customers / GET
app.get("/customers", (req, res) => {
  res.send("Lista de cliente");
});

// Get by ID / GET
app.get("/customers/:id", (req, res) => {
  const { id } = req.params;

  res.send(id);
});

// Edit customer by ID / POST
app.put("/customers/:id", (req, res) => {
  const { id } = req.params;
  const { name, cpf } = req.body;

  res.send({ id, name, cpf });
});

// Delete customer by ID
app.delete("/customers/:id", (req, res) => {
  const { id } = req.params;

  res.send(`Deleted customer by ID: ${id}`);
});

app.listen(PORT, () => {
  console.log(`Server read on port ${PORT}...`);
});
