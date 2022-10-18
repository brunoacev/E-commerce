import Image from "next/image";
import React from "react";
import Book from "../Assets/book.jpg";
import Button from "./Button";

function Landing() {
  return (
    <section className="max-x-[1350px] sticky top-0 mx-auto flex h-screen items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Intellecent</span>
          <span className="block">Driven By Values</span>
        </h1>

        <div className="flex items-center gap-3 sm:flex-col lg:flex-row">
          <Button loading={false} title="Compre Agora" />

          <a className="Link">Mais informações</a>
        </div>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image src={Book} layout="fill" objectFit="contain" />
      </div>
    </section>
  );
}

export default Landing;
