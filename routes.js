import express from "express"
import { publish } from "./controllers.js"

const routes = express.Router()

routes.get("/publish", publish)

export { routes as default }
