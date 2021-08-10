let usernameElement = document.querySelector("#username");
let messageElement = document.querySelector("#message");
let button = document.querySelector("#submitButton");
// Set database object REFERENCE here:
let database = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */
button.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing
    let username        = usernameElement.value;
    let message         = messageElement.value;
    usernameElement.value = "";
    messageElement.value  = "";
    console.log(username + " : " + message);
    // Update database here
    let value = {
        NAME: username, 
        MESSAGE: message,
    }
    database.push(value);
}


// Set database "child_added" event here:
database.on("child_added", addMessageToBoard);


//This function grabs a row of data from the database
function addMessageToBoard(rowData){
    let row = rowData.val(); // returns an object just like the value we pushed
    let board = document.querySelector(".allMessages");
    let message = document.createElement("p");
    message.innerHTML = row.NAME + ": " + row.MESSAGE;
    board.appendChild(message);
    usernameElement.value= "";
    messageElement.value = ""; 
}