import express from 'express';
//import {router as routerV1} from './v1/routes';
import {router as workoutsRouter} from './v1/routes/workoutRoutes';

const PORT = process.env.PORT || 3000; 
const app = express();

app.use('/api/v1/workouts', workoutsRouter);

app.listen(PORT, () => {
    console.log('🚀 Server listening on port ' + PORT);
    }
);