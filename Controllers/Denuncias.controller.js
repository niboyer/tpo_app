export const getDenunciasByID = async function (id) {
    let url = 'http://192.168.42.1:8080/api/denuncias/getDenunciasByID?id=' + id;
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
            let listaDenuncias = data._denuncias;
            return listaDenuncias;
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

export const getDenunciasByDocumento = async function (documento) {
    let url = 'http://192.168.42.1:8080/api/denuncias/getDenunciasByDocumento?documento=' + documento;
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
            let listaDenuncias = data._denuncias;
            return listaDenuncias;
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

export const getDenunciasByDocumentoDenunciado = async function (documento) {
    let url = 'http://192.168.42.1:8080/api/denuncias/getDenunciasByDocumentoDenunciado?documento=' + documento;
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
            let listaDenuncias = data._denuncias;
            return listaDenuncias;
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

export const getMovimientosDenunciaByIdDenuncia = async function (idDenuncia) {
    let url = 'http://192.168.42.1:8080/api/denuncias/getMovimientosByIdDenuncia?idDenuncia=' + idDenuncia;
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
            let listaDenuncias = data._denuncias;
            return listaDenuncias;
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

export const createDenuncia = async function (denuncia) {
    let url = 'http://192.168.42.1:8080/api/denuncias/createDenuncia';

    const formData = new FormData();
    formData.append("documento", denuncia.documento);
    formData.append("idSitio", denuncia.idSitio);
    formData.append("descripcion", denuncia.descripcion );
    formData.append("aceptaResponsabilidad", denuncia.aceptaResponsabilidad);
    formData.append("descripcionDenunciado", denuncia.descripcionDenunciado);

    formData.append('files', {  
        uri: denuncia.archivoImagenes,
        name: denuncia.nombreImagenes,
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
        let data = await response.json();
        
        return ({rdo: rdo, mensaje: data.message, data: data});      
    }
    catch (error) {
        console.log("Error", error.message);
    };
}