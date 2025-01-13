import Joi from 'joi';

export const insertarCitaSchema = Joi.object({
    idPaciente: Joi.number().integer().required(),
    idMedico: Joi.number().integer().required(),
    diaAgendado: Joi.date().iso().required(),
    horaInicio: Joi.string().pattern(/^\d{2}:\d{2}$/).required(), 
    horaTermino: Joi.string().pattern(/^\d{2}:\d{2}$/).required(), 
    estadoAuditoria: Joi.string().valid('1', '0').required(),
});

export const actualizarCitaSchema = Joi.object({
    diaAgendado: Joi.date().iso().optional(),
    horaInicio: Joi.string().pattern(/^\d{2}:\d{2}$/).optional(), 
    horaTermino: Joi.string().pattern(/^\d{2}:\d{2}$/).optional(), 
    estadoAuditoria: Joi.string().valid('1', '0').optional(),
});
