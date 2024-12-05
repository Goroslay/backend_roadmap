import fs from "fs";

const ruta = "./tareas.json";

const leerTareas=()=>{
    if(!fs.existsSync(ruta)){
        fs.writeFileSync(ruta,JSON.stringify([]));
    }
    const data = fs.readFileSync(ruta, "utf8");
    return JSON.parse(data);
}

const escribirTareas = (tareas)=>{
    fs.writeFileSync(ruta,JSON.stringify(tareas,null,2));
}


export {leerTareas, escribirTareas}