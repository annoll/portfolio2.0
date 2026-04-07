interface PageHeaderProp {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProp) {
  return (
    <div>
      <h2 className="font-bold text-md text-stone-800">{title}</h2>
    </div>
  );
}
