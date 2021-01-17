$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.userName);
    const randomNum = Math.floor(Math.random() * 350 + 1);
    $.get(
      "https://api.thesneakerdatabase.com/v1/sneakers?limit=30&page=" +
        randomNum
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

  
});
