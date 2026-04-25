import type { ComponentType, CSSProperties } from "react";
import { Database, Link2, Server, MonitorSmartphone, Rocket } from "lucide-react";

interface FlowStep {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
}

const flowSteps: FlowStep[] = [
  {
    id: "01",
    title: "DB",
    subtitle: "Base de datos",
    color: "#38BDF8",
    icon: Database,
  },
  {
    id: "02",
    title: "API",
    subtitle: "Integracion",
    color: "#34D399",
    icon: Link2,
  },
  {
    id: "03",
    title: "Backend",
    subtitle: "Logica y servicios",
    color: "#A855F7",
    icon: Server,
  },
  {
    id: "04",
    title: "Frontend",
    subtitle: "Interfaz y experiencia",
    color: "#F97316",
    icon: MonitorSmartphone,
  },
  {
    id: "05",
    title: "Deploy",
    subtitle: "Produccion",
    color: "#EC4899",
    icon: Rocket,
  },
];

const FullStackFlow = () => {
  return (
    <div className="relative mt-8">
      <div className="pointer-events-none absolute left-[8%] right-[8%] top-[76px] hidden md:block">
        <div className="full-stack-flow-line">
          <div className="full-stack-flow-line-glow" />
          <div className="full-stack-flow-stream" />
          <div className="full-stack-flow-dot" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-5">
        {flowSteps.map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={step.id}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[#11141c] p-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: `0 0 0 transparent`,
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.boxShadow = `0 0 22px ${step.color}22`;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.boxShadow = "0 0 0 transparent";
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-px opacity-70"
                style={{
                  background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                }}
              />

              <div className="relative z-10 flex min-h-[150px] flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      borderColor: `${step.color}44`,
                      backgroundColor: `${step.color}14`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: step.color }} />
                  </div>

                  <span className="text-[11px] font-mono tracking-[0.24em] text-white/45">{step.id}</span>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/58">{step.subtitle}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default FullStackFlow;
