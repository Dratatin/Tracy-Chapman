import { VolumeRange } from "./VolumeRange.js";

export class Player {
    constructor() {
        this.isPlaying = false;
        this.trackIndex = 0;
        this.updateTimer;
        this.DOMtrackName = document.querySelector("#track-name");
        this.DOMtrackSlider = document.querySelector("#track-slider");
        this.DOMcurrentTime = document.querySelector("#current-time");
        this.DOMtotalDuration = document.querySelector("#total-duration");
        this.track = document.createElement("audio");
        this.track.addEventListener("ended", this.launchNextTrack);

        this.launchTrack = this.launchTrack.bind(this);
        this.launchPlayPauseButton = this.launchPlayPauseButton.bind(this);
        this.setUpdate = this.setUpdate.bind(this)
        this.reset = this.reset.bind(this);

        this.launchTrack();
        this.launchVolumeRange();
        this.launchNextTrack();
        this.launchPreviousTrack();
        this.launchPlayPauseButton();
        this.launchPlayerRange();
    }
    playTrack() {
        clearInterval(this.updateTimer)
        this.isPlaying = true;
        this.track.play();
        this.updateTimer = setInterval(this.setUpdate, 1000);
    }
    launchTrack() {
        this.reset();

        this.track.src = music_list[this.trackIndex].audio;
        this.DOMtrackName.textContent = music_list[this.trackIndex].name + " - Tracy Chapman";
        this.DOMtotalDuration.textContent = music_list[this.trackIndex].duration;

        if (this.isPlaying) {
            this.playTrack();
        }
    }
    launchPlayerRange() {
        this.DOMtrackSlider.addEventListener("change", () => {
            const slideTo = this.track.duration * (this.DOMtrackSlider.value / 100);
            this.track.currentTime = slideTo;
        })
    }
    launchVolumeRange() {
        new VolumeRange(document.querySelector(".button-ctn--volume"), this.track)
    }
    launchNextTrack() {
        const button = document.querySelector("#next-track");
        button.addEventListener("click", () => {
            if (this.trackIndex < music_list.length - 1) {
                this.trackIndex += 1;
            }
            else {
                this.trackIndex = 0;
            }
            this.launchTrack()
        })
    }
    launchPreviousTrack() {
        const button = document.querySelector("#previous-track");
        button.addEventListener("click", () => {
            if (this.trackIndex != 0) {
                this.trackIndex -= 1;
            }
            else {
                this.trackIndex = music_list.length - 1;
            }
            this.launchTrack()
        })
    }
    launchPlayPauseButton() {
        const playPauseButton = document.querySelector(".button-ctn--play");
        const playIcon = playPauseButton.querySelector("#play");
        const pauseIcon = playPauseButton.querySelector("#pause");
        playPauseButton.addEventListener("click", () => {
            if (this.isPlaying == false) {
                this.playTrack();
                this.isPlaying = true;
                playIcon.classList.add("hide")
                pauseIcon.classList.remove("hide")
            }
            else {
                this.track.pause();
                this.isPlaying = false;
                playIcon.classList.remove("hide")
                pauseIcon.classList.add("hide")
            }
        })
    }
    setUpdate() {
        let seekPosition = 0;
        if (!isNaN(this.track.duration)) {
            seekPosition = this.track.currentTime * (100 / this.track.duration);
            this.DOMtrackSlider.value = seekPosition;

            let currentMinutes = Math.floor(this.track.currentTime / 60);
            let currentSecondes = Math.floor(this.track.currentTime - currentMinutes * 60);

            if (currentSecondes < 10) { currentSecondes = "0" + currentSecondes; }
            if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }

            this.DOMcurrentTime.textContent = currentMinutes + ":" + currentSecondes;
        }
    }
    reset() {
        this.DOMcurrentTime.textContent = "00:00";
        this.DOMtotalDuration.textContent = "00:00";
        this.DOMtrackSlider.value = 0;
    }
}

const music_list = [
    {
        name: "Give me one reason",
        audio: "../audio/GiveMeOneReason.mp3",
        duration: "04:07"
    },
    {
        name: "Fast car",
        audio: "../audio/FastCar.mp3",
        duration: "04:26"
    },
    {
        name: "Talkin' About A Revolution",
        audio: "../audio/TalkinAboutARevolution.mp3",
        duration: "02:54"
    }
]                                                          