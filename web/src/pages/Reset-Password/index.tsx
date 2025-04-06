/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { Button } from "../../components/Button/styles"
import { InputModal } from "../../components/Modal/styles"
import { Wrapper,FormWrapper,Hearder,ContainerIpunt,ContainerIpuntReset,ContainerButton } from "./styles"
import { useLocation,useNavigate } from "react-router-dom"

import api from "../../utils/api"


import { toast } from "react-toastify";



const ResetPassword = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const token = queryParams.get("token")


  const [newPassword, setNewPassword] = React.useState({
    password: "",
    confirmPassword: "",
  })
  
  
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/")
      return
    }
  }, [])

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const { id, value } = e.target
    setNewPassword({...newPassword, [id]: value})
    console.log(newPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if(!newPassword.password){
      toast.error("Preencha o campo de senha")
      return
    }

    if(!newPassword.confirmPassword){
      toast.error("Preencha o campo de confirmação de senha")
      return
    }
    if (newPassword.password !== newPassword.confirmPassword) {
      toast.error("As senhas não coincidem")
      return
    }
    
    api.post(`/auth/reset-password?token=${token}`, newPassword)
      .then((response) => {
        toast.success("Senha alterada com sucesso!")
        navigate("/auth")
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || "Erro ao alterar senha. Tente novamente."
        toast.error(errorMessage)
        return
      })
   
    
  }

  



  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Hearder>Crie uma nova senha</Hearder>
          <ContainerIpuntReset>
            <ContainerIpunt>

            <label htmlFor="newPassword">Nova Senha:</label>
            <InputModal 
            height="medium" 
            id="password"
            type="password"
            value={newPassword.password}
            onChange={HandleChange}
            placeholder="Digite sua senha"
            />

            <label htmlFor="confirmPassword">Confirmação de Senha:</label>
            <InputModal 
            height="medium" 
            id="confirmPassword"
            type="password"
            onChange={HandleChange}
            value={newPassword.confirmPassword}
            placeholder="Confirme a senha"
            />

            </ContainerIpunt>
        </ContainerIpuntReset>
        <ContainerButton>
          <Button $variant="reset" >Enviar</Button>
          </ContainerButton>
          
      </FormWrapper>
      
    </Wrapper>
  )
}


export default ResetPassword