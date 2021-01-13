

const input=document.querySelectorAll('input[type="checkbox"]');
const data=document.querySelectorAll("tr");
console.log(data);
//console.log(input);


//  function strikeThrough(){
// // //  let targetInput=e.target;
// // //  console.log(targetInput);
//  this.classList.toggle222("textDecor");
 
//  }


//  data.forEach(element=>{
//      element.addEventListener("click",handleCheck)
//  })

let lastChecked;
let inBetween=false;





function handleCheck(e){
    const targetElement=e.currentTarget;
    const row = e.currentTarget.parentElement.parentElement;
    row.classList.toggle("textDecor");
    
   
    if(e.shiftKey && targetElement.checked){
        // console.log("Inside shiftkey and target element ")
        input.forEach(element=>{
            if(element === targetElement || element === lastChecked){
                console.log("Shifting starts");
                inBetween=!inBetween;
            }
        
            if(inBetween){
                element.checked=true;
                element.parentElement.parentElement.classList.toggle("textDecor");
            }
           
        
    });
   }
   lastChecked=targetElement; 
 
}

input.forEach(element=>{
    element.addEventListener("click",handleCheck)
})
