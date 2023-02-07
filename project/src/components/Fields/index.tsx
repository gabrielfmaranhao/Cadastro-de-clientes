import { InputHTMLAttributes } from "react"
import Text from "../Text"
import { Container } from "./style"
import { UseFormRegister } from "react-hook-form"
import { IRegister } from "../../pages/register"
interface IFieldsProps extends InputHTMLAttributes<HTMLInputElement>{
    description: string
    size: number
    color:  "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0" 
    weight: number
    html: string
    register?: any
    border_color:  "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0"
    outline: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" | "red-0"
}

const Fields = ({color, description, size, weight, html, register, border_color, outline,...rest}:IFieldsProps) => {
    return(
        <Container border_color={border_color} outline={outline}>
            <Text  element="label" description={description} color={color} size={size} weight={weight} html={html} />
            <input type="text" {...rest} id={html} {...register}/>
        </Container>
    )
}

export default Fields