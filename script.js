function showContent(tabName) {
    // Hide all content divs
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    // Show the selected content div
    document.getElementById(tabName + "Content").style.display = "block";
    }
//confirm("You will be receiving notifications from JimmyTech Company");
