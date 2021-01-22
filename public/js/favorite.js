/* eslint-disable prefer-arrow-callback */
$(document).ready(() => {
  $(document).on("click", ".collectionFavorite-btn", function(e) {
    e.preventDefault();
    $.get("/api/sneakers").then(results => {
        console.log("hello1");
      console.log(results.length);
    });
    console.log("hello2");
    console.log(this.id);
    addFavorite(this.id, true);
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
