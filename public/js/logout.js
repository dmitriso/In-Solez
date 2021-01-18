$(document).ready(() => {

  $("#logout").on("click", () => {
    $.get("/login", {
  
    }).then(()=>{
         req.logout();
         res.redirect("/");
  });

});