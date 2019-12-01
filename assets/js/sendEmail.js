//console.log("ok");

function sendMail(contactForm) {
    
    emailjs.send("gmail", "sendejs", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "project_summary": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return true;  // To block from loading a new page
}



/*function sendMail(contactForm) {
    
    emailjs.init("user_E7IUzvMdhStfLack36ImF");
    
    emailjs.send("icloud", "resumereply", {
        
        "reply_to":"mac.midi.webdesigns@gmail.com",
        "from_name":"Miguel Camacho",
        "to_name":"Miguel Camacho",
        "project_request":"testEMAILjs"
        
        //"from_name": contactForm.name.value,
        //"from_email": contactForm.emailaddress.value,
        //"project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return;  // .false  To block from loading a new page
}
*/




/*
function sendMail(contactForm) {

  emailjs.init("user_tCGWNZ01bkBaa5oF3FNbD")
   emailjs.send("gmail", "mactest", {
         "from_name": "<from_name>Miguel Camacho",
        "from_email": "<from_email>mcamacho1990@icloud.com",
        "fullname": "<fullname>Miguel A. Camacho",
        "project_request": "project_request -- Test EmailJS"
    })


}*/








/* //emailjs.init("user_tCGWNZ01bkBaa5oF3FNbD");

    var template_params = {
        "from_name": "<from_name>Miguel Camacho",
        "from_email": "<from_email>mcamacho1990@icloud.com",
        "fullname": "<fullname>Miguel A. Camacho",
        "project_request": "project_request -- Test EmailJS"

    }

    var service_id = "gmail";
    var template_id = "mactest";
    //emailjs.send(service_id, template_id, template_params)
   emailjs.send("gmail", "mactest", { "from_name": "<from_name>Miguel Camacho", "from_email": "<from_email>mcamacho1990@icloud.com",
                "fullname": "<fullname>Miguel A. Camacho", "project_request": "project_request- Test EmailJS" })
*/
