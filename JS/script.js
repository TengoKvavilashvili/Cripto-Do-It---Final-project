let navelements = ["Home", "About Us", "Services", "Contact Us", "Login", "Register"];

let navlinks = ["index.html", "AboutUs.html", "Services.html", "ContactUs.html", "Login.html", "Register.html"];

let navtext = '<ul class="flex">';

let navlength = navelements.length;
for (i = 0; i < navlength; i++) {
	navtext += '<li><a href="' + navlinks[i] + '">' + navelements[i] + "</a></li>";
}
navtext += "</ul>";

document.getElementById("nav").innerHTML = navtext;


const listItems = document.querySelectorAll('li');

listItems[4].classList.add('Login');
listItems[5].classList.add('Register');