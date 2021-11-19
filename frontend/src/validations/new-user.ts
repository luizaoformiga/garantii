import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "No Mínimo dois caracteres")
    .required("Nome obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email obrigatório"),
  password: yup
    .string()
    .min(6, "senha de pelo menos 6 digitos")
    .required("Senha obrigatória"),
});
