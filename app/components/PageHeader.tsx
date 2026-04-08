interface PageHeaderProp {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProp) {
  return (
    <div>
      <h2 className="font-bold text-xs uppercase tracking-widest text-stone-400">
        {title}
      </h2>
    </div>
  );
}
