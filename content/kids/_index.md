---
title: "Quizz on basic rules"
date: 2019-03-31T10:07:35+02:00
draft: false
layout: index
---
<center>


<script type="text/javascript">
function submit1() {
var firstName = document.getElementById("a").value; 
setCookie("firstName", firstName, "99");
window.location.href = "/kids/01";
}

</script>

What do you want us to call you?

<form onsubmit="submit1(); return false;">
<input id="a" type="text" style="padding: 5px; width: 200px; border-radius: 10px; text-align: center;">
</form> 
<button onclick="submit1(); return false;">

# Let's start!

</button>
</center>

