import express from "express"
import { listMessages, publish } from "./controllers.js"

const routes = express.Router()

routes.get("/publish", publish)
routes.get("/messages", listMessages)

export { routes as default }
