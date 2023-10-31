import React from "react";
import Logo from "../assets/logo.svg"

const Header = () => {
  return (
    <header className=" py-8">
      <div className=" container mx-auto">
        <div className="flex justify-center items-center">
          <button className="btn btn-sm hover:text-primary">Escribeme</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
