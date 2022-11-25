export class VolumeRange {
    constructor(DOMvolumeCTN, DOMaudio) {
        this.DOMvolumeButton = DOMvolumeCTN.querySelector(".button-ctn__cta");
        this.DOMvolumeRange = DOMvolumeCTN.querySelector(".slider");
        this.DOMaudio = DOMaudio;
        this.state = "close"
        this.buttonEvent();
        this.inputEvent();
    }
    buttonEvent() {
        this.DOMvolumeButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.state === "close") {
                this.DOMvolumeRange.classList.remove("slider--hidden");
                this.state = "open";
            }
            else {
                this.DOMvolumeRange.classList.add("slider--hidden");
                this.state = "close";
            }
        });
    }
    inputEvent() {
        this.DOMvolumeRange.addEventListener("change", () => {
            this.DOMaudio.volume = this.DOMvolumeRange.value / 100;
        })
    }
}