// add this function to the button as a click listener
document.getElementById('send').addEventListener('click', updateChat);
function updateChat(){
    console.log('it works');
    // grab the text that's in the input box
    let response = document.getElementById('customer-input').value;
    // add that text to the end of what's already in the chat box
    let log = document.getElementById('chat').innerHTML;
    log += response;
}

