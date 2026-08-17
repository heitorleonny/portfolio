import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="mb-14 max-w-3xl">
      <div className="flex items-baseline gap-3 font-mono text-sm text-accent">
        <span>{index}</span>
        <span className="text-muted-2">/</span>
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-fg text-balance">
        {title}
      </h2>
      <p className="mt-4 text-muted leading-relaxed">{description}</p>
    </Reveal>
  );
}
