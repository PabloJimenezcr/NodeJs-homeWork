const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Home');
});


app.get('/contact', (req, res) =>{
    res.send('This is the contact section');
});

app.get('/products', (req, res) =>{
    res.send('This is the products section');
});

app.get('/products/abc123', (req, res) =>{
    res.send('This is the products abc123 section');
});



app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});