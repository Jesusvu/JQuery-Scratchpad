
$('.container').on('click','.box-mover',function(event){
  console.log($(this));
  let target = $(this).attr('data-target');
  
  if (target == 'out'){
    target = $('.container');
  } else {
    target = $('.box-' + target);
  }
  //button clicked
  //$(this).closest('.container').find('.box');
  $('.box').each(function(){
   $(this).css('.border', '5px dotted red');
    $(this).on('mouseover',function(){
      $(this).css('background-color', 'white');
    })
  })
  target.append($(this).closest('.box'));
});
