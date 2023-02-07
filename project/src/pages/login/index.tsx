import { Container, Box, Content } from "./style";
import Text from "../../components/Text";
import Fields from "../../components/Fields";
import Button from "../../components/Button";
import { GrClose} from "react-icons/gr";
import ButtonIcon from "../../components/ButtonIcon";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationLogin } from "../../validations";
import { useContext } from "react";
import { UserContext } from "../../contexts/usuario";


export interface ILogin {
    username: string
    password: string
}


const Login = () => {
    const { register, handleSubmit, formState:{errors} } =useForm<ILogin>({resolver: yupResolver(validationLogin)})
    const {loginUser} = useContext(UserContext)
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
                        <GrClose />
                    </ButtonIcon>
                    <Text description="Cadastro de clientes" color="green-1" size={16} element="h2" weight={400} />
                    <Text description="Login" color="blue-0" size={25} element="h3" weight={700} />
                    <Text description="Realize o login para começar a cadastrar clientes !" color="gray-0" element="p" size={12} weight={100}/>
                    <form onSubmit={handleSubmit(loginUser)}>
                        <Fields description="Username" color="black-0" size={12} weight={400} type="text" placeholder="username" html="username" border_color={errors.username ? "red-0" : "white-1"} outline={errors.username ? "red-0" : "green-1"}  register={{...register("username")}}/>
                        <Text description={errors.username?.message} color="red-0" element="span" size={11} weight={700}/>
                        <Fields description="Password" color="black-0" size={12} weight={400} type="password" placeholder="password" html="password" border_color={errors.password ? "red-0" : "white-1"} outline={errors.password ? "red-0" : "green-1"} register={{...register("password")}}/>
                        <Text description={errors.password?.message} color="red-0" element="span" size={11} weight={700}/>
                        <Button background="green-1" color="white-0" height={2.5} title="Login"/>
                    </form>
                    <div className="link">
                        <Text description="Não tem um usuário?" element="p" color="gray-0" size={12} weight={400}/>
                        <Link to={"/register"}>Registre-se</Link>
                    </div>
                </Content>
            </Box>       
        </Container>
    )
}

export default Login