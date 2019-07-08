let template = 
/*html*/`
<page-layout title="Contact Page">
    <div style="padding-left:16px">info@crypto.com</div>
</page-layout>
`

customElements.define('contact-layout', class ContactLayout extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = template;
    }
})

