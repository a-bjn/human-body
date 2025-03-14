"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function OverviewSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="overview" className="relative w-full h-screen flex justify-center py-20">
      <div className="relative z-10 h-full w-3/4 justify-center items-center px-24">
        <div className="flex flex-col px-8 py-16 w-full h-full justify-evenly">
          {/* Title Animation */}
          <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
            Descopera Minunile Biologiei
          </h1>

          <div className="flex flex-row w-full gap-10 justify-between mb-4">
            <div className="flex flex-col" data-aos="fade-right" data-aos-delay="200">
              <p className="text-xl font-regular text-gray-600">
                Biologia este știința care studiază viața și organismele vii,
                explorând totul de la structura moleculară până la ecosisteme complexe.
                Studiind la nivel molecular, înțelegem procesele fundamentale din celule,
                cum ar fi ADN-ul. La nivel ecologic, biologia descoperă interacțiunile dintre specii și modul 
                în care acestea formează ecosisteme interconectate.
              </p>
            </div>

            <div className="flex flex-col" data-aos="fade-left" data-aos-delay="200">
              <p className="text-xl font-regular text-gray-600">
                Evoluția, prin selecția naturală, ne oferă cheia diversității vieții.
                Fiecare organism este rezultatul unui proces de adaptare continuă la mediu.
                Biologia ca pasiune ne încurajează să explorăm și să respectăm viața, 
                văzând conexiunile dintre toate formele de viață și înțelegând impactul 
                acțiunilor noastre asupra naturii.
              </p>
            </div>
          </div>

          {/* Image Animation */}
          <Image
            src="/overview.webp"
            alt="Overview"
            width={1028}
            height={1028}
            className="w-full h-1/2 object-cover rounded-2xl"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
        </div>
      </div>
    </section>
  );
}
