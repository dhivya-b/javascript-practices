


const inputs=document.querySelectorAll(".inputRange");
console.log(inputs);

function updates(){
    const suffix=this.dataset.sizing  || '';
    //console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}


inputs.forEach(element => element.addEventListener("change",updates));
inputs.forEach(element => element.addEventListener("mousemove",updates));



