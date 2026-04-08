import Link from "next/link";
import PageHeader from "./PageHeader";

interface Certificates {
  title: string;
  issuer: string;
  issueDate: number;
  url: string;
}

const certificates: Certificates[] = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issueDate: 2025,
    url: "http://freecodecamp.org/certification/Annol/responsive-web-design",
  },
  {
    title: "React Basics",
    issuer: "Coursera",
    issueDate: 2024,
    url: "https://coursera.org/share/019ac6e05cb3d30e657250b075562bbd",
  },

  {
    title: "Programming with JavaScript",
    issuer: "Coursera",
    issueDate: 2024,
    url: "https://coursera.org/share/13d716c5b87f490e2bf45f331c696503",
  },
];

export default function Certificate() {
  return (
    <div className="mt-10">
      <PageHeader title="Recent Certifications" />
      <div className="grid grid-cols-2 gap-2 pt-1">
        {certificates.map((cert) => (
          <Link
            key={cert.title}
            href={cert.url}
            className="p-2 border border-stone-200 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-md transition-colors duration-300"
          >
            <p className="text-sm text-stone-800 dark:text-stone-100">
              {cert.title}
            </p>
            <span className="text-xs text-stone-400">{cert.issuer}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
