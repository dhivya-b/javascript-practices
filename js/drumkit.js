
//let diva=document.querySelector('div[data-key="65"]');
//console.log(diva);

//diva.addEventListener("keydown",function(e){
 //  const audio=document.querySelector(`audio[data-key="${e.key}"]`);
   //console.log(audio);
    
//})

window.addEventListener("keydown",playAudio);

function playAudio(e)
{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
     if(!audio)  return;
    audio.currentTime=0;//rewind to the start
    audio.play();
    key.classList.add('playing');

};

function removeTransition(e){
 
  if(e.propertyName!=='transform') return;
  e.target.classList.remove('playing');
}

const keys= document.querySelectorAll(".key");
console.log(keys);
//console.log(document.querySelectorAll('.key'));
 keys.forEach(element => {
  element.addEventListener("transitionend",removeTransition)
});


// window.addEventListener("keyup",function(e){
//   const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   key.classList.remove('playing');
// })