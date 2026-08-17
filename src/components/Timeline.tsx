import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  laneOrder,
  timeline,
  TIMELINE_START,
  TIMELINE_END,
  TIMELINE_TODAY,
  type TimelineEntry,
} from "@/lib/data";

const laneStyles: Record<string, { bar: string; label: string; soft: string }> = {
  NuageIT: {
    bar: "bg-violet-400",
    label: "text-violet-300",
    soft: "bg-violet-400/15 border-violet-400",
  },
  FEJEPE: {
    bar: "bg-amber-400",
    label: "text-amber-300",
    soft: "bg-amber-400/15 border-amber-400",
  },
  "Seed a Bit": {
    bar: "bg-blue-500",
    label: "text-blue-400",
    soft: "bg-blue-500/15 border-blue-500",
  },
  Formação: {
    bar: "bg-emerald-400",
    label: "text-emerald-300",
    soft: "bg-emerald-400/15 border-emerald-400",
  },
};

const seedShades = ["opacity-55", "opacity-78", "opacity-100"];

const pos = (value: number) =>
  ((value - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * 100;

const yearTicks = () => {
  const start = Math.ceil(TIMELINE_START);
  const end = Math.floor(TIMELINE_END);
  const ticks = [];
  for (let y = start; y <= end; y++) ticks.push(y);
  return ticks;
};

function formatDate(value: number, ongoing?: boolean, current?: boolean) {
  const year = Math.floor(value);
  const month = Math.round((value - year) * 12) + 1;
  const label = `${String(month).padStart(2, "0")}/${year}`;
  if (current) return "hoje";
  if (ongoing) return `${label} (previsão)`;
  return label;
}

// explicit display order for the detail cards: NuageIT, FEJEPE, Seed a Bit (most senior role first), Formação
const cardOrderIds = [
  "nuageit",
  "fejepe",
  "seedabit-diretor",
  "seedabit-gerente",
  "seedabit-analista",
  "ufrpe",
];

export default function Timeline() {
  const lanes = laneOrder.map((lane) => ({
    lane,
    entries: timeline
      .filter((e) => e.lane === lane)
      .sort((a, b) => a.start - b.start),
  }));

  const orderedForList = cardOrderIds
    .map((id) => timeline.find((e) => e.id === id))
    .filter((e): e is TimelineEntry => Boolean(e));

  return (
    <section id="experiencia" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          title="Linha do tempo de experiência"
          description="Trajetória entre desenvolvimento full stack com IA generativa na NuageIT, inteligência de dados na FEJEPE e liderança de projetos na Seed a Bit."
        />

        <Reveal delay={100}>
          <div className="overflow-x-auto rounded-2xl border border-line bg-bg-card p-6">
            <div className="min-w-[760px]">
              <div
                className="relative mb-3 h-6 border-b border-line font-mono text-[10px] uppercase tracking-wider text-muted-2"
                style={{ marginLeft: "140px" }}
              >
                {yearTicks().map((y) => (
                  <span
                    key={y}
                    className="absolute -translate-x-1/2"
                    style={{ left: `${pos(y)}%` }}
                  >
                    {y}
                  </span>
                ))}
              </div>

              <div className="relative" style={{ marginLeft: "140px" }}>
                <div
                  className="pointer-events-none absolute top-0 bottom-0 z-10 border-l border-dashed border-accent/50"
                  style={{ left: `${pos(TIMELINE_TODAY)}%` }}
                >
                  <span className="absolute -top-5 -translate-x-1/2 font-mono text-[9px] uppercase tracking-wider text-accent">
                    hoje
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {lanes.map(({ lane, entries }) => (
                  <div key={lane} className="flex items-center gap-0">
                    <div
                      className={`w-[140px] shrink-0 pr-3 font-mono text-[11px] uppercase tracking-wider ${laneStyles[lane].label}`}
                    >
                      {lane}
                    </div>
                    <div className="relative h-9 flex-1 rounded-md bg-bg-elevated">
                      {entries.map((entry, i) => {
                        const isSeedGroup = lane === "Seed a Bit";
                        const isFirst = i === 0;
                        const isLast = i === entries.length - 1;
                        const rounding = isSeedGroup
                          ? `${isFirst ? "rounded-l" : ""} ${isLast ? "rounded-r" : ""}`
                          : "rounded";
                        return (
                          <div
                            key={entry.id}
                            title={`${entry.title} — ${formatDate(
                              entry.start
                            )} a ${formatDate(
                              entry.end,
                              entry.ongoingEducation,
                              entry.current
                            )}`}
                            className={`absolute top-1 bottom-1 ${rounding} ${
                              entry.ongoingEducation
                                ? `border border-dashed ${laneStyles[lane].soft}`
                                : laneStyles[lane].bar
                            } ${isSeedGroup ? seedShades[i % seedShades.length] : ""} ${
                              isSeedGroup && !isLast
                                ? "border-r border-bg-elevated"
                                : ""
                            } ${entry.current ? "animate-pulse-dot" : ""}`}
                            style={{
                              left: `${pos(entry.start)}%`,
                              width: `${Math.max(
                                pos(entry.end) - pos(entry.start),
                                1.2
                              )}%`,
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {orderedForList.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 60}>
              <TimelineCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="h-full rounded-xl border border-line bg-bg-card p-5 transition-colors hover:border-line-strong">
      <div className="flex items-center justify-between gap-2">
        <span
          className={`font-mono text-[11px] uppercase tracking-wider ${laneStyles[entry.lane].label}`}
        >
          {entry.lane}
        </span>
        <span className="font-mono text-[11px] text-muted-2">
          {formatDate(entry.start)} —{" "}
          {formatDate(entry.end, entry.ongoingEducation, entry.current)}
        </span>
      </div>
      <h3 className="mt-2 font-medium text-fg">{entry.title}</h3>
      <p className="text-sm text-muted-2">{entry.org}</p>
      {entry.description && (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {entry.description}
        </p>
      )}
    </div>
  );
}
