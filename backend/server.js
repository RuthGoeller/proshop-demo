import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';

const port = process.env.PORT;


const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
}
);

app.get('/api/products', (req, res) => {
    res.send(products);
}
);

app.get('/api/products/:id', (req, res) => {
    const product = products.find((x) => x._id === req.params.id);
  res.json(product);
}
);


app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
}
);