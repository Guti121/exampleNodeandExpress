import { Router } from "express";
import { MovieController } from "../controllers/movieControllers.js";


export const moviesRouter = Router()


moviesRouter.get("/",MovieController.traerTodo)

moviesRouter.get("/asdas",MovieController.traerTodo)

moviesRouter.get("/asdasdadassa",MovieController.traerTodo)
