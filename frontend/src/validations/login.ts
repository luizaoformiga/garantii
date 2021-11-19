import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "senha de pelo menos 6 digitos")
    .required("Campo obrigatório"),
});
