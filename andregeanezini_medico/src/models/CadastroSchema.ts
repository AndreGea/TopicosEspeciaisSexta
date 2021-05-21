import { Schema } from "mongoose";

const cadastroSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo NOME do cadastro é obrigatório!"],
    },
    crm: {
      type: String,
      required: [true, "O campo CRM do cadastro é obrigatório!"],
    },
    especialidade: {
      type: String,
      required: [true, "O campo ESPECIALIDADE do cadastro é obrigatório!"],
    }
  },
  {
    timestamps: true,
  }
);

export { cadastroSchema };
