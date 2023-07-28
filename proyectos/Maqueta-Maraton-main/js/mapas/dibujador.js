let markerCentro = ""

class Dibujador {

    dibujarCentrosEnMapa(centros, map) {

        centros.forEach(centro => {
            markerCentro = L.marker([centro.lat, centro.lon]).addTo(map).bindPopup("<b>Centro " + centro.id + " - " + centro.nombre + "</b>" +
                `<br>Horario de atencion: ` + centro.horarioAtencion);

            marcadoresID.push({ index: centro.id, idLeaf: markerCentro._leaflet_id, idLatlng: markerCentro._latlng });
        })
    }

    dibujarCentro(element, index) {
        $("#lista_centros").append(`
            <div class="card mb-3" onclick="centrar(this)" style="max-width: 540px;" id="index-${index}">
                <div class="row g-0">
                <div class="col-md-4">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${element.nombre}</h5>
                    <p class="card-text pie"><small class="text-muted">Horarios: ${element.horarioAtencion}</small></p>
                </div>
                </div>
                </div>
            </div>
        `);
    }

    dibujarCamarasEnMapa(camaras, map) {
        var cameraIcon = L.icon({
            iconUrl: '../img/logo/camara-logo.png',

            iconSize: [40, 50],
            iconAnchor: [10, 30]
        });
        camaras.forEach(camara => {
            var camara_coordenada = camara.coordinate
            L.marker([camara_coordenada.lat, camara_coordenada.lon], { icon: cameraIcon }).addTo(map).bindPopup("<b>Camara " + camara.id + `</b><br>Frecuencia: ` + camara.frecuency);
        })
    }

    dibujarCircuitoEnMapa(coord, map) {
        L.polygon(coord).addTo(map);
    }

}

//let marker = ""

async function dibujarRunnerEnMapa(runner_checkpoints, map) {
    var runnerIcon = L.icon({
        iconUrl: '../img/logo/runner.png',
        iconSize: [40, 50],
        iconAnchor: [10, 30]
    });

    for (const cp of runner_checkpoints) {
        let markerRun = crearMarcadorRunner(cp, runnerIcon)
        map.addLayer(markerRun)
        await sleep(2000)
        map.removeLayer(markerRun)
    }

    let markerFin = crearMarcadorRunner(runner_checkpoints[0], runnerIcon)
    map.addLayer(markerFin)
    await sleep(2000)
    map.removeLayer(markerFin)
}

async function sleep(ms) {
    return new Promise((accept) => {
        setTimeout(() => {
            accept();
        }, ms);
    });
}

function crearMarcadorRunner(cp, runnerIcon) {
    var posta_coordenada = cp.coordinate
    var marker;
    let tiempoSeg = new Date()
    tiempoSeg.setMilliseconds(cp.timeStamp)
    marker = L.marker([posta_coordenada.lat, posta_coordenada.lon], { icon: runnerIcon })
        .bindPopup("<b>Corredor " + cp.runner_id + `</b><br>Hora de Checkpoint: ` + tiempoSeg.toLocaleString());
    return marker
}