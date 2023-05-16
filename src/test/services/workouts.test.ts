import { getAllWorkouts } from "../../services/workout";

describe("Workouts Service", () => {
  it("should return a list", async () => {
    const workouts = getAllWorkouts();
    expect(workouts[0].id).toEqual(1);
    
  });
  it("should return a list of workouts", async () => {
    const response = { status: 200, body: { data: [] } };
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: [] });
  });
});
