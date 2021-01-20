$(document).ready(() => {
  // THIS BUTTON CLICK WILL CREATE A SHOE WITH AND PASS IN THE VALUE OF TRUE FOR OWNED
  $(document).on("click", ".collection-btn", function(event) {
    event.preventDefault();
    console.log(this.id);
    $.get(`https://api.thesneakerdatabase.com/v1/sneakers/${this.id}`).then(
      sneakersData => {
        const sneakerData = sneakersData.results[0];
        $.get("/api/user_data").then(data => {
          console.log(data);
          createSneaker(
            sneakerData.brand,
            sneakerData.name,
            sneakerData.shoe,
            sneakerData.retailPrice,
            sneakerData.releaseDate,
            true,
            data.id
          );
        });
      }
    );
  });
  // THIS BUTTON CLICK WILL CREATE A SHOE WITH OWNED BEING PASSED A VALUE OF FALSE
  $(document).on("click", ".wishlist-btn", function(event) {
    event.preventDefault();
    console.log(this.id);
    $.get(`https://api.thesneakerdatabase.com/v1/sneakers/${this.id}`).then(
      sneakersData => {
        const sneakerData = sneakersData.results[0];
        $.get("/api/user_data").then(data => {
          console.log(data);
          createSneaker(
            sneakerData.brand,
            sneakerData.name,
            sneakerData.shoe,
            sneakerData.retailPrice,
            sneakerData.releaseDate,
            true,
            data.id
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
    userId
  ) {
    $.post("/api/createSneaker", {
      brand: brand,
      name: name,
      shoe: shoe,
      retailPrice: retailPrice,
      releaseDate: releaseDate,
      owned: owned,
      userId: userId
    })
      .then(() => {
        window.location.replace("/profile");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
  // CREATED TO HANDLE THE ERROR.
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
    $("#alert").fadeOut(10000);
  }
});
