export const getPublicacionesByTipo = async function (tipo) {
    let url = 'http://192.168.42.1:8080/api/publicaciones/getPublicaciones?tipo=' + tipo;
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
            let listaPublicaciones = data._publicaciones;
            return listaPublicaciones;
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

export const createPublicacionByTipo = async function (publicacion) {
    let url = 'http://192.168.42.1:8080/api/publicaciones/createPublicacion';

    const formData = new FormData();
    formData.append("nombre", publicacion.nombre);
    formData.append("horarios", publicacion.horarios);
    formData.append("rubros", publicacion.rubros ? publicacion.rubros : '');
    formData.append("descripcion", publicacion.descripcion);
    formData.append("direccion", publicacion.direccion ? publicacion.direccion : '');
    formData.append("telefono", publicacion.telefono);
    formData.append("email", publicacion.email);
    formData.append("tipoPublicacion", publicacion.tipoPublicacion);

    if (publicacion.archivoImagenes !== null) {
        if (publicacion.archivoImagenes.length !== undefined) {
            for (let i = 0; i < publicacion.archivoImagenes.length; i++) {
                formData.append('files', publicacion.archivoImagenes[i], publicacion.nombreImagenes[i])
            }
        } else {
            formData.append('files', publicacion.archivoImagenes[0], publicacion.nombreImagenes[0])
        }
    }

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

        let data = await response.json();
        switch (response.status) {
            case 201:
                {
                    return ({ rdo: 0, mensaje: "Ok" });
                }
            case 202:
                {
                    //error mail
                    return ({ rdo: 1, mensaje: "El mail ingresado no existe en nuestra base." });
                }
            case 203:
                {
                    //error password
                    return ({ rdo: 1, mensaje: "La contraseña no es correcta." });
                }
            case 400:
                {
                    return ({ rdo: 1, mensaje: data.message })
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }
    }
    catch (error) {
        console.log("Error", error);
    };
}