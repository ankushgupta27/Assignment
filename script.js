function validateForm() {
    let x = document.forms["myForm"]["client-name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["company-name"].value;
    if (y == "") {
      alert("Your Company must be filled out");
      return false;
    }
    let z = document.getElementById("numb").value;
    if (isNaN(z) || z.length < 10 || z.length > 10) {
      alert("Input not valid");
      return false;
    }
    let email = document.forms["myForm"]["email"].value;
    let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (email.match(mailformat)) {
      alert("You have entered an invalid email address!");
      return false;
    }
  }