console.log("connected");

var p1button=document.querySelector("#p1");
var p2button=document.getElementById("p2");
var p1Finalvalue=document.getElementById("p1value");
var p2Finalvalue=document.getElementById("p2value");

var p1Score=0;
var p2Score=0;
var gameOver=false;



    var limitValue=document.querySelector("h3 span");
   

    document.getElementById("number").addEventListener("change",function(){
       limitValue.textContent=Number(this.value);
        reset();

    });


    p1button.addEventListener("click",function(){
        if(!gameOver){
        p1Score++;
        if(p1Score===Number(limitValue.textContent)){
            p1Finalvalue.classList.add("winner");
            gameOver=true;
            }
     
        
        }
        p1Finalvalue.textContent=p1Score;
        
        });
        
        p2button.addEventListener("click",function(){
            if(!gameOver){
                p2Score++;
                if(p2Score===Number(limitValue.textContent)){
                    p2Finalvalue.classList.add("winner");
                    gameOver=true;
                }
            }
               
                p2Finalvalue.textContent=p2Score;
            
          
            });

            document.getElementById("reset").addEventListener("click",function(){
               reset();
            })

            function reset(){
                p1Score=0;
                p2Score=0;
                p1Finalvalue.textContent=0;
                p2Finalvalue.textContent=0;
                p1Finalvalue.classList.remove("winner");
                p2Finalvalue.classList.remove("winner");
                gameOver=false;
            }

          


    
