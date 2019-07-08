let template = 
/*html*/`
<page-layout title="Trading Page">
    <div style="padding-left:16px">BTC Bid / Ask</div>
    <div style="padding-left:16px">ETH Bid / Ask</div>
</page-layout>
`

customElements.define('trade-layout', class TradeLayout extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = template;
    }
})

