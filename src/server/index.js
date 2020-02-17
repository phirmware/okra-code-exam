const express = require('express');
const os = require('os');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routers/transaction');
const overviewRoutes = require('./routers/overview');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/transaction', transactionRoutes);
app.use('/api/overview', overviewRoutes);
app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
