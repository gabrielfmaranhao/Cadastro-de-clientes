import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services";
import { IRegister } from "../../pages/register";
import { ILogin } from "../../pages/login";


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
}

export const UserContext = createContext<IUserContextProps>({} as IUserContextProps)
export const UserProvider = ({children}:IChildren) => {
    const [user, setUser] = useState<IUser | undefined>();
    const navigate = useNavigate()
    useEffect( () => {
        const loadUser = async () => {
            const token = localStorage.getItem("@Cadastro_clientes: token")
            if(token) {
                try {
                    const {data} = await api.get("/user/profile/")
                    setUser(data)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        loadUser()
        
    },[])
    const registerUser = async (user:IRegister):Promise<void> => {
        try {
            await api.post("/user/register/", user)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }
    const loginUser = async (user:ILogin):Promise<void> => {
        try {
            const {data} = await api.post("/user/login/", user)
            localStorage.setItem("@Cadastro_clientes: token", data.access)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    const logout =  ():void => {
        localStorage.clear()
        setUser(undefined)
    }
    return(
        <UserContext.Provider value={ { loginUser, logout, registerUser, user } }>
            {children}
        </UserContext.Provider>
    )
}