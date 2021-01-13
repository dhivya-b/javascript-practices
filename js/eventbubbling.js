const divs=document.querySelectorAll("div");
const button=document.querySelector("button");

function logText(e){
   // e.stopPropagation();//prevents event bubbling if capture false and if capture true starts and from top and stop the capture further.
    console.log(this.classList.value);
    
}


divs.forEach(div =>{
    div.addEventListener("click",logText,{
        capture:false,
        once:true  //fire the event onlyonce and further if we click,no response(equal to removeEventListener) until we refresh the page.
    });
})


button.addEventListener("click",()=>{
    console.log("Clicked");
},{
   
   once:true 
})



