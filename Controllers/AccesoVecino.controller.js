
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
    
    switch(rdo)
    {
        case 200:
        {
            return ({rdo:200,mensaje:"Ok",data});//correcto
        }
        case 401:
            {
                return ({rdo:401,mensaje: data.message});//correcto
            }
        /*case 202:
        {
            //error mail
            return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
        }
        case 203:
        {
            //error password
            return ({rdo:1,mensaje:"La contraseña no es correcta."});
        }
        case 400:
            {
                return({rdo:1, mensaje:data.message})
            }*/
        default:
        {
            //otro error
            console.log(data.message)             
        }
    }
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
    
    switch(rdo)
    {
        case 200:
        {
            return ({rdo:200,mensaje:"Ok",data});//correcto
        }
        case 401:
            {
                return ({rdo:401,mensaje: data.message});//correcto
            }
        /*case 202:
        {
            //error mail
            return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
        }
        case 203:
        {
            //error password
            return ({rdo:1,mensaje:"La contraseña no es correcta."});
        }
        case 400:
            {
                return({rdo:1, mensaje:data.message})
            }*/
        default:
        {
            //otro error
            console.log(data.message)             
        }
    }
}