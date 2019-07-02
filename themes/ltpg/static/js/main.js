function loadTsumego(which, what, board) {
    var puzzletodisplay = "/puzzleSGFs/" + which + ".sgf";

    //var tsumego = WGo.getElementById("tsumego_wrapper")
    board.loadSgfFromFile(puzzletodisplay, 0);
    //board.setCoordinates(true);
    var puzzles=["pzl1", "pzl2", "pzl3", "pzl4"];

    puzzles.map((pzl) => {
        if(!!document.getElementById(pzl)) {
            document.getElementById(pzl).className = "bttn";
            document.getElementById(what).className = "bttn-selected";
        }
    })
}


function loadSgf(which, what) {
    var puzzletodisplay = "puzzles/" + which + ".sgf";

    var elem = document.getElementById("player");
    var player = new WGo.BasicPlayer(elem, {
        sgfFile: puzzletodisplay,
        formatMoves: true,
        layout: { // you can use static or dynamic layout
            top: ['CommentBox'],
            bottom: ['Control']
        }
    });

    document.getElementById("pzl1").className = "bttn";
    document.getElementById("pzl2").className = "bttn";
    document.getElementById(what).className = "bttn-selected";
    document.getElementById("pzl3").className = "bttn";
    document.getElementById(what).className = "bttn-selected";
    document.getElementById("pzl4").className = "bttn";
    document.getElementById(what).className = "bttn-selected";
}

function myFunction(jdi) {
    window.location.href = jdi;
}


function checkReward() {
    var first = +getCookie("1");
    var second = +getCookie("2");
    var third = +getCookie("3");
    var fourth = +getCookie("4");
    var fifth = +getCookie("5");

    if ((0 + first + second + third + fourth + fifth) != "5") {
        document.write("You cannot cheat at learning Go. You have to walk the same path as others. There are no shortcuts... <a href='index.html'>Go back</a>");
    }
}


function checkReward2() {
    var sixth = +getCookie("6");
    var seventh = +getCookie("7");
    var eight = +getCookie("8");
    var ninth = +getCookie("9");
    var tenth = +getCookie("10");
    var eleventh = +getCookie("11");
    var twelfth = +getCookie("12");
	
    if ((0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) != "7") {
        document.write("You cannot cheat at learning Go. You have to walk the same path as others. There are no shortcuts... <a href='index.html'>Go back</a>");
    }
}


function checkPuzzle() {
    var correct = +getCookie("guessed");

    if ((correct) == "1") {
        document.write("You even got my trick question correct! That is impressive.");
    }
}


