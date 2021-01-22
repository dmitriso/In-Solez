/* eslint-disable prefer-arrow-callback */
$(document).ready(() => {
  $(document).on("click", ".collectionFavorite-btn", function(e) {
    e.preventDefault();
    console.log("Clicked");
    $.get("/api/sneakers").then(results => {
      console.log(results, "inside ajax");
    });
    console.log("hello");
    console.log(this.id);
    addFavorite(this.id);
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
