var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,c,b){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(c.call(b,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,c,b,d){if(c){b=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in b||(b[e]={});b=b[e]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,b){return $jscomp.findInternal(this,a,b).v}},"es6","es3");$jscomp.polyfill("Object.is",function(a){return a?a:function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}},"es6","es3");
$jscomp.polyfill("Array.prototype.includes",function(a){return a?a:function(a,b){var c=this;c instanceof String&&(c=String(c));var e=c.length;b=b||0;for(0>b&&(b=Math.max(b+e,0));b<e;b++){var f=c[b];if(f===a||Object.is(f,a))return!0}return!1}},"es7","es3");
$jscomp.checkStringArgs=function(a,c,b){if(null==a)throw new TypeError("The 'this' value for String.prototype."+b+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");return a+""};$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(a,b){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,b||0)}},"es6","es3");
$(function(){$(".section.intro .video, .section.tour .video, .content-type--one-web-video-embed, .content-type--landing-page-text__video,.videowrapper").fitVids({customSelector:"iframe[src^='https://stream.uhi.ac.uk']"});$(".lt-ie9 .header.banner .logo a").html('<img src="/img/logo.gif" alt="University of the Highlands and Islands"/>');handheldNav();siteMessage();scrollingParallax();document.getElementsByClassName("pin")[0]&&waypointsInit();courseFilter();hashlinks();applyNow();warningCookieRead();makeFlexContainer();
document.getElementsByClassName("content-type-modifier--collapsible__heading")[0]&&uhicollapsibleSections()});-1<window.location.href.indexOf("#")&&hashinurl();function siteMessage(){$("body > .navigation--home-message p .close").click(function(){$("body > .navigation--home-message").slideUp(function(){$(this).remove()})})}
function courseFilter(){$("#coursefilter .course-filter-title").on("click",function(a){a.preventDefault();$(this).parent().toggleClass("open").find("ul").slideToggle("fast");$(this).parent().hasClass("open")?$(".arrow",this).html("&#9660;"):$(".arrow",this).html("&#9668;")})}
function scrollingParallax(){$(".home .mountains3").parallax("50%",455,-.35,!0);$(".home .mountains2").parallax("50%",455,-.2,!0);$(".home .section.intro").parallax("50%",-780,-.05,!0);$(".home .section.coursefinder").parallax("50%",1600,.5,!0);$(".home .section.connections").parallax("50%",3040,.5,!0);$(".section.intro .background").parallax("50%",230,.1,!0);$(".campus .section.coursefinder").parallax("50%",1E3,.5,!0)}
function handheldNav(){$('header[role="banner"] > .wrap .primarynav').prepend('<span id="bannernavtoggle">Menu <i>&darr;</i></span>');$("#bannernavtoggle").click(function(){$(this).toggleClass("open");$(this).hasClass("open")?($(this).html("Menu <i>&uarr;</i>"),$('header[role="banner"] > .wrap .primarynav > ul').removeClass("jshidden")):$(this).html("Menu <i>&darr;</i>");$('header[role="banner"] > .wrap .primarynav > ul').slideToggle("fast",function(){$("#bannernavtoggle").hasClass("open")||$(this).addClass("jshidden")})})}
function waypointsInit(){$(".map .pin").waypoint(function(a){var c=$(this.element);"down"===a&&(c.addClass("animated bounceInDown"),$("html").hasClass("no-cssanimations")&&c.animate({opacity:1}))},{offset:"90%"})}
function hashlinks(){$('a[href^="#"]').on("click",function(a){a.preventDefault();a=$(this).attr("href");var c="#"==a?0:$(a).offset().top,b=0==c?500:2*Math.abs(c-window.pageYOffset);c="#tab"==a.substring(0,4)?$(this).closest("div.tabs").prev():c-50;$.scrollTo(c,b,{easing:"easeInOutSine",axis:"y"});history.pushState&&history.pushState(null,null,a)})}
function hashinurl(){$(window).on("load",function(a){var c=window.location.hash,b="#"==c?0:$(c).offset().top,d=0==b?500:2*Math.abs(b-window.pageYOffset);b="#tab"==c.substring(0,4)?b-100:b-50;$.scrollTo(b,d,{easing:"easeInOutSine",axis:"y"});history.pushState&&history.pushState(null,null,c);a.preventDefault()})}
function applyNow(){$(".no-js-apply").remove();$(".toggleable").on("click",function(a){a.preventDefault();a=$(this);a.hasClass("disabled")||(a.hasClass("toggled")?a.removeClass("toggled"):($(this).parent().find(".toggled").removeClass("toggled"),a.addClass("toggled")),$("#applystep1 .toggled").length?$("#applystep2").slideDown("fast"):$("#applystep2").slideUp("fast"),$("#applystep1 .toggled").length&&$("#applystep2 .toggled").length?($("#applystep3").slideDown("fast"),$("#applystep3 .button").removeClass("disabled")):
($("#applystep3").slideUp("fast"),$("#applystep3 .button").addClass("disabled")),$("#applystep1 .toggled").length&&$("#applystep2 .toggled").length&&$("#applystep3 .toggled").length?($("#applystep4").slideUp("fast").slideDown("fast"),$("#applystep4 .button").removeClass("disabled")):($("#applystep4").slideUp("fast"),$("#applystep4 .button").addClass("disabled")))})}
$(document).ready(function(){var a=$(document.getElementsByName("SearchableText")[0]).closest("form");$(a).submit(function(a){""==document.getElementsByName("SearchableText")[0].value.trim()&&a.preventDefault()})});function callQR(){var a=document.URL;a=encodeURI(a);a="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl="+a;jQuery("#QR").attr("src",a)}
function makeFlexContainerMulti(a){$(a).not(a+"+"+a).each(function(){$(this).nextUntil(":not("+a+")").addBack().wrapAll("<div class='content-type-modifier--flex-container'/>")})}function makeFlexContainer(){makeFlexContainerMulti(".content-type--one-web-highlight-content-box");makeFlexContainerMulti(".content-type--one-web-media-object")}
function uhicollapsibleSections(){var a=document.getElementsByClassName("content-type-modifier--collapsible__heading"),c;for(c=0;c<a.length;c++)a[c].addEventListener("click",function(){this.classList.toggle("content-type-modifier--collapsible--open");var a=this.nextElementSibling;a.style.display="block"===a.style.display?"none":"block"});1<a.length&&$('<div class="content-type-modifier--collapsible__menu"><a onclick="uhiCollapseSection(true)" class="content-type-modifier--collapsible__label"><span class="content-type-modifier--collapsible__control">\u00ec</span> </a><a onclick="uhiCollapseSection(false)" class="content-type-modifier--collapsible__label"><span class="content-type-modifier--collapsible__control">\u00ed</span> </a></div>').insertBefore($(a[0]).parent())}
function uhiCollapseSection(a){var c=document.getElementsByClassName("content-type-modifier--collapsible__heading"),b;for(b=0;b<c.length;b++)if(a){$(c[b]).hasClass("content-type-modifier--collapsible--open")||c[b].classList.toggle("content-type-modifier--collapsible--open");var d=c[b].nextElementSibling;d.style.display="block"}else $(c[b]).hasClass("content-type-modifier--collapsible--open")&&c[b].classList.toggle("content-type-modifier--collapsible--open"),d=c[b].nextElementSibling,d.style.display=
"none"}function lastModified(a,c){if(""!=a&&(c.host.includes("t4help")||c.href.includes("uhi.ac.uk/en/foi/"))){a=new Date(a);c=(new Date).setDate((new Date).getDate()-60);var b='<div class="meta--last-updated">This page was last updated <time datetime='+$.datepicker.formatDate("yy-mm-dd+00:00",new Date(a))+">"+$.datepicker.formatDate("d MM yy",new Date(a))+"</time></div>";a>=c?document.write(b):document.write("\x3c!--"+b+"--\x3e")}}; //# sourceMappingURL=/en/t4-media/one-web/university/admin-assets/js/map/main-min.js.map
