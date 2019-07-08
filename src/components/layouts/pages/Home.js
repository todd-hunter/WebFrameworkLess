let template = 
/*html*/`
<page-layout title="Home Page">
    <div style="padding-left:16px">Welcome to Crypto Land :)</div>
</page-layout>
`

customElements.define('home-layout', class HomeLayout extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = template;
    }
})

