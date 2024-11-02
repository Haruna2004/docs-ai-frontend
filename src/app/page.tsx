import Image from "next/image";
import { paystack_logo } from "../../public";
import AIModal from "@/components/AIModal";

export default function Home() {
  return (
    <main>
      <header className="p-5">
        <div className="flex flex-row items-center gap-2">
          <Image
            src={paystack_logo}
            alt="logo"
            className="w-7 h-auto"
            width={100}
            height={100}
          />
          <p className="text-xl font-semibold">docs</p>
        </div>
      </header>

      <AIModal />
    </main>
  );
}
