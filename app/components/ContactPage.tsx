import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import PageHeader from "./PageHeader";

interface socialLink {
  label: string;
  link: string;
  icon: IconType;
}

const socialLinks: socialLink[] = [
  { label: "Github", link: "https://github.com/annoll", icon: FaGithub },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/nur-manggona-b0a37b297/",
    icon: FaLinkedin,
  },
  { label: "Email", link: "mailto:annolmanggona12@gmail.com", icon: MdEmail },
];

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Social Links" />
      {socialLinks.map(({ label, link, icon: Icon }) => (
        <Link
          key={label}
          href={link}
          className="p-2 flex items-center justify-between bg-stone-50 text-sm text-stone-600 mt-1 hover:bg-stone-100"
        >
          <Icon className="w-5 h-5 text-stone-600" />
          {label}
        </Link>
      ))}
    </div>
  );
}
