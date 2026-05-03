import { Link } from "react-router-dom";
import { Globe, User, BookOpen, Cpu } from "lucide-react";
import Divider from "@/components/Divider";

const skills = [
  { icon: Globe, title: "Frontend Development", desc: "Building modern and responsive web interfaces." },
  { icon: Cpu, title: "Developer", desc: "Creating tools for everyday convenience." },
  { icon: BookOpen, title: "Self-Learning", desc: "Learning new technologies independently through personal projects." },
  { icon: User, title: "Leadership", desc: "Leading teams through hands-on experience." },
];

const Index = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center pt-10 md:pt-16">

        <div className="space-y-6 animate-fade-in">

          <h1 className="text-5xl md:text-7xl leading-[1.05]">
            Hello,
            <br />
            I'm <span className="italic font-light">Pun</span>.
          </h1>

          <div className="space-y-2 text-foreground/70 text-base md:text-lg max-w-md">
            <p>My personal portfolio</p>
            <p>Where I share my projects and experiences.</p>
          </div>

          <Link
            to="/about"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-white/70 hover:bg-white 
            border border-foreground/10 font-medium transition-all 
            hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_hsl(230_30%_12%/0.2)]"
          >
            Learn About Me →
          </Link>

        </div>

        <div className="flex justify-center md:justify-end animate-scale-in">

          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full 
            border border-white/20 
            bg-white/5 backdrop-blur-md
            shadow-xl
            hover:scale-[1.03] transition duration-300
            overflow-hidden"
          >
            <img
              src="/mypic.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </section>

      <Divider />

      <section className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-12 animate-fade-in">
          My Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((s, i) => {
            const Icon = s.icon;

            return (
              <div
                key={s.title}
                className="group glass-card rounded-3xl p-7 flex flex-col
                hover:-translate-y-2 hover:scale-[1.05] hover:shadow-2xl
                transition-all duration-300 animate-fade-in-left"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg mb-2 group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition">
                  {s.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Index;
