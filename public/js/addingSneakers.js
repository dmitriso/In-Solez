$(document).ready(() => {
  // eslint-disable-next-line prefer-arrow-callback
  $(document).on("click", ".collection-btn", function(event) {
    event.preventDefault();
    console.log(this);
    console.log("clicked me");
  });
  $(document).on("click", ".wishlist-btn", function(event) {
    event.preventDefault();
    console.log(this);
    console.log("clicked me");
  });
});
 