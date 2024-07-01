// ------------------------------------------
//  start
// ------------------------------------------
$("#btn__start").on("click", function(){
  $(this).fadeOut(600, function(){
    $("#start__massage").fadeIn(1000, function(){
      $("#start__massage").delay(2500).fadeOut(500, function(){
        $(".menu").css({"z-index":"auto"});
        $(".meter").animate({"zIndex":"99999"});
        $("#meter__ex").fadeIn(200);
      });
    });
  });
});
$("#meter__ex__close").one("click", function(){
  $(".meter").css({"z-index":"auto"});
  $("#meter__ex").fadeOut();
  $("#world").animate({"zIndex":"99999"});
  $("#world__ex").fadeIn(200);
})
$("#world__ex__close").one("click", function(){
  $("#world").css({"z-index":"auto"});
  $("#world__ex").fadeOut();
  $("#report").animate({"zIndex":"99999"});
  $("#report__ex").fadeIn(200);
})
$("#report__ex__close").one("click", function(){
  $("#report").css({"z-index":"auto"});
  $("#report__ex").fadeOut();
  $("#mission").animate({"zIndex":"99999"});
  $("#mission__ex").fadeIn(200);
})
$("#mission__ex__close").one("click", function(){
  $("#mission").css({"z-index":"auto"});
  $("#mission__ex").fadeOut();
  $(".menu").css({"z-index":"9000"});
  $("#start").delay(500).fadeOut(800, function(){
    $("#world, #report, #mission").addClass("clickable");
    $("#mission__contents__insert").html("<p>原子力発電所を起動せよ</p><img class='mission__hint' src='images/game/electro.png'>")
    $("#mission__list__1").css({"display":"block"});
    $("#mission__contents").animate({"top":"120px"},800,"swing")
    $("#mission__contents__close").on("click", function(){
      $("#mission__contents").animate({"top":"-300px"},800,"swing")
      $("#start__electro").addClass("clickable");
    })
  });
})


// meterの追加 関数の定義
function addmeter() {
  $(".meter__display__box").append('<div class="meter__line"><span class="triangle-4__left"></span><span class="triangle-4__right"></span></div>');
}

// ------------------------------------------
//  mission 1 - 原子力発電所を起動せよ
// ------------------------------------------
$("#start__electro").on("click", function(){
  if( $(this).attr("class") == "clickable" ){
    $("#gif__truck").delay(2000).fadeIn();
    $("#start__electro").addClass("active").removeClass("clickable");
    $("#clouds__electro").delay(1000).fadeIn();
    $("#mission__clear").delay(3000).queue(function(){
      $(this).addClass("active").dequeue();
    });
    $("#report__get").delay(6000).queue(function(){
      $(this).addClass("active").dequeue();
    });
    $("#report__1").delay(9000).queue(function(){
      $(this).addClass("active").dequeue();
      $("#report__trigger__1").css({"display":"block"});
      $("#btn__report__close__1").one("click", function(){
        $("#mission__contents__insert").html("<p>再処理工場を起動せよ</p><img class='mission__hint' src='images/game/recycle.png'>")
        $("#mission__list__2").css({"display":"block"});
        $("#mission__list__1").removeClass("mission__current");
        $("#mission__contents").delay(1000).animate({"top":"120px"},800,"swing")
        $("#mission__contents__close").on("click", function(){
          $("#mission__contents").animate({"top":"-300px"},800,"swing")
          $("#start__recycle").addClass("clickable");
          $("#mission__clear").removeClass("active");
          $("#report__get").removeClass("active");
        })
      });
    });
  }
});

