/*
 Background Image Carousel
 Created: Jan 17th, 2012 by DynamicDrive.com. This notice must stay intact for usage 
 Author: Dynamic Drive at http://www.dynamicdrive.com/
 Visit http://www.dynamicdrive.com/ for full source code
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(d,b,a){d instanceof String&&(d=String(d));for(var c=d.length,e=0;e<c;e++){var f=d[e];if(b.call(a,f,e,d))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(d,b,a){d!=Array.prototype&&d!=Object.prototype&&(d[b]=a.value)};
$jscomp.getGlobal=function(d){return"undefined"!=typeof window&&window===d?d:"undefined"!=typeof global&&null!=global?global:d};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(d,b,a,c){if(b){a=$jscomp.global;d=d.split(".");for(c=0;c<d.length-1;c++){var e=d[c];e in a||(a[e]={});a=a[e]}d=d[d.length-1];c=a[d];b=b(c);b!=c&&null!=b&&$jscomp.defineProperty(a,d,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",function(d){return d?d:function(b,a){return $jscomp.findInternal(this,b,a).v}},"es6","es3");
function bgCarousel(d){var b=jQuery;this.setting={displaymode:{type:"auto",pause:2E3,stoponclick:!1,cycles:2,pauseonmouseover:!0},activeslideclass:"selectedslide",orientation:"h",persist:!0,slideduration:500};jQuery.extend(this.setting,d);this.setting.displaymode.pause+=400+this.setting.slideduration;d=this.setting.persist?bgCarousel.routines.getCookie("slider-"+this.setting.wrapperid):0;this.curslide=null==d||d>this.setting.imagearray.length-1?0:parseInt(d);this.curstep=0;this.animation_isrunning=
!1;this.posprop="h"==this.setting.orientation?"left":"top";d=null;var a=this,c=this.setting;d=[];for(var e=0,f="",g=0,k=c.imagearray.length;g<k;g++)d[g]=new Image,b(d[g]).bind("load error",function(){e++;e==k&&b(function(){a.init(b,f)})}),d[g].src=c.imagearray[g][0],f+=bgCarousel.routines.getSlideHTML(c,c.imagearray[g],"100%","100%",this.posprop)+"\n";b(window).bind("unload",function(){a.setting.persist&&bgCarousel.routines.setCookie("slider-"+c.wrapperid,a.curslide)})}
bgCarousel.prototype={slide:function(d,b){if(this.curslide!=d){var a=this,c=this.setting,e=bgCarousel.routines.createobj;b=c.dimensions["right"==b||"left"==b?0:1]*("right"==b||"down"==b?-1:1);var f=-b,g=this.posprop;null!=this.animation_isrunning&&(this.animation_isrunning=!0);this.$imageslides.eq(d).show().css(e([g,b],["opacity",.5])).stop().animate(e([g,0]),c.slideduration,function(){jQuery(this).addClass(c.activeslideclass).animate({opacity:1}).find("div.desc").stop().slideDown();a.animation_isrunning=
!1}).find("div.desc").hide();this.$imageslides.eq(this.curslide).removeClass(c.activeslideclass).stop().animate(e([g,f]),c.slideduration,function(){jQuery(this).hide()});this.curslide=d}},navigate:function(d){var b=this,a=this.setting;clearTimeout(this.rotatetimer);a.displaymode.stoponclick||"manual"==a.displaymode.type||(this.curstep="back"==d?this.curstep-1:this.curstep+1,this.rotatetimer=setTimeout(function(){b.rotate()},a.displaymode.pause));a="back"==d?"h"==a.orientation?"right":"down":"h"==
a.orientation?"left":"up";d="back"==d?this.curslide-1:this.curslide+1;d=0>d?this.$imageslides.length-1:d>this.$imageslides.length-1?0:d;0==this.animation_isrunning&&this.slide(d,a)},rotate:function(){var d=this,b=this.setting;if(this.ismouseover)this.rotatetimer=setTimeout(function(){d.rotate()},b.displaymode.pause);else if(this.slide(this.curslide<this.$imageslides.length-1?this.curslide+1:0,this.posprop),0==b.displaymode.cycles||this.curstep<this.maxsteps-1)this.rotatetimer=setTimeout(function(){d.rotate()},
b.displaymode.pause),this.curstep++},init:function(d,b){var a=this,c=this.setting;this.$wrapperdiv=d("#"+c.wrapperid);c.dimensions=[this.$wrapperdiv.width(),this.$wrapperdiv.height()];this.$wrapperdiv.css({position:"relative",visibility:"visible",overflow:"hidden",backgroundImage:"none",width:c.dimensions[0],height:c.dimensions[1]});0==this.$wrapperdiv.length?alert('Error: DIV with ID "'+c.wrapperid+'" not found on page.'):(this.$wrapperdiv.html(b),this.$imageslides=this.$wrapperdiv.find("div.background").hide(),
this.$imageslides.eq(this.curslide).show().css(bgCarousel.routines.createobj(["opacity",.5],[this.posprop,0])).addClass(c.activeslideclass).stop().animate({opacity:1}).find("div.desc").slideDown(),"h"==c.orientation?c.navbuttons.slice(0,2):c.navbuttons.slice(2),d("").click(function(){var b=this.getAttribute("data-dir");c.curslide="right"==b?c.curslide==c.content.length-1?0:c.curslide+1:0==c.curslide?c.content.length-1:c.curslide-1;a.navigate(b)}).appendTo(this.$wrapperdiv),"auto"==c.displaymode.type&&
(c.displaymode.pause+=c.slideduration,this.maxsteps=c.displaymode.cycles*this.$imageslides.length,c.displaymode.pauseonmouseover&&(this.$wrapperdiv.mouseenter(function(){a.ismouseover=!0}),this.$wrapperdiv.mouseleave(function(){a.ismouseover=!1})),this.rotatetimer=setTimeout(function(){a.rotate()},c.displaymode.pause)))}};
bgCarousel.routines={getSlideHTML:function(d,b,a,c,e){return'<div class="background" style="background-image:url('+b[0]+");"+(e+":"+("left"==e?a:c))+'">'+(b[1]?'<div class="desc" style="display:none">'+b[1]+"</div>\n":"")+"</div>"},getCookie:function(d){d=new RegExp(d+"=[^;]+","i");return document.cookie.match(d)?document.cookie.match(d)[0].split("=")[1]:null},setCookie:function(d,b){document.cookie=d+"="+b+";path=/"},createobj:function(){for(var d={},b=0;b<arguments.length;b++)d[arguments[b][0]]=
arguments[b][1];return d}};/*
 jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/

 Uses the built in easing capabilities added In jQuery 1.1
 to offer multiple easing options

 TERMS OF USE - jQuery Easing

 Open source under the BSD License. 

 Copyright ? 2008 George McGinley Smith
 All rights reserved.
 /

 /*
 Redistribution and use in source and binary forms, with or without modification, 
 are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this list of 
 conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice, this list 
 of conditions and the following disclaimer in the documentation and/or other materials 
 provided with the distribution.

 Neither the name of the author nor the names of contributors may be used to endorse 
 or promote products derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 OF THE POSSIBILITY OF SUCH DAMAGE. 

*/
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(d,b,a,c,e){return jQuery.easing[jQuery.easing.def](d,b,a,c,e)},easeInQuad:function(d,b,a,c,e){return c*(b/=e)*b+a},easeOutQuad:function(d,b,a,c,e){return-c*(b/=e)*(b-2)+a},easeInOutQuad:function(d,b,a,c,e){return 1>(b/=e/2)?c/2*b*b+a:-c/2*(--b*(b-2)-1)+a},easeInCubic:function(d,b,a,c,e){return c*(b/=e)*b*b+a},easeOutCubic:function(d,b,a,c,e){return c*((b=b/e-1)*b*b+1)+a},easeInOutCubic:function(d,b,a,c,e){return 1>(b/=e/2)?c/2*b*b*b+a:
c/2*((b-=2)*b*b+2)+a},easeInQuart:function(d,b,a,c,e){return c*(b/=e)*b*b*b+a},easeOutQuart:function(d,b,a,c,e){return-c*((b=b/e-1)*b*b*b-1)+a},easeInOutQuart:function(d,b,a,c,e){return 1>(b/=e/2)?c/2*b*b*b*b+a:-c/2*((b-=2)*b*b*b-2)+a},easeInQuint:function(d,b,a,c,e){return c*(b/=e)*b*b*b*b+a},easeOutQuint:function(d,b,a,c,e){return c*((b=b/e-1)*b*b*b*b+1)+a},easeInOutQuint:function(d,b,a,c,e){return 1>(b/=e/2)?c/2*b*b*b*b*b+a:c/2*((b-=2)*b*b*b*b+2)+a},easeInSine:function(d,b,a,c,e){return-c*Math.cos(b/
e*(Math.PI/2))+c+a},easeOutSine:function(d,b,a,c,e){return c*Math.sin(b/e*(Math.PI/2))+a},easeInOutSine:function(d,b,a,c,e){return-c/2*(Math.cos(Math.PI*b/e)-1)+a},easeInExpo:function(d,b,a,c,e){return 0==b?a:c*Math.pow(2,10*(b/e-1))+a},easeOutExpo:function(d,b,a,c,e){return b==e?a+c:c*(-Math.pow(2,-10*b/e)+1)+a},easeInOutExpo:function(d,b,a,c,e){return 0==b?a:b==e?a+c:1>(b/=e/2)?c/2*Math.pow(2,10*(b-1))+a:c/2*(-Math.pow(2,-10*--b)+2)+a},easeInCirc:function(d,b,a,c,e){return-c*(Math.sqrt(1-(b/=e)*
b)-1)+a},easeOutCirc:function(d,b,a,c,e){return c*Math.sqrt(1-(b=b/e-1)*b)+a},easeInOutCirc:function(d,b,a,c,e){return 1>(b/=e/2)?-c/2*(Math.sqrt(1-b*b)-1)+a:c/2*(Math.sqrt(1-(b-=2)*b)+1)+a},easeInElastic:function(d,b,a,c,e){d=0;var f=c;if(0==b)return a;if(1==(b/=e))return a+c;d||(d=.3*e);f<Math.abs(c)?(f=c,c=d/4):c=d/(2*Math.PI)*Math.asin(c/f);return-(f*Math.pow(2,10*--b)*Math.sin(2*(b*e-c)*Math.PI/d))+a},easeOutElastic:function(d,b,a,c,e){var f=0,g=c;if(0==b)return a;if(1==(b/=e))return a+c;f||
(f=.3*e);g<Math.abs(c)?(g=c,d=f/4):d=f/(2*Math.PI)*Math.asin(c/g);return g*Math.pow(2,-10*b)*Math.sin(2*(b*e-d)*Math.PI/f)+c+a},easeInOutElastic:function(d,b,a,c,e){var f=0,g=c;if(0==b)return a;if(2==(b/=e/2))return a+c;f||(f=.3*e*1.5);g<Math.abs(c)?(g=c,d=f/4):d=f/(2*Math.PI)*Math.asin(c/g);return 1>b?-.5*g*Math.pow(2,10*--b)*Math.sin(2*(b*e-d)*Math.PI/f)+a:g*Math.pow(2,-10*--b)*Math.sin(2*(b*e-d)*Math.PI/f)*.5+c+a},easeInBack:function(d,b,a,c,e,f){void 0==f&&(f=1.70158);return c*(b/=e)*b*((f+1)*
b-f)+a},easeOutBack:function(d,b,a,c,e,f){void 0==f&&(f=1.70158);return c*((b=b/e-1)*b*((f+1)*b+f)+1)+a},easeInOutBack:function(d,b,a,c,e,f){void 0==f&&(f=1.70158);return 1>(b/=e/2)?c/2*b*b*(((f*=1.525)+1)*b-f)+a:c/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+a},easeInBounce:function(d,b,a,c,e){return c-jQuery.easing.easeOutBounce(d,e-b,0,c,e)+a},easeOutBounce:function(d,b,a,c,e){return(b/=e)<1/2.75?7.5625*c*b*b+a:b<2/2.75?c*(7.5625*(b-=1.5/2.75)*b+.75)+a:b<2.5/2.75?c*(7.5625*(b-=2.25/2.75)*b+.9375)+a:c*(7.5625*
(b-=2.625/2.75)*b+.984375)+a},easeInOutBounce:function(d,b,a,c,e){return b<e/2?.5*jQuery.easing.easeInBounce(d,2*b,0,c,e)+a:.5*jQuery.easing.easeOutBounce(d,2*b-e,0,c,e)+.5*c+a}});/*
 FitVids 1.1

 Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 Released under the WTFPL license - http://sam.zoy.org/wtfpl/

*/
(function(d){d.fn.fitVids=function(b){var a={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var c=document.head||document.getElementsByTagName("head")[0],e=document.createElement("div");e.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';
c.appendChild(e.childNodes[1])}b&&d.extend(a,b);return this.each(function(){var b='iframe[src*="player.vimeo.com"] iframe[src*="youtube.com"] iframe[src*="youtube-nocookie.com"] iframe[src*="kickstarter.com"][src*="video.html"] object embed'.split(" ");a.customSelector&&b.push(a.customSelector);var c=".fitvidsignore";a.ignore&&(c=c+", "+a.ignore);b=d(this).find(b.join(","));b=b.not("object object");b=b.not(c);b.each(function(){var a=d(this);if(!(0<a.parents(c).length||"embed"===this.tagName.toLowerCase()&&
a.parent("object").length||a.parent(".fluid-width-video-wrapper").length)){a.css("height")||a.css("width")||!isNaN(a.attr("height"))&&!isNaN(a.attr("width"))||(a.attr("height",9),a.attr("width",16));var b="object"===this.tagName.toLowerCase()||a.attr("height")&&!isNaN(parseInt(a.attr("height"),10))?parseInt(a.attr("height"),10):a.height(),e=isNaN(parseInt(a.attr("width"),10))?a.width():parseInt(a.attr("width"),10);b/=e;a.attr("name")||(a.attr("name","fitvid"+d.fn.fitVids._count),d.fn.fitVids._count++);
a.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*b+"%");a.removeAttr("height").removeAttr("width")}})})};d.fn.fitVids._count=0})(window.jQuery||window.Zepto);/*
 hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 http://briancherne.github.io/jquery-hoverIntent/

 You may use hoverIntent under the terms of the MIT license. Basically that
 means you are free to use hoverIntent as long as this header is left intact.
 Copyright 2007-2017 Brian Cherne
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery"],d):jQuery&&!jQuery.fn.hoverIntent&&d(jQuery)})(function(d){var b={interval:100,sensitivity:6,timeout:0},a=0,c,e,f=function(a){c=a.pageX;e=a.pageY},g=function(a,b,d,t){if(Math.sqrt((d.pX-c)*(d.pX-c)+(d.pY-e)*(d.pY-e))<t.sensitivity)return b.off(d.event,f),delete d.timeoutId,d.isActive=!0,a.pageX=c,a.pageY=e,delete d.pX,delete d.pY,t.over.apply(b[0],[a]);d.pX=c;d.pY=e;d.timeoutId=setTimeout(function(){g(a,b,d,t)},t.interval)};d.fn.hoverIntent=
function(c,e,r){var k=a++,l=d.extend({},b);d.isPlainObject(c)?(l=d.extend(l,c),d.isFunction(l.out)||(l.out=l.over)):l=d.isFunction(e)?d.extend(l,{over:c,out:e,selector:r}):d.extend(l,{over:c,out:c,selector:e});c=function(a){var b=d.extend({},a),c=d(this),e=c.data("hoverIntent");e||c.data("hoverIntent",e={});var p=e[k];p||(e[k]=p={id:k});p.timeoutId&&(p.timeoutId=clearTimeout(p.timeoutId));e=p.event="mousemove.hoverIntent.hoverIntent"+k;"mouseenter"===a.type?p.isActive||(p.pX=b.pageX,p.pY=b.pageY,
c.off(e,f).on(e,f),p.timeoutId=setTimeout(function(){g(b,c,p,l)},l.interval)):p.isActive&&(c.off(e,f),p.timeoutId=setTimeout(function(){var a=p,e=l.out;delete c.data("hoverIntent")[a.id];e.apply(c[0],[b])},l.timeout))};return this.on({"mouseenter.hoverIntent":c,"mouseleave.hoverIntent":c},l.selector)}});function RepositionNav(){var d=$(window).height(),b=$("#nav").height()/2;d=d/2-b;$("#nav").css({top:d})}
(function(d){d.fn.parallax=function(b,a,c,e){function f(a,b){b.each(function(){var b=d(this),c=b.offset().top;b=1==e?b.outerHeight(!0):b.height();c+b>=a&&c+b-q<a&&g(a,b);c<=a&&c+b>=a&&c-q<a&&c+b-q>a&&g(a,b);c+b>a&&c-q<a&&c>a&&g(a,b)})}function g(e,d){r.css({backgroundPosition:b+" "+Math.round(-(d+e-a)*c)+"px"})}var k=d(window),q=d(window).height();k.scrollTop();var r=d(this);null==b&&(b="50%");null==a&&(a=0);null==c&&(c=.1);null==e&&(e=!0);height=r.height();r.css({backgroundPosition:b+" "+Math.round(NaN*
-(e+a-c))+"px"});k.bind("scroll",function(){var a=k.scrollTop();f(a,r);d("#pixels").html(a)})}})(jQuery);/*
 scrollorama - The jQuery plugin for doing cool scrolly stuff
 by John Polacek (@johnpolacek)

 Dual licensed under MIT and GPL.
 Modified from: jQuery Migrate - v1.1.0 - 2013-01-31
 https://github.com/jquery/jquery-migrate
 Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
*/
(function(d){d.scrollorama=function(b){function a(){c()}function c(){l||m(function(){e();l=!1});l=!0}function e(){var a=d(window).scrollTop();var b=0;var c;for(c=0;c<k.length;c++)k[c].top<=a-g.settings.offset&&(b=c);var e;for(c=0;c<k.length;c++)if(k[c].animations.length)for(e=0;e<k[c].animations.length;e++){var l=k[c].animations[e];c>b?(b!==c-1&&"bottom"!==l.baseline&&f(l,l.startVal),k[c].pin&&k[c].block.css("position","absolute").css("top",k[c].top)):c<b&&(f(l,l.endVal),k[c].pin&&k[c].block.css("position",
"absolute").css("top",k[c].top+k[c].pin));if(c===b||b===c-1&&"bottom"===l.baseline){k[c].pin&&b===c&&k[c].block.css("position","fixed").css("top",0);var h=k[c].top+l.delay;"bottom"===l.baseline&&(h-=d(window).height());var m=h+l.duration;a<h?f(l,l.startVal):a>m?(f(l,l.endVal),k[c].pin&&k[c].block.css("position","absolute").css("top",k[c].top+k[c].pin)):(h=(a-h)/l.duration,l.easing&&d.isFunction(d.easing[l.easing])&&(h=d.easing[l.easing](h,1E3*h,0,1,1E3)),h=l.startVal+h*(l.endVal-l.startVal),f(l,h))}}g.blockIndex!==
b&&(g.blockIndex=b,t())}function f(a,b){var c=a.element,e=a.property;if("rotate"===e||"zoom"===e||"scale"===e)if("rotate"===e)c.css(q+"transform","rotate("+b+"deg)");else{if("zoom"===e||"scale"===e)e="scale("+b+")","-ms-"!==q?c.css(q+"transform",e):(jQuery().scale&&d(c.selector).scale(b),c.css("zoom",b))}else"background-position-x"===e||"background-position-y"===e?(a=c.css("background-position").split(" "),"background-position-x"===e&&c.css("background-position",b+"px "+a[1]),"background-position-y"===
e&&c.css("background-position",a[0]+" "+b+"px")):"text-shadow"===e?c.css(e,"0px 0px "+b+"px #ffffff"):a.suffix?c.css(e,b+a.suffix):c.css(e,b)}var g={},k=[],q="",r="",t=function(){},l=!1,m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};g.settings=d.extend({},{offset:0,enablePin:!0},b);g.blockIndex=0;void 0===b.blocks&&alert("ERROR: Must assign blocks class selector to scrollorama plugin");
g.animate=function(a){var b,c;"string"===typeof a&&(a=d(a));for(c=0;c<k.length;c++)if(k[c].block.has(a).length){var f=k[c];var l=c}for(c=1;c<arguments.length;c++){var h=arguments[c];if("top"===h.property||"left"===h.property||"bottom"===h.property||"right"===h.property)"static"===a.css("position")&&a.css("position","relative"),cssValue=parseInt(a.css(h.property),10),void 0===h.start?h.start=isNaN(cssValue)?0:cssValue:void 0===h.end&&(h.end=isNaN(cssValue)?0:cssValue);"rotate"===h.property?(void 0===
h.start&&(h.start=0),void 0===h.end&&(h.end=0)):"zoom"===h.property||"scale"===h.property?(void 0===h.start&&(h.start=1),void 0===h.end&&(h.end=1)):"letter-spacing"===h.property&&a.css(h.property)&&(void 0===h.start&&(h.start=1),void 0===h.end&&(h.end=1));r&&9>r&&("background-position-x"==h.property||"background-position-y"==h.property)&&(h.property="background-position-x"===h.property?"backgroundPositionX":"backgroundPositionY");void 0===h.baseline&&(h.baseline=h.pin||f.pin||0===l?"top":"bottom");
void 0===h.delay&&(h.delay=0);startVal=void 0!==h.start?"function"==typeof h.start?h.start():h.start:parseInt(a.css(h.property),10);endVal=void 0!==h.end?"function"==typeof h.end?h.end():h.end:parseInt(a.css(h.property),10);if(b=startVal.toString().match(/\D+$/)||endVal.toString().match(/\D+$/))b=b[0],startVal=parseInt(startVal,10),endVal=parseInt(endVal,10);f.animations.push({element:a,delay:h.delay,duration:h.duration,property:h.property,startVal:startVal,endVal:endVal,suffix:b,baseline:void 0!==
h.baseline?h.baseline:"bottom",easing:h.easing});if(h.pin&&f.pin<h.duration+h.delay)for(h=h.duration+h.delay-f.pin,f.pin+=h,b=l+1;b<k.length;b++)k[b].top+=h,k[b].block.css("top",k[b].top)}e();return g};g.onBlockChange=function(a){t=a};g.getScrollpoints=function(){var a=[],b,c;for(b=0;b<k.length;b++)if(a.push(k[b].top),k[b].animations.length&&0<k[b].pin)for(c=0;c<k[b].animations.length;c++){var e=k[b].animations[c];a.push(k[b].top+e.delay+e.duration)}a.sort(function(a,b){return a-b});return a};g.destroy=
function(){for(i=0;i<k.length;i++)k[i].block.css({top:"",position:""}),delete k[i].animations,delete k[i].top,delete k[i].pin;d(window).off("scroll.scrollorama");d("#scroll-wrap").remove();g=null};(function(){"string"===typeof g.settings.blocks&&(g.settings.blocks=d(g.settings.blocks));var b=getBrowser();b.mozilla&&(q="-moz-");b.webkit&&(q="-webkit-");b.opera&&(q="-o-");b.msie&&(q="-ms-",r=parseInt(b.version,10));d("body").css("position","relative");for(b=0;b<g.settings.blocks.length;b++){var c=g.settings.blocks.eq(b);
var e=c.css("margin-top");k.push({block:c,top:c.offset().top-(e?0:parseInt(e,10)),pin:0,animations:[]})}if("true"===g.settings.enablePin.toString())for(b=0;b<k.length;b++)k[b].block.css("position","absolute").css("top",k[b].top);0===d("#scroll-wrap").length&&d("body").prepend('<div id="scroll-wrap"></div>');l=!1;d(window).on("scroll.scrollorama",a)})();return g};d.extend(d.easing,{def:"easeOutQuad",swing:function(b,a,c,e,f){return d.easing[d.easing.def](b,a,c,e,f)},easeInQuad:function(b,a,c,e,d){return e*
(a/=d)*a+c},easeOutQuad:function(b,a,c,e,d){return-e*(a/=d)*(a-2)+c},easeInOutQuad:function(b,a,c,e,d){return 1>(a/=d/2)?e/2*a*a+c:-e/2*(--a*(a-2)-1)+c},easeInCubic:function(b,a,c,e,d){return e*(a/=d)*a*a+c},easeOutCubic:function(b,a,c,e,d){return e*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(b,a,c,e,d){return 1>(a/=d/2)?e/2*a*a*a+c:e/2*((a-=2)*a*a+2)+c},easeInQuart:function(b,a,c,e,d){return e*(a/=d)*a*a*a+c},easeOutQuart:function(b,a,c,e,d){return-e*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(b,
a,c,e,d){return 1>(a/=d/2)?e/2*a*a*a*a+c:-e/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(b,a,c,e,d){return e*(a/=d)*a*a*a*a+c},easeOutQuint:function(b,a,c,e,d){return e*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(b,a,c,e,d){return 1>(a/=d/2)?e/2*a*a*a*a*a+c:e/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(b,a,c,e,d){return-e*Math.cos(a/d*(Math.PI/2))+e+c},easeOutSine:function(b,a,c,e,d){return e*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(b,a,c,e,d){return-e/2*(Math.cos(Math.PI*a/d)-1)+c},
easeInExpo:function(b,a,c,e,d){return 0===a?c:e*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(b,a,c,e,d){return a===d?c+e:e*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(b,a,c,e,d){return 0===a?c:a===d?c+e:1>(a/=d/2)?e/2*Math.pow(2,10*(a-1))+c:e/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(b,a,c,e,d){return-e*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(b,a,c,e,d){return e*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(b,a,c,e,d){return 1>(a/=d/2)?-e/2*(Math.sqrt(1-a*a)-1)+c:e/
2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(b,a,c,e,d){b=0;var g=e;if(0===a)return c;if(1===(a/=d))return c+e;b||(b=.3*d);g<Math.abs(e)?(g=e,e=b/4):e=b/(2*Math.PI)*Math.asin(e/g);return-(g*Math.pow(2,10*--a)*Math.sin(2*(a*d-e)*Math.PI/b))+c},easeOutElastic:function(b,a,c,d,f){var e=0,k=d;if(0===a)return c;if(1===(a/=f))return c+d;e||(e=.3*f);k<Math.abs(d)?(k=d,b=e/4):b=e/(2*Math.PI)*Math.asin(d/k);return k*Math.pow(2,-10*a)*Math.sin(2*(a*f-b)*Math.PI/e)+d+c},easeInOutElastic:function(b,
a,c,d,f){var e=0,k=d;if(0===a)return c;if(2===(a/=f/2))return c+d;e||(e=.3*f*1.5);k<Math.abs(d)?(k=d,b=e/4):b=e/(2*Math.PI)*Math.asin(d/k);return 1>a?-.5*k*Math.pow(2,10*--a)*Math.sin(2*(a*f-b)*Math.PI/e)+c:k*Math.pow(2,-10*--a)*Math.sin(2*(a*f-b)*Math.PI/e)*.5+d+c},easeInBack:function(b,a,c,d,f,g){void 0===g&&(g=1.70158);return d*(a/=f)*a*((g+1)*a-g)+c},easeOutBack:function(b,a,c,d,f,g){void 0===g&&(g=1.70158);return d*((a=a/f-1)*a*((g+1)*a+g)+1)+c},easeInOutBack:function(b,a,c,d,f,g){void 0===g&&
(g=1.70158);return 1>(a/=f/2)?d/2*a*a*(((g*=1.525)+1)*a-g)+c:d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+c},easeInBounce:function(b,a,c,e,f){return e-d.easing.easeOutBounce(b,f-a,0,e,f)+c},easeOutBounce:function(b,a,c,d,f){return(a/=f)<1/2.75?7.5625*d*a*a+c:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+.75)+c:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+.9375)+c:d*(7.5625*(a-=2.625/2.75)*a+.984375)+c},easeInOutBounce:function(b,a,c,e,f){return a<f/2?.5*d.easing.easeInBounce(b,2*a,0,e,f)+c:.5*d.easing.easeOutBounce(b,2*a-
f,0,e,f)+.5*e+c}})})(jQuery);function getBrowser(){var d=uaMatch(navigator.userAgent),b={};d.browser&&(b[d.browser]=!0,b.version=d.version);b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0);return b}function uaMatch(d){d=d.toLowerCase();d=/(chrome)[ \/]([\w.]+)/.exec(d)||/(webkit)[ \/]([\w.]+)/.exec(d)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(d)||/(msie) ([\w.]+)/.exec(d)||0>d.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d)||[];return{browser:d[1]||"",version:d[2]||"0"}};/*
 jQuery.scrollTo
 Copyright (c) 2007 Ariel Flesler - aflesler ? gmail ? com | https://github.com/flesler
 Licensed under MIT
 https://github.com/flesler/jquery.scrollTo
 @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 @author Ariel Flesler
 @version 2.1.2
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery"],d):"undefined"!==typeof module&&module.exports?module.exports=d(require("jquery")):d(jQuery)})(function(d){function b(a){return!a.nodeName||-1!==d.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function a(a){return d.isFunction(a)||d.isPlainObject(a)?a:{top:a,left:a}}var c=d.scrollTo=function(a,b,c){return d(window).scrollTo(a,b,c)};c.defaults={axis:"xy",duration:0,limit:!0};d.fn.scrollTo=function(e,f,g){"object"===
typeof f&&(g=f,f=0);"function"===typeof g&&(g={onAfter:g});"max"===e&&(e=9E9);g=d.extend({},c.defaults,g);f=f||g.duration;var k=g.queue&&1<g.axis.length;k&&(f/=2);g.offset=a(g.offset);g.over=a(g.over);return this.each(function(){function q(a){var b=d.extend({},g,{queue:!0,duration:f,complete:a&&function(){a.call(t,m,g)}});l.animate(n,b)}if(null!==e){var r=b(this),t=r?this.contentWindow||window:this,l=d(t),m=e,n={};switch(typeof m){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)){m=
a(m);break}m=r?d(m):d(m,t);case "object":if(0===m.length)return;if(m.is||m.style)var u=(m=d(m)).offset()}var v=d.isFunction(g.offset)&&g.offset(t,m)||g.offset;d.each(g.axis.split(""),function(a,b){var d="x"===b?"Left":"Top",e=d.toLowerCase(),f="scroll"+d,p=l[f](),w=c.max(t,b);u?(n[f]=u[e]+(r?0:p-l.offset()[e]),g.margin&&(n[f]-=parseInt(m.css("margin"+d),10)||0,n[f]-=parseInt(m.css("border"+d+"Width"),10)||0),n[f]+=v[e]||0,g.over[e]&&(n[f]+=m["x"===b?"width":"height"]()*g.over[e])):(b=m[e],n[f]=b.slice&&
"%"===b.slice(-1)?parseFloat(b)/100*w:b);g.limit&&/^\d+$/.test(n[f])&&(n[f]=0>=n[f]?0:Math.min(n[f],w));!a&&1<g.axis.length&&(p===n[f]?n={}:k&&(q(g.onAfterFirst),n={}))});q(g.onAfter)}})};c.max=function(a,c){var e="x"===c?"Width":"Height";c="scroll"+e;if(!b(a))return a[c]-d(a)[e.toLowerCase()]();e="client"+e;var f=a.ownerDocument||a.document;a=f.documentElement;f=f.body;return Math.max(a[c],f[c])-Math.min(a[e],f[e])};d.Tween.propHooks.scrollLeft=d.Tween.propHooks.scrollTop={get:function(a){return d(a.elem)[a.prop]()},
set:function(a){var b=this.get(a);if(a.options.interrupt&&a._last&&a._last!==b)return d(a.elem).stop();var c=Math.round(a.now);b!==c&&(d(a.elem)[a.prop](c),a._last=this.get(a))}};return c});/*
 Waypoints - 4.0.1
Copyright ? 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function(){function d(c){if(!c)throw Error("No options passed to Waypoint constructor");if(!c.element)throw Error("No element option passed to Waypoint constructor");if(!c.handler)throw Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+b;this.options=d.Adapter.extend({},d.defaults,c);this.element=this.options.element;this.adapter=new d.Adapter(this.element);this.callback=c.handler;this.axis=this.options.horizontal?"horizontal":"vertical";this.enabled=this.options.enabled;
this.triggerPoint=null;this.group=d.Group.findOrCreate({name:this.options.group,axis:this.axis});this.context=d.Context.findOrCreateByElement(this.options.context);d.offsetAliases[this.options.offset]&&(this.options.offset=d.offsetAliases[this.options.offset]);this.group.add(this);this.context.add(this);a[this.key]=this;b+=1}var b=0,a={};d.prototype.queueTrigger=function(a){this.group.queueTrigger(this,a)};d.prototype.trigger=function(a){this.enabled&&this.callback&&this.callback.apply(this,a)};d.prototype.destroy=
function(){this.context.remove(this);this.group.remove(this);delete a[this.key]};d.prototype.disable=function(){this.enabled=!1;return this};d.prototype.enable=function(){this.context.refresh();this.enabled=!0;return this};d.prototype.next=function(){return this.group.next(this)};d.prototype.previous=function(){return this.group.previous(this)};d.invokeAll=function(b){var c=[];for(d in a)c.push(a[d]);var d=0;for(var g=c.length;d<g;d++)c[d][b]()};d.destroyAll=function(){d.invokeAll("destroy")};d.disableAll=
function(){d.invokeAll("disable")};d.enableAll=function(){d.Context.refreshAll();for(var b in a)a[b].enabled=!0;return this};d.refreshAll=function(){d.Context.refreshAll()};d.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight};d.viewportWidth=function(){return document.documentElement.clientWidth};d.adapters=[];d.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0};d.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-
this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}};window.Waypoint=d})();
(function(){function d(a){window.setTimeout(a,1E3/60)}function b(d){this.element=d;this.Adapter=e.Adapter;this.adapter=new this.Adapter(d);this.key="waypoint-context-"+a;this.didResize=this.didScroll=!1;this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()};this.waypoints={vertical:{},horizontal:{}};d.waypointContextKey=this.key;c[d.waypointContextKey]=this;a+=1;e.windowContext||(e.windowContext=!0,e.windowContext=new b(window));this.createThrottledScrollHandler();this.createThrottledResizeHandler()}
var a=0,c={},e=window.Waypoint,f=window.onload;b.prototype.add=function(a){this.waypoints[a.options.horizontal?"horizontal":"vertical"][a.key]=a;this.refresh()};b.prototype.checkEmpty=function(){var a=this.Adapter.isEmptyObject(this.waypoints.horizontal),b=this.Adapter.isEmptyObject(this.waypoints.vertical),d=this.element==this.element.window;a&&b&&!d&&(this.adapter.off(".waypoints"),delete c[this.key])};b.prototype.createThrottledResizeHandler=function(){function a(){b.handleResize();b.didResize=
!1}var b=this;this.adapter.on("resize.waypoints",function(){b.didResize||(b.didResize=!0,e.requestAnimationFrame(a))})};b.prototype.createThrottledScrollHandler=function(){function a(){b.handleScroll();b.didScroll=!1}var b=this;this.adapter.on("scroll.waypoints",function(){if(!b.didScroll||e.isTouch)b.didScroll=!0,e.requestAnimationFrame(a)})};b.prototype.handleResize=function(){e.Context.refreshAll()};b.prototype.handleScroll=function(){var a={},b={horizontal:{newScroll:this.adapter.scrollLeft(),
oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},c;for(c in b){var d=b[c],e=d.newScroll>d.oldScroll?d.forward:d.backward,f;for(f in this.waypoints[c]){var m=this.waypoints[c][f];if(null!==m.triggerPoint){var n=d.oldScroll<m.triggerPoint,u=d.newScroll>=m.triggerPoint,v=!n&&!u;if(n&&u||v)m.queueTrigger(e),a[m.group.id]=m.group}}}for(var p in a)a[p].flushTriggers();this.oldScroll={x:b.horizontal.newScroll,
y:b.vertical.newScroll}};b.prototype.innerHeight=function(){return this.element==this.element.window?e.viewportHeight():this.adapter.innerHeight()};b.prototype.remove=function(a){delete this.waypoints[a.axis][a.key];this.checkEmpty()};b.prototype.innerWidth=function(){return this.element==this.element.window?e.viewportWidth():this.adapter.innerWidth()};b.prototype.destroy=function(){var a=[];for(c in this.waypoints)for(var b in this.waypoints[c])a.push(this.waypoints[c][b]);var c=0;for(b=a.length;c<
b;c++)a[c].destroy()};b.prototype.refresh=function(){var a=this.element==this.element.window,b=a?void 0:this.adapter.offset(),c={};this.handleScroll();a={horizontal:{contextOffset:a?0:b.left,contextScroll:a?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:a?0:b.top,contextScroll:a?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};
for(var d in a){b=a[d];for(var f in this.waypoints[d]){var l=this.waypoints[d][f],m=l.options.offset,n=l.triggerPoint,u=0,v=null==n;l.element!==l.element.window&&(u=l.adapter.offset()[b.offsetProp]);"function"===typeof m?m=m.apply(l):"string"===typeof m&&(m=parseFloat(m),-1<l.options.offset.indexOf("%")&&(m=Math.ceil(b.contextDimension*m/100)));l.triggerPoint=Math.floor(u+(b.contextScroll-b.contextOffset)-m);n=n<b.oldScroll;u=l.triggerPoint>=b.oldScroll;m=n&&u;n=!n&&!u;!v&&m?(l.queueTrigger(b.backward),
c[l.group.id]=l.group):!v&&n?(l.queueTrigger(b.forward),c[l.group.id]=l.group):v&&b.oldScroll>=l.triggerPoint&&(l.queueTrigger(b.forward),c[l.group.id]=l.group)}}e.requestAnimationFrame(function(){for(var a in c)c[a].flushTriggers()});return this};b.findOrCreateByElement=function(a){return b.findByElement(a)||new b(a)};b.refreshAll=function(){for(var a in c)c[a].refresh()};b.findByElement=function(a){return c[a.waypointContextKey]};window.onload=function(){f&&f();b.refreshAll()};e.requestAnimationFrame=
function(a){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||d).call(window,a)};e.Context=b})();
(function(){function d(a,b){return a.triggerPoint-b.triggerPoint}function b(a,b){return b.triggerPoint-a.triggerPoint}function a(a){this.name=a.name;this.axis=a.axis;this.id=this.name+"-"+this.axis;this.waypoints=[];this.clearTriggerQueues();c[this.axis][this.name]=this}var c={vertical:{},horizontal:{}},e=window.Waypoint;a.prototype.add=function(a){this.waypoints.push(a)};a.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}};a.prototype.flushTriggers=function(){for(var a in this.triggerQueues){var c=
this.triggerQueues[a];c.sort("up"===a||"left"===a?b:d);for(var e=0,q=c.length;e<q;e+=1){var r=c[e];(r.options.continuous||e===c.length-1)&&r.trigger([a])}}this.clearTriggerQueues()};a.prototype.next=function(a){this.waypoints.sort(d);a=e.Adapter.inArray(a,this.waypoints);return a===this.waypoints.length-1?null:this.waypoints[a+1]};a.prototype.previous=function(a){this.waypoints.sort(d);return(a=e.Adapter.inArray(a,this.waypoints))?this.waypoints[a-1]:null};a.prototype.queueTrigger=function(a,b){this.triggerQueues[b].push(a)};
a.prototype.remove=function(a){a=e.Adapter.inArray(a,this.waypoints);-1<a&&this.waypoints.splice(a,1)};a.prototype.first=function(){return this.waypoints[0]};a.prototype.last=function(){return this.waypoints[this.waypoints.length-1]};a.findOrCreate=function(b){return c[b.axis][b.name]||new a(b)};e.Group=a})();
(function(){function d(a){this.$element=b(a)}var b=window.jQuery,a=window.Waypoint;b.each("innerHeight innerWidth off offset on outerHeight outerWidth scrollLeft scrollTop".split(" "),function(a,b){d.prototype[b]=function(){var a=Array.prototype.slice.call(arguments);return this.$element[b].apply(this.$element,a)}});b.each(["extend","inArray","isEmptyObject"],function(a,e){d[e]=b[e]});a.adapters.push({name:"jquery",Adapter:d});a.Adapter=d})();
(function(){function d(a){return function(c,d){var e=[],g=c;a.isFunction(c)&&(g=a.extend({},d),g.handler=c);this.each(function(){var c=a.extend({},g,{element:this});"string"===typeof c.context&&(c.context=a(this).closest(c.context)[0]);e.push(new b(c))});return e}}var b=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=d(window.jQuery));window.Zepto&&(window.Zepto.fn.waypoint=d(window.Zepto))})(); //# sourceMappingURL=/en/t4-media/one-web/university/admin-assets/js/map/plugins-min.js.map
