export default

function firefox() {
    var firefox = typeof InstallTrigger !== 'undefined';

    if (firefox) {
        document.body.classList.add("firefox")
    }
}