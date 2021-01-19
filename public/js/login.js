$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const userNameInput = $("input#userName");
  const passwordInput = $("input#userPassword");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      userName: userNameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.userName || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.userName, userData.password);
    userNameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(userName, password) {
    $.post("/api/login", {
      userName: userName,
      password: password
    })
      .then(data => {
        console.log(data);
        window.location.replace("/profile");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
