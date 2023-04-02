import { useContext, useEffect, useRef } from "react"
import { Container } from "./style"
import { UserContext } from "../../contexts/usuario"
import Button from "../Button"
import { useNavigate } from "react-router-dom"
import { ClientContext } from "../../contexts/cliente"

const NavBar = () => {
    const {user, navOpen, setNavOpen, logout} = useContext(UserContext);
    const {formClient, setFormClient} = useContext(ClientContext)
    const navigate = useNavigate()
    const navRef = useRef<any>()
    useEffect( () => {
        const handleOutClick = (event:Event) => {
             if(!navRef.current.contains(event.target)){
                 setNavOpen(!navOpen)
             }
        }
        document.addEventListener('mousedown', handleOutClick);

        return () => {
            document.removeEventListener("mousedown", handleOutClick)
        }
    })
    return(
        <Container ref={navRef}>
            {user ?
            <>
            <Button background="white-0" color="green-1" height={2.1} title="Cadastrar cliente" width={5} onClick={ () => {setFormClient(!formClient); setNavOpen(!navOpen)}}/>
            <Button background="white-0" color="green-1" height={2.1} title="Logout" width={5} onClick={() => logout()}/>
            </>
            :
            <Button background="green-1" color="white-0" height={2.1} title="Logar" width={5} onClick={ () => navigate("/login")}/>}
        </Container>
    )
}
export default NavBar