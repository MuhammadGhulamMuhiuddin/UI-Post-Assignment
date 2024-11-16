 
var inputField = document.getElementById("post-input");
var postButton = document.getElementById("post-button");
var postDisplay = document.getElementById("post-display");

 
function addPost(content) {
    var post = document.createElement("div");
    post.className = "post";
    post.textContent = content;
    postDisplay.appendChild(post);
}

 
postButton.onclick = function() {
    var text = inputField.value;
    if (text !== "") {
        addPost(text);
        inputField.value = "";  
    }
};

 
inputField.onkeypress = function(event) {
    if (event.key === "Enter") {
        var text = inputField.value;
        if (text !== "") {
            addPost(text);
            inputField.value = "";  
        }
    }
};
