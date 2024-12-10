import { Router } from "express";
import { getAssignments, getAssignment, createAssignment, updateAssignment, deleteAssignment } from "../controllers/assignment.js";
const router = Router();
router.get("/", getAssignments);
router.get("/:id", getAssignment);
router.post("/", createAssignment);
router.put("/:id", updateAssignment);
router.delete("/:id", deleteAssignment);
export default router;