export interface IClienteRequest {
    nome_completo: string
    cpf: string
    telefone?: ITelefoneRequest
    email?: IEmailRequest
}

export interface ITelefoneRequest {
    number: string
}
export interface IEmailRequest {
    email: string
}
export interface IClienteUpdate {
    nome_completo?: string
    cpf?: string
}