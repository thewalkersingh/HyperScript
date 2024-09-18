const soundMap = {
    'w': 'Resources/tom-1-28537.mp3',
    'a': 'Resources/tom-2-28541.mp3',
    's': 'Resources/tom-3-28542.mp3',
    'd': 'Resources/tom-4-28543.mp3',
    'j': 'Resources/snare-28545.mp3',
    'k': 'Resources/crash-28546.mp3',
    'l': 'Resources/kick-bass-28547.mp3'
};
// function to play sound
function playSound(key) {
    const soundUrl = soundMap[key];
    if (soundUrl) {
        const audio = new Audio(soundUrl);
        audio.play();
    }
}

// function to handle button click
function handleButtonClick() {
    const key = this.textContent;
    playSound(key);
}

// adding event listener to button
const button = document.querySelectorAll(".drum");
button.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// handling key press
function handleKeyPress(event) {
    const key = event.key;
    playSound(key);
}

// add event listener for key press
document.addEventListener('keypress', handleKeyPress);