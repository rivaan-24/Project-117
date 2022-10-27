function new_user() {
    new_username = document.getElementById("textarea_username").value;
    new_password = document.getElementById("textarea_password").value;

    if (new_username == "" || new_password == "") {
        window.alert("You must insert your username and/or password.");
        document.getElementById("textarea_username").color = red;
        document.getElementById("textarea_password").color = red;
    }
    else {
        window.location = "index.html";
    }
}