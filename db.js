import { Sequelize, } from 'sequelize'

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://node_example_user:node_example_password@localhost:5432/node_example';
const db = new Sequelize(DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

export default db
