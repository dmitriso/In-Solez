$(document).ready(() => {
  // THIS BUTTON CLICK WILL CREATE A SHOE WITH AND PASS IN THE VALUE OF TRUE FOR OWNED
  $(document).on("click", ".collection-btn", function(event) {
    event.preventDefault();
    console.log(this.id);
    $.get(`https://api.thesneakerdatabase.com/v1/sneakers/${this.id}`).then(
      sneakerData => {
        const data = sneakerData.results[0];
        createSneaker(
          data.brand,
          data.name,
          data.shoe,
          data.retailPrice,
          data.releaseDate,
          true
        );
      }
    );
  });
  // THIS BUTTON CLICK WILL CREATE A SHOE WITH OWNED BEING PASSED A VALUE OF FALSE
  $(document).on("click", ".wishlist-btn", function(event) {
    event.preventDefault();
    console.log(this.id);
    $.get(`https://api.thesneakerdatabase.com/v1/sneakers/${this.id}`).then(
      sneakerData => {
        const data = sneakerData.results[0];
        createSneaker(
          data.brand,
          data.name,
          data.shoe,
          data.retailPrice,
          data.releaseDate,
          false
        );
      }
    );
  });
  // THIS FUNCTION WILL CREATE A SNEAKER AND REROUTE TO PROFILE PAGE.
  function createSneaker(brand, name, shoe, retailPrice, releaseDate, owned) {
    $.post("/api/createSneaker", {
      brand: brand,
      name: name,
      shoe: shoe,
      retailPrice: retailPrice,
      releaseDate: releaseDate,
      owned: owned
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
