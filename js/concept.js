// ------------------------------------------
//  scroll-animation
// ------------------------------------------

// ############ page__concept ############

var $win = $(window);

$win.on('load resize', function() {
  var windowWidth = window.innerWidth;

  if (windowWidth > 768) {
    // 769px以上のとき

    $(window).scroll(function(){
      // 高さ測定
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      // 生徒教師が下に移動
      var pc = $("#pc").offset().top;
      var dist_pc = pc - scroll;
      if ( dist_pc < 2*windowHeight/3 && dist_pc >= 0){
        var max = 2*windowHeight/3
        var ratio = dist_pc/max
        var bottom = 48 - 448 + 448*ratio + "px"
        var scale_ratio = 0.6 + Math.floor(0.4*ratio*100)/100
        var scale = "scale(" + scale_ratio + ")"
        $("#student").css({
          bottom: bottom,
          transform: scale,
        });
      }

      // ２つの詰みイラストが重なる
      var stop = $("#container__stop").offset().top;
      var dist_stop = stop - scroll;
      if (dist_stop < 3*windowHeight/4 && dist_stop >= 0){
        var eleHeight = $("#container__stop").height();
        var max = 3*windowHeight/4
        var ratio = (dist_stop - windowHeight + eleHeight + 160) / (max - windowHeight + eleHeight + 160)
        var percentage = 15 - 15*ratio + "%"
        $("#stop_layer").css({
          right: percentage,
        });
        $("#stop_pc").css({
          left: percentage,
        });
      }

    });

  } else if (windowWidth > 480) {
    // TABの処理
  } else {
    // SPの処理
  }
});
