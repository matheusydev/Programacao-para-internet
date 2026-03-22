let estiloatual = 0;

const estilos = [
    "style.css",
    "style-blackwhite.css",
    "style-tvgirl.css"
];

function trocarTema(){
    estiloatual++;

    if (estiloatual >= estilos.length) {
    estiloatual = 0;
    }

    document.getElementById("tema").href = estilos[estiloatual];

}