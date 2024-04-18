import { Router } from "express";
import { Controller } from "../controllers/usuario";

const routes = Router();
const controller = new Controller();

routes.get('/usuarios', controller.getAllUsuarios);
routes.get('/usuarios/:id', controller.getUsuarioById);
routes.post('/login', controller.loginUsuario);
routes.post('/usuarios', controller.createUsuario);
routes.put('/puntuacion/:id', controller.updatePuntuacion);
routes.put('/usuarios/:id', controller.updateUsuario);
routes.delete('/usuarios/:id', controller.deleteUsuario);

export default routes;