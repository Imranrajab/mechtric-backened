const express = require("express");
const app = express();
app.use(express.json());

const metricRouter = require('./router/formrouter');
const cors = require('cors');

const options = {
  origin: 'http://localhost:3000'
};

app.use(cors(options));

app.use("/metric", metricRouter);

app.listen(PORT, "localhost", () => {
  console.log (`Server running on port ${PORT}`);
});
