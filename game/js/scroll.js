// ------------------------------------------
//  reportの自作スクロールバー
// ------------------------------------------

$(window).on("load", function(){

  function func_scrollbar(reportNum) {

    var reportID = "#report__" + reportNum;
    var $report = $(reportID);
    var $scrollable = $report.find(".scrollable");
    var $scrollbar = $report.find(".scrollbar");
    var $adjustment = $report.find(".adjustment");
    var $scrollbarthumb = $report.find(".scrollbar-thumb");

    // ここから
    var scrollable_height = $scrollable.height(),
    adjustment_height = $adjustment.outerHeight(),
    scrollbar_height = parseInt(scrollable_height * scrollable_height / adjustment_height);

    $scrollbarthumb.css('height', scrollbar_height);

    var scrollbar_track = scrollable_height - scrollbar_height;

    $scrollable.on('scroll', function() {
      var offset = $(this).scrollTop() * scrollbar_track / (adjustment_height - scrollable_height);

      $scrollbarthumb.css('transform', 'translateY(' + offset + 'px)');
    });

    var active = false, // つまみを操作しているかどうか
    scrollbar_thumb_cursor_y; // つまみ内のクリック位置

    $scrollbarthumb.on('mousedown', function(event) {
      active = true;
      scrollbar_thumb_cursor_y = event.pageY - $(this).offset().top;
    });

    $(document).on('mouseup', function() {
      active = false;
    });

    $(document).on('mousemove', function(event) {
      if (!active) return;

      var scrollbar_thumb_y = ((event.pageY - $scrollbar.offset().top) / scrollbar_track * scrollbar_track) - scrollbar_thumb_cursor_y;

      if (scrollbar_thumb_y < 0) {
        scrollbar_thumb_y = 0;
      } else if (scrollbar_thumb_y > scrollbar_track) {
        scrollbar_thumb_y = scrollbar_track;
      }

      $scrollbarthumb.css('transform', 'translateY(' + scrollbar_thumb_y + 'px)');
      $scrollable.scrollTop(($scrollbarthumb.offset().top - $scrollbar.offset().top) / scrollbar_track * (adjustment_height - scrollable_height));
    });

    $(document).on('selectstart', function() {
      if (active) return false;
    });

    return;
  };

  func_scrollbar(1);
  func_scrollbar(2);
  func_scrollbar(3);
  func_scrollbar(4);
  func_scrollbar(5);
  func_scrollbar(6);
});
