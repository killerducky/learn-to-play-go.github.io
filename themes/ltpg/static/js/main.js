function loadTsumego(which, what, board) {
    var puzzletodisplay = "/puzzleSGFs/" + which + ".sgf";

    //var tsumego = WGo.getElementById("tsumego_wrapper")
    board.loadSgfFromFile(puzzletodisplay, 0);
    //board.setCoordinates(true);
    var puzzles=["pzl1", "pzl2", "pzl3", "pzl4", "pzl5", "pzl6", "pzl7", "pzl8", "pzl9", "pzl0"];

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
}

function myFunction(jdi) {
    window.location.href = jdi;
}

function checkPuzzle() {
    var correct = +getCookie("guessed");

    if ((correct) == "1") {
        document.write("You even got my trick question correct! That is impressive.");
    }
}

var initialProgress = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];

function setProgress(name, value, exdays) {
	currentProgress = getCookie('progress')
	
	if (currentProgress != ""){
		json_str_pr = currentProgress;
	} else {
		var json_str_pr = JSON.stringify(initialProgress);
	}
		
	progress = JSON.parse(json_str_pr);
	progress[name] = "1";
	json_str_pr = JSON.stringify(progress);
	
	setCookie("progress", json_str_pr, exdays);
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
	var progress = getCookie('progress');
	var section1 = 0;
	var section2 = 0;
	var section3 = 0;
	var showunder = getCookie('under');
	
	if (progress != ""){
		progress = JSON.parse(progress);
	
		var goodColor = "rgba(0,122,3,0.2)"
	
	// Checking first section
    if (progress[1] == "1") {
        document.getElementById("1").className = "button-green";
		section1 = section1+1;
    }

    if (progress[2] == "1") {
        document.getElementById("2").className = "button-green";
		section1 = section1+1;
    }

    if (progress[3] == "1") {
        document.getElementById("3").className = "button-green";
		section1 = section1+1;
    }

    if (progress[4] == "1") {
        document.getElementById("4").className = "button-green";
		section1 = section1+1;
    }

    if (progress[5] == "1") {
        document.getElementById("5").className = "button-green";
		section1 = section1+1;
    }
	
    if (section1 == "0") {
        document.getElementById("progressbar").innerHTML = "Learn them <span class='black'>all</span> one by one (0/5)";
    } else

    if (section1 == "1") {
        document.getElementById("progressbar").innerHTML = "Off to a <span class='black'>good</span> start (1/5)";
		document.getElementById("progressbar").style.background = "linear-gradient(to right, " + goodColor + " 20%, rgba(202,202,202,1) 20%)";
    } else

    if (section1 == "2") {
        document.getElementById("progressbar").innerHTML = "Almost <span class='black'>halfway</span> there! (2/5)";
		document.getElementById("progressbar").style.background = "linear-gradient(to right, " + goodColor + " 40%, rgba(202,202,202,1) 40%)";
    } else

    if (section1 == "3") {
        document.getElementById("progressbar").innerHTML = "Wow, you are doing <span class='black'>great</span>! (3/5)";
		document.getElementById("progressbar").style.background = "linear-gradient(to right, " + goodColor + " 60%, rgba(202,202,202,1) 60%)";
    } else

    if (section1 == "4") {
        document.getElementById("progressbar").innerHTML = "Just <span class='black'>one last</span> thing to know! (4/5)";
		document.getElementById("progressbar").style.background = "linear-gradient(to right, " + goodColor + " 80%, rgba(202,202,202,1) 80%)";
    } else

    if (section1 == "5") {
        document.getElementById("progressbar").innerHTML = "You are now a <span class='black'>go player</span>! Click here for your reward! (5/5)";
        document.getElementById("progressbar").style.background = "rgba(0,102,102,0.3)"
    }


	// Checking second section
    if (progress[6] == "1") {
        document.getElementById("6").className = "button-green";
		section2 = section2+1;
    }

    if (progress[7] == "1") {
        document.getElementById("7").className = "button-green";
		section2 = section2+1;
    }

    if (progress[8] == "1") {
        document.getElementById("8").className = "button-green";
		section2 = section2+1;
    }

    if (progress[9] == "1") {
        document.getElementById("9").className = "button-green";
		section2 = section2+1;
    }

    if (progress[10] == "1") {
        document.getElementById("10").className = "button-green";
		section2 = section2+1;
    }

    if (progress[11] == "1") {
        document.getElementById("11").className = "button-green";
		section2 = section2+1;
    }

    if (progress[12] == "1") {
        document.getElementById("12").className = "button-green";
		section2 = section2+1;
    }

    if (showunder != "") {
        document.getElementById("gold").style.display = "inline-block";
		document.getElementById("gold").style.background = "rgba(255, 204, 0, 0.2)";
    }



    if (section2 == "0") {
        document.getElementById("progressbar2").innerHTML = "Learn them <span class='black'>all</span> one by one (0/7)";
    } else

    if (section2 == "1") {
        document.getElementById("progressbar2").innerHTML = "Off to the <span class='black'>advanced</span> topics already? Nice! (1/7)";
		document.getElementById("progressbar2").style.background = "linear-gradient(to right, " + goodColor + " 14%, rgba(202,202,202,1) 14%)";
    } else

    if (section2 == "2") {
        document.getElementById("progressbar2").innerHTML = "Check out the <span class='black'>snapback</span> it's cool! (2/7)";
		document.getElementById("progressbar2").style.background = "linear-gradient(to right, " + goodColor + " 28%, rgba(202,202,202,1) 28%)";
    } else

    if (section2 == "3") {
        document.getElementById("progressbar2").innerHTML = "Wooah We're <span class='black'>almost half way</span> there! (3/7)";
		document.getElementById("progressbar2").style.background = "linear-gradient(to right, " + goodColor + " 43%, rgba(202,202,202,1) 43%)";
    } else

    if (section2 == "4") {
        document.getElementById("progressbar2").innerHTML = "With this <span class='black'>pace</span> you may beat me one day! (4/7)";
		document.getElementById("progressbar2").style.background = "linear-gradient(to right, " + goodColor + " 57%, rgba(202,202,202,1) 57%)";
    } else

    if (section2 == "5") {
        document.getElementById("progressbar2").innerHTML = "Just <span class='black'>two last</span> things to know! (5/7)";
		document.getElementById("progressbar2").style.background = "linear-gradient(to right, " + goodColor + " 71%, rgba(202,202,202,1) 71%)";
    } else

    if (section2 == "6") {
        document.getElementById("progressbar2").innerHTML = "Just <span class='black'>one last</span> thing to know! (6/7)";
		document.getElementById("progressbar2").style.background = "linear-gradient(to right, " + goodColor + " 86%, rgba(202,202,202,1) 86%)";
    } else

    if (section2 == "7") {
        document.getElementById("progressbar2").innerHTML = "You are <span class='black'>persistant</span>! Click here for your reward! (7/7)";
        document.getElementById("progressbar2").style.background = "rgba(0,102,102,0.3)"
    }

	// Checking third section


    if (progress[13] == "1") {
        document.getElementById("13").className = "button-green";
		section3 = section3+1;
    }

    if (progress[14] == "1") {
        document.getElementById("14").className = "button-green";
		section3 = section3+1;
    }

    if (progress[15] == "1") {
        document.getElementById("15").className = "button-green";
		section3 = section3+1;
    }

    if (progress[16] == "1") {
        document.getElementById("16").className = "button-green";
		section3 = section3+1;
    }

    if (progress[17] == "1") {
        document.getElementById("17").className = "button-green";
		section3 = section3+1;
    }


    if (section3 == "7") {
        document.getElementById("progressbar3").innerHTML = "Learn them <span class='black'>all</span> one by one (0/5)";
    } else

    if (section3 == "7") {
        document.getElementById("progressbar3").innerHTML = "This says <span class='black'>one</span> out of five -> (1/5)";
		document.getElementById("progressbar3").style.background = "linear-gradient(to right, " + goodColor + " 20%, rgba(202,202,202,1) 20%)";
	} else

    if (section3 == "7") {
        document.getElementById("progressbar3").innerHTML = "<span class='black'>Getting there </span>(2/5)";
		document.getElementById("progressbar3").style.background = "linear-gradient(to right, " + goodColor + " 40%, rgba(202,202,202,1) 40%)";
    } else

    if (section3 == "7") {
        document.getElementById("progressbar3").innerHTML = "You have <span class='black'>almost</span> exhausted all my knowledge! (3/5)";
		document.getElementById("progressbar3").style.background = "linear-gradient(to right, " + goodColor + " 60%, rgba(202,202,202,1) 60%)";
    } else

    if (section3 == "7") {
        document.getElementById("progressbar3").innerHTML = "One <span class='black'>last</span> thing! (4/5)";
		document.getElementById("progressbar3").style.background = "linear-gradient(to right, " + goodColor + " 80%, rgba(202,202,202,1) 80%)";
    if (section3 == "7") {
        document.getElementById("progressbar3").innerHTML = "Now you are <span class='black'>on your own</span>! Click here for your reward! (" + (0 + thirteen + fourteen + fifteen + sixteen + seventeen) + "/5)";
        document.getElementById("progressbar3").style.background = "rgba(0,102,102,0.3)"
    }
	}
}

	//Uncollapse visited sections
	
	var showSection1 = getCookie('rules');	
	var showSection2 = getCookie('techniques');	
	var showSection3 = getCookie('strategies');	

    if (showSection1 == "") {
		document.getElementById("rules_open").style.display = "none";		
		document.getElementById("rules_closed").style.display = "block";		
	} 

    if (showSection2 == "") {
		document.getElementById("techniques_open").style.display = "none";		
		document.getElementById("techniques_closed").style.display = "block";		
	}
	
    if (showSection3 == "") {
		document.getElementById("strategies_open").style.display = "none";
		document.getElementById("strategies_closed").style.display = "block";		
	}

}

