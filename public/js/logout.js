$(document).ready(() => {
  $("button#logout").on("click", () => {
    $.get("/logout", {}).then(() => {
      console.log(logout);
    });
  });
});
