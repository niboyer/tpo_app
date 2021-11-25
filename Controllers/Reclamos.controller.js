export const getReclamosByDesperfecto = async function (desperfecto) {
    let url = 'http://192.168.42.1:8080/api/reclamos/getReclamosByDesperfecto?idDesperfecto=' + desperfecto;
    try {

        var myHeaders = new Headers();
        myHeaders.append('pragma', 'no-cache');
        myHeaders.append('cache-control', 'no-cache');

        var requestOptions = {
            method: 'GET',
            mode: "cors",
            headers: myHeaders,
        };

        let response = await fetch(url, requestOptions);

        if (response.status === 200) {
            let data = await response.json();
            let listaReclamos = data._reclamos;
            return listaReclamos;
        }
        else {
            let vacio = [];
            return (vacio);
        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const getReclamosByDesperfectoAndDocumento = async function (desperfecto, documento) {
    let url = 'http://192.168.42.1:8080/api/reclamos/getReclamosByDesperfectoAndDocumento?idDesperfecto=' + desperfecto + '&documento=' + documento;
    try {

        var myHeaders = new Headers();
        myHeaders.append('pragma', 'no-cache');
        myHeaders.append('cache-control', 'no-cache');

        var requestOptions = {
            method: 'GET',
            mode: "cors",
            headers: myHeaders,
        };

        let response = await fetch(url, requestOptions);

        if (response.status === 200) {
            let data = await response.json();
            let listaReclamos = data._reclamos;
            return listaReclamos;
        }
        else {
            let vacio = [];
            return (vacio);
        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const getReclamosByDocumento = async function (documento) {
    let url = 'http://192.168.42.1:8080/api/reclamos/getReclamosByDocumento?documento=' + documento;
    try {

        var myHeaders = new Headers();
        myHeaders.append('pragma', 'no-cache');
        myHeaders.append('cache-control', 'no-cache');

        var requestOptions = {
            method: 'GET',
            mode: "cors",
            headers: myHeaders,
        };

        let response = await fetch(url, requestOptions);

        if (response.status === 200) {
            let data = await response.json();
            let listaReclamos = data._reclamos;
            return listaReclamos;
        }
        else {
            let vacio = [];
            return (vacio);
        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const getMovimientosReclamoByIdReclamo = async function (idReclamo) {
    let url = 'http://192.168.42.1:8080/api/reclamos/getMovimientosByIdReclamo?idReclamo=' + idReclamo;
    try {

        var myHeaders = new Headers();
        myHeaders.append('pragma', 'no-cache');
        myHeaders.append('cache-control', 'no-cache');

        var requestOptions = {
            method: 'GET',
            mode: "cors",
            headers: myHeaders,
        };

        let response = await fetch(url, requestOptions);

        if (response.status === 200) {
            let data = await response.json();
            let listaReclamos = data._reclamos;
            return listaReclamos;
        }
        else {
            let vacio = [];
            return (vacio);
        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const createReclamo = async function (reclamo) {

    console.log(reclamo)

    let url = 'http://192.168.42.1:8080/api/reclamos/createReclamo';

    const formData = new FormData();
    formData.append("idSitio", reclamo.idSitio);
    formData.append("idDesperfecto", reclamo.idDesperfecto);
    formData.append("descripcion", reclamo.descripcion);
    formData.append("documento", reclamo.documento);    

    formData.append('files', {  
        uri: reclamo.archivoImagenes,
        name: reclamo.nombreImagenes,
        type: 'image/jpg'
      })
      
    /*if (publicacion.archivoImagenes !== null) {
        if (publicacion.archivoImagenes.length !== undefined) {
            for (let i = 0; i < publicacion.archivoImagenes.length; i++) {
                formData.append('files', publicacion.archivoImagenes[i], publicacion.nombreImagenes[i])
            }
        } else {
            formData.append('files', publicacion.archivoImagenes[0], publicacion.nombreImagenes[0])
        }
    }*/

    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/form-data',
                'Origin': 'http://localhost:3000'
            },
            body: formData,
        });

        let rdo = response.status;

        console.log(rdo)

        let data = await response.json();

        return ({rdo: rdo, mensaje: data.message, data: data});      
    }
    catch (error) {
        console.log("Error", error.message);
    };
}