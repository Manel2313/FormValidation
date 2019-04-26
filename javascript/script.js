function validateForm() {
  //NAME VALIDATION
  var name = document.forms["myForm"]["fname"].value;
  if (name == "") {
    alert("Error: Name must be filled out");
    myForm.name.focus();
    return false;
  }
  //ADDRESS VALIDATION
  var add = document.forms["myForm"]["faddress"].value;
  if (add == "") {
    alert("Error: Address must be filled out");
    myForm.address.focus();
    return false;
  }
  //EMAIL VALIDATION
  var mail = document.forms["myForm"]["fmail"].value;
  if (mail == "") {
    alert(" Error: Email must be filled out");
    myForm.email.focus();
    return false;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)) {
    alert("Error: You have entered an invalid email address!");
    myForm.email.focus();
    return false;
  }
  //PASSWORD VALIDATION
  if(myForm.password.value != "" ) {
    if(myForm.password.value.length < 8) {
      alert("Error: Password must contain at least 8 characters!");
      myForm.password.focus();
      return false;
    }
    re = /[0-9]/;
    if(!re.test(myForm.password.value)) {
      alert("Error: password must contain at least one number (0-9)!");
      myForm.password.focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(myForm.password.value)) {
      alert("Error: password must contain at least one lowercase letter (a-z)!");
      myForm.password.focus();
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(myForm.password.value)) {
      alert("Error: password must contain at least one uppercase letter (A-Z)!");
      myForm.password.focus();
      return false;
    }
  } else {
    alert("Error: Please enter your password!")
    myForm.password.focus();
    return false;
  }
  //COMMENTS VALIDATION
  var cmt = document.forms["myForm"]["fcmts"].value;
  if (cmt == "") {
    alert("Error: You must write your comment");
    return false;
  }

  alert("YOU DID IT !! BRAVOOOOOOOOOOO "+name)
}

function reset(){
  document.getElementById("myForm").reset();
}
