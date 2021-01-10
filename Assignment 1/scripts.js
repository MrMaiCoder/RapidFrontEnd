var validateEmail = function() {
    var email = document.getElementById('email').value;
    var validate = /\S+@\S+\.\S+/;
    return validate.test(email);
}

var subscribe = function(){
    if (validateEmail()) {
        success();
    }else{
        document.getElementById("error").innerHTML = "A valid email is required";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.outlineColor = "red";
    }
}

var success = function(){
    document.getElementsByClassName("subscribe-card")[0].style.display = "none";
    document.getElementsByClassName("success-card")[0].style.display = "block";
    document.getElementById("success-header").innerHTML = "Thank you";
    document.getElementById("success-text").innerHTML = "Your subscription was a success!"
}


