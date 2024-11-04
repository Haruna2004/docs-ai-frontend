import Image from "next/image";
import React from "react";
import { flutterwave_logo } from "../../public";

function Header() {
  return (
    <>
      <Image src={flutterwave_logo} alt="" className="h-7 w-auto" />
      <p className="text-base font-sans text-black/70">AI Assistant</p>
    </>
  );
}

export default Header;
