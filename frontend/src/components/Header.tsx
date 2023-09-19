"use client";

import { MagnifyingGlassIcon } from "./icons/MagnifyingGlass";

export const Header = () => {
  return (
    <div>
      <div>
        <MagnifyingGlassIcon className="h-5 w-5 ml-2 my-2" />
        <input type="text" placeholder="Procurar" />
      </div>
    </div>
  );
};
