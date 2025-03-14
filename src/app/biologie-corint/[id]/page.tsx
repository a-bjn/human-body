"use client";

import { useParams } from "next/navigation";
import { JSX } from "react";
import { motion } from "framer-motion";
import ChaptersDrawer from "@/app/components/ChaptersDrawer";
import MaduvaSpinariiChapter from "@/app/components/chapters/MaduvaSpinariiChapter";
import TesuturiChapter from "@/app/components/chapters/TesuturiChapter";
import CelulaSiOrganiteleCelulare from "@/app/components/chapters/CelulaSiOrganiteleCelulare";
import SistemulOsosChapter from "@/app/components/chapters/SistemulOsosChapter";
import RespiratiaChapter from "@/app/components/chapters/RespiratiaChapter";
import SistemulMuscularChapter from "@/app/components/chapters/SistemulMuscularChapter";

export default function ChaptersPage() {
  const params = useParams();
  const selectedChapter = params.id as string;

  const chapterComponents: Record<string, JSX.Element> = {
    "celula-si-organitele-celulare": <CelulaSiOrganiteleCelulare />,
    "respiratia": <RespiratiaChapter />,
    "tesuturile": <TesuturiChapter />,
    "maduva-spinarii": <MaduvaSpinariiChapter />,
    "sistemul-osos": <SistemulOsosChapter />,
    "sistemul-muscular": <SistemulMuscularChapter />,
  };

  const chapterContent = chapterComponents[selectedChapter] || (
    <p className="text-red-500">Capitolul selectat nu există.</p>
  );

  return (
    <section className="w-full h-full bg-gray-100">
      <div className="container mx-auto flex py-20">
        <ChaptersDrawer activeChapter={selectedChapter} />
        <motion.div
          key={selectedChapter}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="p-10 flex flex-col items-start bg-white border border-gray-300 rounded-xl shadow-xl mt-8 w-full"
        >
          {chapterContent}
        </motion.div>
      </div>
    </section>
  );
}
