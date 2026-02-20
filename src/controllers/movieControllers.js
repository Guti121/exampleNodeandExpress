import { MovieModel } from "../models/movies.js"

export class MovieController{
    //http://localhost:2000/Action
    //Get
    static  async traerTodo (req, res) {
        // Si es un metodo get , se extrae el parametro Action con const { genero } = req.query
        const { genero } = req.query
        const movies = await MovieModel.getAll({genero})
        res.json(movies)
  
  }
}