const button1=document.querySelector("#button1");
const form=document.querySelector("#formSearch");
const imgArray=[];

const list=document.querySelector("#lists");


const addNewJoke = async()=>{
    list.innerHTML='';
    const dadJoke=await getDadJoke();
    const newLi=document.createElement("li");
    newLi.append(dadJoke);
    list.append(newLi);
}


const getDadJoke=async()=>{
    try{
        const argument={headers :{ Accept : 'application/json'}};
        const res= await axios.get("https://icanhazdadjoke.com/",argument);
        return (res.data.joke);
    } 
     catch(e){
        return "No Jokes Available";
    }

}

button1.addEventListener("click",addNewJoke);


form.addEventListener("submit",async (evt)=>{
    try{
        evt.preventDefault();
    removePreviousImages(imgArray);
    const searchTerm= form.elements.tvshow.value;
    console.log(searchTerm);
    const config={params :{q:searchTerm}};
    const res=await axios.get('http://api.tvmaze.com/search/shows?',config) ;
    console.log(res.data);
    
     getImage(res.data);
     console.log(imgArray);
     form.elements.tvshow.value='';
     // removePreviousImages(res.data);
    }
    catch(e){
        console.log("No data available");
    }
    
    // console.log(res.data[0].show.image.medium);
    // const img=document.createElement("img");
    // img.src=res.data[0].show.image.medium;
    // document.body.append(img);

});


const getImage = function(shows){
    for(let result of shows){
        if(result.show.image){
        const img=document.createElement("img");
        img.src=result.show.image.medium;
        imgArray.push(img);
         document.body.append(img);
    }
}
}

 const removePreviousImages= function(imgArray){
   for(let result of imgArray){
        document.body.removeChild(result);
        //also empty the array
     }
 }
