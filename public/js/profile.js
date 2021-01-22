/* eslint-disable prefer-arrow-callback */
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  if (window.location.pathname === "/profile") {
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.userName);
      $.get("/api/collection", req => {
        req.forEach(sneaker => {
          const $clone = $("#collectionSneaker")
            .clone()
            .removeAttr("id")
            .removeClass("hide");
          $clone.find(".collectionSneakerName").text(sneaker.name);
          $clone.find(".collectionShoeName").text(sneaker.shoe);
          $clone.find(".collectionReleaseDate").text(sneaker.releaseDate);
          // eslint-disable-next-line prettier/prettier
          $clone.find(".collectionRetailPrice").text(`$${sneaker.retailPrice}`);
          $clone.find("img").prop("src", sneaker.media);
          $clone.find(".collectionDelete-btn").attr({
            id: `${sneaker.id}`
          });
          $clone.find(".collectionFavorite-btn").attr({
            id: `${sneaker.id}`
          });
          $clone.appendTo("#collectionSneakers");
        });
      });
      $.get("/api/wishlist", req => {
        req.forEach(sneaker => {
          const $clone = $("#wishlistSneaker")
            .clone()
            .removeAttr("id")
            .removeClass("hide");
          $clone.find(".wishlistSneakerName").text(sneaker.name);
          $clone.find(".wishlistShoeName").text(sneaker.shoe);
          $clone.find(".wishlistReleaseDate").text(sneaker.releaseDate);
          $clone.find(".wishlistRetailPrice").text(`$${sneaker.retailPrice}`);
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
