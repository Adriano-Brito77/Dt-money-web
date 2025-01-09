import {ContainerCard, HeaderCard,FooterCard} from "./styles";
import income from "../../assets/income.png";
import outcome from "../../assets/outcome.png";
import cifra from "../../assets/cifra.png";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "income" | "outcome" | "result"
    name?: string;
    value?: number;
    
}


const CardComponent: React.FC<CardProps> = ({ variant, name, value,...props}) => {
    return (
        <ContainerCard   variant={variant} {...props}>
            <HeaderCard variant={variant} name={name} {...props}>
                {name}
                {variant === "income" && <img src={income} alt="income" />} 
                {variant === "outcome" && <img src={outcome} alt="outcome" />} 
                {variant === "result" && <img src={cifra} alt="cifra" />} 
                
            </HeaderCard>
            <FooterCard value={value} {...props}>
                    R$ {value}
                    
            </FooterCard>
        </ContainerCard>
    );
};

export default CardComponent;