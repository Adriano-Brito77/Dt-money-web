import {  useState } from "react"
import api from "../../utils/api"
import Button from "../../components/Button"
import { InputModal } from "../../components/Modal/styles"
import { Wrapper,Container,Title, SubTitle,ContainerElement,ContainerInputReset } from "./styles"

import { toast } from "react-toastify"


const ForgotPassword = () =>{

    const [email, setEmail] = useState({
        email:""
})
    const [loading, setLoading] = useState(false)
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail({ ...email, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!email){
            toast.error("Preenha o campo e-mail")
            return
        }
        setLoading(true)
      
    
        try {
            await api.post("/auth/request-password-reset", email).then((Response)=>
                toast.success(Response.data.message)
                )
        } catch (error:any) {
            const newError =  error.response.data.message || "Ocorreu um erro, tente mais tarde" 
            toast.error(newError)
            setLoading(false)
            return
        }
        setEmail({
            email:""
        })
        setLoading(false)
        
    }

    console.log(email)
return(
    <Wrapper>
        <Container>
            <Title>Resete de senha</Title>
                <ContainerElement onSubmit={handleSubmit}>
                    <SubTitle>Digite o e-mail vinculado a sua conta e iremos te enviar um link para defenir sua senha.</SubTitle>
                        <ContainerInputReset>
                            <label htmlFor="email">E-mail:</label>
                                <InputModal
                                id="email"
                                type="email"
                                height="medium"
                                placeholder="Digite seu E-mail"
                                value={email.email}
                                onChange={handleChange}
                                    />
                        </ContainerInputReset>
                    
                    <Button variant="reset" des={loading} disabled={loading}>Enviar</Button>
                </ContainerElement>
        
        </Container>
    </Wrapper>
)



}

export default ForgotPassword