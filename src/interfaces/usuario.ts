import {IUsuario} from '../models/usuario';

export class Usuario{
    Id?: number;
    Nombre: string;
    Correo: string;
    Puntuacion?: number;

    constructor(usuario: IUsuario){
        this.Id = usuario.Id;
        this.Nombre = usuario.Nombre;
        this.Correo = usuario.Correo;
        this.Puntuacion = usuario.Puntuacion;
    }
}