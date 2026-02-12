import express from "express";
import { validateRequest } from "../middleware/eventMiddleware";
import * as eventController from "../controllers/eventController";
import { postSchemas } from "../validation/eventValidation";

const router = express.Router();

// Create post - validates body only
router.post("/events", validateRequest(postSchemas.create), eventController.createEvent);

// Get all post - validates params and optional query
router.get("/events", validateRequest(postSchemas.getById), eventController.getAllEvent);

// Get single post - validates params and optional query
router.get("/events/:id", validateRequest(postSchemas.getById), eventController.getEventById);

// Update post - validates both params and body
router.put("/events/:id", validateRequest(postSchemas.update), eventController.updateEvent);

// Delete post - validates params only
router.delete("/events/:id", validateRequest(postSchemas.delete), eventController.deleteEvent);

export default router;