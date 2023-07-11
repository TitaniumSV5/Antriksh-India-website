document.addEventListener('DOMContentLoaded', function() {
  // Create the logo element
  var logo = document.createElement('div');
  logo.classList.add('logo');

  // Create the logo image element
  var logoImage = document.createElement('img');
  logoImage.src = 'Assets/logo2.png';
  logoImage.classList.add('logo');
  logoImage.setAttribute('height', '100px');
  logoImage.setAttribute('width', '50px');

  // Create the anchor element
  var anchor = document.createElement('a');
  anchor.href = '../index.html'; // Replace with your desired URL

  // Append the logo image to the anchor element
  anchor.appendChild(logoImage);

  // Append the anchor element to the logo div
  logo.appendChild(anchor);

  // Create the navbar element
  var navbar = document.createElement('div');
  navbar.classList.add('navbar');
  var navbarList = document.createElement('ul');
  var navbarItems = ['Launches', 'Rockets', 'Spacecrafts', 'Gaganyaan', 'Others'];
  var hrefValues = ['../Launches/launches.html', '../Rockets/rockets.html', '../Spacecrafts/spacecraft.html', 'WIP.html', 'WIP.html'];

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
});
