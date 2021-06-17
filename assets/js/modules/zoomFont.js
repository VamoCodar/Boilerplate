export default

function zoomFont() {

    const elhtml = document.querySelector("html")
    const buttonIncrement = document.querySelector("button.increment")
    const buttonDecrement = document.querySelector("button.decrement")

    if (buttonIncrement) {
        //pega variavel css e limpa
        function pegaValorVarCss() {
            let cssStyles = getComputedStyle(elhtml);
            let cssVal = String(cssStyles.getPropertyValue('--font-base')).trim();
            let ValorLimpo = cssVal.replace("%", "")
            return parseInt(ValorLimpo)
        }


        let item;
        function increment() {
            let valorVariavel = pegaValorVarCss()

            if (valorVariavel < 150) {
                let valorMod = (valorVariavel + 10) + "%"
                elhtml.style.setProperty('--font-base', valorMod);
                item = localStorage.setItem('base', valorMod);
            }
        }

        function decrement() {

            let valorVariavel = pegaValorVarCss()
            if (valorVariavel > 100) {
                let valorMod = (valorVariavel - 10) + "%"
                elhtml.style.setProperty('--font-base', valorMod);
                item = localStorage.setItem('base', valorMod);
            }
        }

        //verifica se existe local storage e aplica 
        if (typeof (Storage) !== "undefined") {
            let valorStorage = localStorage.base
            console.log(valorStorage);
            if (valorStorage)
                elhtml.style.setProperty('--font-base', valorStorage);

        } else {
            console.log("Desculpe! web storage não suportado.");
        }


        let localBase = localStorage.base
        buttonIncrement.addEventListener("click", increment)
        buttonDecrement.addEventListener("click", decrement)

        return localBase
    }
}