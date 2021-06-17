// Dom
//  .add("classe")  add class
//  .remove("classe")  remove class
//  .toggle("classe")  toggle class
//  .has("classe")  verifica class

//  .el() retorna elemento
//  .elements node list
//  .addClassAll("classe") class nodelist


//  .bodyClass("classe") add class no body
//  .bodyToggle("classe") Toggle class no body
//  .bodyRemove("classe") remove class no body

export default

function Dom(seletor) {
    //retorna lista de Elementos
    const items = document.querySelectorAll(seletor);
    this.elements = items;

    //retorna elemento
    this.el = function (seletor) {
        return document.querySelector(seletor)
    };

    //add classe no elemento
    this.add = function (classe) {
        this.el().classList.add(classe)
    };

    this.has = function (classe) {
        return this.el().classList.contains(classe)
    };
    //add classe no body
    this.bodyClass = function (classe) {
        document.body.classList.add(classe)
    };

    //classe toggle  body
    this.bodyToggle = function (classe) {
        document.body.classList.toggle(classe)
    };
    this.bodyRemove = function (classe) {
        document.body.classList.remove(classe)
    };

    //add class NodeList
    this.addClassAll = function (classe) {
        items.forEach((i) => {
            i.classList.add(classe)
        })
    };

    //class toggle item
    this.toggle = function (classe) {
        this.el().classList.toggle(classe)
    };

    //remove class item
    this.remove = function (classe) {
        this.el().classList.remove(classe)
    };


    // this.event = function (evento, funcao) {
    //     this.element().addEventListener(evento, funcao)
    // }

}