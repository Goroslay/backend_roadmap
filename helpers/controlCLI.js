import {metodos} from "./CRUD.js";
export const consola = (comando, args) => {
    switch (comando) {
        case "agregar":
            metodos.anadirTarea(args.join(' '));
            break;

        case "actualizar":
            metodos.actualizarTarea(args[0], args.slice(1).join(' '));
            break;

        case "eliminar":
            metodos.eliminarTarea(args[0]);
            break;

        case "marcar-en-progreso":
            metodos.cambiarEstado(args[0], "en progreso");
            break;

        case "marcar-terminado":
            metodos.cambiarEstado(args[0], "terminado");
            break;

        case "marcar-en-to-do":
            metodos.cambiarEstado(args[0], "to do");
            break;

        case "listar":
            metodos.listarTareas(args[0]);
            break;

        default:
            console.log("Comando incorrecto");
            break;
    }
}

