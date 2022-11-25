export class HorizontalScroll {
    constructor(DOMscrollBlock) {
        this.DOMscrollBlock = DOMscrollBlock;
        this.launchHorizontalScroll();
    }
    launchHorizontalScroll() {
        this.DOMscrollBlock.addEventListener("wheel", (e) => {
            e.preventDefault();
            this.DOMscrollBlock.scrollLeft += e.deltaY;
        });
    }
}