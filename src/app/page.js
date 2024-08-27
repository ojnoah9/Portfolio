"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Image from "next/image";
import { TfiLocationPin } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import { useState } from "react";

// Path for images in the public directory should be used directly
const Deved = "/IMGy.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const skillsIcons = [
    {
      img: "https://skillicons.dev/icons?i=html,css",
      id: 1,
    },
    {
      img: "https://skillicons.dev/icons?i=js,tailwind",
      id: 2,
    },
    {
      img: "https://skillicons.dev/icons?i=react,next",
      id: 3,
    },
  ];

  return (
    <main className="mx-auto">
      <div className={darkMode ? "dark" : ""}>
        <div className="bg-cyan-100 px-5 md:px-10 lg:px-20 dark:bg-slate-900">
          <section className="min-h-screen">
            <nav className="flex py-10 mb-10 justify-between">
              <h1 className="text-xl cursor-pointer text-black dark:text-green-200">
                noah.dev
              </h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-xl text-black dark:text-green-200"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    href="https://drive.google.com/file/d/1cBGIsS2GgjyFeAPGTpJJkkXZIzi9HTa6/view?usp=sharing"
                  >
                    resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="relative rounded-full w-30 h-30 md:w-96 md:h-96 overflow-hidden md:float-right mt-[-6rem] md:mt-0">
              <div className="transform scale-75 md:scale-100">
                <Image
                  src={Deved}
                  alt="Deved"
                  layout="responsive" // Ensure correct layout for Next.js Image
                  width={500} // Define width
                  height={500} // Define height
                  className="w-full h-full rounded-full object-cover md:w-full md:h-full"
                />
              </div>
            </div>

            <div className="items-center p-5 sm:py-20">
              <h2 className="text-3xl py-2 text-center md:text-left text-black font-extrabold mt-[-2rem] md:mt-1 sm:mt-[-10rem] md:text-6xl dark:text-teal-600 md:items-center md:justify-center">
                <span className="text-6xl">F</span>ront-End React Developer
              </h2>
              <p
                className="text-md max-w-lg py-2 leading-8 text-center md:text-left sm:text-center md:text-lg
                md:justify-center sm:justify-center sm:ml-20 md:ml-1 text-gray-800 dark:text-green-200 md:items-center sm:items-center"
              >
                <span className="text-md">H</span>i, I&apos;m Noah Samuel
                Ojima-ojo. A passionate Front-end React Native Developer based
                in Abuja, Nigeria. 📍
              </p>
            </div>

            <div className="text-5xl flex justify-center gap-10 py-1 lg:mt-[-2rem] text-gray-600 pb-4 dark:text-green-200">
              <a
                href="https://www.linkedin.com/in/samuel-noah-864168250"
                aria-label="linkedin"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.x.com/ojima11249"
                aria-label="Twitter"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillTwitterSquare />
              </a>
              <a
                href="https://www.github.com/ojnoah9"
                aria-label="Github"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </div>
          </section>
          <section>
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center md:absolute lg:static lg:mt-[-5rem] md:bottom-0 md:left-0 font-mulish text-base text-gray-700">
                <p className="md:mb-20 md:mr-10 md:pr-8 md:border-r-2 md:border-gray-300 font-semibold dark:text-green-200">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-6 md:gap-12 justify-center">
                  <ul className="flex flex-wrap gap-x-6 md:gap-x-12 justify-center">
                    {skillsIcons.map((icon) => (
                      <li key={icon.id} className="cursor-pointer">
                        <Image
                          src={icon.img}
                          alt="skill-icon"
                          width={128} // Define width
                          height={64} // Define height
                          className="mb-10 md:mb-20 transition-transform duration-300 ease-in-out hover:-translate-y-1"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={darkMode ? "dark" : ""}>
        <div className="h-screen bg-cyan-100 dark:bg-gray-900 px-5 md:px-10 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:w-1/2">
            <h2 className="justify-center text-center text-4xl text-black dark:text-teal-600 mb-8 font-bold">
              ABOUT ME
            </h2>
            <p className="max-w-4xl justify-center text-center text-lg text-gray-800 dark:text-green-100">
              My name is Noah Samuel Ojima-ojo. I am a highly motivated Frontend
              Developer with over a year of experience in building and
              delivering visually appealing, responsive, and user-friendly web
              and mobile interfaces. I specialize in HTML, CSS, JavaScript,
              React, and React Native, with a strong focus on creating seamless
              user experiences across platforms. I have worked closely with
              cross-functional teams to deliver high-quality projects on time,
              while continuously analyzing user needs to design solutions that
              drive results. My strong problem-solving abilities, coupled with
              my adaptability to emerging technologies, allow me to consistently
              innovate and enhance project outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className={darkMode ? "dark" : ""}>
        <section className="sm:h-[20rem] md:h-[25rem] bg-white dark:bg-gray-800 px-5 md:px-10 flex items-center justify-center w-full">
          <div className="m-4 rounded-lg p-8 md:w-1/2 items-center justify-center px-5 sm:px-7 md:px-10">
            <h2 className="text-center font-bold text-4xl sm:text-4xl md:text-4xl text-black dark:text-teal-600 mb-2 sm:mb-4 md:mb-6">
              PORTFOLIO
            </h2>
            <p className="text-center sm:text-center md:text-center text-lg text-gray-800 dark:text-green-100">
              New projects coming soon.....
            </p>
          </div>
        </section>
      </div>
      <div className={darkMode ? "dark" : ""}>
        <section className="h-screen bg-cyan-100 dark:bg-gray-900 px-5 md:px-10 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:w-1/2">
            <h4 className="text-2xl sm:text-3xl md:text-4xl text-blue-500 dark:text-teal-600 text-center font-bold">
              CONTACT ME
            </h4>
            <h3
              className="text-md max-w-lg py-2 leading-8 text-center md:text-center sm:text-center md:text-lg
               md:justify-center sm:justify-center sm:ml-15 md:ml-12 text-gray-800 dark:text-green-200 md:items-center sm:items-center mb-8"
            >
              Ready to elevate your digital presence? Let&apos;s collaborate and
              bring your vision to life! Hit me up for top-notch front-end
              development.
            </h3>
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <TfiLocationPin className="text-blue-500 dark:text-teal-600 mb-3 text-4xl" />
                <h5 className="text-black dark:text-green-200 text-center mb-2">
                  Location
                </h5>
                <p className="text-center text-gray-400 mb-5">Abuja, Nigeria</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center sm:items-center md:items-center">
              <CiMail className="text-blue-500 dark:text-teal-600 text-center text-4xl bold sm:text-center md:text-center mb-3" />
              <h5 className="text-black dark:text-green-200 text-center sm:text-center md:text-center mb-2">
                Mail
              </h5>
              <p className="text-center text-gray-400 mb-5">
                ojimanoah1@gmail.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
