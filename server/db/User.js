const conn = require("./conn");
const { STRING, UUID, UUIDV4, INTEGER, TEXT } = conn.Sequelize;

const User = conn.define("user", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  favoriteFood: {
    type: STRING,
    allowNull: false,
  },
  favoriteDrink: {
    type: TEXT,
    allowNull: true,
  },
});

module.exports = User;
