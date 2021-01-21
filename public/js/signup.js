$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email");
  const firstNameInput = $("input#firstName");
  const lastNameInput = $("input#lastName");
  const userNameInput = $("input#userName");
  const passwordInput = $("input#password");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    console.log("signup!")
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
    $("input#repeat").val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstName, lastName, userName, password, email) {
    console.log("inside signup function");
    $.post("/api/signup", {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
      email: email
    })
      .then(() => {
        window.location.replace("/login");
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
