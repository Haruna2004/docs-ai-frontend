import Image from "next/image";
import React from "react";
import { paystack_logo } from "../../public";

function Header() {
  return (
    <>
      <Image src={paystack_logo} alt="" className="h-5 w-auto" />
      <p className="text-base text-black/70">Paystack Docs Assistant</p>
    </>
  );
}

export default Header;
