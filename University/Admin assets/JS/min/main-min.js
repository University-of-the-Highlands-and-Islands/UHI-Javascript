var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6","es3");
$(function(){$(".section.intro .video, .section.tour .video").fitVids();$(".lt-ie9 .header.banner .logo a").html('<img src="/img/logo.gif" alt="University of the Highlands and Islands"/>');handheldNav();siteMessage();scrollingParallax();document.getElementsByClassName("pin")[0]&&waypointsInit();courseFilter();hashlinks();applyNow();warningCookieRead();addClearFix();document.getElementsByClassName("content-type-modifier--collapsible__heading")[0]&&uhicollapsibleSections()});
-1<window.location.href.indexOf("#")&&hashinurl();function siteMessage(){$("body > .message p .close").click(function(){$("body > .message").slideUp(function(){$(this).remove()})})}function courseFilter(){$("#coursefilter .course-filter-title").on("click",function(a){a.preventDefault();$(this).parent().toggleClass("open").find("ul").slideToggle("fast");$(this).parent().hasClass("open")?$(".arrow",this).html("&#9660;"):$(".arrow",this).html("&#9668;")})}
function scrollingParallax(){$(".no-touch .home .mountains3").parallax("50%",455,-.35,!0);$(".no-touch .home .mountains2").parallax("50%",455,-.2,!0);$(".no-touch .home .section.intro").parallax("50%",-780,-.05,!0);$(".no-touch .home .section.coursefinder").parallax("50%",1600,.5,!0);$(".no-touch .home .section.connections").parallax("50%",3040,.5,!0);$(".section.intro .background").parallax("50%",230,.1,!0);$(".campus .section.coursefinder").parallax("50%",1E3,.5,!0)}
function handheldNav(){$('header[role="banner"] > .wrap .primarynav').prepend('<span id="bannernavtoggle">Menu <i>&darr;</i></span>');$("#bannernavtoggle").click(function(){$(this).toggleClass("open");$(this).hasClass("open")?($(this).html("Menu <i>&uarr;</i>"),$('header[role="banner"] > .wrap .primarynav > ul').removeClass("jshidden")):$(this).html("Menu <i>&darr;</i>");$('header[role="banner"] > .wrap .primarynav > ul').slideToggle("fast",function(){$("#bannernavtoggle").hasClass("open")||$(this).addClass("jshidden")})})}
function waypointsInit(){$(".map .pin").waypoint(function(a){var b=$(this.element);"down"===a&&(b.addClass("animated bounceInDown"),$("html").hasClass("no-cssanimations")&&b.animate({opacity:1}))},{offset:"90%"})}
function hashlinks(){$('a[href^="#"]').on("click",function(a){a.preventDefault();a=$(this).attr("href");var b="#"==a?0:$(a).offset().top,c=0==b?500:2*Math.abs(b-window.pageYOffset);b="#tab"==a.substring(0,4)?$(this).closest("div.tabs").prev():b-50;$.scrollTo(b,c,{easing:"easeInOutSine",axis:"y"});history.pushState&&history.pushState(null,null,a)})}
function hashinurl(){$(window).load(function(a){var b=window.location.hash,c="#"==b?0:$(b).offset().top,d=0==c?500:2*Math.abs(c-window.pageYOffset);c="#tab"==b.substring(0,4)?c-100:c-50;$.scrollTo(c,d,{easing:"easeInOutSine",axis:"y"});history.pushState&&history.pushState(null,null,b);a.preventDefault()})}
function applyNow(){$(".no-js-apply").remove();$(".toggleable").on("click",function(a){a.preventDefault();a=$(this);a.hasClass("disabled")||(a.hasClass("toggled")?a.removeClass("toggled"):($(this).parent().find(".toggled").removeClass("toggled"),a.addClass("toggled")),$("#applystep1 .toggled").length?$("#applystep2").slideDown("fast"):$("#applystep2").slideUp("fast"),$("#applystep1 .toggled").length&&$("#applystep2 .toggled").length?($("#applystep3").slideDown("fast"),$("#applystep3 .button").removeClass("disabled")):
($("#applystep3").slideUp("fast"),$("#applystep3 .button").addClass("disabled")),$("#applystep1 .toggled").length&&$("#applystep2 .toggled").length&&$("#applystep3 .toggled").length?($("#applystep4").slideUp("fast").slideDown("fast"),$("#applystep4 .button").removeClass("disabled")):($("#applystep4").slideUp("fast"),$("#applystep4 .button").addClass("disabled")))})}
$(document).ready(function(){var a=$(document.getElementsByName("SearchableText")[0]).closest("form");$(a).submit(function(a){""==document.getElementsByName("SearchableText")[0].value.trim()&&a.preventDefault()})});function callQR(){var a=document.URL;a=encodeURI(a);a="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl="+a;jQuery("#QR").attr("src",a)}function addClearFix(){$(".content-type--one-web-highlight-content-box").wrapAll("<div class='clearfix'/>")}
function uhicollapsibleSections(){var a=document.getElementsByClassName("content-type-modifier--collapsible__heading"),b;for(b=0;b<a.length;b++)a[b].addEventListener("click",function(){this.classList.toggle("content-type-modifier--collapsible--open");var a=this.nextElementSibling;a.style.display="block"===a.style.display?"none":"block"});1<a.length&&$('<div class="content-type-modifier--collapsible__menu"><a onclick="uhiCollapseSection(true)" class="content-type-modifier--collapsible__label"><span class="content-type-modifier--collapsible__control">\u00ec</span> </a><a onclick="uhiCollapseSection(false)" class="content-type-modifier--collapsible__label"><span class="content-type-modifier--collapsible__control">\u00ed</span> </a></div>').insertBefore($(a[0]).parent())}
function uhiCollapseSection(a){var b=document.getElementsByClassName("content-type-modifier--collapsible__heading"),c;for(c=0;c<b.length;c++)if(a){$(b[c]).hasClass("content-type-modifier--collapsible--open")||b[c].classList.toggle("content-type-modifier--collapsible--open");var d=b[c].nextElementSibling;d.style.display="block"}else $(b[c]).hasClass("content-type-modifier--collapsible--open")&&b[c].classList.toggle("content-type-modifier--collapsible--open"),d=b[c].nextElementSibling,d.style.display=
"none"}; //# sourceMappingURL=/en/t4-media/one-web/university/admin-assets/js/map/main-min.js.map
