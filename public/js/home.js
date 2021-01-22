$(document).ready(() => {
  console.log(window.location.pathname);
  if (window.location.pathname === "/home") {
    $.get("/api/sneakers").then(results => {
      for (var i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * results.length + 1);
        $("#SneakerName" + i).text(results[randomNum].name);
        $("#ShoeName" + i).text(results[randomNum].shoe);
        $("#RetailPrice" + i).text(`$${results[randomNum].retailPrice}`);
        $("ReleaseDate" + i).text(
          `Release Date: ${results[randomNum].releaseDate}`
        );
        $("#img" + i).prop("src", results[randomNum].media);
      }
    });
  }
});
