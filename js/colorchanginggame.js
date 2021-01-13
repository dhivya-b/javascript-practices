var numSquares=6;
var colors=[];
var pickedColor;

var colorDiv= document.querySelectorAll(".height");
var pickedColorDisplay=document.querySelector("h2");//if picked color is equal to clicked color(color cliked..logic to be used)..some msg else try again.
var modeButtons=document.getElementsByClassName("mode");
var messageDisplay=document.getElementById("messageDisplay");
var headerDisplay=document.getElementsByClassName("header")[0];
var newColor=document.getElementById("newColor");

initial();

    function initial(){
            
            //add clickListners to colorDivs
            setupModebuttons();
            //compare the color to picked color
            compareColordivs();
            //reset the screen
            reset();
           }

      //function invoking modebuttons clicklisteners     
      function setupModebuttons(){
        for(var i=0;i<modeButtons.length;i++){
            modeButtons[i].addEventListener("click",function(){
                modeButtons[0].classList.remove("selected");
                 modeButtons[1].classList.remove("selected");
                 this.classList.add("selected");
                 this.textContent === "EASY" ? numSquares = 3 : numSquares =6;
                 reset();
             });
            }
           }

      //function to compare the colordivs to theat of picked color
      function compareColordivs()
      {
        for(var i=0;i<colorDiv.length;i++){
            colorDiv[i].addEventListener("click",function(){
                if(this.style.background === pickedColorDisplay.textContent){
                    var clickedColor=this.style.background;
                    messageDisplay.textContent="Correct!";
                    newColor.textContent="PLAY AGAIN?";
                    changeColors(clickedColor);
                    headerDisplay.style.background=this.style.background;
                }
                else{
                    this.style.background = "#000000";
                    messageDisplay.textContent="Try Again";
                }
            });
        }
      }

      //function to chnage the colors of the colordiv to that of the clicked color
      function changeColors(clickedColor){
        for(var i=0;i<colorDiv.length;i++){
            colorDiv[i].style.background=clickedColor;
        }
      }

    //function invoking newcolor clicklistners    
    newColor.addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.add("selected");
            reset();
          });
    

//function to reset the colors of the colorDiv
 function reset(){
    
     colors=generateRandomColors(numSquares);
     pickedColor=pickColor();
     newColor.textContent="NEW COLORS";
     messageDisplay.textContent=" ";
     pickedColorDisplay.textContent=pickedColor;
     for(var i=0;i<colorDiv.length;i++){
                if(colors[i]){
                    colorDiv[i].classList.remove("noDisplay");
                    colorDiv[i].style.background = colors[i]; 
                }
                 else{
                     colorDiv[i].classList.add("noDisplay");
                }            
             }
             headerDisplay.style.background="#4d4dff";
             numSquares=6;
        }

//function to pick the random color
    function pickColor(){
    var random= Math.floor(Math.random()*colors.length);
     return colors[random]; 
    }

//function to generate random colors
    function generateRandomColors(numSquares){
        var arr=[];
        for(var i=0;i<numSquares;i++){

            arr.push(randomColor());
        }
       return arr;
    }


    //function to generate a random color
    function randomColor()
    {
        var r=Math.floor(Math.random()*256);
        
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        //return in the format rgb(0, 180, 250)
        return "rgb(" + r + ", " + g + ", " + b + ")";

    }