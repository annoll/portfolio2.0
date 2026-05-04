"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "./PageHeader";
import { ExternalLink, Eye, X } from "lucide-react";
import { useState } from "react";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="group relative flex items-center justify-between gap-4 p-3 border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 hover:border-stone-400 dark:hover:border-stone-600 rounded-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 overflow-hidden">
              {/* Logo Container */}
              <div className="relative shrink-0 h-10 w-10 overflow-hidden rounded-lg border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-1.5">
                <Image
                  src={cert.logo}
                  alt={cert.issuer}
                  fill
                  className="object-contain dark:brightness-0 dark:invert"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col overflow-hidden text-left">
                <p className="text-sm font-medium text-stone-800 dark:text-stone-100 truncate">
                  {cert.title}
                </p>
                <span className="text-xs text-stone-500">{cert.issuer}</span>
              </div>
            </div>

            {/* Action Buttons (Hover State) */}
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => setSelectedImage(cert.image)}
                className="p-1.5 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                title="View Image"
              >
                <Eye size={16} />
              </button>
              <Link
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                title="Official Link"
              >
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          {/* Container na sumusunod sa size ng image */}
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <div
              className="relative max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()} // Iwasan ang pag-close pag mismong image ang clinick
            >
              <Image
                src={selectedImage}
                alt="Certificate Preview"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
