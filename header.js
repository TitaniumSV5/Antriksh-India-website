document.addEventListener('DOMContentLoaded', function() {
  // Create the logo element
  var logo = document.createElement('div');
  logo.classList.add('logo');
  var logoImage = document.createElement('img');
  logoImage.src = 'logo2.png';
  logoImage.classList.add('logo');
  logoImage.setAttribute('height', '100px');
  logoImage.setAttribute('width', '50px');
  logo.appendChild(logoImage);

  // Create the navbar element
var navbar = document.createElement('div');
navbar.classList.add('navbar');
var navbarList = document.createElement('ul');
var navbarItems = ['Launches', 'Rockets', 'Spacecrafts', 'Satellites', 'Tests/Prototypes'];
var hrefValues = ['launches.html', 'rockets.html', 'spacecraft.html', 'satellite.html', 'test.html'];

for (var i = 0; i < navbarItems.length; i++) {
  var navbarItem = document.createElement('li');
  var navbarLink = document.createElement('a');
  navbarLink.href = hrefValues[i]; // Set the appropriate href value
  navbarLink.textContent = navbarItems[i];
  navbarItem.appendChild(navbarLink);
  navbarList.appendChild(navbarItem);
}

navbar.appendChild(navbarList);


  // Insert the logo and navbar into the banner element
  var banner = document.querySelector('.banner');
  banner.appendChild(logo);
  banner.appendChild(navbar);

  // Add the CSS file
  var cssFile = document.createElement('link');
  cssFile.rel = 'stylesheet';
  cssFile.href = 'navbarcss.css'; // Specify the path to the CSS file
  document.head.appendChild(cssFile);
});

