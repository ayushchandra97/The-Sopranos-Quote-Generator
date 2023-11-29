var quote = document.querySelector('.quote');
var person = document.querySelector('.person');
var button = document.querySelector('.btn');

var quotes = [{quote:`"You don't ever admit the existence of this 'thing' ever!"`, person:`Phil Leotardo`}, {quote:`"It's not a nursing home! It's a retirement community."`, person:`Tony Soprano`}, {quote:`"Some people take pleasure in the simple doing of things."`, person:`Dr.Jennifer Melfi`}, {quote:`"In my thoughts, I used a technique of positive visualization. How come I always feel undermined?"`, person:`Christopher Moltisanti`}, {quote:`"A grown man made a wager. He lost. He made another one—he lost again. End of story."`, person:`Tony Soprano`}, {quote:`"A wrong decision is better than indecision."`, person:`Carmela Soprano`}, {quote:`"Your mother was working the bonbon concession at the Eiffel Tower."`, person:`Paulie "Walnuts" Gualtieri`}, {quote:`"I was born, grew up, spent a few years in the Army, a few more in the can. And here I am. A half a wise guy. So what?"`, person:`Paulie "Walnuts" Gualtieri`}, {quote:`"I find I have to be the sad clown: laughing on the outside, crying on the inside."`, person:`Tony Soprano`}, {quote:`"Discontinue the lithium."`, person:`Dr.Jennifer Melfi`}];

var newQuote = button.addEventListener('click', function() {
    var random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})


