/* We are targetting the menu-links and hamburger-icon elements, so that when the user clicks
on the hamburger menu it's going to either add or remove the open class*/
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Open the PDF URL in a new tab or window
function openPDF() {
    window.open('CV/CV_English.pdf', '_blank');
}

//Send an email through the contact-me section
function sendEmail(){
    Email.send({
        SecureToken : "cb5fd779-2ea0-4220-87e0-df1e876dc2b8",
        To : 'saschacauchon56@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Enquiry",
        Body : "Name: " + document.getElementById('name').value
        + "<br> Email: " + document.getElementById('email').value 
        + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert("Message sent succesfully")
    );
}