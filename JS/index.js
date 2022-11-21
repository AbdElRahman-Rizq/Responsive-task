$(document).ready(function(){
    'use strict'
    $(window).scroll(function(){
        var scrolling =$(this).scrollTop(),
        slider=$('.header').offset().top;
        if(scrolling>slider){
           $('nav').addClass('bg-dark');
           $('nav').css("padding","0");
        }
        else {
           $('nav').css("padding","1.5%");
           $('nav').removeClass("bg-dark")
        }
        })
    })  