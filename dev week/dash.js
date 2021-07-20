mapboxgl.accessToken =
"pk.eyJ1Ijoic2hyZXlhczAwMSIsImEiOiJja3I0d2NteDYwa3g4Mm9sdDhkY3F5YXVoIn0.B3PcACMzWFNe5V_IDiSUCw"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}


playlist=["song.mp3","song2.mp3","song3.mp3"]
poster=["wedonttalk.jpg","nightchanges.jpg","dragmedown.jpg"]
title=["We Don't Talk Anymore","Night Changes","Drag Me Down"]
playlist_index=0;

song_name.innerHTML=title[playlist_index];

var audio=new Audio();
audio.src = playlist[playlist_index]
playbtn = document.getElementById("playpausebtn");
playbtn.addEventListener("click",playPause);




function music_nav()
{
  var map=document.getElementById('map');
  var music=document.getElementById('music');
  map.style.transition= "width 0.75s";
  map.style.width="40%";
  map.style.height="84vh";
  
 
 

}




function dir_nav()
{
  var dir=document.getElementById('map');
  var music=document.getElementById('music');
  map.style.transition="width 1s";
  map.style.width="70%";
  map.style.height="84vh";
  

  

}






var count=0.2;
var x=document.getElementById('audio');

function volumeup()
{
  count=count + 0.2;
  if(count<=1)
  x.volume= count;
}

function volumedown()
{
  count=count - 0.2;

  if(count>=0.0);
  x.volume=count;
}




function nextmusic()
{
  playlist_index++;
  if(playlist_index == (playlist.length)){
    playlist_index = 0;}
  document.getElementById("musicImage").src=poster[playlist_index];
  audio.src=playlist[playlist_index];
  song_name.innerHTML = title[playlist_index];
  playPause();
  

}


function previousmusic()
{
  playlist_index--;
  if(playlist_index<0)
  {
    playlist_index=0;
  }

  audio.src=playlist[playlist_index];
  playPause();
  
  song_name.innerHTML = title[playlist_index];
  document.getElementById("musicImage").src=poster[playlist_index];

}


function playlistmusic1()
{
  playlist_index=0;
  audio.src=playlist[playlist_index];
  song_name.innerHTML = title[playlist_index];
  document.getElementById("musicImage").src=poster[playlist_index];
  var image=document.getElementById('musicImage');
image.style.animation="rotate 8s infinite linear";
  
playPause();
  
} 

function playlistmusic2()
{
  playlist_index=1;
  audio.src=playlist[playlist_index];
  song_name.innerHTML = title[playlist_index];
  document.getElementById("musicImage").src=poster[playlist_index];
  var image=document.getElementById('musicImage');
image.style.animation="rotate 8s infinite linear";
playPause();
  
}  



function playlistmusic3()
{
  playlist_index=2;
  audio.src=playlist[playlist_index];
  song_name.innerHTML = title[playlist_index];
  document.getElementById("musicImage").src=poster[playlist_index];
  var image=document.getElementById('musicImage');
image.style.animation="rotate 8s infinite linear";
playPause();
  
}  

function playPause(){
  var image=document.getElementById('musicImage');
image.style.animation="rotate 8s infinite linear";
  if(audio.paused){
      audio.play();
      document.querySelector(".playpause").classList.add("active");
  }else{
      audio.pause();
      document.querySelector(".playpause").classList.remove("active");
  }
}
