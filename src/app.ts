import express, { Express } from "express";

import healthRoutes from "./api/v1/routes/healthRoutes"
import eventRoutes from "./api/v1/routes/eventRoutes"

// Initialize Express application
const app: Express = express();
app.use(express.json());

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// router handler
// router defined in health routes, prefixed with /api/v1
app.use("/api/v1", healthRoutes);
app.use("/api/v1", eventRoutes);

export default app;