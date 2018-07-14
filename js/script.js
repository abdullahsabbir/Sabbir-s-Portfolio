$(function()
{
    'use strict';

    var $window = $(window);

    //Progressbar JS Variables
    var barhtml = $('#about_bar_html');
    var barcss = $('#about_bar_css');
    var barbs4 = $('#about_bar_bs4');
    var barjs = $('#about_bar_js');
    var barjq = $('#about_bar_jq');
    var barps = $('#about_bar_ps');
    var barc = $('#about_bar_c');
    var barcs = $('#about_bar_cs');
    var barjava = $('#about_bar_java');
    var barphp = $('#about_bar_php');

    $window.on('load', function()
    {
        //Insert Preloader Here

        barhtml.LineProgressbar(
        {
            percentage: 0,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barcss.LineProgressbar(
        {
            percentage: 0,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barbs4.LineProgressbar(
        {
            percentage: 0,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barjs.LineProgressbar(
        {
            percentage: 0,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barjq.LineProgressbar(
        {
            percentage: 0,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barps.LineProgressbar(
        {
            percentage: 0,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barc.LineProgressbar(
        {
            percentage: 0,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barcs.LineProgressbar(
        {
            percentage: 0,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barjava.LineProgressbar(
        {
            percentage: 0,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barphp.LineProgressbar(
        {
            percentage: 0,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
    });

    //Navbar Animation on Scroll
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

    //Progressbar JS
    $('.skills_bars').waypoint(function(direction)
    {
        barhtml.LineProgressbar(
        {
            percentage: 95,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barcss.LineProgressbar(
        {
            percentage: 95,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barbs4.LineProgressbar(
        {
            percentage: 90,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barjs.LineProgressbar(
        {
            percentage: 35,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barjq.LineProgressbar(
        {
            percentage: 70,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barps.LineProgressbar(
        {
            percentage: 35,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barc.LineProgressbar(
        {
            percentage: 90,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barcs.LineProgressbar(
        {
            percentage: 30,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barjava.LineProgressbar(
        {
            percentage: 45,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });
        barphp.LineProgressbar(
        {
            percentage: 10,
            height: '5px',
            fillBackgroundColor: '#008DD5',
            backgroundColor: '#BCABAE',
            radius: '5px'
        });

        this.destroy();

    }, {offset: '100%'});
    
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
    
    //Smooth Scroll
    var smoothScroll = new SmoothScroll('a[href*="#"]', {header: '.custom_nav'});
    
});

//Always load page from Top
window.onbeforeunload = function () 
{
    window.scrollTo(0,0);
};