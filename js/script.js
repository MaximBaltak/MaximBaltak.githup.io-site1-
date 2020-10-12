$(document).ready(function(){
    $('.carusel').slick({
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/slider/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/slider/rehith.png"></button>',
        responsive: [
         {
            breakpoint: 991,
            settings: {
                         arrows: false,
                      } 
         }],
    });
    $('ul.catalog_list').on('click', 'li:not(.list_active)', function() {
      $(this)
        .addClass('list_active').siblings().removeClass('list_active')
        .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
    });
    $('.catalog-item_s').each(function(i){
      $(this).on('click',function(e){
         e.preventDefault();
         $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
         $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
      });
    });

    $('.bock').each(function(i){
      $(this).on('click',function(e){
         e.preventDefault();
         $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
         $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
      });
    });

    //modal
    $('[data-modal=consultation]').on('click',function(){
      $('.overlay,#consultation').fadeIn('slow');
    });
    $('.modal_items').on('click',function(){
      $('.overlay,#consultation,#order,#by').fadeOut('slow');
    });

    $('[data-modal=order]').each(function(i){
        $(this).on('click',function(){
          $('#order .pay').text($('[data-modal=text]').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
    });
    
    $('#forma').validate({
      rules:{
        name:'required',
        phone:'required',
        email: {
          required: true,
          email: true,
        }
      },
      messages:{
        name:'Пожалуйста, введите ваше имя',
        phone:'Пожалуйста, введите ваш телефон',
        email:{
          required:'Пожалуйста, введите вашу почту',
          email: 'Не правильный формат почти',
        }
      }
    });
    $('#formatwo').validate({
      rules:{
        name:'required',
        phone:'required',
        email: {
          required: true,
          email: true,
        }
      },
      messages:{
        name:'Пожалуйста, введите ваше имя',
        phone:'Пожалуйста, введите ваш телефон',
        email:{
          required:'Пожалуйста, введите вашу почту',
          email: 'Не правильный формат почти',
        }
      }
    });
    $('#formatree').validate({
      rules:{
        name:'required',
        phone:'required',
        email: {
          required: true,
          email: true,
        }
      },
      messages:{
        name:'Пожалуйста, введите ваше имя',
        phone:'Пожалуйста, введите ваш телефон',
        email:{
          required:'Пожалуйста, введите вашу почту',
          email: 'Не правильный формат почти',
        }
      }
    });
    $('input[name=phone]').mask('+7 (999) 999-99-99');

    //data
    $('#form').submit(function(e){
       e.preventDefault();
       $.ajax({
        type: "POST",
        url: 'mailer/smart.php',
        data: $(this).serialize(),
      }).done(function(){
             $(this).find("input").val("");
             $(this).fadeOut();
             $('#by').fadeIn();
             $('.modal_items').on('click',function(){
              $('.overlay,#consultation,#order,#by').fadeOut('slow');
            });


      $('form').trigger('reset');
      });
      return false;

    });

    $(window).scroll(function(){
        if($(this).scrollTop()>1600){
          $('.page').fadeIn();
        }
        else{
          $('.page').fadeOut();
        }
    });
    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
});
new WOW().init();
  });