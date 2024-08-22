class MyCustomElement extends HTMLElement { 
    constructor() {
        super();
        console.log("Hola desde el constructor - Memoria");
    }
    connectedCallback() {
    console.log("Hola desde el DOM");
    }
    disconnectedCallback() {  //Tercer ciclo de vida esto quiere decir que estamos retirando el elemento del dom
    console.log("Adios del DOM");
   }
}
   customElements.define("my-custome-element",MyCustomElement);//Definimos nuestro componente para utilizarlo como etiqueta

   document.querySelector("my-custome-element").remove();//Retiramos el elemento del dom seleccionandolo con un query selector
   //Y removiendolo con la funcion remove que sirve para eliminar nodos.