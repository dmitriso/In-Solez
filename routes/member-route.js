const db = require("../models");

module.exports = function (app) {
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

  // THIS ADDS A SNEAKER TO THE USERS COLLECTION
  app.post("/api/sneaker", (req, res) => {
    db.Collection.create(req.body).then(dbCollection => {
      res.json(dbCollection);
    });
  });

  // THIS UPDATES A SNEAKERS OWNED STATUS
  app.put("/api/sneaker/:id", (req, res) => {
    db.Sneaker.update(req.owned, {
      where: {
        id: req.params.id
      }
    }).then(dbSneaker => {
      res.json(dbSneaker);
    });
  });
};
