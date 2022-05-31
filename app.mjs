import express from "express"
import morgan from 'morgan'
//import db from "./db.js";
import routes from "./routes.js";
import __dirname from "./get_path.js"

const app = express()
const port = process.env.PORT || 3000
const { NODE_ENV } = process.env

app.use(morgan('combined'))
app.use(express.json());

app.use(routes);

// db.sync(() => console.log(`Banco de dados conectado`));

app.listen(port, () => {
  console.log(`JSON example app listening at http://localhost:${port}`)
})
