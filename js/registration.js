/* Validates input in registration form*/

function validateForm() {
    var fn = document.forms["myForm"]["fname"].value;
	var ln = document.forms["myForm"]["lname"].value;
	var email = document.forms["myForm"]["email"].value;
	var atpos = email.indexOf("@");
	var phone = document.forms["myForm"]["usrtel"].value;
	var county = document.forms["myForm"]["county"].value;
	var dotpos = email.lastIndexOf(".");
	
	
    if (fn == null || fn == "") {
        alert("First name must be filled out, maximum 15 carachters.");
        return false;
    }
	
		
    if (ln == null || ln == "") {
        alert("Last name must be filled out, maximum 15 carachters.");
        return false;
		
		
	}
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
			alert("Not a valid e-mail address");
			return false;
    }
	
	if (phone == null || phone == "") {
        alert("Phone number must be entered.");
        return false;
    }
	
	if (phone <= 11111111 ) {
        alert("Phone number is incorrect.");
        return false;
    }
	
	if (county == null || county == "") {
        alert("County must be selected.");
        return false;
    }
	
	
	/* Contact sucessfully sent and returns to Homepage*/
	else {alert("Your message has been sent and you will recieve a reply shortly.");
			window.location = "index.html";
			return false;
	}
}