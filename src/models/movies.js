import { readJSON } from "../../utils.js"


const movies = readJSON("./movies.json")

export class MovieModel {
    // esta funcion filtra por genero
  static async getAll ({genero}) {
    if(genero){
         return movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genero.toLowerCase())
      )
    }
    return movies

  }
  static getId ({genero}) {
    

  }
  static create ({genero}) {
    

  }
}


