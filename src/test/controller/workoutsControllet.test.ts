import request from "supertest";
import { app } from "../..";

describe("WorkoutsController", () => {
  it("should return a list of workouts", async () => {
    const response = await request(app).get("/api/v1/workouts");
    expect(response.status).toBe(200);
  });
});
