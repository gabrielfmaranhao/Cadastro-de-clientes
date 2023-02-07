import { IFieldsProps } from "../../interfaces"
import Text from "../Text"
import { Container } from "./style"


const Fields = ({color, description, size, weight, html, register, border_color, outline,...rest}:IFieldsProps) => {
    return(
        <Container border_color={border_color} outline={outline}>
            <Text  element="label" description={description} color={color} size={size} weight={weight} html={html} />
            <input type="text" {...rest} id={html} {...register}/>
        </Container>
    )
}

export default Fields