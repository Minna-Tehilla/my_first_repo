let flag;
function changeBG() {
   if (flag) {
      document.body.style.background = "linear-gradient(90deg, rgba(242,22,6,1) 0%, rgba(183,184,242,1) 50%, rgba(19,6,241,1) 100%)";
   }
   else { document.body.style.background = "linear-gradient(90deg, rgba(19,6,241,1) 0%, rgba(183,184,242,1) 50%, rgba(242,22,6,1) 100%)"; }
   flag = !flag;
}

function playChakalaka() {
   document.getElementById("pid").style.display="none"
      document.getElementById("manpic").style.display="block"
      document.getElementById("divid").innerHTML="Be quiet already!!!"
   const intervalID = setInterval(changeBG, 300);
   setTimeout(() => {
      clearInterval(intervalID);
      document.getElementById("pid").style.display="block"
      document.getElementById("manpic").style.display="none"
      document.getElementById("divid").innerHTML="Great Job, class!!!"
   }, 5000);
}



