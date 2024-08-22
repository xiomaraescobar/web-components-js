class myElement extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
            <h2 class="title">hola mundo</h2>  
            <div>
            <p>soy un texto de ejemplo</p>
            </div>    
            </section>
            ${this.getStyles()} variable para declarar estilos
        `;
        return template;
    }
    getStyles() {
        return `
        <style>
            h2 {
                color: red;
            }
        </style>
        `;
    }
    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("my-element", myElement); 