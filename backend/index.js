const express = require('express');
require('./db/connection');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());



const jobRoutes = require('./routes/jobForm');
app.use('/api/postJob', jobRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
