jQuery(document).ready(function(){callQR()});function showHide(a){document.getElementById(a)&&(a=document.getElementById(a),a.style.display="none"==a.style.display?"":"none")}function reset(a){document.getElementById(a)&&(document.getElementById(a).style.display="none")}function toggle(a){document.getElementById(a)&&(document.getElementById(a).className="toggled")}function untoggle(a){document.getElementById(a)&&(document.getElementById(a).className="")}
function thisYear(){showHide("mode1");reset("mode2");reset("mode3");reset("mode4");reset("mode1ft");reset("mode1pt");reset("mode2ft");reset("mode2pt");reset("mode3ft");reset("mode3pt");reset("mode4ft");reset("mode4pt");toggle("year1");untoggle("year2");untoggle("year3");untoggle("year4");untoggle("mode1a");untoggle("mode1b");return!1}
function nextYear(){showHide("mode2");reset("mode1");reset("mode3");reset("mode4");reset("mode1ft");reset("mode1pt");reset("mode2ft");reset("mode2pt");reset("mode3ft");reset("mode3pt");reset("mode4ft");reset("mode4pt");toggle("year2");untoggle("year1");untoggle("year3");untoggle("year4");untoggle("mode2a");untoggle("mode2b");return!1}
function threeYear(){showHide("mode3");reset("mode1");reset("mode2");reset("mode4");reset("mode1ft");reset("mode1pt");reset("mode2ft");reset("mode2pt");reset("mode3ft");reset("mode3pt");reset("mode4ft");reset("mode4pt");toggle("year3");untoggle("year1");untoggle("year2");untoggle("year4");untoggle("mode3a");untoggle("mode3b");return!1}
function fourYear(){showHide("mode4");reset("mode1");reset("mode2");reset("mode3");reset("mode1ft");reset("mode1pt");reset("mode2ft");reset("mode2pt");reset("mode3ft");reset("mode3pt");reset("mode4ft");reset("mode4pt");toggle("year4");untoggle("year1");untoggle("year2");untoggle("year3");untoggle("mode4a");untoggle("mode4b");return!1}
function thisFT(){showHide("mode1ft");reset("mode1pt");reset("mode2ft");reset("mode2pt");reset("mode3ft");reset("mode3pt");reset("mode4ft");reset("mode4pt");toggle("mode1a");untoggle("mode1b");return!1}function thisPT(){showHide("mode1pt");reset("mode1ft");reset("mode2ft");reset("mode2pt");reset("mode3ft");reset("mode3pt");reset("mode4ft");reset("mode4pt");toggle("mode1b");untoggle("mode1a");return!1}
function nextFT(){showHide("mode2ft");reset("mode1ft");reset("mode1pt");reset("mode2pt");reset("mode3ft");reset("mode3pt");reset("mode4ft");reset("mode4pt");toggle("mode2a");untoggle("mode2b");return!1}function nextPT(){showHide("mode2pt");reset("mode1ft");reset("mode1pt");reset("mode2ft");reset("mode3ft");reset("mode3pt");reset("mode4ft");reset("mode4pt");toggle("mode2b");untoggle("mode2a");return!1}
function threeFT(){showHide("mode3ft");reset("mode1ft");reset("mode1pt");reset("mode2ft");reset("mode2pt");reset("mode3pt");reset("mode4ft");reset("mode4pt");toggle("mode3a");untoggle("mode3b");return!1}function threePT(){showHide("mode3pt");reset("mode1ft");reset("mode1pt");reset("mode2ft");reset("mode2pt");reset("mode3ft");reset("mode4ft");reset("mode4pt");toggle("mode3b");untoggle("mode3a");return!1}
function fourFT(){showHide("mode4ft");reset("mode1ft");reset("mode1pt");reset("mode2ft");reset("mode2pt");reset("mode3ft");reset("mode3pt");reset("mode4pt");toggle("mode4a");untoggle("mode4b");return!1}function fourPT(){showHide("mode4pt");reset("mode1ft");reset("mode1pt");reset("mode2ft");reset("mode2pt");reset("mode3ft");reset("mode3pt");reset("mode4ft");toggle("mode4b");untoggle("mode4a");return!1}; //# sourceMappingURL=/en/t4-media/one-web/university/admin-assets/js/map/courses-min.js.map
