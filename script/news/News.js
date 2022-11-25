import { ScrollButton } from "../scroll/ScrollButton.js";
import { HorizontalScroll } from "../scroll/HorizontalScroll.js";

export class News {
    constructor() {
        this.DOMscrollHorizontal = document.querySelector(".news__wrapper");
        this.DOMscrollButton = document.querySelector("#newsScroll");
        this.DOMscrollTo = document.querySelector("#start");
        this.launchScrollButon();
        this.launchHorizontalScroll();
    }
    launchScrollButon() {
        new ScrollButton(this.DOMscrollButton, this.DOMscrollTo)
    }
    launchHorizontalScroll() {
        new HorizontalScroll(this.DOMscrollHorizontal)
    }
}