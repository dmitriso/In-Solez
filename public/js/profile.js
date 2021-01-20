$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    console.log(data);
    $(".member-name").text(data.userName);
    $.get("/api/sneakers", req => {
      req.forEach(sneaker => {
        console.log(req, 'dataapi')
        const $clone = $("#collectionSneaker")
          .clone()
          .removeAttr("id");
        $clone.find(".collectionSneakerName").text(sneaker.name);
        $clone.find(".collectionBrand").text(sneaker.brand);
        $clone.find(".collectionShoeName").text(sneaker.shoe);
        $clone.find("img").prop("src", sneaker.media);
        $clone.appendTo("#sneakers");
      });
    });
  });
  $.get("/api/user_data").then(data => {
    console.log(data);
    $(".member-name").text(data.userName);
    $.get("/api/sneakers", req => {
      req.forEach(sneaker => {
        console.log(req, 'dataapi')
        const $clone = $("#collectionSneaker")
          .clone()
          .removeAttr("id");
        $clone.find(".collectionSneakerName").text(sneaker.name);
        $clone.find(".collectionBrand").text(sneaker.brand);
        $clone.find(".collectionShoeName").text(sneaker.shoe);
        $clone.find("img").prop("src", sneaker.media);
        $clone.appendTo("#sneakers");
      });
    });
  });
});