// ------------------------------------------
//  mission 2 - 再処理工場を起動せよ
// ------------------------------------------
$("#start__recycle").on("click", function(){
  if( $(this).attr("class") == "clickable" ){
    // イベント
    $("#nuclear_to_meter").css({"display":"block"});
    $(".meter__display__box").delay(4050).queue(function(){
      addmeter();
    });
    $("#start__recycle").addClass("active").removeClass("clickable");

    $("#clouds__recycle").delay(1000).fadeIn();
    $("#mission__clear").delay(3000).queue(function(){
      $(this).addClass("active").dequeue();
    });
    $("#report__get").delay(6000).queue(function(){
      $(this).addClass("active").dequeue();
    });
    $("#report__2").delay(9000).queue(function(){
      $(this).addClass("active").dequeue();
      $("#report__trigger__2").css({"display":"block"}).dequeue();
    });
    $("#btn__report__close__2").one("click", function(){
      $("#world__ul").delay(3000).queue(function(){
        $(this).addClass("color__change").dequeue();
      });
      $("#report__3").addClass("active");
      $("#report__1 .new__badge").css({"opacity":0});
      $("#report__trigger__3").css({"display":"block"});
      $("#btn__report__close__3").one("click", function(){
        $("#mission__contents__insert").html("<p>処分方法を探せ</p>")
        $("#mission__list__3").css({"display":"block"});
        $("#mission__list__2").removeClass("mission__current");
        $("#mission__contents").delay(1000).animate({"top":"120px"},800,"swing");
        $("#mission__contents__close").on("click", function(){
          $("#mission__contents").animate({"top":"-300px"},800,"swing")
          $("#start__recycle").addClass("clickable");
          $("#mission__clear").removeClass("active");
          $("#report__get").removeClass("active");
          $("#map__1, #map__2, #map__3").addClass("clickable");
          $("#nuclear_to_meter").css({"display":"none"});
          addmeter();
        });
      });
    });
  }
});


// ------------------------------------------
//  mission 3 - 処分方法を探せ
// ------------------------------------------
$(".map__pin__common").on("click", function(){
  if( $(this).attr("class") == "map__pin__common clickable"){
    var reportNum = $(this).attr("id").slice(-1);
    var report_ID = "#world__" + reportNum;
    var not_report_ID = ".world__contents:not(" + report_ID + ")"
    $(report_ID).toggleClass("active");
    $(not_report_ID).removeClass("active");
  }
});
$(".btn__report__close, .btn__close").on("click", function(){
  $(".world__contents").removeClass("active");
});

var counter ="";
function counter3 (){
  $("#report__get").delay(1000).queue(function(){
    $(this).addClass("active").dequeue();
  });
  $("#report__4").delay(4000).queue(function(){
    $(this).addClass("active").dequeue();
    $("#report__trigger__4").css({"display":"block"});
    $("#btn__report__close__4").one("click", function(){
      $("#world__note__5__trigger").fadeIn(300);
      $("#report__get").removeClass("active");
      $("#report__3 .new__badge, #report__2 .new__badge").css({"opacity":0});
      addmeter();
      $("#world__ul").removeClass("color__change");
    });
  });
}
$("#world__note__1").one("click", function(){
  $(this).next(".note__ban").fadeIn(600);
  counter++;
  if(counter == 3) {
    counter3();
  }
  addmeter();
})
$("#world__note__2").one("click", function(){
  $(this).next(".note__ban").fadeIn(600);
  counter++;
  if(counter == 3) {
    counter3();
  }
  addmeter();
})
$("#world__note__3").one("click", function(){
  $(this).next(".note__ban").fadeIn(600);
  counter++;
  if(counter == 3) {
    counter3();
  }
  addmeter();
})

$("#world__note__5__trigger").on("click",function(){
  $("#world__5").addClass("active");
});
$("#world__note__5").one("click",function(){
  $("#report__get").delay(100).queue(function(){
    $(this).addClass("active").dequeue();
  });
  $("#report__5").delay(3000).queue(function(){
    $(this).addClass("active").dequeue();
    $("#report__trigger__5").css({"display":"block"});
  });
  $("#btn__report__close__5").one("click", function(){
    $("#mission__clear").delay(500).queue(function(){
      $(this).addClass("active").dequeue();
    });
    $("#world__ul").delay(6000).queue(function(){
      $(this).addClass("color__change").dequeue();
    });
    $("#mission__contents__insert").html("<p>フィンランドを調査せよ</p>")
    $("#mission__list__4").css({"display":"block"});
    $("#mission__list__3").removeClass("mission__current");
    $("#mission__contents").delay(4500).animate({"top":"120px"},800,"swing")
    $("#mission__contents__close").on("click", function(){
      $("#mission__contents").animate({"top":"-300px"},800,"swing")
      $("#mission__clear").removeClass("active");
      $("#report__get").removeClass("active");
      $("#map__4").addClass("clickable");
      $("#report__4 .new__badge").css({"opacity":0});
      addmeter();
    })
  });
});

// ------------------------------------------
//  mission 5 - 最終処分場の候補地を探せ
// ------------------------------------------

