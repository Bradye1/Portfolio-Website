// JavaScript Document
var str = "<h2>Skills</h2><ul class=\"skillslist\"><li class=\"skillitem\">Java</li><li class=\"skillitem\">C</li><li class=\"skillitem\">HTML</li><li class=\"skillitem\">CSS</li><li class=\"skillitem\">JavaScript</li><li class=\"skillitem\">Git</li><li class=\"skillitem\">Actions on Google</li></ul>",
    i = 0,
    isTag,
    text;

var str2 = "<h2>Experience</h2> <ul class=\"explist\"> <li class=\"expitem\">Leidos - Jr Software Engineer</li> <li class=\"expdes\">Member of the Maritime Division.</li> <br/> <li class=\"expitem\">Globant - Software Engineer Intern</li> <li class=\"expdes\">Collaborated with other Software Engineer interns to integrate an in-house application with Google home and Amazon Alexa. Used the Node.js environment to develop using JavaScript and Git for version control. The final application, “Reserved,” allows the user to book various conference rooms using only their voice.</li> </ul>",
    j = 0,
    isTag2,
    text2;

var str3 = "<h2>Awards</h2> <ul class=\"awardslist\"> <li class=\"award\"><strong>Dean’s List:</strong> Fall 2015, Spring 2017, Spring 2019</li> <li class=\"award\"><strong>Museum Director\'s Award:</strong> ICAT Creativity and Innovation Day</li> </ul>",
    k = 0,
    isTag3,
    text3;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;
    
    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 40); //typing speed
}());

(function type2() {
    text2 = str2.slice(0, ++j);
    if (text2 === str2) return;
    
    document.getElementById('typewriter2').innerHTML = text2;

    var char = text2.slice(-1);
    if( char === '<' ) isTag2 = true;
    if( char === '>' ) isTag2 = false;

    if (isTag2) return type2();
    setTimeout(type2, 25); //typing speed
}());

(function type3() {
    text3 = str3.slice(0, ++k);
    if (text3 === str3) return;
    
    document.getElementById('typewriter3').innerHTML = text3;

    var char = text3.slice(-1);
    if( char === '<' ) isTag3 = true;
    if( char === '>' ) isTag3 = false;

    if (isTag3) return type3();
    setTimeout(type3, 40); //typing speed
}());
