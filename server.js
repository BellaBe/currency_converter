require('dotenv').config();
const express = require('express');
const { getRates } = require('./lib/fixer-service')

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/scripts', express.static(`${__dirname}/node_modules`));

app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

const test = async() => {
    const data = await getRates();
    console.log(data)
}
test();
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})