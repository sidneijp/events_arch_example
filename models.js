import { Sequelize } from 'sequelize'
import db from "./db.js"

const Message = db.define("messages", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

export {Message}