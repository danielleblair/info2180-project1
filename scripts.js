/* Add your JavaScript to this file */

window.onload = function(){
    acceptEmail();
}
    
function acceptEmail(){
    const button1 = document.querySelector("button.btn");

    button1.addEventListener('click', function(){

        button1.setAttribute("type", "button");
        var userEmail = document.getElementById("email").value;
        var message = document.querySelector(".message");

        if (userEmail==""){
            message.textContent = "Please enter a valid email address";
        }else{
            message.textContent = `Thank you! Your email address ${userEmail} has been added to our mailing list`;
        }
        
    });
}
    