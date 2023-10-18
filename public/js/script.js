console.log("Script loaded!");

// Get the current page URL
var currentPage = window.location.href;

document.addEventListener("DOMContentLoaded", function () {
  // ========= SIDEBAR ON SELECT ============

  var menuLinks = document.querySelectorAll(".sidebar li a");

  for (var i = 0; i < menuLinks.length; i++) {
    var menuLink = menuLinks[i];
    var menuItemLink = menuLink.getAttribute("href");

    if (menuItemLink && currentPage.includes(menuItemLink)) {
      menuLink.classList.add("selected");
    }
  }

  // ========= LEFT SIDE ON SELECT ============

  var leftMenuLinks = document.querySelectorAll(".left-panel li a");

  for (var j = 0; j < leftMenuLinks.length; j++) {
    var leftMenuLink = leftMenuLinks[j];
    var leftMenuItemLink = leftMenuLink.getAttribute("href");

    if (leftMenuItemLink && currentPage.includes(leftMenuItemLink)) {
      leftMenuLink.classList.add("selected-left-panel");
    }
  }
});
