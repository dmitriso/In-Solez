/* eslint-disable prefer-arrow-callback */
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  if (window.location.pathname === "/profile") {
    $.get("/api/user_data").then(data => {
      console.log(data);
      $(".member-name").text(data.userName);
      $.get("/api/collection", req => {
        console.log(req);
        req.forEach(sneaker => {
          const $clone = $("#collectionSneaker")
            .clone()
            .removeAttr("id")
            .removeClass("hide");
          $clone.find(".collectionSneakerName").text(sneaker.name);
          $clone.find(".collectionBrand").text(sneaker.brand);
          $clone.find(".collectionShoeName").text(sneaker.shoe);
          $clone.find("img").prop("src", sneaker.media);
          $clone.find(".collectionDelete-btn").attr({
            id: `${sneaker.id}`
          });
          $clone.appendTo("#collectionSneakers");
        });
      });
      $.get("/api/wishlist", req => {
        req.forEach(sneaker => {
          const $clone = $(".wishlistSneaker")
            .clone()
            .removeClass("hide");
          $clone.find(".wishlistSneakerName").text(sneaker.name);
          $clone.find(".wishlistBrand").text(sneaker.brand);
          $clone.find(".wishlistShoeName").text(sneaker.shoe);
          $clone.find("img").prop("src", sneaker.media);
          $clone.find(".wishlistDelete-btn").attr({
            id: `${sneaker.id}`
          });
          $clone.appendTo("#wishlistSneakers");
        });
      });
    });
  }
});
