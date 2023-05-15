
const getAllWorkouts = async (_req:any, res:any) => {
    res.send("GET /workouts");
}

const getWorkoutById = async (_req:any, res:any) => {
    res.send("GET /workouts/:id");
}

const createWorkout = async (_req:any, res:any) => {
    res.send("POST /workouts");
}

const updateWorkout = async (_req:any, res:any) => {
    res.send("PUT /workouts/:id");
}


export {getAllWorkouts, getWorkoutById, createWorkout, updateWorkout}