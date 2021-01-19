const db = require("../models");

module.exports = function (app) {
  //THIS RETRIEVES ALL SNEAKERS IN THE DATABASE AND RETURNS THEM.
  app.get("/api/sneakers", (req, res) => {
    db.Sneaker.findAll({}).then(dbSneaker => {
      res.json(dbSneaker);
    });
  });

  //THIS GETS A SPECIFIC SNEAKER BY "SHOE" AND RETURNS IT TO THE USER.
  app.get("/api/sneakers/:shoe", (req, res) => {
    db.Sneaker.findOne({
      where: {
        shoe: req.params.shoe
      }
    }).then(dbSneaker => {
      res.json(dbSneaker);
    });
  });

  // GET ROUTE FOR RETURNING POSTS OF A SPECFIC BRAND
  app.get("/api/posts/category/:brand", (req, res) => {
    db.Sneaker.findAll({
      where: {
        brand: req.params.brand
      }
    }).then(dbBrand => {
      res.json(dbBrand);
    });
  });

  //THIS GRABS A USERS COLLECTION TO DISPLAY IT
  app.get("/api/collection", (req, res) => {
    const query = {};
    if (req.query.User.id) {
      query.userIdCollection = req.query.User.id;
    }
    db.Collection.findAll({
      where: query,
      include: [db.User]
    }).then(dbCollection => {
      res.json(dbCollection);
    });
  });

  //THIS ADDS A SNEAKER TO THE COLLECTION TABLE
  app.post("/api/createCollection", (req, res) => {
    db.Collection.create({
      brand: req.body.brand,
      name: req.body.name,
      shoe: req.body.shoe,
      retailPrice: req.body.retailPrice,
      releaseDate: req.body.releaseDate,
      owned: req.body.owned
    }).then(dbCollection => {
      res.json(dbCollection);
    });
  });

  // THIS ADDS THE SNEAKER TO THE SNEAKERS TABLE
  app.post("/api/createSneaker", (req, res) => {
    db.Sneaker.create({
      brand: req.body.brand,
      name: req.body.name,
      shoe: req.body.shoe,
      retailPrice: req.body.retailPrice,
      releaseDate: req.body.releaseDate,
      owned: req.body.owned
    }).then(dbCollection => {
      res.json(dbCollection);
    });
  });

  //THIS REMOVES A SNEAKER FROM THE COLLECTION BY ITS ID
  app.delete("/api/sneakers", (req, res) => {
    db.Sneaker.destroy({
      where: {
        id: req.params.id
      }
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
