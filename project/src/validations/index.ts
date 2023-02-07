import * as yup from "yup";


export const validationRegister = yup.object().shape({
    username: yup.string().required("Este campo é obrigatório !"),
    password: yup.string().required("Este campo é obrigatório"),
    confirm_password: yup.string().oneOf([yup.ref("password")], ("As senhas são diferentes")),
    cpf: yup.string().length(11).required("Campo obrigatório")
})

export const validationLogin = yup.object().shape({
    username: yup.string().required("Campo obrigatório !"),
    password: yup.string().required("Campo obirgatório !")
})

export const validationFunctions = yup.object().shape({
    alter_cpf: yup.string().max(11).notRequired(),
    new_number: yup.string().max(15).transform((value:string) =>{
        const part1 = value.slice(0,2)
        let ddd = `(${part1})`
        const part2 = value.slice(2,7)
        let primeiro = ` ${part2}-`
        const part3 = value.slice(7)
        return ddd+primeiro+part3
    } 
     ).notRequired(),
    alter_number: yup.string().max(15).transform((value) => {
        const part1 = value.slice(0,2)
        let ddd = `(${part1})`
        const part2 = value.slice(2,7)
        let primeiro = ` ${part2}-`
        const part3 = value.slice(7)
        return ddd+primeiro+part3
    }).notRequired(),
    new_email: yup.string().notRequired(),
    alter_email: yup.string().notRequired()
})

export const validationCliente = yup.object().shape({
    nome_completo : yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
    telefone: yup.string().notRequired().max(15).transform((value) => {
        const part1 = value.slice(0,2)
        let ddd = `(${part1})`
        const part2 = value.slice(2,7)
        let primeiro = ` ${part2}-`
        const part3 = value.slice(7)
        return ddd+primeiro+part3
    }),
    email: yup.string().notRequired()
})
