const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

//USING ASYNC/AWAIT

async function generateJoke () {
    const config = {
        headers: {
            'Accept': 'Application/json'
        }
    }
    const resp = await fetch('https://icanhazdadjoke.com', config )
    const data = await resp.json()
    jokeEl.innerHTML = data.joke

}

//USING .THEN()

// function generateJoke () {
//     const config = {
//         headers: {
//             'Accept': 'Application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config )
//     .then(resp => resp.json())
//     .then(data => {
//         jokeEl.innerHTML = data.joke
//     })
// }


