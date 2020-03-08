/* global $ */

//同期通信でページを読み込んだ場合、アニメーション登録

$(window).on('load', function(){
  
  sectionFadeIn();
  $('.contents__box').children().hide().fadeIn(2000);
  imgFadeIn();
  
});

// index.html
//search-menuスライド表示
$('#search__input').on('mousedown', function(){
    $('#search__menu').slideToggle();
});

//非同期通信でdisplay-boxの表示を変更
$(function() {
    $(document).on('click', '.toPage', function(){
      
      var url="";
      var page = $(this).attr('id');
      
      switch (page) {
        case 'toProfile':
          url = 'profile.html';
          break;
        
        case 'toSkill':
          url = 'skill.html';
          break;
          
        case 'toWorks':
          url = 'works.html';
          break;
          
        case 'toContact':
          url = 'contact.html';
          break;
      }
      
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'html'
      })
      .done(function(data){
        //現在表示されているdisplay-boxを非表示にする
        $(".display-box").remove();
        //飛ぶページのdisplay-boxを取得＆表示
        var get_html = $(data).find('.display-box');
        $('.display').append(get_html);
        $('.contents__box').children().hide().fadeIn(500);
        //ajax成功時に、画像のアニメーション(スクロール）ができるように。
        sectionFadeIn(get_html);
        imgFadeIn();
      }).fail(function(){
        location.href = url;
      });
    });
});

//テキストフェードインアニメーション
var sectionFadeIn = (function(){
  
  $('#contents').scroll(function() {
    
    $('.fadein-text').hide().fadeIn(1000);
    
    $('section').each(function(){
      var position = $(this).position().top;
      if($('img', this).hasClass('active')){
        $('img', this).removeClass('active');
      }
      
      console.log(position);
      if(position < 300){
        $('img', this).addClass('active');
        
        if(position < -250){
          $('img', this).removeClass('active');
        }
      }
    });
  });
});

//最初のsectionの画像が下からフェードイン
var imgFadeIn = (function(){
  var section_html = $(document).find('.first-section');
  
  $('img', section_html).each(function(){
    
    if($('img', section_html).hasClass('active')){
      $('img', section_html).removeClass('active');
    }
    
    $('img', section_html).addClass('active');
  });
  
  
});


//instagram 準備中アラート
$(document).on('click', '.alert-window', function() {
      alert('ただいま、準備中です。');
});


// //フェードインアニメーション
// $(window).on('load', function(){
  
//   var contents_height = $('.contents').outerHeight();
//   var contents_width = $('.contents').width();
//   console.log(contents_height);
//   console.log(contents_width);
  
//   var center_height = contents_height / 2;
//   var center_width = contents_width / 2;
//   console.log(center_height);
//   console.log(center_width);

//   $('.contents').scroll(function(){
  
//     var scroll_h = $(this).scrollTop();
//     console.log(scroll_h);
//     if(scroll_h >= 200){
//       $('.contents__box img').fadeIn(3000);
//       console.log('範囲内です。');
//     } else{
      
//     }
//   });
// })

