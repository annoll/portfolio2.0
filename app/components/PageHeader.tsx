interface PageHeaderProp {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProp) {
  return (
    <div>
      <h2 className="font-bold text-md tracking-widest text-gray-800 dark:text-gray-200 mb-4">
        {title}
      </h2>
    </div>
  );
}
