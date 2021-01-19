$(document).ready(() => {
  // eslint-disable-next-line prefer-arrow-callback
  $(document).on("click", ".collection-btn", function(event) {
    event.preventDefault();
    console.log(this.id);
    $.get(`https://api.thesneakerdatabase.com/v1/sneakers/${this.id}`).then(
      sneakerData => {
        console.log(sneakerData.results[0]);
      }
    );
  });
  $(document).on("click", ".wishlist-btn", function(event) {
    event.preventDefault();
    console.log(this.id);
    $.get(`https://api.thesneakerdatabase.com/v1/sneakers/${this.id}`).then(
      sneakerData => {
        console.log(sneakerData.results[0]);
      }
    );
  });
});
