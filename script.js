const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var titles = ["Jump to 100","Encompass","Conway's Game of Life","Chatbot","Coming soon.","Coming soon."];
var images = ["images/walljump.png","images/encompass.png","images/gameoflife.png","images/chatbot.png"];
var links = ["https://jaehayi25.github.io/JumpTo100/","https://jaehayi25.github.io/Encompass/","https://jaehayi25.github.io/GameOfLife/","https://jaehayi.com/chatbot/"];

for (var i = 0; i < titles.length; i++) {
    const cell = document.createElement('a');
    cell.setAttribute('class', 'cell');
    cell.href = links[i];
    cell.target = "_blank";

    const h2 = document.createElement('h2');
    h2.textContent = titles[i];

    const thumbnail = document.createElement('img');
    thumbnail.src = images[i]; 

    cell.appendChild(h2);
    cell.appendChild(thumbnail);

    container.appendChild(cell); 
}

