window.onload = function navigation() {
    this.document.getElementById("navigation").innerHTML =
        '<li id="services"><a href="services.html">Services/Pricing</a></li>' +
        '<li id="contactUs"><a href="contactus.html">Contact Us</a></li>' +
        '<li id="mission"><a href="mission.html">Mission</a></li>' +
        '<li id="aboutUs"><a href="aboutus.html">About Us</a></li>' +
        '<li id="location"><a href="location.html">Location</a></li>' +
        '<li id="home"><a href="home.html">Home</a></li>';
        this.active();
        this.footer();
}

function active() {
    /* Gets page name without the extension */
    var theLocation = location.href.split("/").slice(-1)[0].split(".")[0]; // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
    switch (theLocation) {
        case "home":
            document.getElementById("home").setAttribute("id", "active");
            break;
        case "services":
            document.getElementById("services").setAttribute("id", "active");
            break;
        case "location":
            document.getElementById("location").setAttribute("id", "active");
            break;
        case "mission":
            document.getElementById("mission").setAttribute("id", "active");
            break;
        case "contactus":
            document.getElementById("contactUs").setAttribute("id", "active");
            break;
        case "aboutus":
            document.getElementById("aboutUs").setAttribute("id", "active");
            break;
    }
}

function checkForm() {
  document.getElementById("formErrors").style.setProperty("display","block");

document.getElementById("fullName").style.set


var x = document.getElementById("fullName").innerHTML;
if (x.length < 1) {
    document.getElementById("name").style.setProperty("display","block");
  }

  var re = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  var x = document.getElementById("email");
  if (!re.test(x)) {
    document.getElementById("mail").style.setProperty("display","block");
  }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});


function footer() {
    this.document.getElementById("footer").innerHTML = `<hr>` +
    '<!-- Source of Instagram: https://en.instagram-brand.com/assets/icons -->' +
    `<img src="images/instagram.png" alt="Instagram" title="Instagram" height=29> <!-- This needs padding for clearance -->` +
    `<!-- Source of Facebook: https://en.facebookbrand.com/facebookapp/ -->` +
    `<img src="images/facebook.png" alt="Facebook" title="Facebook" height=29> <!-- This needs padding for clearance -->` +
    `&copy; 2020`;
}
