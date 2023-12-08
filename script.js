//vjavascript code for meme generator

// seleting the button
const button = document.getElementById("button");

//adding the eventlistener
button.addEventListener('click', (e)=> {
     generate_meme();   // funtion call
}, false);

// functoion definition
async function generate_meme(){
    const raw_data = await fetch("https://meme-api.com/gimme");
    
    if(raw_data.ok){
        const data = await raw_data.json();
        const title = document.getElementById("title");
        const space = document.getElementById("memeSpace");
        const creator = document.getElementById("creatorName");
        title.innerHTML = `Title : ${data.title}`;
        space.innerHTML = `<a href="${data.postLink}" target="_black"><img src="${data.url}" alt="MEME"></img></a>`;
        creator.innerHTML = `Created By :- ${data.author}`;
    }else{
        console.log("Nai", raw_data.status);
        const title = document.getElementById("title");
        title.innerHTML = "Not Available";

    }
    
}



