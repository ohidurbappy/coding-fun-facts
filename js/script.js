(function(){
  
var iconList = [
  "fa-code",
  "fa-google",
  "fa-child",
  "fa-bug",
  "fa-keyboard-o",
  "fa-headphones",
  "fa-lightbulb-o",
  "fa-mortar-board"
];
  
var factsList = [
    "It's never too late to learn to code.",
    "When learning to code, Google is your best friend.",
    "You feel like a super hero when fixing a bug in your code.",
    "Sometimes code is full of bugs.",
    "It can turn from hobby to addiction in no time.",
    "Coding often ocupies your mind even when you are doing something else.",
    "It develops a creative thinker in you, don't underestimate it.",
    "There is always something new to learn, coding is a lifetime learning process."
  ]; 

  function createElement(text, icon){
      var p = document.querySelector(".text");
      p.textContent = text;
      var span = document.querySelector(".icon span");
      span.className = "";
      span.classList.add("fa", icon, "fa-2x", "fa-fw");
  }
  
  var i = 0;
  var length = factsList.length;
  var delayTime = 5000;
  
  function nextFact(){
    var fact = factsList[i];
    var icon = iconList[i];
    
    createElement(fact, icon);
    
    i++;
    
    if(i >= length){
      i = 0;
    }
    setTimeout(nextFact, delayTime);   
  }
  nextFact();
  
 })();
