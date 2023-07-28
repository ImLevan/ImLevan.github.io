var marcadoresID = [];
var map;
var dib;

function main() {
    map = crearMapa(-34.53, -58.69, 12);
    dib = new Dibujador();
    dib.dibujarCentrosEnMapa(centros, map);

    listarCentrosHtml();
    console.log(marcadoresID);
}

function listarCentrosHtml() {
    centros.forEach(centro => {
        dib.dibujarCentro(centro, centro.id);
    })

}

function centrarVista(marker){
    map.setView([marker.idLatlng.lat,marker.idLatlng.lng],15);
    return null;
}


function centrar(element) {
    let id = element.id; //index-0
    let num = id.substring(id.length-1, id.length);
    let idLeaf = marcadoresID[num-1];
    let listadoMarkers = getMarkerById(idLeaf.index);
    centrarVista(listadoMarkers);
}


function getMarkerById(id) {
    let layerAux;
    marcadoresID.forEach(element => {
        if (( element.index == id)){
            layerAux = element;
        };
    } )
    return layerAux;
}
