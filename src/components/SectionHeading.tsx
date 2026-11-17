interface Props {
  id: string;
  title: string;
  children?: React.ReactNode;
}

export function SectionHeading({ id, title, children }: Props) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <h2 id={id} className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{children}</p> : null}
    </div>
  );
}
