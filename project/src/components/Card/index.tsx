import { ICliente } from "../../pages/home"
import { CardStyle } from "./style"
import Text from "../Text"
import { useContext } from "react"
import { UserContext } from "../../contexts/usuario"
import ButtonIcon from "../ButtonIcon"
import {HiInformationCircle} from "react-icons/hi";
import { ClientContext } from "../../contexts/cliente"

interface ICardProps {
    cliente: ICliente
}

const Card = ({cliente}:ICardProps) => {
    const date_cliente = cliente.created_at.slice(0,10).split("-").reverse().join("/")
    const {user} = useContext(UserContext)
    const {setModalIsOpen, modalIsOpen, setClientModal} = useContext(ClientContext)
    return(
        <CardStyle >
            <div className="simples">
                <Text element="h3" color="green-1" size={16} weight={600} description={`Cliente: ${cliente.nome_completo}`}/>
                <Text element="p" color="blue-0" size={12} weight={400} description={`Criado por: ${cliente.criado_por}`}/>
                <Text element="span" color="gray-0" size={12} weight={400} description={date_cliente}/>
            </div>
            {user?.username === cliente.criado_por && 
            <ButtonIcon top={5} right={10} onClick={() => { 
                setModalIsOpen(!modalIsOpen) 
                setClientModal(cliente) 
                }}>
                <HiInformationCircle color="var(--green-1)"/>
            </ButtonIcon>}
        </CardStyle>
    )
    
}
export default Card