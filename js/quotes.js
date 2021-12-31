const quotes = [
  {
    quote : "We cannot always build the future for our youth, but we can build our youth for the future.",
    author : "Franklin D. Roosevelt",
  },
  {
    quote : "To my embarrassment I was born in bed with a lady.",
    author : "Wilson Mizner",
  },
  {
    quote : "The merit of an action lies in finishing it to the end.",
    author : "Genghis Khan",
  },
  {
    quote : "The direction in which education starts a man will determine his future life.",
    author : "Plato",
  },
  {
    quote : "Blaze with the fire that is never extinguished.",
    author : "Luisa Sigea",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;