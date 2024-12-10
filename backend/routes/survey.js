import { Router } from "express";
import { getSurveys, getSurvey, createSurvey, updateSurvey, deleteSurvey } from "../controllers/survey.js";
const router = Router();
router.get("/", getSurveys);
router.get("/:id", getSurvey);
router.post("/", createSurvey);
router.put("/:id", updateSurvey);
router.delete("/:id", deleteSurvey);
export default router;