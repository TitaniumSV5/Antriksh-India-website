document.addEventListener('DOMContentLoaded', function() {
  // Create the logo element
  var logo = document.createElement('div');
  logo.classList.add('logo');

  // Create the logo image element
  var logoImage = document.createElement('img');
  logoImage.src = 'logo2.png';
  logoImage.classList.add('logo');
  logoImage.setAttribute('height', '100px');
  logoImage.setAttribute('width', '50px');

  // Create the anchor element
  var anchor = document.createElement('a');
  anchor.href = 'start.html'; // Replace with your desired URL

  // Append the logo image to the anchor element
  anchor.appendChild(logoImage);

  // Append the anchor element to the logo div
  logo.appendChild(anchor);

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

    if (navbarItems[i] === 'Rockets') {
      // Create the dropdown list
      var dropdownContent = document.createElement('div');
      dropdownContent.classList.add('dropdown-content');

      var subheadings = ['SLV', 'ASLV', 'PSLV', 'GSLV', 'LVM3', 'SSLV'];

      // Create a box for the subheadings
      var dropdownBox = document.createElement('div');
      dropdownBox.classList.add('dropdown-box');

      // Create a dropdown list element
      var dropdownList = document.createElement('ul');
      dropdownList.classList.add('dropdown-list');

      // Add subheadings to the dropdown list
      for (var j = 0; j < subheadings.length; j++) {
        var dropdownItem = document.createElement('li');
        dropdownItem.textContent = subheadings[j];
        dropdownList.appendChild(dropdownItem);
      }

      // Append the dropdown list to the dropdown box
      dropdownBox.appendChild(dropdownList);

      // Append the dropdown box to the dropdown content
      dropdownContent.appendChild(dropdownBox);

      // Append the dropdown content to the navbar item
      navbarItem.appendChild(dropdownContent);
    }

    navbarItem.appendChild(navbarLink);
    navbarList.appendChild(navbarItem);
  }

  navbar.appendChild(navbarList);

  // Insert the logo and navbar into the banner element
  var banner = document.querySelector('.banner');
  banner.appendChild(logo);
  banner.appendChild(navbar);
});
