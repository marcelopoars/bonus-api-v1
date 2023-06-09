import express from 'express';

import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  editCustomer,
  deleteCustomer,
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

//#########################
// CUSTOMERS
//#########################

// Create customer / POST
app.post('/customers', (req, res) => {
  try {
    const customerBody = req.body;

    const customer = createCustomer(customerBody);

    res.status(201).json(customer);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

// Get All Customers / GET
app.get('/customers', (req, res) => {
  try {
    const customers = getAllCustomers();

    res.json(customers);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

// Get Customer By ID / GET
app.get('/customers/:id', (req, res) => {
  const { id } = req.params;

  try {
    const customer = getCustomerById(id);

    res.json(customer);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

// Edit Customer By ID / PUT
app.put('/customers/:id', (req, res) => {
  const { id } = req.params;
  const { name, cpf, city, phone } = req.body;

  try {
    const editedCustomer = editCustomer(id, { name, cpf, city, phone });

    res.send(editedCustomer);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

// Delete Customer By ID / DELETE
app.delete('/customers/:id', (req, res) => {
  const { id } = req.params;

  try {
    const deletedCustomer = deleteCustomer(id);

    res.send(deletedCustomer);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

//#########################
// ORDERS
//#########################
// Create Order / POST
app.post('/orders', (req, res) => {
  const createdOrderBody = req.body;

  try {
    const order = createOrder(createdOrderBody);

    res.status(201).json(order);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

// Get All Orders / GET
app.get('/orders', (req, res) => {
  try {
    const orders = getAllOrders();

    res.json(orders);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

// Get Order By ID / GET
app.get('/orders/:id', (req, res) => {
  const { id } = req.params;

  try {
    const order = getOrderById(id);

    res.json(order);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

app.use((req, res, next) => {
  res.status(404).send({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!🚀\n`);
});
