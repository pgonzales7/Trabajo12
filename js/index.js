
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

function insertarEmpleado(){
    let nombreV = prompt("Escribe tu nombre");
    let apellidoV = prompt("Escribe tu apellido");
    let edadV = parseInt(prompt("Escribe tu edad"));

    if(nombreV=='' || apellidoV==''||edadV==''){
        alert("todos los campos rellena");
        return;
    }

    userAdmin.id = generarId();    
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

function crearEmpleado(){
    lista.push({...userAdmin});

    
    console.log(lis);
}






//READ

//lista de usuarios
let users = [
    { id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z" },
    { id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z" },
    { id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z" },
    { id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z" },
    { id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z" },
    { id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z" },
  ]
  
  
  
  function ordenarPorAtributo(atributo) {
  
    let validInput = ["id", "nombre", "apellido", "edad", "profesion", "fecha", "fecha actualizada"]
  
    if (validInput.includes(atributo)) {
      if (atributo === "edad" || atributo === "id") {
        users.sort((a, b) => a[atributo] - b[atributo])
      } else {
        users.sort((a, b) => a[atributo].localeCompare(b[atributo]));
      }
    } else {
      console.log("Debes ingresar un atributo válido");
    }
  }
  
  
  //mostrar encabezado
  const columnas = ["id", "nombre", "apellido", "edad", "profesion", "fecha", "fecha actualizada"]
  const table = document.createElement("table")
  table.classList.add("table", "table-bordered")
  
  const thead = document.createElement("thead")
  const trHead = document.createElement("tr")
  
  columnas.forEach(columna => {
    const th = document.createElement("th")
    th.textContent = columna
    th.addEventListener("click", (e) => {
      ordenarPorAtributo(e.target.textContent)
      table.innerHTML = ""
      table.appendChild(thead)
      mostrarUsuariosTabla(users)
    })
    trHead.appendChild(th)
  })
  thead.appendChild(trHead)
  table.appendChild(thead)
  root.appendChild(table)
  
  
  
  //funcion mostrar los usuarios en la tabla
  function mostrarUsuariosTabla(users) {
    for (const index in users) {
      const tr = document.createElement("tr")
      for (const key in users[index]) {
        const td = document.createElement("td")
        td.textContent = users[index][key]
        tr.append(td)
      }
      table.append(tr)
    }
  }
  mostrarUsuariosTabla(users)
  
  
  
 
//botones
const btnAñadir = document.createElement("button")
btnAñadir.classList.add("btn", "btn-primary")
btnAñadir.textContent = "Agregar usuario"

const btnEditar = document.createElement("button")
btnEditar.classList.add("btn", "btn-warning", "ms-2")
btnEditar.textContent = "Editar usuario"

const btnEliminar = document.createElement("button")
btnEliminar.classList.add("btn", "btn-danger", "ms-2")
btnEliminar.textContent = "Eliminar usuario"



const botones = document.getElementById("botones")
botones.appendChild(btnAñadir)
botones.appendChild(btnEditar)
botones.appendChild(btnEliminar)

btnEditar.onclick=function(){
    modificarRegistro();
}
function modificarRegistro() {
    // Pedir al usuario que ingrese el ID del registro que desea modificar
    let id = prompt("Ingrese el ID del registro que desea modificar:");
  
    // Buscar el registro con el ID especificado en el array de usuarios
    let registro = users.find(user => user.id == id);
  
    // Verificar si se encontró el registro
    if (!registro) {
      // Si el registro no se encontró, mostrar un mensaje de error
      alert("No se encontró ningún registro con el ID especificado.");
      return;
    }
  
    // Mostrar un promts para modificar el registro
    let nombre = prompt("Ingrese el nuevo nombre para el usuario:");
    let apellido = prompt("Ingrese el nuevo apellido para el usuario:");
    let edad = prompt("Ingrese la nueva edad para el usuario:");
    let profesion = prompt("Ingrese la nueva profesión para el usuario:");
  
    // Actualizar el registro en el array con los nuevos valores proporcionados por el usuario
    registro.nombre = nombre;
    registro.apellido = apellido;
    registro.edad = edad;
    registro.profesion = profesion;
  }
  console.log(users)
