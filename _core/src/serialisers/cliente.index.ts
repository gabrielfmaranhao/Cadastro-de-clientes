import * as yup from "yup";


export const serializerTelefone = yup.object().shape({
    number: yup.string().length(15).required("Campo number obrigatório")
})
export const serializerEmail = yup.object().shape({
    email: yup.string().email().required("Campo email é obrigatório")
})

export const serializerCliente = yup.object().shape({
    nome_completo: yup.string().required("Campo nome_completo é obrigatório"),
    cpf: yup.string().required("Campo cpf é obrigatório"),
    telefone: yup.object().shape({number: yup.string().length(15).notRequired()}),
    email: yup.object().shape({email: yup.string().email().notRequired()})
})
export const serializerClienteUpdate = yup.object().shape({
    nome_completo: yup.string().notRequired(),
    cpf: yup.string().notRequired()
})