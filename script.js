const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the coffee file a police report? It got mugged!",
    "Why was the computer cold? It left its Windows open!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "Why did the programmer quit his job? Because he didn't get arrays!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why was the stadium so cool? It was filled with fans!",
    "Why did the keyboard break up with the mouse? It felt clicked on.",
    "Why was the belt arrested? For holding up a pair of pants!",
    "Why did the student bring a ladder to school? Because he wanted to go to high school!",
    "Why did the cookie go to the doctor? Because it felt crummy!",
    "Why do Java developers wear glasses? Because they can't C#!",
    "Why was the computer tired when it got home? It had a hard drive!",
    "Why did the smartphone need glasses? It lost all its contacts!",
    "Why was six afraid of seven? Because seven eight nine!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why can't your nose be 12 inches long? Because then it would be a foot!"
];

const joketext=document.getElementById("joke");
const btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    const randomIndex=Math.floor(Math.random()*jokes.length);
    joketext.textContent =jokes[randomIndex];
})