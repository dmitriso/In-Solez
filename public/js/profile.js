/* eslint-disable prefer-arrow-callback */
$(document).ready(() => {
  console.log(window.location.pathname);
  if (window.location.pathname === "/profile") {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(data => {
      console.log(data);
      $(".member-name").text(data.userName);
      $.get("/api/collection", req => {
        req.forEach(sneaker => {
          console.log(req, "dataapi");
          const $clone = $("#collectionSneaker")
            .clone()
            .removeAttr("id");
          $clone.find(".collectionSneakerName").text(sneaker.name);
          $clone.find(".collectionBrand").text(sneaker.brand);
          $clone.find(".collectionShoeName").text(sneaker.shoe);
          $clone.find("img").prop("src", sneaker.media);
          $clone.appendTo("#collectionSneakers");
        });
      });
      $.get("/api/wishlist", req => {
        req.forEach(sneaker => {
          console.log(req, "dataapi");
          const $clone = $("#wishlistSneaker")
            .clone()
            .removeAttr("id");
          $clone.find(".wishlistSneakerName").text(sneaker.name);
          $clone.find(".wishlistBrand").text(sneaker.brand);
          $clone.find(".wishlistShoeName").text(sneaker.shoe);
          $clone.find("img").prop("src", sneaker.media);
          $clone.appendTo("#wishlistSneakers");
        });
      });
    });
  }
});

// $(document).ready(function() {
//   $.get("/api/user_data").then(function(data) {
//     $(".member-name").text(data.userName);
//     $.get("/api/collection", function(res) {
//       for (let i = 0; i < res.length; i++) {
//         if ([i] === 0) {
//           $(
//             `<div class="carousel-item active"><img src="${res[i].media}"/></div></div>`
//           ).appendTo(".carousel-inner");
//         }
//         $(
//           `<div class="carousel-item"><img src="${res[i].media}"/></div></div>`
//         ).appendTo(".carousel-inner");
//         $(
//           // eslint-disable-next-line quotes
//           '<li data-target="#myCarousel1" data-slide-to="' + i + '"></li>'
//         ).appendTo(".carousel-indicators");
//       }
//       $(".carousel-item")
//         .first()
//         .addClass("active");
//       $(".carousel-indicators > li")
//         .first()
//         .addClass("active");
//       $("#myCarousel1").carousel();
//     });
//   });
// });

// look for a way to access the database in if statement
