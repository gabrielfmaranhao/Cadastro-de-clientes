import { Header, ShowCase, Form} from "./style"
import {AiOutlineMenu} from "react-icons/ai"
import ButtonIcon from "../../components/ButtonIcon"
import { useContext, useState } from "react"
import Text from "../../components/Text"
import Card from "../../components/Card"
import { UserContext } from "../../contexts/usuario"
import Modal from "../../components/Modal"
import { ClientContext } from "../../contexts/cliente"
import Fields from "../../components/Fields"
import { GrClose, GrAdd, GrUpdate} from "react-icons/gr";
import {BsTrash2} from "react-icons/bs";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validationCliente, validationFunctions } from "../../validations"
import { IFunctions } from "../../contexts/cliente"
import Button from "../../components/Button"
import { IAddClient } from "../../contexts/cliente"
import { useNavigate } from "react-router-dom";
export interface ICliente {
    id: string
    nome_completo: string
    criado_por: string
    created_at: string
    updated_at: string
    cpf: string
    Telefones: ITelefone[]
    emails: IEmail[]
}
export interface ITelefone {
    id:string
    created_at: Date
    updated_at: Date
    telefone: string

}
export interface IEmail {
    id: string
    created_at: Date
    updated_at: Date
    email: string
}

const Home = () => {
    const {clientes, modalIsOpen, clientModal, functions, alterNumber, alterEmail, deleteEmail, deleteNumber, createCliente} = useContext(ClientContext)
    const { user} =useContext(UserContext)
    const {register, handleSubmit, formState: {errors}} = useForm<IFunctions>({resolver: yupResolver(validationFunctions)})
    const {register: registerClient, handleSubmit: handleSubmitClient, formState: {errors: errorsClient} } = useForm<IAddClient>({resolver: yupResolver(validationCliente)})
    const [value, setValue] = useState<string>()
    const [valueEmail, setValueEmail] = useState<string>()
    const navigate = useNavigate()
    return(
        <>
            <Header>
                <h1>Cadastro de clientes</h1>
                <ButtonIcon right={10} top={5}>
                    <AiOutlineMenu size={20}/>
                </ButtonIcon>
            </Header>
            {user ? 
                <Form onSubmit={handleSubmitClient(createCliente)}>
                    <div className="form">
                        <Text color="green-1" element="h2" size={16} weight={700} description="Adicionar Clientes"/>
                        <Fields description="Nome completo:" color="green-1" html="nome_completo" size={12} weight={400} border_color={errorsClient.nome_completo ? "red-0" : "green-1"} outline={errorsClient.nome_completo  ? "red-0" : "green-1"} register={{...registerClient("nome_completo")}} placeholder="Ex: Gabriel Ferreira Maranhão"/>
                        <Text description={errorsClient.nome_completo?.message} color="red-0" element="span" size={11} weight={700}/>
                        <Fields description="CPF:" color="green-1" html="cpf" size={12} weight={400} border_color={errorsClient.cpf ? "red-0" : "green-1"} outline={errorsClient.cpf ? "red-0" : "green-1"} placeholder="Ex: 12345678910" register={{...registerClient("cpf")}}/>
                        <Text description={errorsClient.cpf?.message} color="red-0" element="span" size={11} weight={700}/>
                        <Fields description="Telefone:" color="green-1" html="telefone" size={12} weight={400} border_color={errorsClient.telefone ? "red-0" : "green-1"} outline={errors.new_number ? "red-0" : "green-1"} register={{...registerClient("telefone")}} placeholder = "dd+123456789"/>
                        <Fields description="Email" color="green-1" html="email" size={12} weight={400} border_color={errorsClient.email ? "red-0" : "green-1"} outline={errors.new_number ? "red-0" : "green-1"} register={{...registerClient("email")}} placeholder = "jonhnDowe@mail.com"/>
                        <Button title="Cadastrar" background="green-1" color="white-0" height={2.5} width={16}/>
                    </div>
                </Form>
            : <Button background="green-1" color="white-0" height={2.1} title="Logar" width={15} onClick={() => (localStorage.clear(), navigate("/login"))}/>}
            <ShowCase>
                <ul>
                    {clientes.map((cliente) => <Card key={cliente.id} cliente={cliente}/>)}
                </ul>
            </ShowCase>
            {modalIsOpen && 
                <Modal>
                    <form onSubmit={handleSubmit(functions)}>
                        <Text description={clientModal.nome_completo} color="green-1" element="h2" size={20} weight={700} />
                        <ButtonIcon top={5} right={0} >
                            <GrClose/>
                        </ButtonIcon>
                        <div className="position">
                            <Text description={`CPF: ${clientModal.cpf}`} color="blue-2" element="p" size={16} weight={500}/>
                            <ButtonIcon top={0} right={0} type={"submit"}>
                                <GrUpdate/>
                            </ButtonIcon>
                            <Fields description="Alterar CPF:" border_color="green-1" color="gray-1" html="alterar_cpf" outline="green-1" size={12} weight={400} placeholder={clientModal.cpf} register={{...register("alter_cpf")}}/>
                        </div>
                        <div className="position">
                            <Text description="Telefones:" element="h3" color="blue-2" size={16} weight={500}/>
                            <Fields description="Novo número:" border_color={errors.new_number ? "red-0" : "green-1"} outline={errors.new_number ? "red-0" : "green-1"} color="gray-1" html="novo_numero" size={12} weight={400} placeholder={"Novo número: dd+123456789"} register={{...register("new_number")}}/>
                            <ButtonIcon top={0} right={0} type={"submit"}>
                                <GrAdd/>
                            </ButtonIcon>
                        </div>
                        {clientModal.Telefones.map((telefone) =>
                        <div className="position" key={telefone.id}>
                            <Text description={telefone.telefone} element="span" color="gray-1" size={14} weight={400}/>
                            <Fields description="Alterar Telefone:" border_color={errors.alter_number ? "red-0" : "green-1"} outline={errors.alter_number ? "red-0" : "green-1"} color="gray-1" html="alterar_telefone" size={12} weight={400} placeholder={"Alterar número: dd+123456789"} onChange={(e)=> setValue(e.currentTarget.value)}/>
                                <ButtonIcon top={0} right={0} onClick={() => {
                                    const part1 = value!.slice(0,2)
                                    let ddd = `(${part1})`
                                    const part2 = value!.slice(2,7)
                                    let primeiro = ` ${part2}-`
                                    const part3 = value!.slice(7)
                                    const result = ddd+primeiro+part3
                                    alterNumber({number: result!}, telefone.id)}}
                                    >
                                    <GrUpdate/>
                                </ButtonIcon>
                                <ButtonIcon top={0} right={20} onClick={ () => deleteNumber(telefone.id)}>
                                    <BsTrash2/>
                                </ButtonIcon>
                        </div>
                        )}
                        <div className="position">
                            <Text description="Emails:" element="h3" color="blue-2" size={16} weight={500}/>
                            <Fields description="Novo email:" border_color="green-1" color="gray-1" html="novo_email" outline="green-1" size={12} weight={400} placeholder={"Novo email"} register={{...register("new_email")}}/>
                            <ButtonIcon top={0} right={0}>
                                <GrAdd/>
                            </ButtonIcon>
                        </div>
                        {clientModal.emails.map((email) => 
                        <div className="position" key={email.id}>
                            <Text description={email.email} element="span" color="gray-1" size={14} weight={400}/>
                            <Fields description="Alterar Email:" border_color="green-1" color="gray-1" html="alterar_email" outline="green-1" size={12} weight={400} placeholder={email.email} onChange={(e)=> setValueEmail(e.currentTarget.value)}/>
                            <ButtonIcon top={0} right={0} onClick={() => alterEmail({email:valueEmail!}, email.id)}>
                                <GrUpdate/>
                            </ButtonIcon>
                            <ButtonIcon top={0} right={20} onClick={() => deleteEmail(email.id)}>
                                <BsTrash2/>
                            </ButtonIcon>
                        </div>                
                        )}
                    </form>
                </Modal>
            }
        </>
    )
}

export default Home