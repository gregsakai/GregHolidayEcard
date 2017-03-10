var star = document.getElementById('star');
var reindeer = document.getElementById('reindeer');
var path = document.getElementById('path');
var gingerbreadhouse = document.getElementById('gingerbreadhouse');
var door = document.getElementById('door');

var numClicks = 0;

var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');

gingerbreadhouse.addEventListener('click', function(){
   console.log('clicked gingerbread house');
      // This part takes you to page 2
    page1.style.display = 'none';

    if (page2.style.display == 'block'){
        page2.style.display = 'none';
    } else {
      page2.style.display = 'block';
    }

});

door.addEventListener('click', function(){
   console.log('clicked door');
      // This part takes you back to page 1
    page2.style.display = 'none';

    if (page1.style.display == 'block'){
        page1.style.display = 'none';
    } else {
       page1.style.display = 'block';
     }

});

reindeer.addEventListener('click', function(){
  var reindeerfactcontainer = document.getElementById('reindeerfactcontainer');

  numClicks++;

  reindeerfactcontainer.innerHTML = 'Male reindeer shed their antlers around Christmas, so the reindeer pulling Santa’s sleigh are likely not male, but female or castrated.';
  console.log('displayed fact');
  reindeerfactcontainer.style.padding = '10px';

    if (reindeerfactcontainer.style.display == 'block'){
      reindeerfactcontainer.style.display = 'none';
    } else {
      reindeerfactcontainer.style.display = 'block';
    }

});

star.addEventListener('click', function(){
  var starfactcontainer = document.getElementById('starfactcontainer');

  page1.style.backgroundImage = "url('SVG_Images/nightbg.svg')";
  page1.style.backgroundRepeat = 'repeat';
  page1.style.backgroundSize = 'cover';
    console.log('Change background to night time');

  numClicks++;

  starfactcontainer.innerHTML = 'In A.D. 350, Pope Julius I, bishop of Rome, proclaimed December 25 the official celebration date for the birthday of Christ.';
    console.log('displayed fact');
  starfactcontainer.style.padding = '10px';

    if (starfactcontainer.style.display == 'block'){
      starfactcontainer.style.display = 'none';
    } else {
      starfactcontainer.style.display = 'block';
    }

});

path.addEventListener('click', function(){
  var pathfactcontainer = document.getElementById('pathfactcontainer');

  numClicks++;

  pathfactcontainer.innerHTML = 'The tradition of making gingerbread and building gingerbread houses was brought to America by early German settlers.';
    console.log('displayed fact');
  pathfactcontainer.style.padding = '10px';

    if (pathfactcontainer.style.display == 'block'){
      pathfactcontainer.style.display = 'none';
    } else {
      pathfactcontainer.style.display = 'block';
    }

});

// INSIDE THE GINGERBREAD HOUSE

var gbman = document.getElementById('gbman');
var housewindow = document.getElementById('housewindow');
var turkey = document.getElementById('turkey');

var rightarrow = document.getElementById('rightarrow');
var audio = document.getElementById('audio');
var gobble = 'gobble.mp3';

var numClicks = 0;

gbman.addEventListener('click', function(){
  var gbmanfactcontainer = document.getElementById('gbmanfactcontainer');
    console.log('clicked gingerbread man');

  numClicks++;

  gbmanfactcontainer.innerHTML = 'Queen Elizabeth I is believed to be responsible for the first gingerbread man as she had them made to resemble visiting dignitaries and then presented them to the dignitaries as a gift.';
    console.log('displayed fact');
  gbmanfactcontainer.style.padding = '10px';

    if (gbmanfactcontainer.style.display == 'block'){
      gbmanfactcontainer.style.display = 'none';
    } else {
      gbmanfactcontainer.style.display = 'block';
    }

});

housewindow.addEventListener('click', function(){
  var housewindowfactcontainer = document.getElementById('housewindowfactcontainer');
    console.log('clicked the window');

    numClicks++;

    housewindowfactcontainer.innerHTML = 'Each year more than 3 billion Christmas cards are sent in the U.S. alone.';
      console.log('displayed window fact');
    housewindowfactcontainer.style.padding = '10px';

    if (housewindowfactcontainer.style.display == 'block'){
      housewindowfactcontainer.style.display = 'none';
    } else {
      housewindowfactcontainer.style.display = 'block';
    }

});

turkey.addEventListener('click', function(){
  console.log('clicked turkey');

  audio.src = gobble;
  audio.play();

});

rightarrow.addEventListener('click', function(){
  console.log('clicked arrow');
  page2.style.display = 'none';

  if (page3.style.display == 'block'){
      page3.style.display = 'none';
  } else {
     page3.style.display = 'block';
   }
});

// LIVING ROOM WITH TREE AND PRESENTS

var tree = document.getElementById('tree');
var present1 = document.getElementById('present1');
var present2 = document.getElementById('present2');
var present3 = document.getElementById('present3');
// Navigation arrows
var leftarrow1 = document.getElementById('leftarrow1');
var rightarrow2 = document.getElementById('rightarrow2');

