
//14. TRABAJO GRUPAL
// Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:
 
// CREATE
// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10. (Pueden utilizar un boton que diga "Crear Usuario")

// const Create 
const root = document.getElementById("root");


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


function insertarEmpleado(){
    let nombreV = prompt("Escribe tu nombre");
    let apellidoV = prompt("Escribe tu apellido");
    let edadV = parseInt(prompt("Escribe tu edad"));

    if(nombreV=='' || apellidoV==''||edadV==''){
        alert("todos los campos rellena");
        return;
    }
   
    userAdmin.nombre = nombreV;
    userAdmin.apellido = apellidoV;
    userAdmin.edad = edadV;
    userAdmin.id = lista.length+1;

    // Generando la fecha con segundos
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    userAdmin.fecha = hoy.toUTCString();
    crearEmpleado();
}

function crearEmpleado(){
    lista.push({...userAdmin});
    mostrarUsuariosTabla(lista)
}



//READ

  function ordenarPorAtributo(atributo) {
  
    let validInput = ["id", "nombre", "apellido", "edad", "fecha", "fecha actualizada"]
  
    if (validInput.includes(atributo)) {
      if (atributo === "edad" || atributo === "id" || atributo =="fecha") {
        lista.sort((a, b) => a[atributo] - b[atributo])
      } else {
        lista.sort((a, b) => a[atributo].localeCompare(b[atributo]));
      }
    } else {
      console.log("Debes ingresar un atributo válido");
    }
  }
  
  
  //mostrar encabezado
  const columnas = ["id", "nombre", "apellido", "edad", "fecha", "fecha actualizada"]
  const table = document.createElement("table")
  table.classList.add("table", "table-bordered")
  
  const thead = document.createElement("thead")
  const trHead = document.createElement("tr")
  
  columnas.forEach(columna => {
    const th = document.createElement("th")
    th.textContent = columna
    th.addEventListener("click", (e) => {
      ordenarPorAtributo(e.target.textContent);
      table.innerHTML = ""
      table.appendChild(thead)
      mostrarUsuariosTabla(lista)
    })
    trHead.appendChild(th)
  })
  thead.appendChild(trHead)
  table.appendChild(thead)
  root.appendChild(table)
  
  
  //funcion mostrar los usuarios en la tabla
  function mostrarUsuariosTabla(lista) {
    table.innerHTML = ""
    table.append(thead)
    for (const index in lista) {
      const tr = document.createElement("tr")
      for (const key in lista[index]) {
        const td = document.createElement("td")
        td.textContent = lista[index][key]
        tr.append(td)
      }
      table.append(tr)
    }
    console.log(lista)
  }
  mostrarUsuariosTabla(lista)
  
  

  // eliminar data
  // Eliminar Empleado
function eliminarData(){

    let id = parseInt(prompt("Ingrese el id a eliminar"));

    lista = lista.filter(data=>data.id !== id);

    mostrarUsuariosTabla(lista);
}
  
 
//botones
const btnAñadir = document.createElement("button")
btnAñadir.classList.add("btn", "btn-primary")
btnAñadir.textContent = "Agregar usuario"
btnAñadir.onclick=()=>{
    if(lista.length>1){
        btnEliminar.disabled=false;
    }
    insertarEmpleado();
}

const btnEditar = document.createElement("button")
btnEditar.classList.add("btn", "btn-warning", "ms-2")
btnEditar.textContent = "Editar usuario"

const btnEliminar = document.createElement("button");
btnEliminar.classList.add("btn", "btn-danger", "ms-2");
btnEliminar.textContent = "Eliminar usuario";
btnEliminar.disabled=true;
btnEliminar.onclick=()=>{
    eliminarData();
}



const botones = document.getElementById("botones")
botones.appendChild(btnAñadir)
botones.appendChild(btnEditar)
botones.appendChild(btnEliminar)
