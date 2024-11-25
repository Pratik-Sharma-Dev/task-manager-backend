require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connection');
const routes = require('./routes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api', routes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
