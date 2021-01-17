const db = require("../models");

module.exports = function (app) {
  //THIS RETRIEVES ALL SNEAKERS IN THE DATABASE AND RETURNS THEM.
  app.get("/", (req, res) => {
    db.Sneaker.findAll({}).then((dbSneaker) => {
      res.json(dbSneaker);
    });
  });

  //THIS GETS A SPECIFIC SNEAKER BY "SHOE" AND RETURNS IT TO THE USER.
  app.get("/api/sneakers/:shoe", (req, res) => {
    db.Sneaker.findOne({
      where: { shoe: req.params.shoe }
    }).then((dbSneaker) => {
      req.json(dbSneaker);
    });
  });

  //THIS GRABS A USERS COLLECTION TO DISPLAY IT
  app.get("/api/collection", (req,res) => {
    db.Collection.findAll({}).then((dbCollection) => {
      req.json(dbCollection);
    });
  });

  //THIS REMOVES A SNEAKER FROM THE COLLECTION BY ITS ID
  app.delete("", (req, res) => {
    db.Sneaker.destroy({
      where: { id: req.params.id }
    }).then((dbSneaker) => {
      res.json(dbSneaker);
    });
  });

  // THIS UPDATES A SNEAKERS OWNED STATUS
  app.put("/api/sneaker/:id", (req, res) => {
    db.Sneaker.update(req.owned, {
      where: {
        id: req.params.id
      }
    }).then((dbSneaker) => {
      res.json(dbSneaker);
    });
  });

  // SEARCH ROUTE BY RANDOM(10,20,30),BRAND, OR SHOE


};
