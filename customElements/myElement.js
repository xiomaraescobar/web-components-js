const template = document.createElement("div");
template.innerHTML = `
  <style>
  .texto {
     color: red
  }
  p {
    color: blue;
  }
</style>
<p class="texto"> hola mundo 2 !!</p>
<p>texto ejemplo</p>
`;

class myElement extends HTMLElement { // se crea una clase myElement sin espacios se le hace una extension  a la api que nos ayuda a crear un custom element (una etiqueta) se le agrega un constructor
    constructor() { // este es el constructor
        super(); // este super se le coloca porque estamos heredando de una clase entonces necesitamos acceder a los metodos de htmlelement
       
        this.p = document.createElement("p");//generamos nodos que se puedan utilizar dentro del componente
    }
    connectedCallback() { // visualizar la etiqueta 
        this.p.textContent = "hola mundo!!";//llamamos la variable
        this.appendChild(this.p);// agregar al dom a nuestra etiqueta con el appenchild
        this.appendChild(template);
    }
}
customElements.define("my-element", myElement); // aqui definimos la etiqueta para que se covierta en una etiqueta de html 