const db = require("../models");

module.exports = function (app) {
  //THIS RETRIEVES ALL SNEAKERS IN THE DATABASE AND RETURNS THEM.
  app.get("/api/sneakers", (req, res) => {
    db.Sneaker.findAll({}).then(dbSneaker => {
      console.log(dbSneaker);
      res.json(dbSneaker);
    });
  });

  // THIS RETRIEVES ALL SNEAKERS IN THE WISHLIST TABLE
  app.get("/api/wishlist", (req, res) => {
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
    db.Sneaker.findAll({
      where: {
        UserId: req.user.id,
        owned: true
      }
    }).then(dbCollection => {
      res.json(dbCollection);
    });
  });

  // //ROUTE FOR RETREIVING TOP 5 SNEAKERS IN A USERS COLLECTION
  // app.get("/api/topFive", (req, res) => {
  //   db.Sneaker.findAll({
  //     where: {
  //       UserId: req.user.id,
  //       owned: true,
  //       topFive: true
  //     }
  //   }).then(dbTopFive => {
  //     res.json(dbTopFive);
  //   });
  // });

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

  //THIS REMOVES A SNEAKER FROM THE COLLECTION BY ITS ID
  app.delete("/api/sneaker/delete/:id", (req, res) => {
    db.Sneaker.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status(200).end();
    });
  });

  // THIS UPDATES A SNEAKERS OWNED STATUS
  app.put("/api/sneaker/favorite/:id", (req, res) => {
    db.Sneaker.update({
      favorite: true,
      where: {
        owned: true,
        id: req.params.id
      }
    }).then(dbSneaker => {
      console.log(dbSneaker);
      res.json(dbSneaker);
    });
  });
};