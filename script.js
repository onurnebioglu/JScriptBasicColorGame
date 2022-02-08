var colorArr=['black','yellow','red','orange','purple','blue'];
var color=document.getElementById('txtColor');

var timeleft = 30;



function randomTxt(){
    let randomText=colorArr[parseInt(Math.random()*6)];
    let randomColor=colorArr[parseInt(Math.random()*6)];
    document.getElementById('txtColor').innerText=randomText.toUpperCase();
    document.getElementById('txtColor').style.color=randomColor;
    

}




var Timer = setInterval(function(){
   
  if(timeleft <= 0){
    clearInterval(Timer);
    document.getElementById("input").disabled = true;
  }
  if(timeleft==30)
{
     randomTxt();
    
}
  document.getElementById('countdown').innerText = timeleft;
  timeleft -= 1;

let score=document.getElementById('score').innerText.toString();
score=parseInt(score);
console.log(score);

  

  document.querySelector('input').addEventListener("keyup",function(event){
      event.preventDefault();
      if(event.key==='Enter'){
          let iText=event.target.value.toString();
          console.log(iText.toString());
          
          
     
          if(iText==document.getElementById('txtColor').style.color.toString())
          {
              
              score++;
              document.getElementById('score').innerText=score;
              document.querySelector('input').value="";
              randomTxt();
             
              
          }else if(iText!=document.getElementById('txtColor').style.color.toString())
        {
            
            console.log(document.getElementById('txtColor').innerText.toString());
       
            document.querySelector('input').value="";
            randomTxt();

         } 
          
       

         
      }
  });
 



}, 1000);


