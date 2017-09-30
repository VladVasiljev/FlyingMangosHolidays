/* Validates input in contact form*/

function validateForm() {
    var fn = document.forms["myForm"]["fname"].value;
	var ln = document.forms["myForm"]["lname"].value;
	var email = document.forms["myForm"]["email"].value;
	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	var message = document.forms["myForm"]["message"].value;
	
    if (fn == null || fn == "") {
        alert("First name must be filled out, maximum 15 carachters.");
        return false;
    }
	
		
    else if (ln == null || ln == "") {
        alert("Last name must be filled out, maximum 15 carachters.");
        return false;
		
	}
	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
			alert("Not a valid e-mail address");
			return false;
    }
	
	else if (message == null || message == "") {
        alert("Message must be filled out, maximum 500 carachters.");
        return false;
	}
	/* Contact sucessfully sent and returns to Homepage*/
	else {alert("Your message has been sent and you will recieve a reply shortly.");
			window.location = "http://js1.gear.host/index.html";
			return false;
}
	}