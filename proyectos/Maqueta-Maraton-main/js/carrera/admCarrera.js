let map = "";
let dib = "";

function main() {
    map = crearMapa(-34.522156, -58.699833, 17);
    dib = new Dibujador();

    pedirTracks().then(dibCircuito)
    pedirCamaras().then(dibCamaras)
    pedirNombreRunners().then(listarRunners);
}


function dibCamaras(response) {
    dib.dibujarCamarasEnMapa(response, map)
}

function dibCircuito(response) {
    dib.dibujarCircuitoEnMapa(response, map)
}

function dibRunner(response) {
    dibujarRunnerEnMapa(response, map)
}

function listarRunners(response) {
    let lista = document.getElementById("lista_corredores")
    response.forEach(runner => {
        let item = document.createElement("li");
        item.append(runner.name)
        item.append(" " + runner.surname)
        lista.append(item)
        item.addEventListener('click', function () {
            pedirReplay(runner.id).then(dibRunner);
        })
    });
}

