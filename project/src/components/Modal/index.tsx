import { useRef, useEffect, useContext } from "react"
import { ClientContext } from "../../contexts/cliente"
import { IChildren } from "../../interfaces"
import { Container } from "./style"




const Modal = ({children}:IChildren) => {
    const {setModalIsOpen, modalIsOpen} =useContext(ClientContext)
    const modalRef = useRef<any>()
    useEffect( () => {
        const handleOutClick = (event:Event) => {
             if(!modalRef.current.contains(event.target)){
                 setModalIsOpen(!modalIsOpen)
             }
        }
        document.addEventListener('mousedown', handleOutClick);

        return () => {
            document.removeEventListener("mousedown", handleOutClick)
        }
    })
    return(
        <Container>
            <div className="modal-box" ref={modalRef}>
                {children}
            </div>
        </Container>
    )
}
export default Modal