/* eslint-disable prefer-arrow-callback */
$(document).ready(() => {
  $(document).on("click", ".collectionFavorite-btn", function(e) {
    e.preventDefault();
    $(this).toggleClass("toggle");
    // addFavorite(this.id);
  });
});

function addFavorite(id) {
  $.ajax({
    method: "PUT",
    url: "/api/sneaker/favorite" + id
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}
