export interface ISessionLoginRequest {
    username: string
    password: string
}

export interface ISessionRegisterRequest extends ISessionLoginRequest {
    name: string
    cpf: string
}