import Image from "next/image";
import { screen_full, screen_md, screen_sm } from "../../public";

export const DemoBg = () => {
  return (
    <>
      <Image
        src={screen_full}
        alt="bg"
        className="w-full h-full hidden lg:flex"
      />
      <Image
        src={screen_md}
        alt="bg"
        className="w-full h-full hidden sm:flex lg:hidden"
      />
      <Image
        src={screen_sm}
        alt="bg"
        className="w-full h-full flex sm:hidden"
      />
    </>
  );
};
