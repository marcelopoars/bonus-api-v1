import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Bonus API...</h1>");
});

// Create customer / POST
app.post("/customers", (req, res) => {
  const { name, cpf, city, phone } = req.body;

  res.send({ id: 1, name, cpf, city, phone, points: 0 });
});

// Get customers / GET
app.get("/customers", (req, res) => {
  res.send("Lista de cliente");
});

// Get customer by ID / GET
app.get("/customers/:id", (req, res) => {
  const { id } = req.params;

  res.send(id);
});

// Edit customer by ID / POST
app.put("/customers/:id", (req, res) => {
  const { id } = req.params;
  const { name, cpf, city, phone, points } = req.body;

  res.send({ id, name, cpf, city, phone, points });
});

// Delete customer by ID
app.delete("/customers/:id", (req, res) => {
  const { id } = req.params;

  res.send(`Deleted customer with ID ${id}`);
});

// Create order / POST
app.post("/orders", (req, res) => {
  const { customerId, amount } = req.body;

  const points = Math.ceil(amount / 4)

  res.send({ customerId, amount, points });
});

// Get orders / GET
app.get("/orders", (req, res) => {
  res.send("Lista de vendas");
});

// Get order by ID / GET
app.get("/orders/:id", (req, res) => {
  const { id } = req.params;

  res.send(id);
});

app.listen(PORT, () => {
  console.log(`Server read on port ${PORT}...`);
});
