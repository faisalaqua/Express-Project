// Installing express
const express = require("express");
const connectDB = require("./db/Models/database");
const app = express();
const eventRoutes = require("./apis/events/routes");
app.use(express.json());

// Importing routes
app.use("/api/events", eventRoutes);

// Connecting to DataBase
connectDB();

// Listen
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
