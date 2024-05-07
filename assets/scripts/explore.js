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
  synth.addEventListener("voiceschanged", () => {
    let voices = speechSynthesis.getVoices();
    let length = voices.length;
    for(let i = 0; i < length; i++)
    {
      let option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);

      document.getElementById("voice-select").appendChild(option);
    }
});

    //TODO
    /*
    When you click the “Press to Talk” button, the following should happen:
The text that you have typed into the “Text to speak here” 
textarea should be spoken out loud using the voice that you have selected
    */


//TODO 
/*
Only while the synthesizer is speaking, the face
 should swap to being open mouthed (included in the images folder)
*/

}