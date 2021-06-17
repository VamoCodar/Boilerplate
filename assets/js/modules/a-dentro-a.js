export default function linkDentroLink() {
    document.querySelectorAll('.link__nao-link').forEach(i => {
        i.addEventListener('click', ev => {
            // ev.preventDefault();
            // window.open(ev.currentTarget.getAttribute('href'), 'janela');

            //No seu código, em vez de window.open, 
            // você pode usar
            location.href = ev.currentTarget.getAttribute('href')

        })

    });
}