type Workout = {    
    id: number,
    name: string,
    description: string,
}


export const getAllWorkouts =  (): Workout[] => {
    const workouts = [{id: 1, name: 'Workout 1', description: 'This is workout 1'}, {id: 2, name: 'Workout 2', description: 'This is workout 2'}]
    return workouts
}