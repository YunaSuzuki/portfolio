/* global $ */

//同期通信でページを読み込んだ場合、アニメーション登録
$(window).on('load', function(){
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
        //ajax成功時に、画像のアニメーションができるように
        imgFadeIn(get_html);
      }).fail(function(){
        console.log('失敗');
      });
    });
});

//画像フェードインアニメーション
var imgFadeIn = (function(){

  $('.contents').scroll(function() {
    
    $('.contents__box').each(function(){
      
      var position = $(this).position().top;

      if($('img', this).hasClass('active')){
        $('img', this).removeClass('active');
      }
      
      if(position < 0){
        $('img', this).addClass('active');
      }
    });
  });
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

