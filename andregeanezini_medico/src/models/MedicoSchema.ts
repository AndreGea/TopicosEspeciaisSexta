import { model, Schema } from "mongoose";
import { cadastroSchema } from "./CadastroSchema";


const MedicoSchema = new Schema(
  {
    data: {
      type: Date,
      required: [true, "O campo data do cadastro é obrigatório!"],
    },
    cadastro: [cadastroSchema],
  },
  {
    timestamps: true,
  }
);

export default model("medicos", MedicoSchema);