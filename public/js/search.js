$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $("button#random-search-button").on("submit", event => {
    event.preventDefault();
    let randomNum = Math.floor(Math.random() * 350 + 1);
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
  });

  $("input#brand-search-input").on("submit", event => {
    event.preventDefault();
    const selectedBrand = $("#option").val();
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
  });

  $("input#sneaker-search-input").on("submit", event => {
    event.preventDefault();
    const shoeInput = toLowerCase(
      $("#sneaker-search-input")
        .val()
        .trim()
    );
    $.get(
      `https://api.thesneakerdatabase.com/v1/sneakers?limit=15&shoe=${shoeInput}`
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
  });
});
