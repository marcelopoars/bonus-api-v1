/* eslint-disable import/extensions */
import express from 'express';
import {
  createCustomer,
  deleteCustomer,
  editCustomer,
  getCustomerById,
  list,
} from './customers.js';
import { createOrder, getAllOrders, getOrderById } from './orders.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'bonus-api-v1',
    description:
      'Projeto desenvolvido na disciplina de Desenvolvimento de Serviços e APIs do curso de Análise e Desenvolvimento de Sistemas - Faculdade UniSenac - SENAC-RS.',
    contributors: [
      {
        name: 'Marcelo Pereira',
      },
      {
        name: 'Sohaib Mohammed',
      },
    ],
  });
});

// Create customer / POST
app.post('/customers', (req, res) => {
  const { name, cpf, city, phone } = req.body;

  const customer = { name, cpf, city, phone };

  const createdCustomer = createCustomer(customer);

  res.status(201).json(createdCustomer);
});

// Get customers / GET
app.get('/customers', (req, res) => {
  const customers = list();

  res.json(customers);
});

// Get customer by ID / GET
app.get('/customers/:id', (req, res) => {
  const { id } = req.params;

  const customer = getCustomerById(id);

  res.json(customer);
});

// Edit customer by ID / POST
app.put('/customers/:id', (req, res) => {
  const { id } = req.params;
  const { name, cpf, city, phone } = req.body;

  const editedCustomer = editCustomer(id, { name, cpf, city, phone });

  res.send(editedCustomer);
});

// Delete customer by ID
app.delete('/customers/:id', (req, res) => {
  const { id } = req.params;

  deleteCustomer(id);

  res.send({ message: 'Customer deleted', id });
});

// Create order / POST
app.post('/orders', (req, res) => {
  const { customerId, amount } = req.body;

  const order = { customerId, amount };

  const createdOrder = createOrder(order);

  res.status(201).json(createdOrder);
});

// Get orders / GET
app.get('/orders', (req, res) => {
  const orders = getAllOrders();

  res.json(orders);
});

// Get order by ID / GET
app.get('/orders/:id', (req, res) => {
  const { id } = req.params;

  const order = getOrderById(id);

  res.json(order);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}!🚀\n`);
});
