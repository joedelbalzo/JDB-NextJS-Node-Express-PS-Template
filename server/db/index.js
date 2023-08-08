const conn = require("./conn");
const User = require("./User");
const userData = require("./userData");

const syncAndSeed = async () => {
  const [users] = await Promise.all(
    userData.map(async (u) => {
      return User.create({
        username: u.username,
        favoriteFood: u.favoriteFood,
        favoriteDrink: u.favoriteDrink,
      });
    })
  );
  return [users];
};

module.exports = {
  syncAndSeed,
  User,
};
