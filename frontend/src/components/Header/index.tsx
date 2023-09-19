"use client";

import { MagnifyingGlassIcon } from "../icons/MagnifyingGlass";
import { HeaderContainer } from "./styles";

export const Header = () => {
  return (
    // <HeaderContainer>
    <div>
      <MagnifyingGlassIcon className="h-5 w-5 ml-2 my-2" />
      <input type="text" placeholder="Procurar" />
    </div>
    // </HeaderContainer>
  );
};
