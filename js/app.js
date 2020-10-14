'use strict'

var allItems = [];
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
// var imageContainer = document.getElementById('image-container');
var recentRandomItems = [];
var totalVotes = 0;

// Goal: render three pictures to the DOM
// allow users to vote on which item they like best
// keep track of votes
// keep track of views

function Items(filepath, itemName) {
  this.filepath = filepath;
  this.name = itemName;
  this.votes = 0;
  this.views = 0;

  allItems.push(this);
}
// need to add names, and path to img folder directly
new Items('img/bag.jpg', 'bag');
new Items('img/banana.jpg', 'banana');
new Items('img/bathroom.jpg', 'bathroom');
new Items('img/boots.jpg', 'boots');
new Items('img/breakfast.jpg', 'breakfast');
new Items('img/bubblegum.jpg', 'bubblegum');
new Items('img/chair.jpg', 'chair');
new Items('img/cthulhu.jpg', 'cthulhu');
new Items('img/dog-duck.jpg', 'dog-duck');
new Items('img/dragon.jpg', 'dragon');
new Items('img/pen.jpg', 'pen');
new Items('img/pet-sweep.jpg', 'pet-sweep');
new Items('img/scissors.jpg', 'scissors');
new Items('img/shark.jpg', 'shark');
new Items('img/sweep.png', 'sweep');
new Items('img/tauntaun.jpg', 'tauntaun');
new Items('img/unicorn.jpg', 'unicorn');
new Items('img/usb.gif', 'usb');
new Items('img/water-can.jpg', 'water-can');
new Items('img/wine-glass.jpg', 'wine-glass');



function render(imageElement) {
  var randomIndex = getRandomNumber(0, allItems.length - 1);
  while (recentRandomItems.includes(randomIndex)) {
    randomIndex = getRandomNumber(0, allItems.length - 1)
  }



  imageElement.src = allItems[randomIndex].filepath;
  imageElement.alt = allItems[randomIndex].name;
  imageElement.title = allItems[randomIndex].name;

  allItems[randomIndex].views++;

  if (recentRandomItems.length > 5) {
    recentRandomItems.shift();
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function handleClick(event) {
  var chosenTitle = event.target.title;

  for (var i = 0; i < allItems.length; i++) {
    if (chosenTitle === allItems[i].name) {
      allItems[i].votes++;
    }

  }

  render(imageOneElement);
  render(imageTwoElement);
  render(imageThreeElement)

  totalVotes++;
  if (totalVotes >= 25) {
    document.getElementById('image-container').removeEventListener('click', handleClick);
    var ulElement = document.getElementById('results');

    for (var i = 0; i < allItems.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${allItems[i].name} had ${allItems[i].votes} votes and was seen ${allItems[i].views} times.`;
      ulElement.appendChild(liElement);
    }
  }
}
// had to move these to the end because they didn't display!
document.getElementById('image-container').addEventListener('click', handleClick);

render(imageOneElement);
render(imageTwoElement);
render(imageThreeElement);
