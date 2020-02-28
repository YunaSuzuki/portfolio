/* global $ */

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
      console.log(page);
      
      switch (page) {
        case 'profile':
          url = 'profile.html';
          break;
        
        case 'skill':
          url = 'skill.html';
          break;
          
        case 'works':
          url = 'works.html';
          break;
          
        case 'contact':
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
        
      }).fail(function(){
        console.log('失敗');
      });
    });
})