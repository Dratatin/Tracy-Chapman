export class ScrollButton {
    constructor(DOMscrollButton, DOMscrollItem) {
        this.DOMscrollButton = DOMscrollButton;
        this.DOMscrollItem = DOMscrollItem;
        this.buttonEvent()
    }
    buttonEvent() {
        this.DOMscrollButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.DOMscrollItem.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}