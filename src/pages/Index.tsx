import { Link } from "react-router-dom";
import { Globe, Layers, Brush, Cpu } from "lucide-react";
import Divider from "@/components/Divider";

const skills = [
  { icon: Globe, title: "Website Development", desc: "Building fast, responsive, and modern websites from scratch." },
  { icon: Layers, title: "Full Stack Development", desc: "End-to-end development covering both frontend and backend systems." },
  { icon: Brush, title: "UI & UX Design", desc: "Designing clean, intuitive interfaces with great user experience." },
  { icon: Cpu, title: "AI & Computer Vision", desc: "Building intelligent systems that see and understand the world." },
];

const Index = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center pt-10 md:pt-16">
        <div className="space-y-6 animate-fade-in order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl leading-[1.05]">
            Hello,
            <br />
            I'm <span className="italic font-light">Pun</span>.
          </h1>
          <div className="space-y-2 text-foreground/70 text-base md:text-lg max-w-md">
            <p>This is my personal portfolio website where I share my work</p>
            <p>And thoughts on technology and design.</p>
          </div>
          <Link
            to="/about"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-white/70 hover:bg-white border border-foreground/10 font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_hsl(230_30%_12%/0.2)]"
          >
            Learn About Me →
          </Link>
        </div>
        <div className="order-1 md:order-2 animate-scale-in">
        </div>
      </section>

      <Divider />

      <section className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-12 animate-fade-in">My Skills</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="glass-card rounded-3xl p-7 hover:-translate-y-1 transition-all animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-secondary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Index;
