$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const firstNameInput = $("input#firstName-input");
  const lastNameInput = $("input#lastName-input");
  const userNameInput = $("input#userName-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      userName: userNameInput.val().trim(),
      password: passwordInput.val().trim(),
      email: emailInput.val().trim()
    };

    if (!userData.userName || !userData.email || !userData.password) {
      return;
    }
    // If we have a user name and password, run the signUpUser function
    signUpUser(
      userData.firstName,
      userData.lastName,
      userData.userName,
      userData.password,
      userData.email
    );
    firstNameInput.val("");
    lastNameInput.val("");
    userNameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstName, lastName, userName, password, email) {
    $.post("/api/signup", {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
      email: email
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
    $("#alert").fadeOut(10000);
  }
});
