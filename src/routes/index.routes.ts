import express from 'express';
import { UserRouter } from '../api/User/users.routes';
import { RolesRouter } from '../api/Role/role.routes';
import { ExerciseRouter } from '../api/Exercise/exercises.routes';
import { SolutionRouter } from '../api/Solution/solutions.routes';

export const api = express.Router();

api.use("/users", UserRouter);

api.use("/roles", RolesRouter);

api.use("/exercises", ExerciseRouter);

api.use("/solutions", SolutionRouter);