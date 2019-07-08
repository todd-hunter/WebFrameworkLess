let template =
/*html*/`
<div>
    <div class="topnav" id="NavBar">
        <a href="#/home" class="active">Home</a>
        <a href="#/trade">Spot</a>
        <a href="#/future">Futures</a>
        <a href="#/trade">Pump & Dump</a>
        <a href="#/contact">Contact</a>
        <a href="#/about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>

    <script>
        function myFunction() {
            var x = document.getElementById("NavBar");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    </script>
</div>
`

class TopNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = template;
    }
}

customElements.define('top-nav', TopNav)
