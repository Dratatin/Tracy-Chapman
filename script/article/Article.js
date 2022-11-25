import { ScrollButton } from "../scroll/ScrollButton.js";
import { HorizontalScroll } from "../scroll/HorizontalScroll.js";

export class Article {
    constructor() {
        this.DOMscrollHorizontal = document.querySelector(".article__wrapper");
        this.DOMscrollButton = document.querySelector("#articleScroll");
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