function learn() {
	var progress = getCookie('progress');

	if (progress != ""){
		progress = JSON.parse(progress);
	
    if (progress[2] == "0") {
        window.location.href = "/lessons/02";
    } else
    if (progress[3] == "0") {
        window.location.href = "/lessons/03";
    } else
    if (progress[4] == "0") {
        window.location.href = "/lessons/04";
    } else
    if (progress[5] == "0") {
        window.location.href = "/lessons/05";
    } else
        window.location.href = "/lessons/reward";
	
	} else {
        window.location.href = "/lessons/01";	
	}

}

function learn2() {
	var progress = getCookie('progress');
	if (progress != ""){
		progress = JSON.parse(progress);
	
	if (progress[7] == "0") {
        window.location.href = "/lessons/07";
    } else if (progress[8] == "0") {
        window.location.href = "/lessons/08";
    } else if (progress[9] == "0") {
        window.location.href = "/lessons/09";
    } else if (progress[10] == "0") {
        window.location.href = "/lessons/10";
    } else if (progress[11] == "0") {
        window.location.href = "/lessons/11";
    } else if (progress[12] == "0") {
        window.location.href = "/lessons/12";
    } else {
        window.location.href = "/lessons/reward2";
		setCookie('under', '1', '99');	
	}}
	
	else {
        window.location.href = "/lessons/06";
	}
}

