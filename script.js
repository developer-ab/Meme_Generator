// javascript code for meme_generator

// selecting the required elements.
const button = document.getElementById("button");
const input = document.getElementById("inputBox");
const count = document.getElementById("inputBoxCount");
const mainDiv = document.querySelector(".container");

// seting the eventlistner for the button.
button.addEventListener('click', (e)=> {
     generate_meme(); // fuction call
}, false);

// function definition in which we fetch the data and generate the HTML elements dynamically.
async function generate_meme(){

    if (count.value > 50){

        mainDiv.innerHTML = "";
        const error = document.createElement("img");
        error.src = "/4042.jpg";
        mainDiv.appendChild(error);
        alert("You have to study too. Decrease the meme count");        
        return;
        
    }

    const raw_data = await fetch(`https://meme-api.com/gimme/${input.value}/${count.value}`);
    console.log(raw_data.status);
    console.log(raw_data.ok);
    if(raw_data.ok){
        const data = await raw_data.json();
        
        mainDiv.innerHTML = "";

        for (let i = 0; i < count.value; i++) {

            const kuch = document.createElement("div");
            kuch.classList.add("main");

            const title = document.createElement('p');
            title.classList.add('title_name');
            title.textContent = `Title - ${data.memes[i].title}`;

            const image = document.createElement("a");
            image.classList.add("meme_space");
            image.href = data.memes[i].url;
            image.target = "_blank";
            image.innerHTML = `<img src="${data.memes[i].url}" alt="MEME" ></img>`;
            
            const creator = document.createElement("p");
            creator.classList.add("meme_creator");
            creator.textContent = `(${i+1}) Created by - ${data.memes[i].author}`;
            
            kuch.appendChild(title);
            kuch.appendChild(image);
            kuch.appendChild(creator);
            mainDiv.appendChild(kuch);  
        }

    }else{

        mainDiv.innerHTML = "";
        const error = document.createElement("img");
        error.src = "/404.jpg";
        mainDiv.appendChild(error);
    }
    
}






















// React is an open-sourse front-end framework.
// REact introduces JSX, or avascript XML 
// JSX can be used to create React components

// Reacrjs, a javascript library for creating user infaces makes development of ui components easy and modular.

// Key features
// 1 component based architecture
// 2 virtual dom
// 3 .unidirectional data flow
// 4 JSX syntax
// 5 SEO performance

// React vs angular
// React vs JsXml

// Rect is asamll library, covers only the rendering and event handling part, presentation code in javascript powered by JSX, core size is smaller than the angular so fast, very flexible, greate performace since it uses Virtual DOM.
// Angular is a framework, provides the complete solution for the frontend development, presentation code in HTML embaded with javascript expression, it being a framwork contain a lot of code rresulting in longer load time, less flexible, uses actula dom which affect the performance. 

// rect components
// what is jsx
// mvc framework