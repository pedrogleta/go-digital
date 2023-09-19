"use client";

import { MagnifyingGlassIcon } from "../icons/MagnifyingGlass";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <MagnifyingGlassIcon className="h-5 w-5 ml-2 my-2" />
      <input type="text" placeholder="Procurar" />
    </Container>
  );
};
