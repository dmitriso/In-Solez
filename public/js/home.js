$(document).ready(() => {
  $.get("/api/sneakers").then(results => {
    console.log(results.length);
  });
  console.log(window.location.pathname);
  if (window.location.pathname === "/home") {
    console.log("hello");
  }
});
