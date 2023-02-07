import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services";
import { IChildren } from "../usuario";
import { ICliente } from "../../pages/home";

export interface IClienteContextProps {
    modalIsOpen: boolean
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    clientes: ICliente[]
    clientModal: ICliente
    setClientModal: React.Dispatch<React.SetStateAction<ICliente>>
    functions: (dados: IFunctions) => Promise<void>
    alterNumber: (dados: ITelefone, id_telefone: string) => Promise<void>
    alterEmail: (dados: IEmail, id_email: string) => Promise<void>
    deleteEmail: (id_email: string) => Promise<void>
    deleteNumber: (id_telefone: string) => Promise<void>
    createCliente: (user: IAddClient) => Promise<void>
}
export interface IFunctions {
    alter_cpf: string
    new_number: string
    alter_number: string
    new_email: string
    alter_email: string
}
export interface ITelefone {
    number: string
}
export interface IEmail {
    email: string
}
export interface IAddClient {
    nome_completo: string
    cpf: string
    telefone?: any
    email?: any
}

export const ClientContext = createContext<IClienteContextProps>({} as IClienteContextProps);
export const ClienteProvider = ({children}: IChildren) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [clientModal, setClientModal] = useState<ICliente>({} as ICliente)
    const [ clientes, setClientes] = useState<ICliente[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        const getClientes = async() => {
            try {
                const { data } = await api.get("/cliente/")
                setClientes(data)
            } catch (error) {
                console.log(error)
            }
        }
        getClientes()
    },[])
    const createCliente = async(user:IAddClient) => {
        let {email, telefone, ...rest} = user
        if(telefone) {
            const telefoneNew = {number: telefone}
            user["telefone"] = telefoneNew
        }
        if(email) {
            const emailNew = {email: email}
            user["email"] = emailNew
        }
        console.log(user)
        try {
            await api.post("/cliente/", user)
            const {data} = await api.get("/cliente/");
            setClientes(data)
        } catch (error) {
            console.log(error)
        }
    }
    const alterCpf = async(dados:string, id: string):Promise<void> => {
        const cpf = {cpf: dados}
        try {
            await api.patch(`/cliente/${id}/`, cpf);
            const {data} = await api.get("/cliente/");
            setClientes(data)
            setModalIsOpen(!modalIsOpen)
        } catch (error) {
            console.log(error)
        }
    }
    const alterNumber = async(dados:ITelefone, id_telefone:string):Promise<void> => {
        try {
            await api.patch(`/cliente/telefone/${id_telefone}/`, dados)
            const {data} = await api.get("/cliente/");
            setClientes(data)
            setModalIsOpen(!modalIsOpen)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteNumber = async(id_telefone:string):Promise<void> => {
        try {
            await api.delete(`/cliente/telefone/${id_telefone}/`)
            const {data} = await api.get("/cliente/");
            setClientes(data)
            setModalIsOpen(!modalIsOpen)
        } catch (error) {
            console.log(error)
        }
    }
    const newNumber = async (dados:string, cliente_id:string):Promise<void> => {
        const number = {number: dados}
        try {
            await api.post(`/cliente/${cliente_id}/telefone/`, number)
            const {data} = await api.get("/cliente/");
            setClientes(data)
            setModalIsOpen(!modalIsOpen)
        } catch (error) {
            console.log(error)
        }
    }
    const alterEmail = async(dados:IEmail, id_email:string):Promise<void> => {
        try {
            await api.patch(`/cliente/email/${id_email}/`, dados)
            const {data} = await api.get("/cliente/");
            setClientes(data)
            setModalIsOpen(!modalIsOpen)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteEmail = async(id_email:string):Promise<void> => {
        try {
            await api.delete(`/cliente/email/${id_email}/`)
            const {data} = await api.get("/cliente/");
            setClientes(data)
            setModalIsOpen(!modalIsOpen)
        } catch (error) {
            console.log(error)
        }
    }
    const newEmail = async (dados:string, cliente_id:string):Promise<void> => {
        const email = {email: dados}
        try {
            await api.post(`/cliente/${cliente_id}/email/`, email)
            const {data} = await api.get("/cliente/");
            setClientes(data)
            setModalIsOpen(!modalIsOpen)
        } catch (error) {
            console.log(error)
        }
    }
    const functions = async(dados:IFunctions):Promise<void> => {
        const {alter_cpf, alter_email, alter_number, new_email, new_number} = dados
        if(dados.alter_cpf.length > 5) {
            await alterCpf(alter_cpf, clientModal.id)
        }
        if(new_number.length > 10) {
            await newNumber(new_number, clientModal.id)
        }
        if(new_email.length > 5) {
            await newEmail(new_email, clientModal.id)
        }
    }
    return(
        <ClientContext.Provider value={ {clientes, modalIsOpen, setModalIsOpen, clientModal, setClientModal, functions, alterNumber, alterEmail, deleteEmail, deleteNumber, createCliente} }>
            {children}
        </ClientContext.Provider>
    )
}