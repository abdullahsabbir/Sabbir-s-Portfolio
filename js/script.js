$(function()
{
    'use strict'
    
    var $window = $(window);
    
    //Animated Headline
    
    $('.banner_ah').animatedHeadline(
    {
        animationType: 'slide',
        animationDelay: 2500
    });
    
    //Counter Up
    
    $('.about_counter').counterUp(
    {
        time: 1500
    });
    
    $window.on('scroll', function()
    {
        if($(this).scrollTop() > 0)
        {
            $('.custom_nav').addClass('nav_scroll');
        }
        else
        {
            $('.custom_nav').removeClass('nav_scroll');
        }
    });
    
    //Smooth Scroll
    
    var smoothScroll = new SmoothScroll('a[href*="#"]');
    
});