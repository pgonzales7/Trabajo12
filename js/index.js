
//14. TRABAJO GRUPAL
// Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:
 
// CREATE
// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10. (Pueden utilizar un boton que diga "Crear Usuario")

// const Create 
const root = document.getElementById("root");
const h2 = document.createElement('h2');
h2.innerHTML="Create";
root.append(h2);

const button = document.createElement("button");
button.innerHTML="Validar";
root.append(button);

// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10. (Pueden utilizar un boton que diga "Crear Usuario")

// objeto creado
let userAdmin = {
    id:0,
    nombre:'',
    apellido: '',
    edad:0,
    fecha:''
}

// array para recbir objeto
let lista =[];

const generarId=()=>{
    const random = Math.random().toString(32).substring(2);

    const fecha = Date.now().toString(32);
    return random+fecha;
}


button.onclick=function(e){
    e.preventDefault();
    insertarEmpleado();
}

function crearEmpleado(){
    lista.push({...userAdmin});

    
    return lista;
}

function insertarEmpleado(){
    let nombreV = prompt("Escribe tu nombre");
    let apellidoV = prompt("Escribe tu apellido");
    let edadV = parseInt(prompt("Escribe tu edad"));

    if(nombreV=='' || apellidoV==''||edadV==''){
        alert("todos los campos rellena");
        return;
    }

    userAdmin.id = lista.length+0;    
    userAdmin.nombre = nombreV;
    userAdmin.apellido = apellidoV;
    userAdmin.edad = edadV;

    // Generando la fecha con segundos
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    userAdmin.fecha = hoy.toUTCString();

    console.log(generarId);
    crearEmpleado();
}
