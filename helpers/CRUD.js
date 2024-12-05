import {escribirTareas, leerTareas} from "./controlTareas.js"

const anadirTarea = (descripcion)=>{
    
    const tareas = leerTareas();
    
    const tarea = tareas.find((t)=> t.descripcion === descripcion);
    if(tarea){
        console.log("Error: Esta tarea ya se encuentra registrada");
        return;
    };

    const nuevaTarea = {
        id: tareas.length ? tareas[tareas.length -1].id +1 : 1,
        descripcion: descripcion,
        status: "to do",
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString()
    };

    tareas.push(nuevaTarea);

    escribirTareas(tareas);

    console.log("Tarea añadida correctamente");
};

const actualizarTarea = (viejaDescripcion, nuevaDescripcion)=>{
    
    const tareas = leerTareas();

    const tarea = tareas.find((t)=> t.descripcion === viejaDescripcion);

    if(!tarea){
        console.log("Tarea no encontrada, por favor verifique la informacion");
        return;
    }

    tarea.descripcion = nuevaDescripcion;
    tarea.updateAt = new Date().toISOString();

    escribirTareas(tareas);
    console.log("Tarea modificada correctamente");
};

const eliminarTarea = (descripcion)=>{

    const tareas = leerTareas();

    const tarea = tareas.find((t)=>t.descripcion===descripcion);

    if(!tarea){
        console.log("Tarea no encontrada, por favor verifique la informacion");
        return;
    }
    
    const indice = tareas.indexOf(descripcion);

    tareas.splice(indice,1);

    escribirTareas(tareas);
    console.log("Tarea eliminada correctamente")
};

const cambiarEstado = (descripcion, estado)=>{
    
    const tareas = leerTareas();

    const tarea = tareas.find((t)=>t.descripcion===descripcion);

    if(!tarea){
        console.log("Tarea no encontrada, por favor verifique la informacion");
        return;
    };

    tarea.status = estado;
    tarea.updateAt = new Date().toISOString();
    escribirTareas(tareas);
    console.log("Estado actualizado correctamente");
};

const listarTareas = (filtro = null)=>{

    const tareas = leerTareas();
    
    const tareasFiltradas = filtro ? tareas.filter((t)=>t.status===filter): tareas;
    
    console.table(tareasFiltradas);
};

export const metodos = {anadirTarea, actualizarTarea,eliminarTarea, cambiarEstado, listarTareas};