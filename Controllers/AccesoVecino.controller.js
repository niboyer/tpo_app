
export const accesoVecino =  async function(usuario){

    let url = 'http://192.168.42.1:8080/api/usuarios/accederVecino'
    
    let usuarioAcceso = {
        documento: usuario.dni,
        password: usuario.clave
    }
    
    let body = JSON.stringify(usuarioAcceso)

    let response = await fetch(url,{
        method: 'POST',
        mode: "cors",
        headers:{
            'Accept':'application/json',
            'Origin':'http://localhost:3000',
            'Content-Type': 'application/json'},
        body: body
        
    });
    
    let rdo = response.status;
    let data = await response.json();
    
    return ({rdo: rdo, mensaje: data.message, data: data});
}

export const solicitarAcceso =  async function(usuario){

    let url = 'http://192.168.42.1:8080/api/usuarios/solicitarAcceso'
    
    let usuarioAcceso = {
        documento: usuario.documento,
        email: usuario.email,
        nombre: usuario.nombre,
        apellido: usuario.apellido
    }
    
    let body = JSON.stringify(usuarioAcceso)

    let response = await fetch(url,{
        method: 'POST',
        mode: "cors",
        headers:{
            'Accept':'application/json',
            'Origin':'http://localhost:3000',
            'Content-Type': 'application/json'},
        body: body
        
    });
    
    let rdo = response.status;
    let data = await response.json();
    
    return ({rdo: rdo, mensaje: data.message, data: data});
}

export const verificarUsuarioActivo = async function(documento){
    let url = 'http://192.168.42.1:8080/api/usuarios/verificarUsuarioActivo'
    
    let body = JSON.stringify(documento)

    let response = await fetch(url,{
        method: 'POST',
        mode: "cors",
        headers:{
            'Accept':'application/json',
            'Origin':'http://localhost:3000',
            'Content-Type': 'application/json'},
        body: body
        
    });
    
    let rdo = response.status;
    let data = await response.json();
    
    return ({rdo: rdo, mensaje: data.message, data: data});
}

export const crearAcceso =  async function(usuario){

    let url = 'http://192.168.42.1:8080/api/usuarios/crearAcceso'
    
    let usuarioAcceso = {
        documento: usuario.documento,
        password: usuario.password,
        preguntaSecreta: usuario.preguntaSecreta,
        respuestaSecreta: usuario.respuestaSecreta
    }
    
    let body = JSON.stringify(usuarioAcceso)

    let response = await fetch(url,{
        method: 'POST',
        mode: "cors",
        headers:{
            'Accept':'application/json',
            'Origin':'http://localhost:3000',
            'Content-Type': 'application/json'},
        body: body
        
    });
    
    let rdo = response.status;
    let data = await response.json();
    
    return ({rdo: rdo, mensaje: data.message, data: data});
}