'use strict'

var allItems = [];
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
var imageContainer = document.getElementById('image-container');
var recentRandomItems = [];

// Goal: render three pictures to the DOM
// allow users to vote on which item they like best
// keep track of votes
// keep track of views

function Items(filepath, itemName) {
  this.filepath = filepath;
  this.name = itemName;
  this.votes = 0;

  allItems.push(this);
}

new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/bag.jpg', 'Bag');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/banana.jpg', 'banana');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/bathroom.jpg', 'bathroom');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/boots.jpg', 'boots');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/breakfast.jpg', 'breakfast');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/bubblegum.jpg', 'bubblegum');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/chair.jpg', 'chair');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/cthulhu.jpg', 'cthulhu');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/dog-duck.jpg', 'dog-duck');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/dragon.jpg', 'dragon');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/pen.jpg', 'pen');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/pet-sweep.jpg', 'pet-sweep');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/scissors.jpg', 'scissors');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/shark.jpg', 'shark');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/sweep.png', 'sweep');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/tauntaun.jpg', 'tauntaun');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/unicorn.jpg', 'unicorn');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/usb.gif', 'usb');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/water-can.jpg', 'water-can');
new Items('https://raw.githubusercontent.com/codefellows/seattle-201d68/master/class-11/lab-assets/wine-glass.jpg', 'wine-glass');



function GenerateImage(name) {
  this.name = name;
  this.capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  if (name === 'usb') {
    this.ext = '.gif';
  } else if (name === 'sweep') {
    this.ext = '.png';
  } else {
    this.ext = '.jpg';
  }
  this.filepath = 'img/' + this.name + this.ext;
  this.clicked = 0;
  this.viewed = 0;
  GenerateImage.all.push(this);
}
GenerateImage.numberDisplayed = 3;
GenerateImage.maxClicked = 25;
GenerateImage.clicked = 0;
GenerateImage.imageElement = [];
GenerateImage.createImgElement = function () {
  var imageContainer = document.getElementById('images');
  for (var i = 0; i < GenerateImage.numberDisplayed + 1; i++) {
    var imageElement = document.createElement('img');
    imageElement.src = '';
    imageContainer.appendChild(imageElement);
    GenerateImage.imageElement.push(imageElement.id)
  }
}();

GenerateImage.indicesUsed = [];

GenerateImage.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum',
  'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep',
  'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

GenerateImage.all = [];

// function render(imageElement) {
//   var randomIndex = getRandomNumber(0, allItems.length - 1);

//   while (recentRandomItems.includes(randomIndex)) {
//     randomIndex = getRandomNumber(0, allItems.length - 1);
//   }


//   imageElement.src = allItems[randomIndex].filepath;
//   imageElement.alt = allItems[randomIndex].name;
//   imageElement.title = allItems[randomIndex].name;

//   recentRandomItems = [];
//   recentRandomItems.push(randomIndex);

// }



// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }


// imageContainer.addEventListener('click', function (event) {
//   render(imageOneElement);
//   render(imageTwoElement);
//   render(imageThreeElement);
//   // debugger;
//   var chosenItem = event.target.title;
//   for (var i = 0; i < allItems.length; i++) {
//     if (chosenItem === allItems[i].name) {
//       console.log('increase vote for ', allItems[i].name);
//       allItems[i].votes++;
//     }
//   }

//   //   function sum() {
//   //     var total = 0;
//   //     for (var i = 0; i = allItems[i]; i++) {
//   //       total += this[i][prop]
//   //     }
//   //     return total;
//   //   }
//   //   console.log(total);
// });

// render(imageOneElement);
// render(imageTwoElement);
// render(imageThreeElement);