$(function () {
  //header 메뉴 호버시
  $("#header .gnb > li").hover(
    function () {
      var w = $(this).outerWidth();
      var idx = $(this).index(); // 개수

      var a = 0;

      if (idx != 0) {
        for (var i = 0; i < idx; i++) {
          w2 = $("#header .gnb > li").eq(i).outerWidth();
          a += w2;
          $(".header_wrap .particle").css({ width: w, left: a });
        }
      } else {
        $(".header_wrap .particle").css({ width: w, left: 0 });
      }

      /* $(".header_wrap .particle").css({ width: w }); */

      $(".header_wrap").addClass("on");
      /* $("#header .gnb ul").addClass("on").stop().animate({ height: 360 }, 300);
      $(".header_wrap .bg").stop().animate({ height: 440 }, 200);*/
    },
    function () {
      $(".header_wrap").removeClass("on");
      //$("#header .gnb ul").stop().animate({ height: 0 }, 300);
    }
  );
  //마우스 호버
  $("#sec5 ul li").hover(function () {
    $("#sec5 ul li").addClass("on");
  });

  //언어 선택 Clcik 이벤트
  $("#header .user_menu .select_box > a").click(function () {
    if ($(this).next().height() > 0) {
      $(this).next().stop().animate({ height: 0 }, 500);
    } else {
      $(this).next().stop().animate({ height: 85 }, 500);
    }
  });
  $(".user_menu .list a").click(function () {
    $(".user_menu .select_box > a").text($(this).text());
    $(".user_menu .list").stop().animate({ height: 0 }, 500);
  });

  //header 스크롤 이벤트
  $(window).on("mousewheel", function (e) {
    var curr = $(window).scrollTop();
    var wheel = e.originalEvent.wheelDelta;
    //스크롤값을 가져온다.
    if (wheel > 0) {
      if (curr != 0) {
        //스크롤 올릴때
        $(".header_wrap").removeClass("down").addClass("fix");
      } else {
        $(".header_wrap").removeClass("down fix");
      }
    } else {
      //스크롤 내릴때
      $(".header_wrap").removeClass("fix").addClass("down");
    }
  });

  //***sec2 텍스트 흐르게 만들기
  //컨트롤러 생성
  var controller = new ScrollMagic.Controller();

  //완료 애니메이트
  var sec2_txt01 = TweenMax.fromTo(
    "#main #sec2 p.txt01",
    0.6,
    {
      x: "-10vw",
    },
    {
      x: "-70vw",
    }
  );
  var sec2_txt02 = TweenMax.fromTo(
    "#main #sec2 p.txt02",
    0.6,
    {
      x: "-70vw",
    },
    {
      x: "10vw",
    }
  );
  //트리거 모션 씬
  var scene = new ScrollMagic.Scene({
    triggerElement: "#main #sec2",
    duration: "200%",
    offset: -150,
  })
    .setTween(sec2_txt01)
    .addTo(controller);
  /* .addIndicators({
      name: "1",
    }); */
  //트리거 모션 씬
  var scene = new ScrollMagic.Scene({
    triggerElement: "#main #sec2",
    duration: "200%",
    offset: -150,
  })
    .setTween(sec2_txt02)
    .addTo(controller);
  /* .addIndicators({
      name: "1",
    }); */
  //***sec3  */
  var project_bg = TweenMax.fromTo(
    "#main #sec3 .img_wrap",
    0.6,
    {
      y: "-200px",
    },
    {
      y: "200px",
    }
  );
  //트리거 모션 씬
  var scene = new ScrollMagic.Scene({
    triggerElement: "#main #sec3",
    duration: "200%",
    offset: -150,
  })
    .setTween(project_bg)
    .addTo(controller);
  /*  .addIndicators({
      name: "1",
    }); */

  //***sec4 쿠폰 슬라이드스와이퍼

  var sec4_swiper = new Swiper(".sec4_swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    simulateTouch: false,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //***sec5 img_box효과
  flag = 0;
  $(window).scroll(function () {
    var curr1 = $(window).scrollTop();

    var sec5 = $("#sec5").offset().top - 800;

    if (curr1 >= sec5) {
      if (flag == 0) {
        TweenMax.staggerTo(
          "#sec5 ul li",
          0.8,
          {
            y: 0,
            opacity: 1,
          },
          0.3
        );

        flag = 1;
      }
    } else {
      flag = 0;
      TweenMax.staggerTo(
        "#sec5 ul li",
        0.2,
        {
          y: 80,
          opacity: 0,
        },
        0.1
      );
    }
  });

  //**sec5 마우스 무브 이벤트
  $("#sec5").mousemove(function (e) {
    TweenMax.to($(".cursor_02"), 0.2, {
      x: e.clientX - 140,
      y: e.clientY - 140,
      ease: Power3.easeOut,
    });
  });

  //*FOOTER 사이트 맵 버튼 클릭 이벤트 */
  $(".family_btn").click(function () {
    if ($(this).hasClass("on")) {
      $(".family_site .list").removeClass("on");
      $(this).removeClass("on");
    } else {
      $(".family_site .list").addClass("on");
      $(this).addClass("on");
    }
  });

  //***sec6 텍스트 효과
  flag = 0;
  $(window).scroll(function () {
    var curr2 = $(window).scrollTop();

    var sec6 = $("#sec6").offset().top - 500;

    if (curr2 >= sec6) {
      if (flag == 1) {
        TweenMax.staggerTo(
          "#sec6 ul li",
          0.8,
          {
            y: 0,
            opacity: 1,
          },
          0.3
        );
        TweenMax.staggerTo(
          "#sec6 .under > i",
          1.2,
          {
            width: "100%",
          },
          0.5
        );
        flag = 1;
      }
    } else {
      flag = 0;
      TweenMax.staggerTo(
        "#sec6 ul li",
        0.2,
        {
          y: 80,
          opacity: 0,
        },
        0.1
      );
      TweenMax.staggerTo(
        "#sec6 .under > i",
        0.2,
        {
          width: 0,
        },
        0.2
      );
    }
  });
}); //$(function () {

/* $(".main_footer .sns_box .family_site > a").click(function () {
  $(this).prev().addClass("on");
  $();
});
 */
