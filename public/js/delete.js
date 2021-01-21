/* eslint-disable prefer-arrow-callback */
$(document).ready(() => {
  $(document).on("click", ".collectionDelete-btn", function(e) {
    e.preventDefault();
    console.log("hello");
    console.log(this.id);
    $.ajax({
      method: "DELETE",
      url: "/api/sneaker/delete/" + this.id
    })
      .then(function() {
        console.log("this worked");
        location.replace("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  });
  $(document).on("click", ".wishlistDelete-btn", function(e) {
    e.preventDefault();
    console.log("hello");
    console.log(this.id);
    $.ajax({
      method: "DELETE",
      url: "/api/sneaker/delete/" + this.id
    })
      .done(function(result) {
        console.log("this worked 2", result);
        location.replace("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  });
});
