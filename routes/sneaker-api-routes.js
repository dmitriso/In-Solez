const db = require("../models");

module.exports = function(app) {
  //THIS RETRIEVES ALL SNEAKERS IN THE DATABASE AND RETURNS THEM.
  app.get("/api/sneakers", (req, res) => {
    db.Sneaker.findAll({}).then(dbSneaker => {
      console.log("backend");
      res.json(dbSneaker);
    });
  });

  // app.put("/api/sneaker/favorite/:id", (req, res) => {
  //   db.Sneaker.update({
  //     favorite: true,
  //     where: {
  //       id: req.params.id,
  //       owned: true
  //     }
  //   }).then(results => {
  //     res.json(results);
  //   });
  // });

  // THIS RETRIEVES ALL SNEAKERS IN THE WISHLIST TABLE
  app.get("/api/wishlist", (req, res) => {
    console.log(req.user.id);
    db.Sneaker.findAll({
      where: {
        UserId: req.user.id,
        owned: false
      }
    }).then(dbWishlist => {
      res.json(dbWishlist);
    });
  });

  //THIS RETIREVES A USERS COLLECTION TO DISPLAY IT
  app.get("/api/collection", (req, res) => {
    console.log(req.user.id);
    db.Sneaker.findAll({
      where: {
        UserId: req.user.id,
        owned: true
      }
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
      media: req.body.media,
      owned: req.body.owned,
      sneakeruserId: req.body.sneakeruserId,
      UserId: req.body.UserId
    }).then(dbCollection => {
      res.json(dbCollection);
    });
  });

  //THIS GETS A SPECIFIC SNEAKER BY "SHOE" AND RETURNS IT TO THE USER.
  app.get("/api/sneakers/:id", (req, res) => {
    db.Sneaker.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbSneaker => {
      res.json(dbSneaker);
    });
  });

  //THIS REMOVES A SNEAKER FROM THE COLLECTION BY ITS ID
  app.delete("/api/sneaker/delete/:id", (req, res) => {
    console.log("deleted");
    db.Sneaker.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status(200).end();
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
