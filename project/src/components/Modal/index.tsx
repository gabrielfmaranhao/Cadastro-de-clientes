import { useRef, useEffect, useContext, ReactNode } from "react"
import { ClientContext } from "../../contexts/cliente"
import { IChildren } from "../../interfaces"
import { Container } from "./style"

interface IModalProps {
    children: ReactNode
    modalIsOpen: boolean
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const Modal = ({children, modalIsOpen, setModalIsOpen}:IModalProps) => {
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