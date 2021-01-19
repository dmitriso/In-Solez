$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // eslint-disable-next-line prefer-arrow-callback
  $("#random-search-btn").on("click", function(event) {
    event.preventDefault();
    const number = randomNumber();
    random(number);
  });

  // eslint-disable-next-line prefer-arrow-callback
  $("#brand-search").on("submit", function(event) {
    event.preventDefault();
    const selectedBrand = $("#brand-search-input")
      .val()
      .trim();
    const number = randomNumber();
    console.log(selectedBrand, number);
    brand(selectedBrand, number);
  });

  // eslint-disable-next-line prefer-arrow-callback
  $("#sneaker-search").on("submit", function(event) {
    event.preventDefault();
    const sneakerInput = $("#sneaker-search-input")
      .val()
      .trim();
    const number = randomNumber();
    sneaker(sneakerInput, number);
  });
});

function randomNumber() {
  const randomNum = Math.floor(Math.random() * 350 + 1);
  console.log(randomNum);
  return randomNum;
}

function brand(selectedBrand, randomNum) {
  $.get(
    `https://api.thesneakerdatabase.com/v1/sneakers?limit=15&brand=${selectedBrand}&page=${randomNum}`
  ).then(sneakerData => {
    sneakerData.results.forEach(sneaker => {
      const sneakerStats = { sneaker };
      const $clone = $("#sneaker")
        .clone()
        .removeAttr("id");
      $clone.find(".sneakerName").text(sneaker.name);
      $clone.find(".brand").text(sneaker.brand);
      $clone.find(".shoeName").text(sneaker.shoe);
      $clone.find("img").prop("src", sneaker.media.thumbUrl);
      $clone.find(".collection-btn").attr({ id: `${sneaker.id}` });
      $clone.find(".wishlist-btn").attr({ id: `${sneaker.id}` });
      $clone.appendTo("#sneakers");
    });
  });
}

function sneaker(sneakerInput, randomNum) {
  $.get(
    `https://api.thesneakerdatabase.com/v1/sneakers?limit=15&shoe=${sneakerInput}&page=${randomNum}`
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

function random(randomNum) {
  $.get(
    `https://api.thesneakerdatabase.com/v1/sneakers?limit=15&page=${randomNum}`
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
