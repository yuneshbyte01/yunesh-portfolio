interface SectionHeadingProps { eyebrow: string; title: string; description?: string }

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(260px,0.75fr)] gap-8 items-end mb-12 max-md:grid-cols-1">
      <p className="eyebrow col-span-full -mb-3">{eyebrow}</p>
      <h2 className="!mb-0 max-w-[760px]">{title}</h2>
      {description && <p className="!m-0">{description}</p>}
    </div>
  );
}
