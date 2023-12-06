import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="p-[4rem] text-center bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center">
        <Link href="#home" className="pb-5 cursor-pointer focus:scale-110 hover:scale-110 transition">
        <Image
        src="https://drive.google.com/uc?export=download&id=11P0JVh_y93JcrONyuO3iFo3O0-VqNhSW"
        alt="Logo Javier Labrador"
        width="100"
        height="100"
        quality="95"
        priority={true}
        className="shadow-lg"
        />
        </Link>
        <ul className="flex gap-8 pb-2">
          <li className="animationUnderline"><a href="">Github</a></li>
          <li className="animationUnderline"><a href="">LinkedIn</a></li>
          <li className="animationUnderline"><a href="">Twitter</a></li>
          <li className="animationUnderline"><a href="">Instagram</a></li>
        </ul>
        <small className="mb-2 mt-3 block text-xs">
          &copy; 2023 Javier Labrador
        </small>
      </div>
    </footer>
  );
}

export default Footer;
