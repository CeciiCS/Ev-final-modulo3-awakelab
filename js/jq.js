$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
});

$(document).ready(function(){
    $("#reset").click(function(){
      $("p").show();
    });
});

$("p").css({ "background": "lightblue", "color": "brown", "border": "2px dashed black", "margin": "10px auto", "width": "50%", "padding": "20px"})
$("h4").css({"font-size": "30px", "font-family": "fantasy", "background": "#51d1f6", "color": "brown", "border": "2px dotted blue", "margin": "auto", "width": "50%"})
$("body").css({"background-color":"#8892c6"})
$("button").css({"font-size": "20px","background-color":"lightblue", "color": "darkblue", "margin": "auto", "width": "10%", "border-radius": "10px", "margin-top": "10px"})