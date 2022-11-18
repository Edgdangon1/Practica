let archivoTareas = require('./funcionesDeTareas');

let accion = process.argv[2];
let titulo = process.argv[3];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach((tarea, i) => {
            console.log( `${i + 1}. ${tarea.titulo} - ${tarea.estado}`);
        })

        break;

    case "crear":
        //Objeto tarea - titulo - estado
        let titulo = process.argv[3]; 
        if(typeof titulo === "undefined" ) {
            console.log("Debes pasar un titulo de tarea")  
            return;
        }  
        let tarea = {
            titulo, 
            estado: "pendiente"
        }

        archivoTareas.guardarTarea(tarea)
        break;
 
    case "filtrar": 
    let estado = process.argv[3];
    if(typeof estado === "undefined" ) {
        console.log("Debes pasar un estado de tarea")
        return;
    }

    let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);
    console.log("tareas filtradas por estado:" + estado)
    console.log("...................................")
    tareasFiltradas.forEach((tarea, i) => {
        console.log(`${i + 1 }. ${tarea.titulo} - ${tarea.estado}`)
    })
            break;


    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
