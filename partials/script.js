function parallax_height() {
  var scroll_bottom = $(this).scrollBottom();
  var sample_section_bottom = $(".sample-section").offset().bottom;
  var header_height = $(".sample-header-section").outerHeight();
  $(".sample-section").css({ "margin-bottom": header_height });
  $(".sample-header").css({ height: header_height - scroll_bottom });
}
parallax_height();
$(window).scroll(function() {
  parallax_height();
});
$(window).resize(function() {
  parallax_height();


});
