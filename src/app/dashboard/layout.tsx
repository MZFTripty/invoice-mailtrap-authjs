import React from "react";
// import { requireUser } from "../utils/hooks";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { requireUser } from "../utils/hooks";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireUser();
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex flex-col max-h-screen h-full gap-2">
            <div className="h-4 lg:h-[60px] flex items-center border-b px-4 lg:px-6">
              <Link href="/" className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" className="size-7 rounded-sm" />
                <p className="font-bold text-2xl"><span className="text-orange-700">Invoice</span>App</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
