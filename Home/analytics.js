document.addEventListener('DOMContentLoaded', function() {
  // GTM code snippet for the head tag
  var headCodeSnippet = '\
    <!-- GTM code for the head tag -->\
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\
    new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\
    j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\
    \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-KWXXGWB\');</script>\
  ';
  
  // GTM code snippet for the body tag
  var bodyCodeSnippet = '\
    <!-- GTM code for the body tag -->\
    <noscript>\
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWXXGWB"\
      height="0" width="0" style="display:none;visibility:hidden"></iframe>\
    </noscript>\
  ';
  
  // Create a new script element for the GTM code in the head tag
  var headScriptElement = document.createElement('script');
  headScriptElement.innerHTML = headCodeSnippet;
  
  // Create a new script element for the GTM code in the body tag
  var bodyScriptElement = document.createElement('script');
  bodyScriptElement.innerHTML = bodyCodeSnippet;
  
  // Add the script elements to the head and body tags
  document.head.appendChild(headScriptElement);
  document.body.appendChild(bodyScriptElement);
});
