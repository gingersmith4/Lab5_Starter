// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  /*  
  On page load, all of the available voices that you can use for your SpeechSynthesizer 
  should be loaded and populate the “Select Voice” dropdown. 
  (These are browser specific, so you might get different ones browser to browser).
    */

  /* We referenced code from this site: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
  */
 
  const synth = window.speechSynthesis;
  let menu = document.getElementById("voice-select");

  synth.addEventListener("voiceschanged", () => {
    let voices = speechSynthesis.getVoices();
    let length = voices.length;
    for(let i = 0; i < length; i++)
    {
      let option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);

      menu.appendChild(option);
    }
});

    //TODO
    /*
    When you click the “Press to Talk” button, the following should happen:
The text that you have typed into the “Text to speak here” 
textarea should be spoken out loud using the voice that you have selected
    */
//We referenced this code: ://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let talkButton = document.querySelector('button');
talkButton.addEventListener("click", playAudio);
function playAudio() {
  var text = document.getElementById("text-to-speak").value;  
  console.log(text);
  const sayThis = new SpeechSynthesisUtterance(text);
  synth.voice = menu.value;
  console.log(synth.voice);
synth.speak(sayThis);

}

//TODO 
/*
Only while the synthesizer is speaking, the face
 should swap to being open mouthed (included in the images folder)
*/

}