---
title: ""
date: 2019-04-20T10:05:17+02:00
draft: false
layout: test
---

<!-- BASIC RULES -->
  {{< wrapper id="rules" title="| Basic rules" subtitle="Just 5 simple steps" hidden="1" >}}
    {{< progressbar id="progressbar" onclick="learn()" >}}Learn them {{< black all >}} one by one{{< /progressbar >}}

      {{< buttonBlue target="/lessons/01/" id="1" img="/images/where.png" >}}The {{< blackBig BOARD >}} and the {{< black STONES >}}{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/02/" id="2" img="/images/atari.png" >}}How can we {{< blackBig CAPTURE >}} something?{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/03/" id="3" img="/images/suicide.png" >}}No {{< blackBig SUICIDES >}} please{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/04/" id="4" img="/images/endless.png" >}}No {{< blackBig "ENDLESS REPETITION">}} either{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/05/" id="5" img="/images/pass.png" >}}{{< blackBig END >}} of the game and {{< black COUNTING >}}{{< /buttonBlue >}}
	  
	  {{< buttonQuizz target="/quizzes/1/" id="q1" >}}Bonus quiz{{< /buttonBlue >}}
	  {{< buttonMisc target="/lessons/faq/" id="faq" >}}FAQ{{< /buttonBlue >}}
  {{< /wrapper >}}
<!-- END OF BASIC RULES -->


<!-- BASIC TECHNIQUES -->
  {{< wrapper id="techniques" title="| Basic (but cool!) techniques" subtitle="Played some games already? Now learn to play with style!" hidden="1" >}}

    {{< progressbar id="progressbar2" onclick="learn2()" >}}Learn them {{< black all >}} one by one{{< /progressbar >}}    
      {{< buttonBlue target="/lessons/06/" id="6" img="/images/alive.png" >}}Alive {{< blackBig "(IMMORTAL)" >}} groups{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/07/" id="7" img="/images/cuts.png" >}}{{< blackBig CUTS >}}{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/08/" id="8" img="/images/double.png" >}}{{< blackBig DOUBLE >}} atari!{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/09/" id="9" img="/images/ladder.png" >}}{{< blackBig LADDERS >}}{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/10/" id="10" img="/images/net.png" >}}{{< blackBig NETS >}}{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/11/" id="11" img="/images/snapback.png" >}}{{< blackBig SNAPBACK >}}{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/12/" id="12" img="/images/seki.png" >}}{{< blackBig "SEKI (barely alive)" >}}{{< /buttonBlue >}}
      {{< buttonBlue target="/lessons/12_and_a_half/" id="gold" img="/images/under.png" extraCSS="hidden" inlineCSS="display: none;" >}}Playing {{< blackBig UNDER >}} the stones{{< /buttonBlue >}}
	  
	  {{< buttonQuizz target="/quizzes/2/" id="q2" >}}Bonus quiz{{< /buttonBlue >}}
  {{< /wrapper >}}
<!-- END OF BASIC TECHNIQUES -->

<!-- BASIC STRATEGIES -->
  {{< wrapper id="strategies" title="| Basic strategies" subtitle="For those who feel like switching to 19x19" hidden="1" >}}

    {{< progressbar id="progressbar3" onclick="learn3()" >}}Learn them {{< black all >}} one by one{{< /progressbar >}}

    {{< buttonBlue target="/lessons/13/" id="13" img="/images/opening.png" >}}What to do in the {{< blackBig OPENING >}}{{< /buttonBlue >}}
	{{< buttonBlue target="/lessons/14/" id="14" img="/images/middle.png" >}}{{< blackBig "Middle game">}}{{< /buttonBlue >}}
    {{< buttonBlue target="/lessons/15/" id="15" img="/images/endgame.png" >}}Is {{< blackBig ENDGAME >}} important?{{< /buttonBlue >}}
    {{< buttonBlue target="/lessons/16/" id="16" img="/images/shape.png" >}}Make some {{< blackBig SHAPE >}}{{< /buttonBlue >}}
    {{< buttonBlue target="/lessons/17/" id="17" img="/images/mistake.png" >}}Most common beginner {{< blackBig MISTAKES >}}{{< /buttonBlue >}}
    {{< buttonBlue target="/lessons/18/" id="18" img="/images/professional.png" >}}Understand a {{< blackBig PROFESSIONAL >}} game{{< /buttonBlue >}}
      
  {{< /wrapper >}}
<!-- END OF BASIC STRATEGIES -->


<!-- WHAT NOW? -->
  {{< wrapper id="what_now" title="| What's next?" subtitle="Where can you use your newfound skill?" >}}

    {{< buttonBlue target="/lessons/19/" id="19" img="/images/play.png" >}}Where can you {{< blackBig PLAY >}}?{{< /buttonBlue >}}
    {{< buttonBlue target="/lessons/20/" id="20" img="/images/learn.png" >}}Where can you {{< blackBig LEARN >}} more?{{< /buttonBlue >}}
    {{< buttonBlue target="/lessons/21/" id="21" img="/images/ask.png" >}}Where can you {{< blackBig "ASK QUESTIONS" >}}?{{< /buttonBlue >}}
    {{< buttonBlue target="/lessons/22/" id="22" img="/images/dictionary.png" >}}{{< blackBig DICTIONARY >}} of Go terms?{{< /buttonBlue >}}
      
  {{< /wrapper >}}
  
  
<!-- CREDITS -->
  {{< wrapper id="credits" title="| Who's behind this?"  >}}
  
  This site was made for the love of the game and our community. If you found a mistake contact me <b>({{< externalLink target="https://online-go.com/user/view/360861" name="AdamR" >}})</b> on the OGS, I will try to fix it as soon as possible.

My sincerest thanks to all the members of the OGS community who were very supportive in my efforts and kept trying to make it as good as possible. Most notably:<br><br> 

{{< blackBig "Lucas Westermann" >}}<br>
Who managed the whole technical side of the project and patiently kept explaining what I need to press to make it all work.
	<br><br>
{{< blackBig "Kosh " >}}(Faith manages), {{< blackBig "Joshua Batson" >}}<br> 
Who both wrote a portion of the texts, spent their evenings crawling through heaps of my horrible grammar and overall lifted the quality of the site monumentally.
	<br><br>
This website uses ({{< externalLink target="http://jgoboard.com/" name="jGoBoard" >}}), and (very slightly modified) ({{< externalLink target="http://wgo.waltheri.net/" name="WGo" >}}) javascript libraries. 
<br><br>
<p style="font-size: 12px;"> This website (and costs of running it) are small, and for now I am lucky enough to be able to afford it without trouble. However, if you REALLY like what we did, have nothing better to spend on, and would like to make sure it stays online for other beginners as well, consider sending a dollar (more is not needed) my way. Thank you for even considering.<br><br>
<a href="https://www.paypal.me/AdamRuz" target="_blank" class="donateButton" noreferrer noopener>Donate</a>
  {{< /wrapper >}}  
