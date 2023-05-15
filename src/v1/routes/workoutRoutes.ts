import { Router } from "express";
import { getAllWorkouts } from "../../controllers/workoutController";

const router = Router();

router
  .get("/", (_req, res) => {
    getAllWorkouts(_req, res);
  })
  .get("/workouts", (_req, res) => {
    res.send("GET /workouts");
  })
  .post("/workouts", (_req, res) => {
    res.send("POST /workouts");
  })
  .get("/workouts/:id", (_req, res) => {
    res.send("GET /workouts/:id");
  })
  .put("/workouts/:id", (_req, res) => {
    res.send("PUT /workouts/:id");
  })
  .delete("/workouts/:id", (_req, res) => {
    res.send("DELETE /workouts/:id");
  });

export { router };
