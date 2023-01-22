let flag;
function changeBG() {
   if (flag) {
      document.body.style.background = "radial-gradient(circle, rgba(246,4,8,1) 0%, rgba(244,237,237,1) 100%)";
      document.body.style.background = 'rgb(246,4,8)';
   }
   else { document.body.style.backgroundColor = "blue" }
   flag = !flag;
}

function playChakalaka() {
   const intervalID = setInterval(changeBG, 500);
   setTimeout(() => {
      clearInterval(intervalID);
   }, 10000);
}



