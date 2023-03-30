import { useForm } from "react-hook-form"
import { IAddClient } from "../../interfaces"
import { yupResolver } from "@hookform/resolvers/yup"
import { validationCliente } from "../../validations"
import Button from "../Button"
import Text from "../Text"
import Fields from "../Fields"
import { Form } from "./style"
import { useContext } from "react"
import { ClientContext } from "../../contexts/cliente"
export const FormClient = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IAddClient>({resolver: yupResolver(validationCliente)})
    const {createCliente} = useContext(ClientContext)
    return(
        <Form onSubmit={handleSubmit(createCliente)}>
            <div className="form">
                <Text color="green-1" element="h2" size={16} weight={700} description="Adicionar Clientes"/>
                <Fields description="Nome completo:" color="green-1" html="nome_completo" size={12} weight={400} border_color={errors.nome_completo ? "red-0" : "green-1"} outline={errors.nome_completo  ? "red-0" : "green-1"} register={{...register("nome_completo")}} placeholder="Ex: Gabriel Ferreira Maranhão"/>
                <Text description={errors.nome_completo?.message} color="red-0" element="span" size={11} weight={700}/>
                <Fields description="CPF:" color="green-1" html="cpf" size={12} weight={400} border_color={errors.cpf ? "red-0" : "green-1"} outline={errors.cpf ? "red-0" : "green-1"} placeholder="Ex: 12345678910" register={{...register("cpf")}}/>
                <Text description={errors.cpf?.message} color="red-0" element="span" size={11} weight={700}/>
                <Fields description="Telefone:" color="green-1" html="telefone" size={12} weight={400} border_color={errors.telefone ? "red-0" : "green-1"} outline={errors.telefone ? "red-0" : "green-1"} register={{...register("telefone")}} placeholder = "dd+123456789"/>
                <Fields description="Email" color="green-1" html="email" size={12} weight={400} border_color={errors.email ? "red-0" : "green-1"} outline={errors.telefone ? "red-0" : "green-1"} register={{...register("email")}} placeholder = "jonhnDowe@mail.com"/>
                <Button title="Cadastrar" background="green-1" color="white-0" height={2.5}/>
            </div>
        </Form>
    )
}