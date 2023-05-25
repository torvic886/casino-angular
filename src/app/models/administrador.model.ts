import { Maquina01 } from "./maquina01.model";

export class Administrador {

    idAdministrador: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    maquina_01: Maquina01;

    constructor(idAdministrador: number, nombre: string, apellido: string, email: string, telefono: string, maquina_01: Maquina01){
        this.idAdministrador = idAdministrador;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.maquina_01 = maquina_01;
    }

}