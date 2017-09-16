(function() {
  'use strict';
  /**
   * Shows and hides main nav on hover
   */
  $(".main-nav").hover(function(){
    $(".hidden-nav").show();
    }, function(){
      $(".hidden-nav").hide();
  });
  /**
   * Plays and pauses audio on button click
   * @type {audio}
   */
  var audio = $("#beatles")[0];
  var play = $(".fa-play-circle");
  var pause = $(".fa-pause-circle");

  play.click(function(){
  play.hide();
  pause.show();
  audio.play();
  });

  pause.click(function(){
    pause.hide();
    play.show();
    audio.pause();
  });

  $(window).scroll(function(){
    if( $(window).scrollTop() >= 700){
      $("nav").hide();
      $(".audio-control").hide();
    } else{
      $("nav").show();
      $(".audio-control").show();
    }
  });

}());