function learn3() {
	var progress = getCookie('progress');
	if (progress != ""){
		progress = JSON.parse(progress);
	


    if (progress[13] == "0") {
        window.location.href = "/lessons/13";
    } else if (progress[14] == "0") {
        window.location.href = "/lessons/14";
    } else if (progress[15] == "0") {
        window.location.href = "/lessons/15";
    } else if (progress[16] == "0") {
        window.location.href = "/lessons/16";
    } else if (progress[17] == "0") {
        window.location.href = "/lessons/17";
    } 
	}	else {
        window.location.href = "/lessons/reward3";
	}
}



function reset() {

    var r = confirm("Careful, this will reset all your progress to 0 is that what you want?");
    if (r == true) {
        document.cookie = "guessed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "showunder=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "under=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "progress=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";        
		document.cookie = "rules=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "techniques=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "strategies=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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

function show(what) {
	document.getElementById(what+"_open").style.display = "block";
	document.getElementById(what+"_closed").style.display = "none";
	document.getElementById(what).style.background = "rgba(0,120,82,0.1)";
	setTimeout(function(){ document.getElementById(what).style.background = "none";; }, 500);
	
}

function hide(what) {
	document.getElementById(what+"_open").style.display = "none";
	document.getElementById(what+"_closed").style.display = "block";
	document.getElementById(what).style.background = "rgba(0,120,82,0.1)";
	setTimeout(function(){ document.getElementById(what).style.background = "none";; }, 500);
}