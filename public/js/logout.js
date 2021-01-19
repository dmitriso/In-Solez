$(document).ready(() => {
  $("button#logout").on("click", event => {
    event.preventDefault();
    console.log("logout");
    $.get("/logout", {}).then(() => {
      console.log("logout1");
    });
  });
});
