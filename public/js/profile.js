/* eslint-disable prefer-arrow-callback */
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.userName);
    $.get("/api/collection", function(req) {
      req.forEach(sneaker => {
        console.log(req, "datacollect");
        const $clone = $("#collectionSneaker")
          .clone()
          .removeAttr("id");
        $clone.find(".collectionSneakerName").text(sneaker.name);
        $clone.find(".collectionBrand").text(sneaker.brand);
        $clone.find(".collectionShoeName").text(sneaker.shoe);
        if (!sneaker.media) {
          $clone.find("img").prop("src", "/images/jordans.png");
        }
        $clone.find("img").prop("src", sneaker.media);
        $clone.appendTo("#collectionSneakers");
      });
      $.get("/api/wishlist", function(req) {
        req.forEach(sneaker => {
          console.log(req, "datawish");
          const $clone1 = $("#wishlistSneaker")
            .clone()
            .removeAttr("id");
          $clone1.find(".wishlistSneakerName").text(sneaker.name);
          $clone1.find(".wishlistBrand").text(sneaker.brand);
          $clone1.find(".wishlistShoeName").text(sneaker.shoe);
          $clone1.find("img").prop("src", sneaker.media);
          $clone1.appendTo("#wishlistSneakers");
        });
      });
    });
  });

});