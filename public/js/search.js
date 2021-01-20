$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // eslint-disable-next-line prefer-arrow-callback
  $("#random-search-btn").on("click", function(event) {
    event.preventDefault();
    const pageNum = randomNumber();
    randomSneakers(pageNum);
  });

  // eslint-disable-next-line prefer-arrow-callback
  $("#brand-search").on("submit", function(event) {
    event.preventDefault();
    const selectedBrand = $("#brand-search-input")
      .val()
      .trim();
    const pageNum = randomNumber();
    brand(selectedBrand, pageNum);
  });

  // eslint-disable-next-line prefer-arrow-callback
  $("#sneaker-search").on("submit", function(event) {
    event.preventDefault();
    const sneakerInput = $("#sneaker-search-input")
      .val()
      .trim();
    const pageNum = randomNumber();
    sneaker(sneakerInput, pageNum);
  });
});
// CREATES A RANDOM NUMBER
function randomNumber() {
  const randomNum = Math.floor(Math.random() * 350 + 1);
  return randomNum;
}
// FUNCTION CREATES A LIST WITH
function brand(selectedBrand, pageNum) {
  $.get(
    `https://api.thesneakerdatabase.com/v1/sneakers?limit=15&brand=${selectedBrand}&page=${pageNum}`
  ).then(sneakerData => {
    sneakerData.results.forEach(sneaker => {
      const $clone = $("#sneaker")
        .clone()
        .removeAttr("id");
      $clone.find(".sneakerName").text(sneaker.name);
      $clone.find(".brand").text(sneaker.brand);
      $clone.find(".shoeName").text(sneaker.shoe);
      $clone.find("img").prop("src", sneaker.media.thumbUrl);
      $clone.find(".collection-btn").attr({
        id: `${sneaker.id}`
      });
      $clone.find(".wishlist-btn").attr({
        id: `${sneaker.id}`
      });
      $clone.appendTo("#sneakers");
    });
  });
}

function sneaker(sneakerInput, pageNum) {
  $.get(
    `https://api.thesneakerdatabase.com/v1/sneakers?limit=15&shoe=${sneakerInput}&page=${pageNum}`
  ).then(sneakerData => {
    sneakerData.results.forEach(sneaker => {
      const $clone = $(".sneaker")
        .clone()
        .removeAttr("id");
      $clone.find(".sneakerName").text(sneaker.name);
      $clone.find(".brand").text(sneaker.brand);
      $clone.find(".shoeName").text(sneaker.shoe);
      $clone.find("img").prop("src", sneaker.media.thumbUrl);
      $clone.find(".collection-btn").attr({
        id: `${sneaker.id}`
      });
      $clone.find(".wishlist-btn").attr({
        id: `${sneaker.id}`
      });
      $clone.appendTo("#sneakers");
    });
  });
}

function randomSneakers(pageNum) {
  $.get(
    `https://api.thesneakerdatabase.com/v1/sneakers?limit=15&page=${pageNum}`
  ).then(sneakerData => {
    sneakerData.results.forEach(sneaker => {
      const $clone = $("#sneaker")
        .clone()
        .removeAttr("id");
      $clone.find(".sneakerName").text(sneaker.name);
      $clone.find(".brand").text(sneaker.brand);
      $clone.find(".shoeName").text(sneaker.shoe);
      $clone.find("img").prop("src", sneaker.media.thumbUrl);
      $clone.find(".collection-btn").attr({
        id: `${sneaker.id}`
      });
      $clone.find(".wishlist-btn").attr({
        id: `${sneaker.id}`
      });
      $clone.appendTo("#sneakers");
    });
  });
}
