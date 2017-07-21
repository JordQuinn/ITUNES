/*
  Here is a rough idea for the steps you could take:
*/

//https://itunes.apple.com/search?media=music&term=`${}`
//<script src="https://.../search?parameterkeyvalue&callback="{name of JavaScript function in webpage}"/>


// 1. First select and store the elements you'll be working with

let audio = document.getElementsByClassName("music-player")
let search = document.getElementsByClassName("search")
let results = document.getElementsByClassName("results")
let player = document.querySelector('.player')

function submit(){

var input = document.getElementById('query').value
  fetch(
    "https://itunes.apple.com/search?media=music&term="+`${input}`
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);

        return;
      }
      response.json().then(function(data) {
        console.log("test", response.url);
        console.log(data)
        displayInfo(data)//calling the function of "data" to get the data to display
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });

}
let container = document.querySelector(".results")// this is a variable for the querySelector
function displayInfo(data){//create a fucntion to  grab the data from above and chuck it into the div
let list = " ";


data.results.forEach(function(item) {

list +=`<div class="boxes"><img id = "art" src="${item.artworkUrl100}"/>
<div id = "aname">${item.artistName}</div>
<div id = "iname">${item.trackName}</div>
<div id = "cname">${item.collectionName}</div>
<audio class="music-player" controls="controls" src="${item.previewUrl}"></audio></div>`;

});

container.innerHTML = list
}

// 2. Create your `submit` event for getting the user's search term

// 3. Create your `fetch` request that is called after a submission

// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
