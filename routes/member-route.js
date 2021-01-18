const db = require("../models");

module.exports = function(app) {
  //THIS GRABS A USERS COLLECTION TO DISPLAY IT
  app.get("/api/collection", (req, res) => {
    const query = {};
    if (req.query.User.id) {
      query.User.id = req.query.User.id;
    }
    db.Collection.findAll({
      where: query,
      include: [db.User]
    }).then(dbCollection => {
      req.json(dbCollection);
    });
  });
};
