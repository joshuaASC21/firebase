let usernameElement = document.querySelector("#username");
let messageElement = document.querySelector("#message");
let button = document.querySelector("#submitButton");
// Set database object REFERENCE here:

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

}