"use client";

import { MagnifyingGlassIcon } from "./icons/MagnifyingGlass";

export const Header = () => {
  return (
    <div className="m-auto">
      <div className="flex border border-purple-300 rounded-md">
        <MagnifyingGlassIcon className="h-5 w-5 ml-2 my-2" />
        <input className="ml-3 rounded-md" type="text" placeholder="Search" />
      </div>
    </div>
  );
};
