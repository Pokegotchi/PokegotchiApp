// For grabbing new pokemon, will have an option for starter or all on random.
const pg = require("../models/userModel.js");
const pokeAPIController = {};

pokeAPIController.addNewPoke = async (req, res, next) => {
  // req.body contains all pokemon info for chosen one
  console.log("entered addNewPoke controller");
  console.log("in add new poke", req.body.data.pokemon);
  let {
    name,
    image,
    evolutions,
    evolutionRequirements
  } = req.body.data.pokemon;

  const { userId } = req.cookies;

  evolutions = evolutions[0].name;
  evolutionRequirements = evolutionRequirements.amount;

  const randId =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  await pg.query(
    `INSERT INTO pokemon(pokemon_id, name, image_url, feed_level, feed_cap, evolved_id, userid) VALUES('${randId}', '${name}', '${image}', 0, '${evolutionRequirements}', '${evolutions}',  ${userId})`
  );

  return next();
};

//on page load of landing page, using userId, grab every pokemon the user has
pokeAPIController.fetchUserData = async (req, res, next) => {
  console.log("entered fetchUser controller");
  const { userId } = req.cookies;

  const result = await pg.query(
    `SELECT * FROM pokemon WHERE userid = '${userId}'`
  );
  // console.log("in fetch user data - result", result.rows);
  if (!result.rows.length) return res.redirect("/select_pokemon");

  //this should be an array
  res.locals.data = result.rows;

  return next();
};

pokeAPIController.feedPoke = (req, res) => {
  //Feed pokemon based on req.body sending us the pokemonId in our DB
};

pokeAPIController.evolvePoke = (req, res) => {
  //Replace pokemon based on req.body pokemonId with new pokemon also in req.body
};

module.exports = pokeAPIController;
