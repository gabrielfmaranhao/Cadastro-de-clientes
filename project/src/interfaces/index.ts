import { ButtonHTMLAttributes, InputHTMLAttributes } from "react"
import { ReactNode } from "react"
// BUTTON
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    background: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" 
    height: number
    width?: number
    color: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" 
}
export interface IButtonStyles {
    background: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" 
    height: number
    width?: number
    color: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" 
}
// BUTTON ICON -----------------------------------------------------------------------------------------------
export interface IButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    top: number
    right: number
}
export interface IButtonPropsStyle {
    top?: number
    right?: number
}
// CARD -----------------------------------------------------------------------------------------------
export interface ICardProps {
    cliente: ICliente
}
// FIELDS -----------------------------------------------------------------------------------------------
export interface IFieldsProps extends InputHTMLAttributes<HTMLInputElement>{
    description: string
    size: number
    color:  "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0" 
    weight: number
    html: string
    register?: any
    border_color:  "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0"
    outline: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0"
}
export interface IInputStyle {
    border_color: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0"
    outline: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0"
}
// TEXT-----------------------------------------------------------------------------------------------
export interface ITextProps extends ITextStylesProps {
    description?: string
    element: "h1" | "h2" | "h3" | "p" | "label" | "span"
    html?: string
}
export interface ITextStylesProps {
    size: number
    color: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0" 
    weight: number
}
// CONTEXT CLIENTE-----------------------------------------------------------------------------------------------
export interface IClienteContextProps {
    modalIsOpen: boolean
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    clientes: ICliente[]
    clientModal: ICliente
    setClientModal: React.Dispatch<React.SetStateAction<ICliente>>
    functions: (dados: IFunctions) => Promise<void>
    alterNumber: (dados: ITelefoneAdd, id_telefone: string) => Promise<void>
    alterEmail: (dados: IEmailAdd, id_email: string) => Promise<void>
    deleteEmail: (id_email: string) => Promise<void>
    deleteNumber: (id_telefone: string) => Promise<void>
    createCliente: (user: IAddClient) => Promise<void>
    deleteCliente: (cliente_id: string) => Promise<void>
}
export interface IFunctions {
    alter_cpf: string
    new_number: string
    alter_number: string
    new_email: string
    alter_email: string
}
export interface ITelefoneAdd {
    number: string
}
export interface IEmailAdd {
    email: string
}
export interface IAddClient {
    nome_completo: string
    cpf: string
    telefone?: any
    email?: any
}
// CONTEXT USUARIO -----------------------------------------------------------------------------------------------
export interface IChildren {
    children: React.ReactNode   
}
export interface IUser {
    id: string
    username: string
    cpf: string
    created_at: string,
	updated_at: string
}
export interface IUserContextProps {
    registerUser: (user: IRegister) => Promise<void>
    loginUser: (user: ILogin) => Promise<void>
    logout: () => void
    user: IUser | undefined
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
    navOpen: boolean
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
    formClient: boolean
    setFormClient: React.Dispatch<React.SetStateAction<boolean>>
    
}
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
export interface ILogin {
    username: string
    password: string
}
export interface IRegister {
    username: string
    password: string
    confirm_password: string
    cpf: string
}
// -----------------------------------------------------------------------------------------------