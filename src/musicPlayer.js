
// All code is wrapped in window.addEventListener('load') because this vanilla JS file
// is imported into a React project. React renders the DOM asynchronously, so any
// document.querySelector calls at the top level would return null since the elements
// don't exist yet when the file first runs. Wrapping everything in 'load' ensures
// React has fully rendered the page before any DOM queries or event listeners execute.
window.addEventListener("load", () => {
  // variables making connections to DOM elements should go before function that will be using those connections
  const musicPlayer = document.querySelector(".musicPlayer");
  const trackNameDisplay = document.querySelector(".trackName");
  const playTrack = document.querySelector("#audioPlayer");
  const playPauseSwitch = document.querySelector(".playButton");

  let trackListIndex = 0;

  const trackList = [
    {
      name: "Kintsugi",
      file: "/media/Kintsugi.mp3",
    },
    {
      name: "Cope",
      file: "/media/Cope.mp3",
    },
  ];

  // don't need to pass trackList as parameter because I am not calling playTracks manually, the browser is calling it via the eventlistener click on the playbutton
  // as in, i am not calling playTracks(argument), the browser is calling playTracks(clickEvent)
  const playTracks = () => {
    // in order to access the objects within the trackList array, you have to target them explicitly which [trackListIndex] is doing
    // trackList.name will be undefined because there is no name property for the entire trackList array.
    // [trackListIndex] is dynamically rendering the current position within the trackList array - vs hardcoding [0] or [1]

    // console.log(trackList[trackListIndex].name);
    trackNameDisplay.innerText = trackList[trackListIndex].name;

    // this was originally playTrack.src = trackList[trackListIndex].file;
    // which continuously reset the src state, which always set the .paused to be true
    // so clicking the play button would always play despite the if else statement.
    // best way to debug would be to run this to see status
    // console.log("before src, paused =", playTrack.paused);
    // playTrack.src = trackList[trackListIndex].file;
    // console.log("after src, paused =", playTrack.paused);
    if (!playTrack.src) playTrack.src = trackList[trackListIndex].file;

    if (playTrack.paused) {
      playTrack.play();
      playPauseSwitch.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="1.5"
     stroke="currentColor"
     class="size-6">
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>
`;
    } else {
      playTrack.pause();
      playPauseSwitch.innerHTML = `
<svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>
`;
    }
  };

  const nextSong = () => {
    // this console.log is checking what the index is before clicking
    // console.log("before:", trackListIndex);

    trackListIndex++;
    // this console.log is checking to make sure increment is only 1
    // console.log("after:", trackListIndex);
    if (trackListIndex >= trackList.length) {
      trackListIndex = 0;
    }
    // console.log(trackListIndex);

    trackNameDisplay.innerText = trackList[trackListIndex].name;
    playTrack.src = trackList[trackListIndex].file;
    playTrack.play();
    // no if statement needed, set the icon after calling play() because the track will now be playing, so the button should display the pause icon
    playPauseSwitch.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="1.5"
     stroke="currentColor"
     class="size-6">
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>
`;
  };

  const previousSong = () => {
    trackListIndex--;

    if (trackListIndex < 0) {
      trackListIndex = trackList.length - 1;
    }
    // console.log(trackListIndex);
    playTrack.src = trackList[trackListIndex].file;
    playTrack.play();

    trackNameDisplay.innerText = trackList[trackListIndex].name;

    playPauseSwitch.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="1.5"
     stroke="currentColor"
     class="size-6">
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>
`;
  };

  // Arrow functions are not hoisted like function declarations,
  // so event listeners that reference them should be added after the function exists
  // Function declarations (function name(){}) ARE hoisted, which is why older examples
  // sometimes attach listeners before the function appears in the file
  document.querySelector(".playButton").addEventListener("click", playTracks);
  document.querySelector(".nextButton").addEventListener("click", nextSong);
  document
    .querySelector(".previousButton")
    .addEventListener("click", previousSong);
});
