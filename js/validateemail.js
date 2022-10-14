let validateemail = function () {
    let email_value = document.getElementById("form-email").value
    let valid_email_structure = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (email_value.match(valid_email_structure)) {
        console.log("Se ha ingresado un email valido");
        return true;
    }
    else {
        alert("No podremos responderte! Debes ingresar un email valido.");
        console.log("El mail ingresado no posee un formato valido");
        return false;
    }

}
let validate_email = document.getElementById("form-submit")
validate_email.addEventListener("click", validateemail)