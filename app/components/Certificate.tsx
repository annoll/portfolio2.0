"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "./PageHeader";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";
import FadeUp from "./animations/FadeUp";

interface Certificates {
  title: string;
  issuer: string;
  issueDate: number;
  url: string;
  logo: string;
  image: string;
}

const certificates: Certificates[] = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issueDate: 2025,
    url: "http://freecodecamp.org/certification/Annol/responsive-web-design",
    logo: "/images/freecodecamp.svg",
    image: "/images/freecodecamp.png",
  },
  {
    title: "Google AI Essentials",
    issuer: "Coursera",
    issueDate: 2026,
    url: "https://coursera.org/share/a369cc1397694db59ca4bece8c5b4e84",
    logo: "/images/coursera.svg",
    image: "/images/coursera.png",
  },
];

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="mt-10">
      <PageHeader title="Certificates" />
      <div className="grid grid-row-1 md:grid-row-2 gap-3">
        {certificates.map((cert) => (
          <FadeUp key={cert.title} delay={0.1}>
            <div
              key={cert.title}
              className="group relative flex items-center justify-between gap-3 p-3 border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 hover:border-stone-400 dark:hover:border-stone-600 rounded-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 overflow-hidden flex-1">
                {/* Logo Container */}
                <div className="relative shrink-0 h-9 w-9 overflow-hidden rounded-full border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-1.5">
                  <Image
                    src={cert.logo}
                    alt={cert.issuer}
                    fill
                    className="object-contain dark:brightness-0 dark:invert"
                  />
                </div>

                {/* Text container na may min-w-0 para hindi masira ang layout */}
                <div className="flex flex-col min-w-0 overflow-hidden text-left">
                  <p className="text-[13px] font-medium text-stone-800 dark:text-stone-100 truncate leading-tight">
                    {cert.title}
                  </p>
                  <span className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">
                    {cert.issuer}
                  </span>
                </div>
              </div>

              {/* Action Buttons - FIXED FOR MOBILE */}
              <div className="flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedImage(cert.image);
                  }}
                  className="p-2 md:p-1.5 bg-stone-100 dark:bg-stone-900 md:bg-transparent rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                  title="View Image"
                >
                  <Eye size={16} className="md:w-3.5 md:h-3.5" />
                </button>
                <Link
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-1.5 bg-stone-100 dark:bg-stone-900 md:bg-transparent rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                  title="Official Link"
                >
                  <ExternalLink size={16} className="md:w-3.5 md:h-3.5" />
                </Link>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-md p-6 md:p-20 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          {/* 
     
    */}
          <div
            className="relative cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Certificate Preview"
              width={1000}
              height={700}
              className="object-contain w-auto h-auto max-w-[90vw] max-h-[70vh] md:max-h-[80vh] drop-shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-sm"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
