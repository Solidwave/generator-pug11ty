import '../css/main.scss';console.log('Hello again');
import $ from 'jquery'

$(() => {
  $('.this-is-red').on('click', function(){
    var back = ["#ff0000","blue","gray"];
    var rand = back[Math.floor(Math.random() * back.length)];
    
    $(this).css('color', rand)
    $(this).append('<div class="addedd">Mi hai agigunto</div>')
  })
})

