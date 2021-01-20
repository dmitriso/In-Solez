$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    console.log(data);
    $(".member-name").text(data.userName);
    $.get("/api/sneakers", (req, res) => {
      console.log(req.params)
      db.Sneaker.findAll({
        where: {
          sneakerUserId: data.id
        }
      }).then(res => {
        const $clone = $("#collectionSneaker")
          .clone()
          .removeAttr("id");
        $clone.find(".collectionSneakerName").text(res.name);
        $clone.find(".collectionBrand").text(res.brand);
        $clone.find(".collectionShoeName").text(res.shoe);
        $clone.find("img").prop("src", res.media.thumbUrl);
        $clone.appendTo("#sneakers");
      });
    });
  });
});
