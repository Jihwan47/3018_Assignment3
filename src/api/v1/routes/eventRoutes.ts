import express from "express";
import { validateRequest } from "../middleware/eventMiddleware";
import * as postController from "../controllers/eventController";
import { postSchemas } from "../validation/eventValidation";

const router = express.Router();

// Create post - validates body only
router.post(
    "/events",
    validateRequest(postSchemas.create),
    postController.createPost
);

// Get all post - validates params and optional query
router.get(
    "/events",
    validateRequest(postSchemas.getById),
    postController.getPost
);

// Get single post - validates params and optional query
router.get(
    "/events/:id",
    validateRequest(postSchemas.getById),
    postController.getPost
);

// Update post - validates both params and body
router.put(
    "/events/:id",
    validateRequest(postSchemas.update),
    postController.updatePost
);

// Delete post - validates params only
router.delete(
    "/events/:id",
    validateRequest(postSchemas.delete),
    postController.deletePost
);

// List posts - validates query parameters for filtering/pagination
router.get("/", validateRequest(postSchemas.list), postController.listPosts);

// Example with custom validation options
router.post(
    "/flexible",
    validateRequest(postSchemas.create, { stripBody: false }),
    postController.createPostFlexible
);

export default router;