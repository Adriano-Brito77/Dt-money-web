import React from "react";
import { Footer, Search } from "./styles";
import { Button } from "../Button/styles";
import { VscSearch } from "react-icons/vsc";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FooterTransaction: React.FC<FooterProps> = ({ children, ...props }) => {
  return (
    <Footer {...props}>
      <Search placeholder="Busque uma transação" />
      <Button variant="search">
        <VscSearch />
        Buscar
      </Button>
    </Footer>
  );
};

export default FooterTransaction;
