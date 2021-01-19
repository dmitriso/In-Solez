$(document).ready(() => {
  // eslint-disable-next-line prefer-arrow-callback
  $(document).on("click", ".collection-btn", function(event) {
    event.preventDefault();
    console.log("clicked me");
  });
});
