const db = require("../models");

module.exports = function (app) {
  //THIS RETRIEVES ALL SNEAKERS IN THE DATABASE AND RETURNS THEM.
  app.get("/v1/sneakers", (req, res) => {
    db.Sneaker.findAll({}).then(dbSneaker => {
      res.json(dbSneaker);
    });
  });
  //THIS GETS A SPECIFIC SNEAKER BY THE ID AND RETURNS IT TO THE USER.
  app.get("/api/sneakers/:id", (req, res) => {
    db.Sneaker.findOne({
      where: { id: req.params.id }
    }).then(dbSneaker => {
      req.json(dbSneaker);
    });
  });
  //THIS REMOVES A SNEAKER FROM THE COLLECTION BY ITS ID
  app.delete("/api/sneaker/:id", (req, res) => {
    db.Sneaker.destroy({
      where: { id: req.params.id }
    }).then(dbSneaker => {
      res.json(dbSneaker);
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
