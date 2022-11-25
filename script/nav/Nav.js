import { ScrollButton } from "../scroll/ScrollButton.js";

export class Nav {
    constructor() {
        this.launchNavButton();
    }
    launchNavButton() {
        const scrollTopButton = new ScrollButton(document.querySelector(".side-nav__arrow--up"), document.querySelector("#firstItem"));
        const scrollDownButton = new ScrollButton(document.querySelector(".side-nav__arrow--down"), document.querySelector("#lastItem"));
    }
}