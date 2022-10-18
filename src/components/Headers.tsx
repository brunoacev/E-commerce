import {
  SearchOutline,
  ShoppingBagOutline,
  UserOutline,
} from "heroicons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../Assets/logo.png";

function Headers() {
  const session = false;

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-12 cursor-pointer opacity-75 transition  hover:opacity-100">
            <Image src={logo} layout="fill" objectFit="contain" />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a href="/" className="headerLink">
          Produtos
        </a>
        <a href="/" className="headerLink">
          Explore
        </a>
        <a href="/" className="headerLink">
          Business
        </a>
        <a href="/" className="headerLink">
          Suporte
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchOutline className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              5
            </span>
            <ShoppingBagOutline className="headerIcon" />
          </div>
        </Link>
        {/* {session ? (
          <Image
            src={
              session.user?.image ||
              "https://ogimg.infoglobo.com.br/in/24907109-c86-bcf/FT1086A/avatar-a-lenda-de-aang.jpg"
            }
            alt=""
            width={34}
            height={34}
            onClick={() => singOut()}
            className="cursor-pointer rounded-full"
          />
        ) : (
          <UserOutline className="headerIcon" onClick={() => signIn()} />
        )} */}
      </div>
    </header>
  );
}

export default Headers;
