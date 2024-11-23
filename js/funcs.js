function chkinput() {
    var input = document.getElementById("input").value;
    console.log(input);
    if (input == "") {
        alert("Please enter a value");
    }
    else {
        if (input == "hello!") {
            // 跳到thanks.html
            window.location.href = "thanks.html";
        }
        else {
            alert("Please enter \"hello!\"");
        }
    }
}

function back() {
    window.location.href = "index.html";
}
