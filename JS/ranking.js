//Function to fill ranking table from local database

function getRanking() {

        if (localStorage.players === undefined)
        return [];
    else
        return JSON.parse(localStorage.players);
}
window.onload = loadRanking;
function loadRanking() {
    let uArray = getUsers();

        console.log(uArray);
    let htmlString = "<thead><tr><th>S. No</th><th>Player ID</th><th>Name</th><th>Score</th></tr><tbody>";
    for (let i = 0; i < uArray.length; i++) {
        htmlString += "<tr><td>" + (i+1) + "</td>" + "<td>" + uArray[i].id + "</td>" + "<td>" + uArray[i].name + "</td>"  +"<td>" + uArray[i].score + "</td></tr>";

    }
    htmlString += "</tbody></table>";
    document.getElementById("ranking").innerHTML = htmlString;
}