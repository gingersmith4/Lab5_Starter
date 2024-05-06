// expose.js

window.addEventListener('DOMContentLoaded', init);
let audioChoice = "";

function init() {
  console.log("hello");
  /* When you select a horn from the drop down menu, the following should occur:
  The correct image should display
  The correct audio sound file should be set 
  */
  const horn = document.getElementById("horn-select");
  horn.addEventListener("input", updateHorn);
  let choice = horn.value;

  function updateHorn() {
    choice = horn.value;
    console.log(choice);
    let choiceImage = document.querySelector('img');
    let imgPath = "assets/images/" + choice + ".svg";
    choiceImage.src = imgPath;
    let audioPath = "assets/audio/" + choice + ".mp3";
    audioChoice = audioPath;
  }

  /* 
  When you change the volume on the slider, the following should occur:
    At zero volume, the mute icon (level 0) should be displayed
    From 1 to < 33 volume the first volume level should be displayed
    From 33 to < 67 volume the second volume level should be displayed
    From 67 and up the third volume level should be displayed
    The correct volume icon should be set
    The corresponding volume should be set for the audio element 
    (note: this element’s volume is not out of 100, it's out of 1)
  */
  let audioPlayer = document.getElementsByClassName("hidden")[0];
  let audio = document.getElementById("volume");
  audio.addEventListener("input", updateAudio);
  function updateAudio() {
    let currVolume = audio.value;
    let soundImg = document.getElementById("volume-controls").querySelector('img');
    if(currVolume == 0) {
      soundImg.src = "assets/icons/volume-level-0.svg";
    } else if(currVolume < 33) {
      soundImg.src = "assets/icons/volume-level-1.svg";
    } else if (currVolume < 67) {
      soundImg.src = "assets/icons/volume-level-2.svg";
    } else {
      soundImg.src = "assets/icons/volume-level-3.svg";
    }
    audioPlayer.volume = currVolume / 100;
  }

  /*  
  When you click the “Play Sound” button the following should occur:
    The corresponding sound for the horn selected should play out loud at the specified volume
    If the Party Horn is selected, confetti should shoot out out, as shown in the video
  */
 let soundButton = document.querySelector('button');
 soundButton.addEventListener("click", playAudio);
 function playAudio() {
  console.log(audioPlayer);
  let audioPath = "assets/audio/" + choice + ".mp3";
  audioPlayer.src = audioPath;
  audioPlayer.play();
  if(choice == "party-horn"){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }

 }
}