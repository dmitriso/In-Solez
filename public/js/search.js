$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $("button#random-search-button").on("click", event => {
    event.preventDefault();
    let randomNum = Math.floor(Math.random() * 350 + 1);
    console.log(randomNum);
    random(randomNum);
  });

  $("input#brand-search-input").on("submit", event => {
    event.preventDefault();
    console.log("brand")
    const selectedBrand = toLowerCase(
      $("#brand-search-input")
        .val()
        .trim()
    );
    brand(selectedBrand);
  });

  $("input#sneaker-search-input").on("submit", event => {
    event.preventDefault();
    console.log("sneaker")
    const sneakerInput = toLowerCase(
      $("#sneaker-search-input")
        .val()
        .trim()
    );
    sneaker(sneakerInput);
  });
});

function brand(selectedBrand) {
  $.get(
    `https://api.thesneakerdatabase.com/v1/sneakers?limit=15&brand=${selectedBrand}`
  ).then(sneakerData => {
    sneakerData.results.forEach(sneaker => {
      const $clone = $("#sneaker")
        .clone()
        .removeAttr("id");
      $clone.find(".sneakerName").text(sneaker.name);
      $clone.find(".brand").text(sneaker.brand);
      $clone.find(".shoeName").text(sneaker.shoe);
      $clone.find("img").prop("src", sneaker.media.thumbUrl);
      $clone.appendTo("#sneakers");
    });
  });
}

function sneaker(sneakerInput) {
  $.get(
    `https://api.thesneakerdatabase.com/v1/sneakers?limit=15&shoe=${sneakerInput}`
  ).then(sneakerData => {
    sneakerData.results.forEach(sneaker => {
      const $clone = $(".sneaker")
        .clone()
        .removeAttr("id");
      $clone.find(".sneakerName").text(sneaker.name);
      $clone.find(".brand").text(sneaker.brand);
      $clone.find(".shoeName").text(sneaker.shoe);
      $clone.find("img").prop("src", sneaker.media.thumbUrl);
      $clone.appendTo("#sneakers");
    });
  });
}

function random(randomNum) {
  $.get(
    `https://api.thesneakerdatabase.com/v1/sneakers?limit=15&page=${randomNum}`
  ).then(sneakerData => {
    console.log(sneakerData.results);

    sneakerData.results.forEach(sneaker => {
      const $clone = $("#sneaker")
        .clone()
        .removeAttr("id");
      $clone.find(".sneakerName").text(sneaker.name);
      $clone.find(".brand").text(sneaker.brand);
      $clone.find(".shoeName").text(sneaker.shoe);
      $clone.find("img").prop("src", sneaker.media.thumbUrl);
      $clone.appendTo("#sneakers");
    });
  });
}
