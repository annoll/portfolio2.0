import { BadgeCheck, MapPin } from "lucide-react";
import AboutPage from "./AboutPage";

export default function Sidebar() {
  return (
    <div className="p-10">
      <div className="flex items-center gap-2">
        <h1 className="text-stone-800 font-bold text-lg">Annol Manggon</h1>
        <BadgeCheck className="fill-blue-500 text-white" size={16} />
      </div>

      <div className="flex items-center gap-1 mt-1">
        <MapPin size={16} className="text-stone-500" />
        <p className="text-stone-500 text-sm">Zamboanga City, Philippines</p>
      </div>

      <div>
        <p className="text-stone-400 text-xs mt-0.5">
          Junior Software Engineer
        </p>
      </div>

      <AboutPage />
    </div>
  );
}
