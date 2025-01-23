document.addEventListener("DOMContentLoaded", () => {
    const jokeBtn = document.getElementById('new-joke-btn');
    const speakJokeBtn = document.getElementById('speak-joke-btn');
    const memeBtn = document.getElementById('new-meme-btn');
    const jokeContainer = document.getElementById('joke');
    const memeContainer = document.getElementById('meme');
    const apiKey = '28fcfcdedd1a412fb304ecaec7873801';

    jokeBtn.addEventListener('click', fetchJoke);
    speakJokeBtn.addEventListener('click', speakJoke);
    memeBtn.addEventListener('click', fetchMeme);

    async function fetchJoke() {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any');
            const data = await response.json();
            if (data.type === 'single') {
                jokeContainer.textContent = data.joke;
            } else {
                jokeContainer.innerHTML = `${data.setup} <br> ${data.delivery}`;
            }
        } catch (error) {
            jokeContainer.textContent = 'Oops! Something went wrong. Please try again later.';
        }
    }

    function speakJoke() {
        const jokeText = jokeContainer.textContent || jokeContainer.innerText;
        const speech = new SpeechSynthesisUtterance(jokeText);
        speechSynthesis.speak(speech);
    }

    async function fetchMeme() {
        try {
            const response = await fetch('https://api.humorapi.com/memes/random', {
                headers: { 'x-api-key': apiKey }
            });
            const data = await response.json();
            memeContainer.src = data.url;
            memeContainer.style.display = 'block';
        } catch (error) {
            memeContainer.alt = 'Oops! Something went wrong. Please try again later.';
            memeContainer.style.display = 'block';
        }
    }    

    fetchJoke();
});


// // API Ninjas
// document.addEventListener("DOMContentLoaded", () => {
//     const jokeBtn = document.getElementById('new-joke-btn');
//     const speakJokeBtn = document.getElementById('speak-joke-btn');
//     const jokeContainer = document.getElementById('joke');
//     const apiKey = '0G266pTxxNbV1Ea2D9R2Ng==vC0Hsne52imZqkq0';

//     jokeBtn.addEventListener('click', fetchJoke);
//     speakJokeBtn.addEventListener('click', speakJoke);

//     async function fetchJoke() {
//         try {
//             const response = await fetch('https://api.api-ninjas.com/v1/jokes', {
//                 headers: { 'X-Api-Key': apiKey }
//             });
//             const data = await response.json();
//             if (data.length > 0) {
//                 jokeContainer.textContent = data[0].joke;
//             } else {
//                 jokeContainer.textContent = 'No jokes available at the moment. Please try again later.';
//             }
//         } catch (error) {
//             jokeContainer.textContent = 'Oops! Something went wrong. Please try again later.';
//         }
//     }

//     function speakJoke() {
//         const jokeText = jokeContainer.textContent || jokeContainer.innerText;
//         const speech = new SpeechSynthesisUtterance(jokeText);
//         speechSynthesis.speak(speech);
//     }

//     fetchJoke();
// });
