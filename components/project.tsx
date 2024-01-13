"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <a href={url} target="_blank">
        <section className=" bg-gray-900 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] hover:bg-opacity-50 transition group-even:pl-0 sm:group-even:pl-8 flex flex-col sm:flex-row justify-between">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:order-2 ">
            <h3 className="text-2xl font-semibold text-white flex items-center group-hover:text-sky-700">
              {title}
              <MdArrowOutward className="opacity-70 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-700 transition" />{" "}
            </h3>
            <p className="mt-2 leading-relaxed text-gray-300">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-gray-800 px-3 py-1 text-[0.7rem] uppercase tracking-wider font-bold text-sky-700 rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center w-full sm:w-[350px] pb-8 px-5 sm:px-0 sm:pb-0 group-even:pt-8 sm:group-even:pt-0">
            <Image
              src={imageUrl}
              height="250"
              width="250"
              quality="95"
              priority={true}
              alt="Project I worked on"
              className="h-auto w-full object-cover transition shadow-2xl group-hover:scale-[1.04]"
            />
          </div>
        </section>
      </a>
    </motion.div>
  );
}
