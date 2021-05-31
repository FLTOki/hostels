$(document).ready(function(){

    $('.carousel').carousel({
        interval: 2000
    });
    
    $(".image-1").mouseover(function(){
        $(".image-2").toggle("slow");
    })

    $(".image-2").mouseleave(function(){
        $(".image-1").fadeIn("slow");
    })

    // $(".first").mouseover(function()
    // {
    //   $("#hide_first").fadeIn("slow");
    // });
});