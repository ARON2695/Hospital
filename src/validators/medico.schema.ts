import Joi from 'joi';

export const insertarMedicoSchema = Joi.object({
    nombres: Joi.string().min(3).max(50).required(),
    apellidos: Joi.string().min(3).max(50).required(),
    especialidad: Joi.string().min(3).max(50).required(),
    numeroColegiatura: Joi.string().min(3).max(50).required(),
    telefono: Joi.string().min(7).max(15).optional(),
    correoElectronico: Joi.string().email().min(5).max(100).optional(),
    estadoAuditoria: Joi.string().valid('1', '0').required(),
});

export const actualizarMedicoSchema = Joi.object({
    nombres: Joi.string().min(3).max(50).optional(),
    apellidos: Joi.string().min(3).max(50).optional(),
    especialidad: Joi.string().min(3).max(50).optional(),
    numeroColegiatura: Joi.string().min(3).max(50).optional(),
    telefono: Joi.string().min(7).max(15).optional(),
    correoElectronico: Joi.string().email().min(5).max(100).optional(),
    estadoAuditoria: Joi.string().valid('1', '0').optional(),
});

