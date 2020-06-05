---
title: "Quizz on basic rules"
date: 2019-03-31T10:07:35+02:00
draft: false
layout: index
---
<center>
<div id="welcome">

What do you want us to call you?

<form onsubmit="submit1(); return false;">
<input id="a" type="text" style="padding: 5px; width: 200px; border-radius: 10px; text-align: center;">
</form> 
<button onclick="submit1(); return false;">

# Let's start!

</div>
</button>
</center>

<script type="text/javascript">
function submit1() {
var firstName = document.getElementById("a").value;
if (firstName == ""){firstName="Nameless"}; 
setCookie("firstName", firstName, "99");
window.location.href = "/kids/01";
}

var kidsProgress = getCookie("kidsProgress");
if (kidsProgress !== ""){
	document.getElementById("welcome").innerHTML = "Welcome back, " + getCookie("firstName") + ",<br>we seem to have ended at <br><h2> lesson " + getCookie("kidsProgress") + "</h2><br><h1><a href='/kids/" + getCookie("kidsProgress") + "'> Let's continue <a></h1>";
}

</script>

