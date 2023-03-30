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
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom";
import { IAddClient, IFunctions } from "../../interfaces"
import NavBar from "../../components/NavBar"
import { FormClient } from "../../components/FormClient"

const Home = () => {
    const {clientes, modalIsOpen, clientModal, functions, alterNumber, alterEmail, deleteEmail, deleteNumber, createCliente, setModalIsOpen} = useContext(ClientContext)
    const { user,  navOpen, setNavOpen, formClient, setFormClient} =useContext(UserContext)
    const {register, handleSubmit, formState: {errors}} = useForm<IFunctions>({resolver: yupResolver(validationFunctions)})
    const {register: registerClient, handleSubmit: handleSubmitClient, formState: {errors: errorsClient} } = useForm<IAddClient>({resolver: yupResolver(validationCliente)})
    const [value, setValue] = useState<string>()
    const [valueEmail, setValueEmail] = useState<string>()
    return(
        <>
            <Header>
                <h1>Cadastro de clientes</h1>
                <ButtonIcon right={10} top={5} onClick={() => setNavOpen(!navOpen)}>
                    <AiOutlineMenu size={20}/>
                </ButtonIcon>
            </Header>
            {navOpen && <NavBar/>}
            <ShowCase>
                <ul>
                    {clientes.map((cliente) => <Card key={cliente.id} cliente={cliente}/>)}
                </ul>
            </ShowCase>
            {modalIsOpen && 
                <Modal modalIsOpen setModalIsOpen={setModalIsOpen}>
                    <form onSubmit={handleSubmit(functions)}>
                        <Text description={clientModal.nome_completo} color="green-1" element="h2" size={20} weight={700} />
                        <ButtonIcon top={5} right={0} onClick={() => setModalIsOpen(!modalIsOpen)}>
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
            {formClient &&
                <Modal modalIsOpen={formClient} setModalIsOpen={setFormClient}>
                    <FormClient/>
                </Modal>
            }
        </>
    )
}

export default Home