const express = require("express");
const app = express();
app.use(express.json());

const metricRouter = require('./router/formrouter');
const cors = require('cors');
// ✅ Use dynamic port and bind to all IPs (NOT localhost)
const PORT = process.env.PORT || 4008;
const options = {
  origin: '*', 
};

app.use(cors(options));

app.use("/metric", metricRouter);

app.listen(PORT, "localhost", () => {
  console.log (`Server running on port ${PORT}`);
});
