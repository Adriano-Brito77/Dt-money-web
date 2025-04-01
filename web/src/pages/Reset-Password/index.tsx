import { Button } from "../../components/Button/styles"
import { InputModal } from "../../components/Modal/styles"
import { Wrapper,FormWrapper,Hearder,ContainerIpunt,ContainerIpuntReset,ContainerButton } from "./styles"




const ResetPassword = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Hearder>Crie uma nova senha</Hearder>
          <ContainerIpuntReset>
            <ContainerIpunt>

            <label htmlFor="newPassword">Nova Senha:</label>
            <InputModal 
            height="medium" 
            id="newPassword"
            type="password"
            placeholder="Digite sua senha"
            />

            <label htmlFor="confirmPassword">Confirmação de Senha:</label>
            <InputModal 
            height="medium" 
            id="confirmPassword"
            type="password"
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