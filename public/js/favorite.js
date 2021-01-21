/* eslint-disable prefer-arrow-callback */
$(document).ready(() => {
  $(document).on("click", ".collectionFavorite-btn", function(e) {
    // e.preventDefault();
    console.log("hello");
    console.log(this.id);
    addFavorite(this.id, true);
  });
});
function addFavorite(id, topFive) {
  $.ajax({
    method: "PUT",
    url: "/api/sneaker/favorite" + id,
    data: topFive
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}
