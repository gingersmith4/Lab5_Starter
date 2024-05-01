// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  /* When you select a horn from the drop down menu, the following should occur:
  The correct image should display
  The correct audio sound file should be set 
  */
  const horn = document.getElementById("horn-select");
  horn.addEventListener("input", updateValue);

function updateValue() {
  let choice = horn.target.value;
  img = choice.svg;
}


  /* When you change the volume on the slider, the following should occur:
    At zero volume, the mute icon (level 0) should be displayed
    From 1 to < 33 volume the first volume level should be displayed
    From 33 to < 67 volume the second volume level should be displayed
    From 67 and up the third volume level should be displayed
    The correct volume icon should be set
    The corresponding volume should be set for the audio element 
    (note: this element’s volume is not out of 100, it's out of 1)
  */

  /*
  When you click the “Play Sound” button the following should occur:
    The corresponding sound for the horn selected should play out loud at the specified volume
    If the Party Horn is selected, confetti should shoot out out, as shown in the video
  */

  // Source: mozilla This handler will be executed every time the cursor
  // is moved over a item
  const test = document.getElementById("expose");
  test.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "orange";

      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false,
  );
}