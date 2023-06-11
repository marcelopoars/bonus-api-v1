const express = require('express');

const { routes } = require('./modules/routes');

const metaData = require('./config/metaData');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

app.get('/', (_, res) => {
  res.json(metaData);
});

app.use((_, res, next) => {
  res.status(404).send({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!🚀\n`);
});
