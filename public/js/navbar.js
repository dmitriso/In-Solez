$(document).ready(() => {
  $.get("/api/user_data").then(data => {
    console.log(data);
    if (data.newUser) {
      $("<a>")
        .attr("href", "/logout")
        .text("LOGOUT")
        .appendTo("#navigation");
      $("<a>")
        .attr("href", "/profile")
        .text("PROFILE")
        .appendTo("#navigation");
      $("<a>")
        .attr("href", "/search")
        .text("SEARCH")
        .appendTo("#navigation");
      $("<a>")
        .attr("href", "/home")
        .text("HOME")
        .appendTo("#navigation");
    } else {
      $("<a>")
        .attr("href", "/search")
        .text("SEARCH")
        .appendTo("#navigation");
      $("<a>")
        .attr("href", "/signup")
        .text("SIGNUP")
        .appendTo("#navigation");
      $("<a>")
        .attr("href", "/login")
        .text("LOGIN")
        .appendTo("#navigation");
      $("<a>")
        .attr("href", "/")
        .text("HOME")
        .appendTo("#navigation");
    }
  });
});
