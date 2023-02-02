import * as yup from "yup";

export const serializerLogin = yup.object().shape({
    username: yup.string().required("Campo username tem que ser colocado"),
    password: yup.string().required("Cammpo password tem que ser colocado")
})

export const serializerRegister = yup.object().shape({
    username: yup.string().required("Campo username tem que ser colocado"),
    cpf: yup.string().required("Campo cpf tem que ser colocado").length(11),
    password: yup.string().required("Campo password tem que ser colocado")
})