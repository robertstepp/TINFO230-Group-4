window.onload = function navigation() {
    this.document.getElementById("navigation").innerHTML = 
        '<li class="home"><a href="home.html" class="home">Home</a></li>' + 
        '<li class="products"><a href="products.html" class="products">Products</a></li>' + 
        '<li class="location"><a href="location.html" class="location">Location</a></li>' + 
        '<li class="mission"><a href="mission.html" class="mission">Mission</a></li>' + 
        '<li class="contactUs"><a href="contactus.html" class="contactUs">Contact Us</a></li>' + 
        '<li class="aboutUs"><a href="aboutus.html" class="aboutUs">About Us</a></li>';        
        this.active();
}

function active() {
    /* Gets page name without the extension */
    var theLocation = location.href.split("/").slice(-1)[0].split(".")[0]; // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
    switch (theLocation) {
        case "home":
            document.getElementsByClassName("home")[0].setAttribute("id", "active");
            document.getElementsByClassName("home")[1].setAttribute("id", "active");
            break;
        case "products":
            document.getElementsByClassName("products")[0].setAttribute("id", "active");
            document.getElementsByClassName("products")[1].setAttribute("id", "active");
            break;
        case "location":
            document.getElementsByClassName("location")[0].setAttribute("id", "active");
            document.getElementsByClassName("location")[1].setAttribute("id", "active");
            break;
        case "mission":
            document.getElementsByClassName("mission")[0].setAttribute("id", "active");
            document.getElementsByClassName("mission")[1].setAttribute("id", "active");
            break;
        case "contactUs":
            document.getElementsByClassName("contactUs")[0].setAttribute("id", "active");
            document.getElementsByClassName("contactUs")[1].setAttribute("id", "active");
            break;
        case "aboutUs":
            document.getElementsByClassName("aboutUs")[0].setAttribute("id", "active");
            document.getElementsByClassName("aboutUs")[1].setAttribute("id", "active");
            break;
    }
}