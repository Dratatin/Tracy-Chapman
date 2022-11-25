import { Nav } from "./nav/Nav.js";
import { Player } from "./player/Player.js"
import { Article } from "./article/Article.js";
import { News } from "./news/News.js";

class App {
    static init() {
        new App(window.location.pathname);
    }
    constructor(url) {
        switch (url) {
            case '/':
            case '/index.html':
                this.launchNav();
                this.launchPlayer();
                break;
            case '/article.html':
                this.launchPlayer();
                this.launchArticle();
                break;
            case '/news.html':
                this.launchPlayer();
                this.launchNews();
                break;
            default:
                this.launchPlayer();
        }
    }
    launchNav() {
        new Nav();
    }
    launchPlayer() {
        new Player();
    }
    launchArticle() {
        new Article();
    }
    launchNews() {
        new News();
    }
}

App.init();


const appHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', appHeight)
appHeight()