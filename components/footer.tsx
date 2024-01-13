import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png"

function Footer() {
  return (
    <footer className="p-[4rem] text-center bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center">
        <Link href="#home" className="pb-5 cursor-pointer focus:scale-110 hover:scale-110 transition">
        <Image
        src={logo}
        alt="Logo Javier Labrador"
        width="100"
        height="100"
        quality="95"
        priority={true}
        className="shadow-lg"
        />
        </Link>
        <ul className="flex gap-8 pb-2">
          <li className="animationUnderline"><a href="https://github.com/Jalch0" >Github</a></li>
          <li className="animationUnderline"><a href="https://www.linkedin.com/in/javierlabradorc/">LinkedIn</a></li>
          <li className="animationUnderline"><a href="https://twitter.com/jalch0">Twitter</a></li>
          <li className="animationUnderline"><a href="https://www.instagram.com/javierlabradorc/">Instagram</a></li>
        </ul>
        <small className="mb-2 mt-3 block text-xs">
          &copy; 2023 Javier Labrador
        </small>
      </div>
    </footer>
  );
}

export default Footer;
