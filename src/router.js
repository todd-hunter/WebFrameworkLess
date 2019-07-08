import './components/layouts/pages/Home';
import './components/layouts/pages/Trade';
import './components/layouts/pages/Future';
import './components/layouts/pages/Contact';
import route from 'riot-route';
route.base('/#/');

export default (app) => {

    let App = window.document.getElementById(app);

    route.stop() // clear all the old router callbacks
    route.start(true) // start again
    route('home')

    route(function (urlPart1, urlPart2, urlPart3) {

        console.log({ urlPart1 }, { urlPart2 }, { urlPart3 })

        App.childNodes.forEach(element => {
            element.remove();
        });

        let layout = document.createElement('fourzerofour-layout');

        switch (urlPart1) {
            case 'home':
                layout = document.createElement('home-layout');
                break;
            case 'trade':
                layout = document.createElement('trade-layout');
                break;
            case 'future':
                layout = document.createElement('future-layout');
                break;
            case 'contact':
                layout = document.createElement('contact-layout');
                break;
            default:
                layout = document.createElement('fourzerofour-layout');
                break;
        }

        App.appendChild(layout);
    })

    return route;
}