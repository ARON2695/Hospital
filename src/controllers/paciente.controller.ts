import { Request, Response} from 'express';
import * as pacienteService from '../services/paciente.service';
import { Pacientes } from '../entities/paciente';
import { BaseResponse } from '../shared/base.response';
import { Message } from '../enums/messages';

export const insertarPaciente = async (req: Request, res: Response)=>{
    try{
        console.log('insertarPaciente')
        const paciente: Partial<Pacientes> = req.body;
        const newPaciente: Pacientes = await pacienteService.insertarPaciente(paciente);
        res.json(BaseResponse.success(newPaciente, Message.INSERTADO_OK));
    }catch (error){
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}          
export const listarPaciente = async (req: Request, res: Response)=>{
    try {
        console.log('listarPaciente');
        const pacientes: Pacientes[] = await pacienteService.listarPaciente();
        res.json(BaseResponse.success(pacientes));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerPaciente = async (req: Request, res: Response)=>{
    try {
        const {idPaciente} = req.params;
        const paciente: Pacientes = await pacienteService.obtenerPaciente(Number(idPaciente));
        if(!paciente) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404))
            return;
        }
        res.json(BaseResponse.success(paciente));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    } 
}

export const actualizarPaciente = async (req: Request, res: Response)=>{
    try {
        const {idPaciente} = req.params;
        const paciente: Partial<Pacientes> = req.body;
        if(!(await pacienteService.obtenerPaciente(Number(idPaciente)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const updatePaciente: Pacientes = await pacienteService.actualizarPaciente(Number(idPaciente),paciente);
        res.json(BaseResponse.success(updatePaciente, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaPaciente = async (req: Request, res: Response)=>{
    try {
        const {idPaciente} = req.params;
        if(!(await pacienteService.obtenerPaciente(Number(idPaciente)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        await pacienteService.darBajaPaciente(Number(idPaciente));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    } 
}