leftarrow1.addEventListener('click', function(){
  console.log('clicked left arrow');
  page3.style.display = 'none';

  if (page2.style.display == 'block'){
    page2.style.display = 'none';
  } else {
      page2.style.display = 'block';
  }
});

rightarrow2.addEventListener('click', function(){
  console.log('clicked right arrow');
  page3.style.display = 'none';

  if (page4.style.display == 'block'){
    page4.style.display = 'none';
  } else {
      page4.style.display = 'block';
  }
});

present1.addEventListener('click', function(){
  var present1factcontainer = document.getElementById('present1factcontainer');
    console.log('present 1 clicked');

    numClicks++;

    present1factcontainer.innerHTML = 'During the Christmas season, nearly 28 sets of LEGO are sold every second.';
      console.log('displayed fact');
    present1factcontainer.style.padding = '10px';

      if (present1factcontainer.style.display == 'block'){
        present1factcontainer.style.display = 'none';
      } else {
        present1factcontainer.style.display = 'block';
      }

});

present2.addEventListener('click', function(){
  var present2factcontainer = document.getElementById('present2factcontainer');
    console.log('present 2 clicked');

    numClicks++;

    present2factcontainer.innerHTML = 'Christmas purchases account for 1/6 of all retail sales in the U.S.';
      console.log('displayed fact');
    present2factcontainer.style.padding = '10px';

      if (present2factcontainer.style.display == 'block'){
        present2factcontainer.style.display = 'none';
      } else {
        present2factcontainer.style.display = 'block';
      }

});

present3.addEventListener('click', function(){
  var present3factcontainer = document.getElementById('present3factcontainer');
    console.log('present 2 clicked');

    numClicks++;

    present3factcontainer.innerHTML = 'In 1962, the first Christmas postage stamp was issued in the United States.';
      console.log('displayed fact');
    present3factcontainer.style.padding = '10px';

      if (present3factcontainer.style.display == 'block'){
        present3factcontainer.style.display = 'none';
      } else {
        present3factcontainer.style.display = 'block';
      }

});

var treestar = document.getElementById('treestar');

var light1 = document.getElementById('light1');
var light2 = document.getElementById('light2');
var light3 = document.getElementById('light3');
var light4 = document.getElementById('light4');
var light5 = document.getElementById('light5');
var light6 = document.getElementById('light6');
var light7 = document.getElementById('light7');
var light8 = document.getElementById('light8');
var light9 = document.getElementById('light9');

tree.addEventListener('mousemove', function(){
  console.log('clicked tree');
  var rgb = 10;
      rgb = rgb + 10;
      r = Math.round(Math.random()*255);
      g = Math.round(Math.random()*255);
      b = Math.round(Math.random()*255);
        light1.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
        light2.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
         light3.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
         light4.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
         light5.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
         light6.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
         light7.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
         light8.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
         light9.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
       });

// PAGE FOUR - OUTSIDE

var leftarrow2 = document.getElementById('leftarrow2');
var rightarrow3 = document.getElementById('rightarrow3');
var santahat = document.getElementById('santahat');
var bells = document.getElementById('bells');
var moon = document.getElementById('moon');

rightarrow3.addEventListener('click', function(){
  console.log('clicked right arrow');
  page4.style.display = 'none';

  if (page1.style.display == 'block'){
    page1.style.display = 'none';
  } else {
      page1.style.display = 'block';
  }
});

leftarrow2.addEventListener('click', function(){
  console.log('clicked left arrow');
  page4.style.display = 'none';

  if (page3.style.display == 'block'){
    page3.style.display = 'none';
  } else {
      page3.style.display = 'block';
  }
});

santahat.addEventListener('click', function(){
  var santahatfactcontainer = document.getElementById('santahatfactcontainer');
    console.log('clicked santa\'s hat');
});

bells.addEventListener('mouseover', function(){
  console.log('hovered over the bells');
    var jingle = 'jingle.mp3';
    audio.currentTime = 3;
    audio.src = jingle;
    audio.play();
});

moon.addEventListener('click', function(){
  var moonfactcontainer = document.getElementById('moonfactcontainer');
    console.log('clicked moon');

    numClicks++;

    moonfactcontainer.innerHTML = 'The traditional three colors of Christmas are green, red, and gold. Green has long been a symbol of life and rebirth; red symbolizes the blood of Christ, and gold represents light as well as wealth and royalty.';
      console.log('displayed fact');
    moonfactcontainer.style.padding = '10px';

      if (moonfactcontainer.style.display == 'block'){
        moonfactcontainer.style.display = 'none';
      } else {
        moonfactcontainer.style.display = 'block';
      }
});

santahat.addEventListener('click', function(){
  var santahatfactcontainer = document.getElementById('santahatfactcontainer');
    console.log('clicked moon');

    numClicks++;

    santahatfactcontainer.innerHTML = 'Christmas trees have been sold in the U.S. since 1850.';
      console.log('displayed fact');
    santahatfactcontainer.style.padding = '10px';

      if (santahatfactcontainer.style.display == 'block'){
        santahatfactcontainer.style.display = 'none';
      } else {
        santahatfactcontainer.style.display = 'block';
      }
});

var carrot = document.getElementById('carrot');
