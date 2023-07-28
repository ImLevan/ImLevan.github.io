let urlApi = "https://fasterthanall.herokuapp.com/api";
let trackId = "42";
let urlTracks = "/tracks/";
let urlWcams = "/webcams/";
let urlRunners = "/runners/";
let urlReplays = "/replays/";


function pedirTracks() {
    return fetch(urlApi + urlTracks + trackId)
        .then(response => response.json())
        .then(response => response.track)
        .then(response => response.coordinates)
}

function pedirCamaras() {
    return fetch(urlApi + urlWcams + trackId)
        .then(response => response.json())
        .then(response => response.webcams)
}

function pedirNombreRunners() {
    return fetch(urlApi + urlTracks + trackId + urlRunners)
        .then(response => response.json())
        .then(response => response.runners)
}

function pedirReplay(runnerid) {
    return fetch(urlApi + urlReplays + trackId + "/runner/" + runnerid)
        .then(response => response.json())
        .then(response => response.positions)
        .then(response => response.checkpoints)
}
