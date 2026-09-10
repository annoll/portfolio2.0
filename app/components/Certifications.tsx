import { certifications } from "../data/certifications";
import { Certification } from "../types";
import { Icons } from "./ui/icons";

export default function Certifications() {
  return (
    <section id="certs" className="space-y-3 scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono tracking-wider text-brand-muted uppercase">
          02 — Certifications
        </h2>
        <span className="text-xs font-mono text-brand-muted">
          {certifications.length} Completed
        </span>
      </div>

      {/* Certifications List */}
      <div className="space-y-2 font-mono text-xs">
        {certifications.map((cert: Certification) => (
          <div
            key={cert.id}
            className="p-3 rounded-lg border border-brand-border bg-brand-card/30 hover:border-neutral-700 transition-all flex items-center justify-between gap-4 group"
          >
            <div className="space-y-0.5">
              <p className="text-brand-light font-sans font-medium text-sm group-hover:text-brand-light transition-colors">
                {cert.title}
              </p>
              <p className="text-brand-muted text-[11px] font-mono">
                {cert.issuer}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-brand-muted text-[11px]">{cert.year}</span>

              {cert.credentialUrl && cert.credentialUrl !== "#" && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-light hover:text-brand-light transition-colors"
                  title="View Credential"
                >
                  <Icons.external className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
