$(document).ready(() => {
  // THIS BUTTON CLICK WILL CREATE A SHOE WITH AND PASS IN THE VALUE OF TRUE FOR OWNED
  $(document).on("click", ".collection-btn", function(event) {
    console.log("clicked me!");
    event.preventDefault();
    console.log("collection add")
    $.get(`https://api.thesneakerdatabase.com/v1/sneakers/${this.id}`).then(
      sneakersData => {
        const sneakerData = sneakersData.results[0];
        $.get("/api/user_data").then(data => {
          console.log(data, "adding collection");
          console.log(data.newUser.id);
          createSneaker(
            sneakerData.brand,
            sneakerData.name,
            sneakerData.shoe,
            sneakerData.retailPrice,
            sneakerData.releaseDate,
            true,
            sneakerData.media.thumbUrl,
            data.newUser.id
          );
        });
      }
    );
  });
  // THIS BUTTON CLICK WILL CREATE A SHOE WITH OWNED BEING PASSED A VALUE OF FALSE
  $(document).on("click", ".wishlist-btn", function(event) {
    event.preventDefault();
    console.log("wishlistadd");
    $.get(`https://api.thesneakerdatabase.com/v1/sneakers/${this.id}`).then(
      sneakersData => {
        const sneakerData = sneakersData.results[0];
        $.get("/api/user_data").then(data => {
          console.log(data, "adding wishlist");
          createSneaker(
            sneakerData.brand,
            sneakerData.name,
            sneakerData.shoe,
            sneakerData.retailPrice,
            sneakerData.releaseDate,
            false,
            sneakerData.media.thumbUrl,
            data.newUser.id
          );
        });
      }
    );
  });
  // THIS FUNCTION WILL CREATE A SNEAKER AND REROUTE TO PROFILE PAGE.
  function createSneaker(
    brand,
    name,
    shoe,
    retailPrice,
    releaseDate,
    owned,
    media,
    userId
  ) {
    $.post("/api/createSneaker", {
      brand: brand,
      name: name,
      shoe: shoe,
      retailPrice: retailPrice,
      releaseDate: releaseDate,
      owned: owned,
      media: media,
      sneakeruserId: userId,
      UserId: userId
    }).then(() => {
      console.log("blah");
    }).catch(handleLoginErr);
  }
  // CREATED TO HANDLE THE ERROR.
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
    $("#alert").fadeOut(10000);
  }
});
