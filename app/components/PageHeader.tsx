interface PageHeaderProp {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProp) {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-lg text-stone-800">{title}</h2>
    </div>
  );
}
