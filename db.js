import { Sequelize, } from 'sequelize'

const DATABASE_URL = 'postgres://node_example_user:teste@db:5432/node_example';
const db = new Sequelize(DATABASE_URL)

export default db
