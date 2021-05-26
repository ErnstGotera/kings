const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes.js');

const app = express();

app.use(cors());
dotenv.config();

app.use(express.json());

app.use('/api/products', productRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
