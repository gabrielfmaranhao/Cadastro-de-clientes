import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services";
import { IUserContextProps, IChildren, IUser,  ILogin, IRegister} from "../../interfaces";




export const UserContext = createContext<IUserContextProps>({} as IUserContextProps)
export const UserProvider = ({children}:IChildren) => {
    const [user, setUser] = useState<IUser | undefined>();
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [formClient, setFormClient] = useState<boolean>(false);
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
            const {data: data2} = await api.get("/user/profile/",{headers:{Authorization: `Bearer ${data.access}`}})
            setUser(data2)
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
        <UserContext.Provider value={ { loginUser, logout, registerUser, user, setUser, navOpen, setNavOpen,formClient, setFormClient } }>
            {children}
        </UserContext.Provider>
    )
}