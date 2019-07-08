let template = 
/*html*/`
<page-layout title="Future Page">
    <div style="padding-left:16px">BTC 3mth Curve</div>
    <div style="padding-left:16px">BTC 6mth Curve</div>
    <div style="padding-left:16px">BTC 9mth Curve</div>
    <div style="padding-left:16px">BTC 12mth Curve</div>
    <div style="padding-left:16px">ETH 3mth Curve</div>
</page-layout>
`

customElements.define('future-layout', class FutureLayout extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = template;
    }
})

