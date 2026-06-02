const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the computer go to the doctor? It caught a virus!",
    "Why was the math book sad? Because it had too many problems.",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why did the student eat his homework? Because the teacher said it was a piece of cake!",
    "What do you call a fake noodle? An impasta!",
    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    "Why did the bicycle fall over? Because it was two-tired!"
];

const joketext=document.getElementById("joke");
const btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    const randomIndex=Math.floor(Math.random()*jokes.length);
    joketext.textContent =jokes[randomIndex];
})