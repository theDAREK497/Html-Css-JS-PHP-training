$( '[data-fancybox="images"]' ).fancybox({
  caption : function( instance, item ) {
      return $(this).find('figcaption').html();
  }
});

$(function(){
    $(document).on('click','.btn__close',function(){
            $.fancybox.close();
    })
})