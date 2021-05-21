import { Request, Response } from "express";
import MedicoSchema from "../models/MedicoSchema";

class MedicoController {

  async alterar(request: Request, response: Response) {
      // MedicoSchema.switch (key) {
      //   case value:
          
      //     break;
      
      //   default:
      //     break;
      // };
  }

  async listar(request: Request, response: Response) {
    const medicos = await MedicoSchema.find();
    response.status(200).json(medicos);
  }

  async buscar(request: Request, response: Response) {
    const { crm } = request.params;
    try {
      const medico = await MedicoSchema.findOne({ _crm : crm });
      if(medico === null){
        response.status(404).json({ msg: "O médico procurado não existe!"});
      }
      response.status(200).json(medico);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async remover(request: Request, response: Response) {
    const { crm } = request.params;
    try {
      const medico = await MedicoSchema.deleteOne({ _crm : crm });
      if(medico === null){
        response.status(404).json({ msg: "O médico procurado não existe!"});
      }
      response.status(200).json(medico);
    } catch (error) {
      response.status(400).json(error);
    }
}

  async cadastrar(request: Request, response: Response) {
    try {
      const novoMedico = await MedicoSchema.create(request.body);
      response.status(201).json(novoMedico);
    } catch (error) {
      response.status(400).json(error);
    }
  }

}

export { MedicoController };