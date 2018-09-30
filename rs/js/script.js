$(function () { 
  $("button").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsibleNavbar").collapse('hide');
    }
  });
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
