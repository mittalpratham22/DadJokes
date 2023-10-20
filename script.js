{/* <div id="joke" class="joke">Joke is loading...</div> */}
{/* <button id="jokeBtn" class="btn">Next Joke</button> */}

// Promises
// 2 condition => success or fail
// GET https://icanhazdadjoke.com/

const jokes=document.querySelector('#joke');
const jokeBtn=document.querySelector('#jokeBtn');

// // PROMISES
// const generateJokes=()=>{
//     const setHeader={
//         headers:{
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/',setHeader).then((res) => res.json() )
//     .then((data)=>{
//         jokes.innerHTML=data.joke;
//     }).catch((error)=>{
//         console.log(error);
//     })

//     // If fetch() is able to get the data from API then, then() functions are followed otherwise 
// }



// ASYNC AWAIT

const generateJokes = async () => {  //async keyword
    try{  //async await has default error handling using try-catch block instead of .catch() keyword in promises
        const setHeader={
            headers:{
                Accept: "application/json"
            }
        }
    
        const res = await fetch('https://icanhazdadjoke.com/',setHeader);
        const data = await res.json(); //used instead of .then() keyword in promises
        jokes.innerHTML=data.joke;
    }
    catch(err){
        console.log(`the error is ${err}`);
    }

    

    // If fetch() is able to get the data from API then, then() functions are followed otherwise 
}



jokeBtn.addEventListener('click',generateJokes);
generateJokes();