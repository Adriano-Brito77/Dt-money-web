import React from "react";
import { Button as StyledButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "search" | "pages" | "confirm" | "delete";
  $isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
  return (
    <StyledButton $variant={variant} $isActive {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
