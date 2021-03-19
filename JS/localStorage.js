

/*DATA STORAGE IN LOCAL DATABASE FROM REGISTRATION TABLE*/
function playerRegister() {

    let pArray = getUsers();
    let regId = document.getElementById("rid").value;
    let regName = document.getElementById("rname").value;
    let regEmail = document.getElementById("remail").value;
    let regPass = document.getElementById("rpass").value;
    

    if (ValidateRegister()) {//  calling ValidateRegister function to make sure valeues entered are correct.


        console.log(regId + " " + regName + " " + regEmail + " " + regPass);

        let userObj = { // making an object
            id: regId,
            name: regName,
            email: regEmail,
            password: regPass,
            score: 0
        };

        pArray.push(userObj); //storing values in array.
        localStorage.players = JSON.stringify(pArray);//using JSON stringify method to store pArray in JSON format.
        console.log(JSON.stringify(userObj));
        localStorage[regId] = JSON.stringify(userObj);//using JSON stringify method to store userOBJ in JSON format.
        alert(regName + " Registered Succesfully")
        document.getElementById("lid").focus();// to focus in login form if registration is succesfull.

    }
}
/*END OF DATA STORAGE IN LOCAL DATABASE FROM REGISTRATION TABLE*/

/*RETRIEVING DATA FROM LOCAL DATABASE FOR LOGIN*/

function getUsers() {

    if (localStorage.players === undefined)
        return [];
    else
        return JSON.parse(localStorage.players);


}


//LOGIN AREA
function playerLogin() {
    ValidateLogin() // calling validate login function to check each field is filled.
    let userArray = getUsers();
    let loginId = document.getElementById("lid").value;
    let loginPass = document.getElementById("lpass").value;

    for (let i = 0; i < userArray.length; i++) {// to check for each registered user.
        if ((loginId === userArray[i].id && loginPass === userArray[i].password)) {//if id and pass both correct
            sessionStorage.loggedInPlayer = userArray[i].name; //to store logged in user's name in session storage
            alert("Welcome " + userArray[i].name + " :)");
            window.location.href = "Game.php";// to redirect to game page if login is succesfull.
        }
        else if(loginId === userArray[i].id && loginPass !== userArray[i].password){
            document.getElementById("loginMsg").innerHTML = "Incorrect Password! Please try again";

        }

        else {
            document.getElementById("loginMsg").innerHTML = "Incorrect Details! Please try again";
        }
        //continue;
    }
}
//  Function to logout player

function playerLogout() {
    sessionStorage.loggedInPlayer = "";
}
//FUNCTION TO RETURN SCORE VALUES

//RETRIEVING DATA FROM LOCAL DATABASE 