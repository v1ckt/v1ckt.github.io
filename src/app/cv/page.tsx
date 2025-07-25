"use client";
import Card from "@/components/ui/card";
import Image from "next/image";
import { data } from "@/data/cv";
import Link from "next/link";
import ProfilePic from "@/components/header/profilepic";
import { SlArrowLeft } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function CV() {
  const handleSaveAsPDF = () => {
    window.print();
  };

  const separator = <li className="w-full h-px bg-[gray]/20" />;

  return (
    <div className="absolute top-0 left-0 bg-main-bg z-20">
      <header
        className={`flex z-auto sticky print:absolute top-0 left-0 items-center justify-between print:px-2 w-full py-4 px-6 md:px-24 select-none border-b-px border-header-border-color backdrop-blur-xl bg-header-bg transition-all`}
      >
        <div className="flex flex-row items-center gap-4 text-title">
          <Link href="/">
            <SlArrowLeft className="text-text size-7 print:hidden" />
          </Link>
          <div className="flex flex-row items-center justify-center gap-4">
            <ProfilePic size={4} />
            <div className="flex flex-col justify-between">
              <p className="text-xl md:text-2xl text-title font-semibold">
                Vicktor Emannoel Pereira Teixeira
              </p>
              <p className="md:text-xl text-text font-semibold">
                Bacharel em Ciência da Computação
              </p>
            </div>
          </div>
        </div>
        <Button
          title="Save CV"
          className="hidden md:block print:hidden scale-[0.8]"
          onClick={handleSaveAsPDF}
        />
      </header>
      <main className="flex flex-col-reverse print:mt-24 md:flex-row items-start justify-center gap-4 w-full h-full text-left px-6 md:px-24 print:px-4 pt-4 pb-4 bg-main-bg">
        <Card className="flex max-w-[360px] md:w-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h6 className="text-title">Contato</h6>
              <ul className="flex flex-col gap-2">
                {Object.entries(data.contact).map(([key, value]) => (
                  <li key={key}>
                    <span className="inline-flex gap-2 items-start">
                      <Image
                        src={value.icon}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                      <p>{value.name}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {separator}
            <div className="flex flex-col gap-3">
              <h6 className="text-title">Social</h6>
              <ul className="flex flex-col gap-2">
                {Object.entries(data.social).map(([key, value]) => (
                  <li key={key}>
                    <span className="inline-flex gap-2">
                      <Image
                        src={value.icon}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                      <p>{value.name}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {separator}
            <div className="flex flex-col gap-3">
              <h6 className="text-title">Idiomas</h6>
              <ul className="flex flex-col gap-2">
                {Object.entries(data.languages).map(([key, value]) => (
                  <li key={key}>
                    <span className="inline-flex gap-2">
                      <Image
                        src={value.icon}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                      <p>{value.name}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {separator}
            <div className="flex flex-col gap-3">
              <h6 className="text-title">Habilidades</h6>
              <div className="flex flex-row gap-16">
                <ul className="flex flex-col gap-2">
                  {Object.entries(data.skills)
                    .slice(0, Math.ceil(Object.entries(data.skills).length / 2))
                    .map(([key, value]) => (
                      <li key={key}>
                        <span className="inline-flex gap-2">
                          <Image
                            src={value.icon}
                            width={24}
                            height={24}
                            alt="icon"
                          />
                          <p>{value.name}</p>
                        </span>
                      </li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-2">
                  {Object.entries(data.skills)
                    .slice(Math.ceil(Object.entries(data.skills).length / 2))
                    .map(([key, value]) => (
                      <li key={key}>
                        <span className="inline-flex gap-2">
                          <Image
                            src={value.icon}
                            width={24}
                            height={24}
                            alt="icon"
                          />
                          <p>{value.name}</p>
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            {separator}
            <div className="flex flex-col gap-1">
              <h6 className="text-title">Ferramentas</h6>
              <div className="flex flex-row gap-7">
                <ul className="flex flex-col gap-2">
                  {Object.entries(data.tools)
                    .slice(0, Math.ceil(Object.entries(data.tools).length / 2))
                    .map(([key, value]) => (
                      <li key={key}>
                        <span className="inline-flex gap-2">
                          <Image
                            src={value.icon}
                            width={24}
                            height={24}
                            alt="icon"
                          />
                          <p>{value.name}</p>
                        </span>
                      </li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-2">
                  {Object.entries(data.tools)
                    .slice(Math.ceil(Object.entries(data.tools).length / 2))
                    .map(([key, value]) => (
                      <li key={key}>
                        <span className="inline-flex gap-2">
                          <Image
                            src={value.icon}
                            width={24}
                            height={24}
                            alt="icon"
                          />
                          <p>{value.name}</p>
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
        <Card className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 flex-col">
              <h6 className="text-title">Sobre</h6>
              <p>{data.about}</p>
            </div>
            {separator}
            <div className="flex gap-3 flex-col">
              <h6 className="text-title">{data.experience.title}</h6>
              <ul className="flex gap-2 flex-col">
                {Object.entries(data.experience.experiences).map(
                  ([key, value]) => (
                    <li key={key}>
                      <p className="text-title">{value.title}</p>
                      <p>{value.job}</p>
                      <p>{value.company}</p>
                      <p>{value.date}</p>
                    </li>
                  )
                )}
              </ul>
              {separator}
              <div className="flex gap-3 flex-col">
                <h6 className="text-title">{data.education.title}</h6>
                <ul className="flex gap-2 flex-col">
                  {Object.entries(data.education.courses).map(
                    ([key, value]) => (
                      <li key={key}>
                        <p className="text-title">
                          {value.name} {value.level}
                        </p>
                        <p>{value.institution}</p>
                        <p>{value.date}</p>
                      </li>
                    )
                  )}
                </ul>
                {separator}
                <div className="flex gap-3 flex-col">
                  <h6 className="text-title">{data.courses.title}</h6>
                  <ul className="flex gap-2 flex-col">
                    {Object.entries(data.courses.courses).map(
                      ([key, value]) => (
                        <li key={key}>
                          <p className="text-title">{value.name}</p>
                          <p>{value.company}</p>
                          <p>{value.date}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </main>
      <span className="flex flex-row items-center justify-center pb-4">
        <p className="">© 2024 Vicktor Teixeira | Made with Next Js</p>
      </span>
    </div>
  );
}
