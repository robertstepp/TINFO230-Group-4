// TODO: Navigation bar with highlighting
window.onload = function navigation() {
    this.document.getElementById("navigation").innerHTML = 
        '<li class="home"><a href="home.html" class="home">Home</a></li>' + 
        '<li class="products"><a href="products.html" class="products">Products</a></li>' + 
        '<li class="location"><a href="location.html" class="location">Location</a></li>' + 
        '<li class="mission"><a href="mission.html" class="mission">Mission</a></li>' + 
        '<li class="contactUs"><a href="contactus.html" class="contactUs">Contact Us</a></li>' + 
        '<li class="aboutUs"><a href="aboutus.html" class="aboutUs">About Us</a></li>';
}