var button = $("i");
var open = false;


button.click(function() {
  if (open) {
    $(".hamburger-menu").hide();
    open = false;
  } else {
    $(".hamburger-menu").show();
    open = true;
  }
});
