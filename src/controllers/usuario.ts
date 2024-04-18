import { Request, Response } from "express";
import Usuarios from "../models/usuario";

const usuariosModel = new Usuarios();

export class Controller{
    async getAllUsuarios(req: Request, res: Response){
        try {
            const result = await usuariosModel.getAllUsuarios();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getUsuarioById(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);
            const result = await usuariosModel.getUsuarioById(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async loginUsuario(req: Request, res: Response){
        try {
            const { correo, nombre } = req.body;
            const result = await usuariosModel.loginUsuario(correo, nombre);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createUsuario(req: Request, res: Response){
        try {
            const usuario = req.body;
            const result = await usuariosModel.createUsuario(usuario);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateUsuario(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);
            const usuario = req.body;
            const result = await usuariosModel.updateUsuario(usuario, id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updatePuntuacion(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);
            const puntuacion = parseInt(req.body.puntuacion);
            const result = await usuariosModel.updatePuntuacionUsuario(puntuacion, id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteUsuario(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);
            const result = await usuariosModel.deleteUsuario(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}