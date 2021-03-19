/*VALIDATION OF LOGIN FORM*/ 
function ValidateLogin() {
  
//checking if id field is empty
  let logId = document.getElementById("lid").value;
  if (logId == "") {
    alert("playerID must be filled out");
    document.getElementById("lid").focus();
    return false;
  }
// checking if password field is empty
  let logPass = document.getElementById("lpass").value;
  if (logPass == "") {
    alert("pass must be filled out");
    document.getElementById("lpass").focus();
    return false;
  }

  
/*VALIDATION OF LOGIN FORM ENDS*/ 

}
/*VALIDATION OF REGISTER FORM*/ 
function ValidateRegister() {
  // checking if ID field is empty
  let id = document.getElementById("rid").value;
  if (id == "") {
    alert("Enter ID please!");
    document.getElementById("rid").focus();
    return false;
  }
  // checking if NAME field is empty
  let name = document.getElementById("rname").value;
  if (name == "") {
    alert("Enter name!");
    document.getElementById("rname").focus();
    return false;
  }
  // checking if EMAIL field is empty
  let email = document.getElementById("remail").value;
  if (email == "") {
    alert("Enter Email Address");
    document.getElementById("remail").focus();
    return false;
  }
 // checking if EMAIL field have '@' and '.'.
  let checkEmail =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ;
  if (!(checkEmail.test(email))) {
    alert("Please Enter a Valid Email Address");
    document.getElementById("remail").focus();
    return false;
  }
  // checking if password field is empty
  let pass = document.getElementById("rpass").value;
  if (pass == "") {
    alert("Enter password");
    document.getElementById("lpass").focus();
    return false;
  }
  // checking if password field have atleast 8 characters.
  if (pass.length < 8) {
    alert("Password must contain atleast 8 characters");
    document.getElementById("rpass").focus();
    return false;
    
  }
  // checking if password field contain atleast 1 UpperCase letter, 1 LowerCase letter and 1 Number.
  let checkPass = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$/;
  if (!(checkPass.test(pass))) {
    alert("Password must contain atleast 1 UpperCase letter, 1 LowerCase letter and 1 Number  ");
    document.getElementById("rpass").focus();
    return false;
  }

  return true;
  

/*VALIDATION OF REGISTER FORM ENDS*/ 
 
}
