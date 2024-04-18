import connection from "../services/mysql";
import { Usuario } from "../interfaces/usuario";

export interface IUsuario {
    Id?: number;
    Nombre: string;
    Correo: string;
    Puntuacion?: number;
}

class Usuarios {
    table = 'usuario';

    getAllUsuarios(): Promise<Usuario[]> {
        return new Promise(async (resolve, reject) => {
            connection.query(`SELECT * FROM ${this.table}`,
                async (err: any, results: IUsuario[]) => {
                    if (err) { reject(err); }
                    const usuarios = results.map((usuariosdata) => new Usuario(usuariosdata));
                    resolve(usuarios);
                });
        });
    }

    getUsuarioById(id: number): Promise<Usuario | null> {
        return new Promise(async (resolve, reject) => {
            connection.query(`SELECT * FROM ${this.table} WHERE Id = ?`, [id],
                async (err: any, results: IUsuario[]) => {
                    if (err) { reject(err); }
                    if (results.length === 0) {
                        resolve(null);
                    } else {
                        const usuario = new Usuario(results[0]);
                        resolve(usuario);
                    }
                });
        });
    }

    loginUsuario(correo: string, nombre: string): Promise<Usuario | null> {
        return new Promise(async (resolve, reject) => {
            connection.query(`SELECT * FROM ${this.table} WHERE Correo = ? AND Nombre = ?`, [correo, nombre],
                async (err: any, results: IUsuario[]) => {
                    if (err) { reject(err); }
                    if (results.length === 0) {
                        resolve(null);
                    } else {
                        const usuario = new Usuario(results[0]);
                        resolve(usuario);
                    }
                });
        });
    }

    createUsuario(usuario: Usuario) {
        return new Promise(async (resolve, reject) => {
            connection.query(`INSERT INTO ${this.table} SET ?`, usuario,
                async (err: any, results: any) => {
                    if (err) { reject(err); }
                    resolve(results);
                });
        });
    }

    updateUsuario(usuario: Usuario, id: number) {
        return new Promise(async (resolve, reject) => {
            connection.query(`UPDATE ${this.table} SET ? WHERE Id = ?`, [usuario, id],
                async (err: any, results: any) => {
                    if (err) { reject(err); }
                    resolve(results);
                });
        });
    }

    updatePuntuacionUsuario(puntuacion: number, id: number) {
        return new Promise(async (resolve, reject) => {
            connection.query(`UPDATE ${this.table} SET Puntuacion = ? WHERE Id = ?`, [puntuacion, id],
                async (err: any, results: any) => {
                    if (err) { reject(err); }
                    resolve(results);
                });
        });
    }

    deleteUsuario(id: number) {
        return new Promise(async (resolve, reject) => {
            connection.query(`DELETE FROM ${this.table} WHERE Id = ?`, [id],
                async (err: any, results: any) => {
                    if (err) { reject(err); }
                    resolve(results);
                });
        });
    }
}

export default Usuarios;