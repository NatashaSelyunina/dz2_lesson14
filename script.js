const textRandomJokeQuestion = document.getElementById('textRandomJokeQuestion');
const textRandomJokeAnswer = document.getElementById('textRandomJokeAnswer');

async function getRandomJoke() {
    const result = await fetch('https://official-joke-api.appspot.com/random_joke');
    const object = await result.json();
    const { setup, punchline } = object;
    textRandomJokeQuestion.textContent = `${setup}`;
    textRandomJokeAnswer.textContent = `${punchline}`;
}

getRandomJoke();