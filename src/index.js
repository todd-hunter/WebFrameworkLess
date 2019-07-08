import 'w3-css/w3.css';
import './components/layouts/TopNav';
import Router from './router';
import { Broker } from './messaging';


((window) => {
  let template =
      /*html*/`
      <top-nav id='mainnavbar'></top-nav>
      <div class="w3-content" style="max-width:2000px;margin-top:46px">
        <div id="app"></div>
      </div>
      `

  customElements.define('app-layout', class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = template;
    }

    disconnectedCallback() {
    }

  })

  //setup globals
  window.$router = Router("app") //sets where content is loaded to

})(window)
