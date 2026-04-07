import PageHeader from "./PageHeader";

export default function AboutPage() {
  return (
    <div className="mt-10">
      <PageHeader title="About" />

      <div className="max-w-lg mt-1">
        <p className="text-stone-500 text-sm leading-relaxed">
          I&apos;m a full stack developer who build things just to see them work
          - then keeps going until they look good too. I spend a lot of time
          builidng personal projects: ecommcerce apps, admin dashboards, mapping
          systems - anything that lets me go end-to-end from the database to the
          UI. I&apos;m drawn to the intersection of clean code and thoughtful
          design, and I&apos;m always working on something new.{" "}
        </p>
      </div>
    </div>
  );
}
