import { Router } from "express";
import { getResponses, getResponse, createResponse, updateResponse, deleteResponse } from "../controllers/response.js";
const router = Router();
router.get("/", getResponses);
router.get("/:id", getResponse);
router.post("/", createResponse);
router.put("/:id", updateResponse);
router.delete("/:id", deleteResponse);
export default router;