import {consola} from "./helpers/controlCLI.js"
const [,, comando, ...args] = process.argv;

consola(comando,args);