function setCookie(cname, cvalue, exdays) {
	var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkCookies() {
    var first = +getCookie("1");
    var second = +getCookie("2");
    var third = +getCookie("3");
    var fourth = +getCookie("4");
    var fifth = +getCookie("5");

    var sixth = +getCookie("6");
    var seventh = +getCookie("7");
    var eight = +getCookie("8");
    var ninth = +getCookie("9");
    var tenth = +getCookie("10");
    var eleventh = +getCookie("11");
    var twelfth = +getCookie("12");

    var showunder = +getCookie("under");
	
    var thirteen = +getCookie("13");
    var fourteen = +getCookie("14");
    var fifteen = +getCookie("15");
    var sixteen = +getCookie("16");
    var seventeen = +getCookie("17");	
	
    if ((0 + first + second + third + fourth + fifth) == "0") {
        document.getElementById("progressbar").innerHTML = "Learn them <span class='black'>all</span> one by one (" + (0 + first + second + third + fourth + fifth) + "/5)";
    } else

    if ((0 + first + second + third + fourth + fifth) == "1") {
        document.getElementById("progressbar").innerHTML = "Off to a <span class='black'>good</span> start (" + (0 + first + second + third + fourth + fifth) + "/5)";
    } else

    if ((0 + first + second + third + fourth + fifth) == "2") {
        document.getElementById("progressbar").innerHTML = "Almost <span class='black'>halfway</span> there! (" + (0 + first + second + third + fourth + fifth) + "/5)";
    } else

    if ((0 + first + second + third + fourth + fifth) == "3") {
        document.getElementById("progressbar").innerHTML = "Wow, you are doing <span class='black'>great</span>! (" + (0 + first + second + third + fourth + fifth) + "/5)";
    } else

    if ((0 + first + second + third + fourth + fifth) == "4") {
        document.getElementById("progressbar").innerHTML = "Just <span class='black'>one last</span> thing to know! (" + (0 + first + second + third + fourth + fifth) + "/5)";
    } else

    if ((0 + first + second + third + fourth + fifth) == "5") {
        document.getElementById("progressbar").innerHTML = "You are now a <span class='black'>go player</span>! Click here for your reward! (" + (0 + first + second + third + fourth + fifth) + "/5)";
        document.getElementById("progressbar").style.background = "rgba(0,102,102,0.3)"
    }


    if (first != "") {
        document.getElementById("1").className = "button-green";
    }

    if (second != "") {
        document.getElementById("2").className = "button-green";
    }

    if (third != "") {
        document.getElementById("3").className = "button-green";
    }

    if (fourth != "") {
        document.getElementById("4").className = "button-green";
    }

    if (fifth != "") {
        document.getElementById("5").className = "button-green";
    }


    if ((0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) == "0") {
        document.getElementById("progressbar2").innerHTML = "Learn them <span class='black'>all</span> one by one (" + (0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) + "/7)";
    } else

    if ((0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) == "1") {
        document.getElementById("progressbar2").innerHTML = "Off to the <span class='black'>advanced</span> topics already? Nice! (" + (0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) + "/7)";
    } else

    if ((0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) == "2") {
        document.getElementById("progressbar2").innerHTML = "Check out the <span class='black'>snapback</span> it's cool! (" + (0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) + "/7)";
    } else

    if ((0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) == "3") {
        document.getElementById("progressbar2").innerHTML = "Wooah We're <span class='black'>almost half way</span> there! (" + (0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) + "/7)";
    } else

    if ((0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) == "4") {
        document.getElementById("progressbar2").innerHTML = "With this <span class='black'>pace</span> you may beat me one day! (" + (0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) + "/7)";
    } else

    if ((0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) == "5") {
        document.getElementById("progressbar2").innerHTML = "Just <span class='black'>two last</span> things to know! (" + (0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) + "/7)";
    } else

    if ((0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) == "6") {
        document.getElementById("progressbar2").innerHTML = "Just <span class='black'>one last</span> thing to know! (" + (0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) + "/7)";
    } else

    if ((0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) == "7") {
        document.getElementById("progressbar2").innerHTML = "You are <span class='black'>persistant</span>! Click here for your reward! (" + (0 + sixth + seventh + eight + ninth + tenth + eleventh + twelfth) + "/7)";
        document.getElementById("progressbar2").style.background = "rgba(0,102,102,0.3)"
    }


    if (sixth != "") {
        document.getElementById("6").className = "button-green";
    }

    if (seventh != "") {
        document.getElementById("7").className = "button-green";
    }

    if (eight != "") {
        document.getElementById("8").className = "button-green";
    }

    if (ninth != "") {
        document.getElementById("9").className = "button-green";
    }

    if (tenth != "") {
        document.getElementById("10").className = "button-green";
    }

    if (eleventh != "") {
        document.getElementById("11").className = "button-green";
    }

    if (twelfth != "") {
        document.getElementById("12").className = "button-green";
    }

    if (showunder != "") {
        document.getElementById("gold").style.display = "inline-block";
		document.getElementById("gold").style.background = "rgba(255, 204, 0, 0.2)";
    }



    if ((0 + thirteen + fourteen + fifteen + sixteen + seventeen) == "0") {
        document.getElementById("progressbar3").innerHTML = "Learn them <span class='black'>all</span> one by one (" + (0 + thirteen + fourteen + fifteen + sixteen + seventeen) + "/5)";
    } else

    if ((0 + thirteen + fourteen + fifteen + sixteen + seventeen) == "1") {
        document.getElementById("progressbar3").innerHTML = "This says <span class='black'>one</span> out of five -> (" + (0 + thirteen + fourteen + fifteen + sixteen + seventeen) + "/5)";
    } else

    if ((0 + thirteen + fourteen + fifteen + sixteen + seventeen) == "2") {
        document.getElementById("progressbar3").innerHTML = "(" + (0 + thirteen + fourteen + fifteen + sixteen + seventeen) + "/5)";
    } else

    if ((0 + thirteen + fourteen + fifteen + sixteen + seventeen) == "3") {
        document.getElementById("progressbar3").innerHTML = "You have <span class='black'>almost</span> exhausted all my knowledge! (" + (0 + thirteen + fourteen + fifteen + sixteen + seventeen) + "/5)";
    } else

    if ((0 + thirteen + fourteen + fifteen + sixteen + seventeen) == "4") {
        document.getElementById("progressbar3").innerHTML = "One <span class='black'>last</span> thing! (" + (0 + thirteen + fourteen + fifteen + sixteen + seventeen) + "/5)";
    } else if ((0 + thirteen + fourteen + fifteen + sixteen + seventeen) == "5") {
        document.getElementById("progressbar3").innerHTML = "Now you are <span class='black'>on your own</span>! Click here for your reward! (" + (0 + thirteen + fourteen + fifteen + sixteen + seventeen) + "/5)";
        document.getElementById("progressbar3").style.background = "rgba(0,102,102,0.3)"
    }


    if (thirteen != "") {
        document.getElementById("13").className = "button-green";
    }

    if (fourteen != "") {
        document.getElementById("14").className = "button-green";
    }

    if (fifteen != "") {
        document.getElementById("15").className = "button-green";
    }

    if (sixteen != "") {
        document.getElementById("16").className = "button-green";
    }

    if (seventeen != "") {
        document.getElementById("17").className = "button-green";
    }
}


function learn() {
    var first = +getCookie("1");
    var second = +getCookie("2");
    var third = +getCookie("3");
    var fourth = +getCookie("4");
    var fifth = +getCookie("5");

    if (first == "0") {
        window.location.href = "/lessons/1";
    } else
    if (second == "0") {
        window.location.href = "/lessons/2";
    } else
    if (third == "0") {
        window.location.href = "/lessons/3";
    } else
    if (fourth == "0") {
        window.location.href = "/lessons/4";
    } else
    if (fifth == "0") {
        window.location.href = "/lessons/5";
    } else
        window.location.href = "/lessons/reward";
}

function learn2() {
    var sixth = +getCookie("6");
    var seventh = +getCookie("7");
    var eight = +getCookie("8");
    var ninth = +getCookie("9");
    var tenth = +getCookie("10");
    var eleventh = +getCookie("11");
    var twelfth = +getCookie("12")

    if (sixth == "") {
        window.location.href = "/lessons/6";
    } else if (seventh == "") {
        window.location.href = "/lessons/7";
    } else if (eight == "") {
        window.location.href = "/lessons/8";
    } else if (ninth == "") {
        window.location.href = "/lessons/9";
    } else if (tenth == "") {
        window.location.href = "/lessons/10";
    } else if (eleventh == "") {
        window.location.href = "/lessons/11";
    } else if (twelfth == "") {
        window.location.href = "/lessons/12";
    } else {
        window.location.href = "/lessons/reward2";
		setCookie('under', '1', '99');
}
}

function learn3() {
    var thirteen = +getCookie("13");
    var fourteen = +getCookie("14");
    var fifteen = +getCookie("15");
    var sixteen = +getCookie("16");
    var seventeen = +getCookie("17");


    if (thirteen == "") {
        window.location.href = "/lessons/13";
    } else if (fourteen == "") {
        window.location.href = "/lessons/14";
    } else if (fifteen == "") {
        window.location.href = "/lessons/15";
    } else if (sixteen == "") {
        window.location.href = "/lessons/16";
    } else if (seventeen == "") {
        window.location.href = "/lessons/17";
    } else {
        window.location.href = "/lessons/reward3";
}
}



function reset() {

    var r = confirm("Careful, this will reset all your progress to 0 is that what you want?");
    if (r == true) {
        document.cookie = "1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "2=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "3=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "4=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "5=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "6=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "7=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "8=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "9=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "10=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "11=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "12=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "13=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "14=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "15=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "16=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "17=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "guessed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "showunder=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "under=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.reload();
    } else {
        void 0
    }
}

function uncollapse(what) {
	if (document.getElementById(what).style.display=="none")
	{
		document.getElementById(what).style.display="inline-block"
	}  	else { 
		document.getElementById(what).style.display="none"
	}
}