function last(){

  // meter の起動
  const meter__limit = 20000; //泳がせる時間(ms)
  const meter__counter__max = 14; //挿入可能なmeterの数
  const meter__interval = meter__limit/meter__counter__max; //繰り返す間隔(ms)
  var meter__counter = 0;
  setInterval(function(){
    if( meter__counter < meter__counter__max) {
      meter__counter++;
      $(".meter__display__box")
      .append('<div class="meter__line"><span class="triangle-4__left"></span><span class="triangle-4__right"></span></div>')
      if (meter__counter > 6) {
        $(".meter__display__box").children(".meter__line").css({"filter":"hue-rotate(-15deg) saturate(5)"});
        $("#alert__overlay").fadeIn();
      }
      if (meter__counter > 10) {
        $(".meter__display__box").children(".meter__line").css({"filter":"hue-rotate(-40deg) saturate(5)"});
      }
      if (meter__counter == 14) {
        $(".meter__display__box").children(".meter__line").css({"filter":"hue-rotate(-40deg) saturate(5)"});
        $(".world__contents, .report__contents, .menu__window, #world__note__5__trigger").fadeOut(500);
        $("#alert__overlay").fadeOut(1000);
        end__display();
      }
    } else {
      return;
    }
  }, meter__interval);
}

function end__display() {
  $("#end").delay(2000).fadeIn(500);
  $("#end__message__1").delay(3500).fadeIn(1000);
  $("#not__gameover").delay(6000).fadeIn(200, function(){
    $("#end__next__1").delay(500).fadeIn();
  });
}

$("#end__next__1").one("click", function(){
  $("#end__message__1").fadeOut(1000);
  $("#end__message__2").fadeIn(1000);
  $("#end__next__2").delay(3000).fadeIn();
});
$("#end__next__2").one("click", function(){
  $("#end__message__text").fadeOut(500);
  $(".game__main").delay(500).animate({"top":"-248px"},2000, function(){
    $("#end__nuclear").delay(1000).fadeIn(1000);
    $("#end__message__3").delay(3500).fadeIn(1000);
    $("#end__link").delay(6000).fadeIn(1000);
  });
});

// ------------------------------------------
//  mission 4 - フィンランを調査せよ
// ------------------------------------------
$("#map__4").on("click", function(){
  if( $(this).attr("class") == "clickable"){
    $(this).addClass("active");
  }
});
$("#world__note__4").one("click", function(){
  $("#report__get").delay(100).queue(function(){
    $(this).addClass("active").dequeue();
  });
  $("#report__6").delay(3100).queue(function(){
    $(this).addClass("active").dequeue();
    $("#report__trigger__6").css({"display":"block"}).dequeue();
  });
});
$("#btn__report__close__6").one("click", function(){
  $("#world__ul").removeClass("color__change");
  $("#report__5 .new__badge").css({"opacity":0});
  $("#mission__clear").delay(1000).queue(function(){
    $(this).addClass("active").dequeue();
  });
  $("#mission__contents__insert").html("<p>最終処分地の候補を探せ</p>")
  $("#mission__list__5").css({"display":"block"});
  $("#mission__list__4").removeClass("mission__current");
  $("#mission__contents").delay(5000).animate({"top":"120px"},800,"swing")
  $("#mission__contents__close").one("click", function(){
    $("#mission__contents").animate({"top":"-300px"},800,"swing", function(){
      last();
    });
  });
});


// ------------------------------------------
//  navigation
// ------------------------------------------
  $("#world").on("click", function(){
    if( $(this).attr("class") == "clickable"){
      $("#report__window, #mission__window").removeClass("active");
      $("#world__window").toggleClass("active");
    }
  });
  $("#report").on("click", function(){
    if( $(this).attr("class") == "clickable"){
      $("#world__window, #mission__window").removeClass("active");
      $("#report__window").toggleClass("active");
    }
  });
  $("#mission").on("click", function(){
    if( $(this).attr("class") == "clickable"){
      $("#world__window, #report__window").removeClass("active");
      $("#mission__window").toggleClass("active");
    }
  });
  $(".btn__close").on("click", function(){
    $(".menu__window").removeClass("active");
  });


// ------------------------------------------
//  report
// ------------------------------------------
  $(".report__trigger").on("click", function(){
    var reportNum = $(this).attr("id").slice(-1);
    var report_ID = "#report__" + reportNum;
    var not_report_ID = ".report__contents:not(" + report_ID + ")"
    $(report_ID).toggleClass("active");
    $(not_report_ID).removeClass("active");
  });
  $(".btn__report__close, #btn__close__report-list").on("click", function(){
    $(".report__contents").removeClass("active");
  });


// ------------------------------------------
//  reload
// ------------------------------------------
$("#reload__trigger").on("click", function(){
  location.reload();
});
