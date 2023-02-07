import { Container, Box, Content } from "./style"
import Text from "../../components/Text"
import ButtonIcon from "../../components/ButtonIcon"
import { GrClose} from "react-icons/gr";
import Fields from "../../components/Fields";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { validationRegister } from "../../validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/usuario";
import { IRegister } from "../../interfaces";



const Register = () => {
    const {register, handleSubmit, formState:{errors} } = useForm<IRegister>({resolver: yupResolver(validationRegister)})
    const {registerUser} = useContext(UserContext)
    return(
        <Container>
            <Box>
                <div className="image">
                    <img src="telemarketing.png" alt="telemarketing" />
                    <Text color="white-0" element="h3" size={12} weight={500} description="Plataforma de cadastro de clientes"/>
                    <Text color="white-0" element="p" size={11} weight={200} description="Cadastre clientes com todas as informações necessárias para gerenciar seu negócio !"/>
                </div>
                <Content>
                    <ButtonIcon right={0} top={5}>
                        <GrClose/>
                    </ButtonIcon>
                    <Text description="Cadastro de clientes" color="green-1" size={16} element="h2" weight={400} />
                    <Text description="Registro" color="blue-0" size={25} element="h3" weight={700} />
                    <Text description="Realize o seu cadastro para começar a cadastrar seus clientes !" color="gray-0" element="p" size={12} weight={100}/>
                    <form onSubmit={handleSubmit(registerUser)}>
                        <Fields description="Username" color="black-0" size={12} weight={400} type="text" placeholder="username" html="username" register={{...register("username")}} border_color={errors.username ? "red-0" : "white-1"} outline={errors.username ? "red-0" : "green-1"} />
                        <Text description={errors.username?.message} color="red-0" element="span" size={11} weight={700}/>
                        <Fields description="Password" color="black-0" size={12} weight={400} type="password" placeholder="password" html="password" register={{...register("password")}} border_color={errors.password ? "red-0" : "white-1"} outline={errors.password ? "red-0" : "green-1"} />
                        <Text description={errors.password?.message} color="red-0" element="span" size={11} weight={700}/>
                        <Fields description="Confirme seu password" color="black-0" size={12} weight={400} type="password" placeholder="Password" html="confirm_password" register={{...register("confirm_password")}} border_color={errors.confirm_password ? "red-0" : "white-1"} outline={errors.confirm_password ? "red-0" : "green-1"}/>
                        <Text description={errors.confirm_password?.message} color="red-0" element="span" size={11} weight={700}/>
                        <Fields description="CPF" color="black-0" size={12} weight={400} type="number" placeholder="000.000.000-00" html="cpf" register={{...register("cpf")}} border_color={errors.cpf ? "red-0" : "white-1"} outline={errors.cpf ? "red-0" : "green-1"}/>
                        <Text description={errors.cpf?.message} color="red-0" element="span" size={11} weight={700}/>
                        <Button background="green-1" color="white-0" height={2.5} title="Register"/>
                    </form>
                    <div className="link">
                        <Text description="Já possui login?" element="p" color="gray-0" size={12} weight={400}/>
                        <Link to={"/login"}>Logar</Link>
                    </div>
                </Content>
            </Box>
        </Container>
    )
}
export default Register