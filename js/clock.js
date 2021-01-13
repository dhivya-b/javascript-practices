


const secondHand=document.getElementsByClassName("clockSecHand");
console.log(secondHand);
const minHand=document.getElementsByClassName("clockMinHand");
console.log(minHand);
const hourhand=document.getElementsByClassName("clockHourHand");



function setDate(){
    const now=new Date();
    
    const seconds=now.getSeconds();
    
    const min=now.getMinutes();
    
    const hour=now.getHours();

    const degreeSeconds=((seconds/60)*360)+90;
     secondHand[0].style.transform=`rotate(${degreeSeconds}deg)`;


    const degreeMinutes=((min/60)*360 ) +90;
      minHand[0].style.transform=`rotate(${degreeMinutes}deg)`;
      
    const degreeHour=((hour/12)*360)  + 90;
    hourhand[0].style.transform=`rotate(${degreeHour}deg)`;
  
}

setInterval(setDate,1000);

setDate();