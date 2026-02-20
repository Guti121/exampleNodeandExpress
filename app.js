
import express, { json } from 'express'
import { moviesRouter } from './src/routes/moviesRoutes.js'


const app = express()
app.use(json())
app.disable('x-powered-by')
app.use("/peliculas",moviesRouter)



const PORT = 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})