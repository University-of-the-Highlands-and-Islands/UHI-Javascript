/*
 FitVids 1.0

 Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 Released under the WTFPL license - http://sam.zoy.org/wtfpl/

 Date: Thu Sept 01 18:00:00 2011 -0500
 hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 http://cherne.net/brian/resources/jquery.hoverIntent.html

 You may use hoverIntent under the terms of the MIT license. Basically that
 means you are free to use hoverIntent as long as this header is left intact.
 Copyright 2007, 2013 Brian Cherne
 Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 Licensed under MIT
 @author Ariel Flesler
 @version 2.1.2
 Plugin: jQuery Parallax
Version 1.1
Author: Ian Lunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
 scrollorama - The jQuery plugin for doing cool scrolly stuff
 by John Polacek (@johnpolacek)

 Dual licensed under MIT and GPL.
 jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/

 Uses the built in easing capabilities added In jQuery 1.1
 to offer multiple easing options

 TERMS OF USE - jQuery Easing

 Open source under the BSD License. 

 Copyright ? 2008 George McGinley Smith
 All rights reserved.

 Waypoints - 4.0.1
Copyright ? 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
 Background Image Carousel
 Created: Jan 17th, 2012 by DynamicDrive.com. This notice must stay intact for usage 
 Author: Dynamic Drive at http://www.dynamicdrive.com/
 Visit http://www.dynamicdrive.com/ for full source code
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(d,b,a){d instanceof String&&(d=String(d));for(var c=d.length,e=0;e<c;e++){var f=d[e];if(b.call(a,f,e,d))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(d,b,a){d!=Array.prototype&&d!=Object.prototype&&(d[b]=a.value)};
$jscomp.getGlobal=function(d){return"undefined"!=typeof window&&window===d?d:"undefined"!=typeof global&&null!=global?global:d};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(d,b,a,c){if(b){a=$jscomp.global;d=d.split(".");for(c=0;c<d.length-1;c++){var e=d[c];e in a||(a[e]={});a=a[e]}d=d[d.length-1];c=a[d];b=b(c);b!=c&&null!=b&&$jscomp.defineProperty(a,d,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",function(d){return d?d:function(b,a){return $jscomp.findInternal(this,b,a).v}},"es6","es3");var $=jQuery;(function(){for(var d,b=function(){},a="assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "),c=a.length,e=window.console=window.console||{};c--;)d=a[c],e[d]||(e[d]=b)})();
(function(d){d={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(b){for(var a=0;a<b.length;a++){var c=b[a].string,e=b[a].prop;this.versionSearchString=b[a].versionSearch||b[a].identity;if(c){if(-1!=c.indexOf(b[a].subString))return b[a].identity}else if(e)return b[a].identity}},
searchVersion:function(b){var a=b.indexOf(this.versionSearchString);if(-1!=a)return parseFloat(b.substring(a+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,
subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],
dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};d.init();window.$.client={os:d.OS,browser:d.browser}})(jQuery);
(function(d){d.fn.fitVids=function(b){var a={customSelector:null};if(!document.getElementById("fit-vids-style")){var c=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];c.className="fit-vids-style";c.id="fit-vids-style";c.style.display="none";c.innerHTML="&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>";
e.parentNode.insertBefore(c,e)}b&&d.extend(a,b);return this.each(function(){var b="iframe[src*='player.vimeo.com'] iframe[src*='youtube.com'] iframe[src*='youtube-nocookie.com'] iframe[src*='kickstarter.com'][src*='video.html'] object embed".split(" ");a.customSelector&&b.push(a.customSelector);b=d(this).find(b.join(","));b=b.not("object object");b.each(function(){var a=d(this);if(!("embed"===this.tagName.toLowerCase()&&a.parent("object").length||a.parent(".fluid-width-video-wrapper").length)){var b=
"object"===this.tagName.toLowerCase()||a.attr("height")&&!isNaN(parseInt(a.attr("height"),10))?parseInt(a.attr("height"),10):a.height(),e=isNaN(parseInt(a.attr("width"),10))?a.width():parseInt(a.attr("width"),10);b/=e;a.attr("id")||a.attr("id","fitvid"+Math.floor(999999*Math.random()));a.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*b+"%");a.removeAttr("height").removeAttr("width")}})})}})(jQuery);
(function(d){d.fn.hoverIntent=function(b,a,c){var e={interval:100,sensitivity:7,timeout:0};e="object"===typeof b?d.extend(e,b):d.isFunction(a)?d.extend(e,{over:b,out:a,selector:c}):d.extend(e,{over:b,out:b,selector:a});var f,h,k,g,p=function(a){f=a.pageX;h=a.pageY},r=function(a,b){b.hoverIntent_t=clearTimeout(b.hoverIntent_t);if(Math.abs(k-f)+Math.abs(g-h)<e.sensitivity)return d(b).off("mousemove.hoverIntent",p),b.hoverIntent_s=1,e.over.apply(b,[a]);k=f;g=h;b.hoverIntent_t=setTimeout(function(){r(a,
b)},e.interval)};b=function(a){var b=jQuery.extend({},a),c=this;c.hoverIntent_t&&(c.hoverIntent_t=clearTimeout(c.hoverIntent_t));"mouseenter"==a.type?(k=b.pageX,g=b.pageY,d(c).on("mousemove.hoverIntent",p),1!=c.hoverIntent_s&&(c.hoverIntent_t=setTimeout(function(){r(b,c)},e.interval))):(d(c).off("mousemove.hoverIntent",p),1==c.hoverIntent_s&&(c.hoverIntent_t=setTimeout(function(){c.hoverIntent_t=clearTimeout(c.hoverIntent_t);c.hoverIntent_s=0;e.out.apply(c,[b])},e.timeout)))};return this.on({"mouseenter.hoverIntent":b,
"mouseleave.hoverIntent":b},e.selector)}})(jQuery);
(function(d){"function"===typeof define&&define.amd?define(["jquery"],d):"undefined"!==typeof module&&module.exports?module.exports=d(require("jquery")):d(jQuery)})(function(d){function b(a){return!a.nodeName||-1!==d.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function a(a){return d.isFunction(a)||d.isPlainObject(a)?a:{top:a,left:a}}var c=d.scrollTo=function(a,b,c){return d(window).scrollTo(a,b,c)};c.defaults={axis:"xy",duration:0,limit:!0};d.fn.scrollTo=function(e,f,h){"object"===
typeof f&&(h=f,f=0);"function"===typeof h&&(h={onAfter:h});"max"===e&&(e=9E9);h=d.extend({},c.defaults,h);f=f||h.duration;var k=h.queue&&1<h.axis.length;k&&(f/=2);h.offset=a(h.offset);h.over=a(h.over);return this.each(function(){function g(a){var b=d.extend({},h,{queue:!0,duration:f,complete:a&&function(){a.call(r,l,h)}});n.animate(m,b)}if(null!==e){var p=b(this),r=p?this.contentWindow||window:this,n=d(r),l=e,m={};switch(typeof l){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(l)){l=
a(l);break}l=p?d(l):d(l,r);case "object":if(0===l.length)return;if(l.is||l.style)var t=(l=d(l)).offset()}var u=d.isFunction(h.offset)&&h.offset(r,l)||h.offset;d.each(h.axis.split(""),function(a,b){var e="x"===b?"Left":"Top",d=e.toLowerCase(),f="scroll"+e,q=n[f](),v=c.max(r,b);t?(m[f]=t[d]+(p?0:q-n.offset()[d]),h.margin&&(m[f]-=parseInt(l.css("margin"+e),10)||0,m[f]-=parseInt(l.css("border"+e+"Width"),10)||0),m[f]+=u[d]||0,h.over[d]&&(m[f]+=l["x"===b?"width":"height"]()*h.over[d])):(e=l[d],m[f]=e.slice&&
"%"===e.slice(-1)?parseFloat(e)/100*v:e);h.limit&&/^\d+$/.test(m[f])&&(m[f]=0>=m[f]?0:Math.min(m[f],v));!a&&1<h.axis.length&&(q===m[f]?m={}:k&&(g(h.onAfterFirst),m={}))});g(h.onAfter)}})};c.max=function(a,c){c="x"===c?"Width":"Height";var e="scroll"+c;if(!b(a))return a[e]-d(a)[c.toLowerCase()]();c="client"+c;a=a.ownerDocument||a.document;var f=a.documentElement;a=a.body;return Math.max(f[e],a[e])-Math.min(f[c],a[c])};d.Tween.propHooks.scrollLeft=d.Tween.propHooks.scrollTop={get:function(a){return d(a.elem)[a.prop]()},
set:function(a){var b=this.get(a);if(a.options.interrupt&&a._last&&a._last!==b)return d(a.elem).stop();var c=Math.round(a.now);b!==c&&(d(a.elem)[a.prop](c),a._last=this.get(a))}};return c});function RepositionNav(){var d=$(window).height(),b=$("#nav").height()/2;d=d/2-b;$("#nav").css({top:d})}
(function(d){d.fn.parallax=function(b,a,c,e){function f(a,b){b.each(function(){var b=d(this),c=b.offset().top;b=1==e?b.outerHeight(!0):b.height();c+b>=a&&c+b-g<a&&h(a,b);c<=a&&c+b>=a&&c-g<a&&c+b-g>a&&h(a,b);c+b>a&&c-g<a&&c>a&&h(a,b)})}function h(e,d){p.css({backgroundPosition:b+" "+Math.round(-(d+e-a)*c)+"px"})}var k=d(window),g=d(window).height();k.scrollTop();var p=d(this);null==b&&(b="50%");null==a&&(a=0);null==c&&(c=.1);null==e&&(e=!0);height=p.height();p.css({backgroundPosition:b+" "+Math.round(NaN*
-(e+a-c))+"px"});k.bind("scroll",function(){var a=k.scrollTop();f(a,p);d("#pixels").html(a)})}})(jQuery);
(function(d){d.scrollorama=function(b){function a(){c()}function c(){r||n(function(){e();r=!1});r=!0}function e(){var a=d(window).scrollTop();var b=0;var c;for(c=0;c<k.length;c++)k[c].top<=a-h.settings.offset&&(b=c);var e;for(c=0;c<k.length;c++)if(k[c].animations.length)for(e=0;e<k[c].animations.length;e++){var g=k[c].animations[e];c>b?(b!==c-1&&"bottom"!==g.baseline&&f(g.element,g.property,g.startVal),k[c].pin&&k[c].block.css("position","absolute").css("top",k[c].top)):c<b&&(f(g.element,g.property,
g.endVal),k[c].pin&&k[c].block.css("position","absolute").css("top",k[c].top+k[c].pin));if(c===b||b===c-1&&"bottom"===g.baseline){k[c].pin&&b===c&&k[c].block.css("position","fixed").css("top",0);var q=k[c].top+g.delay;"bottom"===g.baseline&&(q-=d(window).height());var n=q+g.duration;a<q?f(g.element,g.property,g.startVal):a>n?(f(g.element,g.property,g.endVal),k[c].pin&&k[c].block.css("position","absolute").css("top",k[c].top+k[c].pin)):(q=(a-q)/g.duration,g.easing&&d.isFunction(d.easing[g.easing])&&
(q=d.easing[g.easing](q,1E3*q,0,1,1E3)),q=g.startVal+q*(g.endVal-g.startVal),f(g.element,g.property,q))}}h.blockIndex!==b&&(h.blockIndex=b,p())}function f(a,b,c){if("rotate"===b||"zoom"===b||"scale"===b)if("rotate"===b)a.css(g+"transform","rotate("+c+"deg)");else{if("zoom"===b||"scale"===b)b="scale("+c+")","-ms-"!==g?a.css(g+"transform",b):a.css("zoom",b)}else if("background-position-x"===b||"background-position-y"===b){var e=a.css("background-position").split(" ");"background-position-x"===b&&a.css("background-position",
c+"px "+e[1]);"background-position-y"===b&&a.css("background-position",e[0]+" "+c+"px")}else"text-shadow"===b?a.css(b,"0px 0px "+c+"px #ffffff"):a.css(b,c)}var h=this,k=[],g="",p=function(){},r=!1,n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};h.settings=d.extend({},{offset:0,enablePin:!0},b);h.blockIndex=0;void 0===b.blocks&&alert("ERROR: Must assign blocks class selector to scrollorama plugin");
h.animate=function(a){var b,c;"string"===typeof a&&(a=d(a));for(b=0;b<k.length;b++)if(k[b].block.has(a).length){var f=k[b];var h=b}for(b=1;b<arguments.length;b++){var g=arguments[b];if("top"===g.property||"left"===g.property||"bottom"===g.property||"right"===g.property)"static"===a.css("position")&&a.css("position","relative"),cssValue=parseInt(a.css(g.property),10),void 0===g.start?g.start=isNaN(cssValue)?0:cssValue:void 0===g.end&&(g.end=isNaN(cssValue)?0:cssValue);"rotate"===g.property?(void 0===
g.start&&(g.start=0),void 0===g.end&&(g.end=0)):"zoom"===g.property||"scale"===g.property?(void 0===g.start&&(g.start=1),void 0===g.end&&(g.end=1)):"letter-spacing"===g.property&&a.css(g.property)&&(void 0===g.start&&(g.start=1),void 0===g.end&&(g.end=1));void 0===g.baseline&&(g.baseline=g.pin||f.pin||0===h?"top":"bottom");void 0===g.delay&&(g.delay=0);f.animations.push({element:a,delay:g.delay,duration:g.duration,property:g.property,startVal:void 0!==g.start?g.start:parseInt(a.css(g.property),10),
endVal:void 0!==g.end?g.end:parseInt(a.css(g.property),10),baseline:void 0!==g.baseline?g.baseline:"bottom",easing:g.easing});if(g.pin&&f.pin<g.duration+g.delay)for(g=g.duration+g.delay-f.pin,f.pin+=g,c=h+1;c<k.length;c++)k[c].top+=g,k[c].block.css("top",k[c].top)}e()};h.onBlockChange=function(a){p=a};h.getScrollpoints=function(){var a=[],b,c;for(b=0;b<k.length;b++)if(a.push(k[b].top),k[b].animations.length&&0<k[b].pin)for(c=0;c<k[b].animations.length;c++){var e=k[b].animations[c];a.push(k[b].top+
e.delay+e.duration)}a.sort(function(a,b){return a-b});return a};(function(){var b;"string"===typeof h.settings.blocks&&(h.settings.blocks=d(h.settings.blocks));d.browser.mozilla&&(g="-moz-");d.browser.webkit&&(g="-webkit-");d.browser.opera&&(g="-o-");d.browser.msie&&(g="-ms-");d("body").css("position","relative");for(b=0;b<h.settings.blocks.length;b++){var c=h.settings.blocks.eq(b);k.push({block:c,top:c.offset().top-parseInt(c.css("margin-top"),10),pin:0,animations:[]})}if("true"===h.settings.enablePin.toString())for(b=
0;b<k.length;b++)k[b].block.css("position","absolute").css("top",k[b].top);d("body").prepend('<div id="scroll-wrap"></div>');r=!1;d(window).scroll(a)})();return h};d.extend(d.easing,{def:"easeOutQuad",swing:function(b,a,c,e,f){return d.easing[d.easing.def](b,a,c,e,f)},easeInQuad:function(b,a,c,e,d){return e*(a/=d)*a+c},easeOutQuad:function(b,a,c,e,d){return-e*(a/=d)*(a-2)+c},easeInOutQuad:function(b,a,c,e,d){return 1>(a/=d/2)?e/2*a*a+c:-e/2*(--a*(a-2)-1)+c},easeInCubic:function(b,a,c,e,d){return e*
(a/=d)*a*a+c},easeOutCubic:function(b,a,c,e,d){return e*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(b,a,c,e,d){return 1>(a/=d/2)?e/2*a*a*a+c:e/2*((a-=2)*a*a+2)+c},easeInQuart:function(b,a,c,e,d){return e*(a/=d)*a*a*a+c},easeOutQuart:function(b,a,c,e,d){return-e*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(b,a,c,e,d){return 1>(a/=d/2)?e/2*a*a*a*a+c:-e/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(b,a,c,e,d){return e*(a/=d)*a*a*a*a+c},easeOutQuint:function(b,a,c,e,d){return e*((a=a/d-1)*a*a*a*a+1)+
c},easeInOutQuint:function(b,a,c,e,d){return 1>(a/=d/2)?e/2*a*a*a*a*a+c:e/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(b,a,c,e,d){return-e*Math.cos(a/d*(Math.PI/2))+e+c},easeOutSine:function(b,a,c,e,d){return e*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(b,a,c,e,d){return-e/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(b,a,c,e,d){return 0===a?c:e*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(b,a,c,d,f){return a===f?c+d:d*(-Math.pow(2,-10*a/f)+1)+c},easeInOutExpo:function(b,a,c,d,f){return 0===
a?c:a===f?c+d:1>(a/=f/2)?d/2*Math.pow(2,10*(a-1))+c:d/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(b,a,c,d,f){return-d*(Math.sqrt(1-(a/=f)*a)-1)+c},easeOutCirc:function(b,a,c,d,f){return d*Math.sqrt(1-(a=a/f-1)*a)+c},easeInOutCirc:function(b,a,c,d,f){return 1>(a/=f/2)?-d/2*(Math.sqrt(1-a*a)-1)+c:d/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(b,a,c,d,f){b=0;var e=d;if(0===a)return c;if(1===(a/=f))return c+d;b||(b=.3*f);e<Math.abs(d)?(e=d,d=b/4):d=b/(2*Math.PI)*Math.asin(d/e);return-(e*
Math.pow(2,10*--a)*Math.sin(2*(a*f-d)*Math.PI/b))+c},easeOutElastic:function(b,a,c,d,f){var e=0,k=d;if(0===a)return c;if(1===(a/=f))return c+d;e||(e=.3*f);k<Math.abs(d)?(k=d,b=e/4):b=e/(2*Math.PI)*Math.asin(d/k);return k*Math.pow(2,-10*a)*Math.sin(2*(a*f-b)*Math.PI/e)+d+c},easeInOutElastic:function(b,a,c,d,f){var e=0,k=d;if(0===a)return c;if(2===(a/=f/2))return c+d;e||(e=.3*f*1.5);k<Math.abs(d)?(k=d,b=e/4):b=e/(2*Math.PI)*Math.asin(d/k);return 1>a?-.5*k*Math.pow(2,10*--a)*Math.sin(2*(a*f-b)*Math.PI/
e)+c:k*Math.pow(2,-10*--a)*Math.sin(2*(a*f-b)*Math.PI/e)*.5+d+c},easeInBack:function(b,a,c,d,f,h){void 0===h&&(h=1.70158);return d*(a/=f)*a*((h+1)*a-h)+c},easeOutBack:function(b,a,c,d,f,h){void 0===h&&(h=1.70158);return d*((a=a/f-1)*a*((h+1)*a+h)+1)+c},easeInOutBack:function(b,a,c,d,f,h){void 0===h&&(h=1.70158);return 1>(a/=f/2)?d/2*a*a*(((h*=1.525)+1)*a-h)+c:d/2*((a-=2)*a*(((h*=1.525)+1)*a+h)+2)+c},easeInBounce:function(b,a,c,e,f){return e-d.easing.easeOutBounce(b,f-a,0,e,f)+c},easeOutBounce:function(b,
a,c,d,f){return(a/=f)<1/2.75?7.5625*d*a*a+c:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+.75)+c:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+.9375)+c:d*(7.5625*(a-=2.625/2.75)*a+.984375)+c},easeInOutBounce:function(b,a,c,e,f){return a<f/2?.5*d.easing.easeInBounce(b,2*a,0,e,f)+c:.5*d.easing.easeOutBounce(b,2*a-f,0,e,f)+.5*e+c}})})(jQuery);jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(d,b,a,c,e){return jQuery.easing[jQuery.easing.def](d,b,a,c,e)},easeInQuad:function(d,b,a,c,e){return c*(b/=e)*b+a},easeOutQuad:function(d,b,a,c,e){return-c*(b/=e)*(b-2)+a},easeInOutQuad:function(d,b,a,c,e){return 1>(b/=e/2)?c/2*b*b+a:-c/2*(--b*(b-2)-1)+a},easeInCubic:function(d,b,a,c,e){return c*(b/=e)*b*b+a},easeOutCubic:function(d,b,a,c,e){return c*((b=b/e-1)*b*b+1)+a},easeInOutCubic:function(d,b,a,c,e){return 1>(b/=e/2)?c/2*b*b*b+a:
c/2*((b-=2)*b*b+2)+a},easeInQuart:function(d,b,a,c,e){return c*(b/=e)*b*b*b+a},easeOutQuart:function(d,b,a,c,e){return-c*((b=b/e-1)*b*b*b-1)+a},easeInOutQuart:function(d,b,a,c,e){return 1>(b/=e/2)?c/2*b*b*b*b+a:-c/2*((b-=2)*b*b*b-2)+a},easeInQuint:function(d,b,a,c,e){return c*(b/=e)*b*b*b*b+a},easeOutQuint:function(d,b,a,c,e){return c*((b=b/e-1)*b*b*b*b+1)+a},easeInOutQuint:function(d,b,a,c,e){return 1>(b/=e/2)?c/2*b*b*b*b*b+a:c/2*((b-=2)*b*b*b*b+2)+a},easeInSine:function(d,b,a,c,e){return-c*Math.cos(b/
e*(Math.PI/2))+c+a},easeOutSine:function(d,b,a,c,e){return c*Math.sin(b/e*(Math.PI/2))+a},easeInOutSine:function(d,b,a,c,e){return-c/2*(Math.cos(Math.PI*b/e)-1)+a},easeInExpo:function(d,b,a,c,e){return 0==b?a:c*Math.pow(2,10*(b/e-1))+a},easeOutExpo:function(d,b,a,c,e){return b==e?a+c:c*(-Math.pow(2,-10*b/e)+1)+a},easeInOutExpo:function(d,b,a,c,e){return 0==b?a:b==e?a+c:1>(b/=e/2)?c/2*Math.pow(2,10*(b-1))+a:c/2*(-Math.pow(2,-10*--b)+2)+a},easeInCirc:function(d,b,a,c,e){return-c*(Math.sqrt(1-(b/=e)*
b)-1)+a},easeOutCirc:function(d,b,a,c,e){return c*Math.sqrt(1-(b=b/e-1)*b)+a},easeInOutCirc:function(d,b,a,c,e){return 1>(b/=e/2)?-c/2*(Math.sqrt(1-b*b)-1)+a:c/2*(Math.sqrt(1-(b-=2)*b)+1)+a},easeInElastic:function(d,b,a,c,e){d=0;var f=c;if(0==b)return a;if(1==(b/=e))return a+c;d||(d=.3*e);f<Math.abs(c)?(f=c,c=d/4):c=d/(2*Math.PI)*Math.asin(c/f);return-(f*Math.pow(2,10*--b)*Math.sin(2*(b*e-c)*Math.PI/d))+a},easeOutElastic:function(d,b,a,c,e){var f=0,h=c;if(0==b)return a;if(1==(b/=e))return a+c;f||
(f=.3*e);h<Math.abs(c)?(h=c,d=f/4):d=f/(2*Math.PI)*Math.asin(c/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*e-d)*Math.PI/f)+c+a},easeInOutElastic:function(d,b,a,c,e){var f=0,h=c;if(0==b)return a;if(2==(b/=e/2))return a+c;f||(f=.3*e*1.5);h<Math.abs(c)?(h=c,d=f/4):d=f/(2*Math.PI)*Math.asin(c/h);return 1>b?-.5*h*Math.pow(2,10*--b)*Math.sin(2*(b*e-d)*Math.PI/f)+a:h*Math.pow(2,-10*--b)*Math.sin(2*(b*e-d)*Math.PI/f)*.5+c+a},easeInBack:function(d,b,a,c,e,f){void 0==f&&(f=1.70158);return c*(b/=e)*b*((f+1)*
b-f)+a},easeOutBack:function(d,b,a,c,e,f){void 0==f&&(f=1.70158);return c*((b=b/e-1)*b*((f+1)*b+f)+1)+a},easeInOutBack:function(d,b,a,c,e,f){void 0==f&&(f=1.70158);return 1>(b/=e/2)?c/2*b*b*(((f*=1.525)+1)*b-f)+a:c/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+a},easeInBounce:function(d,b,a,c,e){return c-jQuery.easing.easeOutBounce(d,e-b,0,c,e)+a},easeOutBounce:function(d,b,a,c,e){return(b/=e)<1/2.75?7.5625*c*b*b+a:b<2/2.75?c*(7.5625*(b-=1.5/2.75)*b+.75)+a:b<2.5/2.75?c*(7.5625*(b-=2.25/2.75)*b+.9375)+a:c*(7.5625*
(b-=2.625/2.75)*b+.984375)+a},easeInOutBounce:function(d,b,a,c,e){return b<e/2?.5*jQuery.easing.easeInBounce(d,2*b,0,c,e)+a:.5*jQuery.easing.easeOutBounce(d,2*b-e,0,c,e)+.5*c+a}});
(function(){function d(c){if(!c)throw Error("No options passed to Waypoint constructor");if(!c.element)throw Error("No element option passed to Waypoint constructor");if(!c.handler)throw Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+b;this.options=d.Adapter.extend({},d.defaults,c);this.element=this.options.element;this.adapter=new d.Adapter(this.element);this.callback=c.handler;this.axis=this.options.horizontal?"horizontal":"vertical";this.enabled=this.options.enabled;
this.triggerPoint=null;this.group=d.Group.findOrCreate({name:this.options.group,axis:this.axis});this.context=d.Context.findOrCreateByElement(this.options.context);d.offsetAliases[this.options.offset]&&(this.options.offset=d.offsetAliases[this.options.offset]);this.group.add(this);this.context.add(this);a[this.key]=this;b+=1}var b=0,a={};d.prototype.queueTrigger=function(a){this.group.queueTrigger(this,a)};d.prototype.trigger=function(a){this.enabled&&this.callback&&this.callback.apply(this,a)};d.prototype.destroy=
function(){this.context.remove(this);this.group.remove(this);delete a[this.key]};d.prototype.disable=function(){this.enabled=!1;return this};d.prototype.enable=function(){this.context.refresh();this.enabled=!0;return this};d.prototype.next=function(){return this.group.next(this)};d.prototype.previous=function(){return this.group.previous(this)};d.invokeAll=function(b){var c=[];for(d in a)c.push(a[d]);for(var d=0,h=c.length;d<h;d++)c[d][b]()};d.destroyAll=function(){d.invokeAll("destroy")};d.disableAll=
function(){d.invokeAll("disable")};d.enableAll=function(){d.Context.refreshAll();for(var b in a)a[b].enabled=!0;return this};d.refreshAll=function(){d.Context.refreshAll()};d.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight};d.viewportWidth=function(){return document.documentElement.clientWidth};d.adapters=[];d.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0};d.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-
this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}};window.Waypoint=d})();
(function(){function d(a){window.setTimeout(a,1E3/60)}function b(d){this.element=d;this.Adapter=e.Adapter;this.adapter=new this.Adapter(d);this.key="waypoint-context-"+a;this.didResize=this.didScroll=!1;this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()};this.waypoints={vertical:{},horizontal:{}};d.waypointContextKey=this.key;c[d.waypointContextKey]=this;a+=1;e.windowContext||(e.windowContext=!0,e.windowContext=new b(window));this.createThrottledScrollHandler();this.createThrottledResizeHandler()}
var a=0,c={},e=window.Waypoint,f=window.onload;b.prototype.add=function(a){this.waypoints[a.options.horizontal?"horizontal":"vertical"][a.key]=a;this.refresh()};b.prototype.checkEmpty=function(){var a=this.Adapter.isEmptyObject(this.waypoints.horizontal),b=this.Adapter.isEmptyObject(this.waypoints.vertical),d=this.element==this.element.window;a&&b&&!d&&(this.adapter.off(".waypoints"),delete c[this.key])};b.prototype.createThrottledResizeHandler=function(){function a(){b.handleResize();b.didResize=
!1}var b=this;this.adapter.on("resize.waypoints",function(){b.didResize||(b.didResize=!0,e.requestAnimationFrame(a))})};b.prototype.createThrottledScrollHandler=function(){function a(){b.handleScroll();b.didScroll=!1}var b=this;this.adapter.on("scroll.waypoints",function(){if(!b.didScroll||e.isTouch)b.didScroll=!0,e.requestAnimationFrame(a)})};b.prototype.handleResize=function(){e.Context.refreshAll()};b.prototype.handleScroll=function(){var a={},b={horizontal:{newScroll:this.adapter.scrollLeft(),
oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},c;for(c in b){var d=b[c],e=d.newScroll>d.oldScroll?d.forward:d.backward,f;for(f in this.waypoints[c]){var l=this.waypoints[c][f];if(null!==l.triggerPoint){var m=d.oldScroll<l.triggerPoint,t=d.newScroll>=l.triggerPoint,u=!m&&!t;if(m&&t||u)l.queueTrigger(e),a[l.group.id]=l.group}}}for(var v in a)a[v].flushTriggers();this.oldScroll={x:b.horizontal.newScroll,
y:b.vertical.newScroll}};b.prototype.innerHeight=function(){return this.element==this.element.window?e.viewportHeight():this.adapter.innerHeight()};b.prototype.remove=function(a){delete this.waypoints[a.axis][a.key];this.checkEmpty()};b.prototype.innerWidth=function(){return this.element==this.element.window?e.viewportWidth():this.adapter.innerWidth()};b.prototype.destroy=function(){var a=[];for(c in this.waypoints)for(var b in this.waypoints[c])a.push(this.waypoints[c][b]);var c=0;for(b=a.length;c<
b;c++)a[c].destroy()};b.prototype.refresh=function(){var a=this.element==this.element.window,b=a?void 0:this.adapter.offset(),c={};this.handleScroll();a={horizontal:{contextOffset:a?0:b.left,contextScroll:a?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:a?0:b.top,contextScroll:a?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};
for(var d in a){b=a[d];for(var f in this.waypoints[d]){var n=this.waypoints[d][f],l=n.options.offset,m=n.triggerPoint,t=0,u=null==m;n.element!==n.element.window&&(t=n.adapter.offset()[b.offsetProp]);"function"===typeof l?l=l.apply(n):"string"===typeof l&&(l=parseFloat(l),-1<n.options.offset.indexOf("%")&&(l=Math.ceil(b.contextDimension*l/100)));n.triggerPoint=Math.floor(t+(b.contextScroll-b.contextOffset)-l);m=m<b.oldScroll;t=n.triggerPoint>=b.oldScroll;l=m&&t;m=!m&&!t;!u&&l?(n.queueTrigger(b.backward),
c[n.group.id]=n.group):!u&&m?(n.queueTrigger(b.forward),c[n.group.id]=n.group):u&&b.oldScroll>=n.triggerPoint&&(n.queueTrigger(b.forward),c[n.group.id]=n.group)}}e.requestAnimationFrame(function(){for(var a in c)c[a].flushTriggers()});return this};b.findOrCreateByElement=function(a){return b.findByElement(a)||new b(a)};b.refreshAll=function(){for(var a in c)c[a].refresh()};b.findByElement=function(a){return c[a.waypointContextKey]};window.onload=function(){f&&f();b.refreshAll()};e.requestAnimationFrame=
function(a){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||d).call(window,a)};e.Context=b})();
(function(){function d(a,b){return a.triggerPoint-b.triggerPoint}function b(a,b){return b.triggerPoint-a.triggerPoint}function a(a){this.name=a.name;this.axis=a.axis;this.id=this.name+"-"+this.axis;this.waypoints=[];this.clearTriggerQueues();c[this.axis][this.name]=this}var c={vertical:{},horizontal:{}},e=window.Waypoint;a.prototype.add=function(a){this.waypoints.push(a)};a.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}};a.prototype.flushTriggers=function(){for(var a in this.triggerQueues){var c=
this.triggerQueues[a];c.sort("up"===a||"left"===a?b:d);for(var e=0,g=c.length;e<g;e+=1){var p=c[e];(p.options.continuous||e===c.length-1)&&p.trigger([a])}}this.clearTriggerQueues()};a.prototype.next=function(a){this.waypoints.sort(d);a=e.Adapter.inArray(a,this.waypoints);return a===this.waypoints.length-1?null:this.waypoints[a+1]};a.prototype.previous=function(a){this.waypoints.sort(d);return(a=e.Adapter.inArray(a,this.waypoints))?this.waypoints[a-1]:null};a.prototype.queueTrigger=function(a,b){this.triggerQueues[b].push(a)};
a.prototype.remove=function(a){a=e.Adapter.inArray(a,this.waypoints);-1<a&&this.waypoints.splice(a,1)};a.prototype.first=function(){return this.waypoints[0]};a.prototype.last=function(){return this.waypoints[this.waypoints.length-1]};a.findOrCreate=function(b){return c[b.axis][b.name]||new a(b)};e.Group=a})();
(function(){function d(a){this.$element=b(a)}var b=window.jQuery,a=window.Waypoint;b.each("innerHeight innerWidth off offset on outerHeight outerWidth scrollLeft scrollTop".split(" "),function(a,b){d.prototype[b]=function(){var a=Array.prototype.slice.call(arguments);return this.$element[b].apply(this.$element,a)}});b.each(["extend","inArray","isEmptyObject"],function(a,e){d[e]=b[e]});a.adapters.push({name:"jquery",Adapter:d});a.Adapter=d})();
(function(){function d(a){return function(c,d){var e=[],h=c;a.isFunction(c)&&(h=a.extend({},d),h.handler=c);this.each(function(){var c=a.extend({},h,{element:this});"string"===typeof c.context&&(c.context=a(this).closest(c.context)[0]);e.push(new b(c))});return e}}var b=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=d(window.jQuery));window.Zepto&&(window.Zepto.fn.waypoint=d(window.Zepto))})();
function bgCarousel(d){var b=jQuery;this.setting={displaymode:{type:"auto",pause:2E3,stoponclick:!1,cycles:2,pauseonmouseover:!0},activeslideclass:"selectedslide",orientation:"h",persist:!0,slideduration:500};jQuery.extend(this.setting,d);this.setting.displaymode.pause+=400+this.setting.slideduration;d=this.setting.persist?bgCarousel.routines.getCookie("slider-"+this.setting.wrapperid):0;this.curslide=null==d||d>this.setting.imagearray.length-1?0:parseInt(d);this.curstep=0;this.animation_isrunning=
!1;this.posprop="h"==this.setting.orientation?"left":"top";d=null;var a=this,c=this.setting;d=[];for(var e=0,f="",h=0,k=c.imagearray.length;h<k;h++)d[h]=new Image,b(d[h]).bind("load error",function(){e++;e==k&&b(function(){a.init(b,f)})}),d[h].src=c.imagearray[h][0],f+=bgCarousel.routines.getSlideHTML(c,c.imagearray[h],"100%","100%",this.posprop)+"\n";b(window).bind("unload",function(){a.setting.persist&&bgCarousel.routines.setCookie("slider-"+c.wrapperid,a.curslide)})}
bgCarousel.prototype={slide:function(d,b){if(this.curslide!=d){var a=this,c=this.setting,e=bgCarousel.routines.createobj;b=c.dimensions["right"==b||"left"==b?0:1]*("right"==b||"down"==b?-1:1);var f=-b,h=this.posprop;null!=this.animation_isrunning&&(this.animation_isrunning=!0);this.$imageslides.eq(d).show().css(e([h,b],["opacity",.5])).stop().animate(e([h,0]),c.slideduration,function(){jQuery(this).addClass(c.activeslideclass).animate({opacity:1}).find("div.desc").stop().slideDown();a.animation_isrunning=
!1}).find("div.desc").hide();this.$imageslides.eq(this.curslide).removeClass(c.activeslideclass).stop().animate(e([h,f]),c.slideduration,function(){jQuery(this).hide()});this.curslide=d}},navigate:function(d){var b=this,a=this.setting;clearTimeout(this.rotatetimer);a.displaymode.stoponclick||"manual"==a.displaymode.type||(this.curstep="back"==d?this.curstep-1:this.curstep+1,this.rotatetimer=setTimeout(function(){b.rotate()},a.displaymode.pause));a="back"==d?"h"==a.orientation?"right":"down":"h"==
a.orientation?"left":"up";d="back"==d?this.curslide-1:this.curslide+1;d=0>d?this.$imageslides.length-1:d>this.$imageslides.length-1?0:d;0==this.animation_isrunning&&this.slide(d,a)},rotate:function(){var d=this,b=this.setting;if(this.ismouseover)this.rotatetimer=setTimeout(function(){d.rotate()},b.displaymode.pause);else if(this.slide(this.curslide<this.$imageslides.length-1?this.curslide+1:0,this.posprop),0==b.displaymode.cycles||this.curstep<this.maxsteps-1)this.rotatetimer=setTimeout(function(){d.rotate()},
b.displaymode.pause),this.curstep++},init:function(d,b){var a=this,c=this.setting;this.$wrapperdiv=d("#"+c.wrapperid);c.dimensions=[this.$wrapperdiv.width(),this.$wrapperdiv.height()];this.$wrapperdiv.css({position:"relative",visibility:"visible",overflow:"hidden",backgroundImage:"none",width:c.dimensions[0],height:c.dimensions[1]});0==this.$wrapperdiv.length?alert('Error: DIV with ID "'+c.wrapperid+'" not found on page.'):(this.$wrapperdiv.html(b),this.$imageslides=this.$wrapperdiv.find("div.background").hide(),
this.$imageslides.eq(this.curslide).show().css(bgCarousel.routines.createobj(["opacity",.5],[this.posprop,0])).addClass(c.activeslideclass).stop().animate({opacity:1}).find("div.desc").slideDown(),"h"==c.orientation?c.navbuttons.slice(0,2):c.navbuttons.slice(2),d("").click(function(){var b=this.getAttribute("data-dir");c.curslide="right"==b?c.curslide==c.content.length-1?0:c.curslide+1:0==c.curslide?c.content.length-1:c.curslide-1;a.navigate(b)}).appendTo(this.$wrapperdiv),"auto"==c.displaymode.type&&
(c.displaymode.pause+=c.slideduration,this.maxsteps=c.displaymode.cycles*this.$imageslides.length,c.displaymode.pauseonmouseover&&(this.$wrapperdiv.mouseenter(function(){a.ismouseover=!0}),this.$wrapperdiv.mouseleave(function(){a.ismouseover=!1})),this.rotatetimer=setTimeout(function(){a.rotate()},c.displaymode.pause)))}};
bgCarousel.routines={getSlideHTML:function(d,b,a,c,e){return'<div class="background" style="background-image:url('+b[0]+");"+(e+":"+("left"==e?a:c))+'">'+(b[1]?'<div class="desc" style="display:none">'+b[1]+"</div>\n":"")+"</div>"},getCookie:function(d){d=new RegExp(d+"=[^;]+","i");return document.cookie.match(d)?document.cookie.match(d)[0].split("=")[1]:null},setCookie:function(d,b){document.cookie=d+"="+b+";path=/"},createobj:function(){for(var d={},b=0;b<arguments.length;b++)d[arguments[b][0]]=
arguments[b][1];return d}}; //# sourceMappingURL=/en/t4-media/one-web/university/admin-assets/js/map/plugins-min.js.map
