import { Mail, MapPin, User, Calendar, Languages, School } from "lucide-react";
import Divider from "@/components/Divider";

const info = [
  { icon: User, label: "Name", value: "Pannarat Wattanakraimet" },
  { icon: Calendar, label: "Date of Birth", value: "30 October 2007" },
  { icon: MapPin, label: "Location", value: "Chiang Mai, Thailand" },
  { icon: Mail, label: "Email", value: "wattanakraimetpannarat@gmail.com" },
  { icon: School, label: "Education", value: "SATIT CMU | DII CAMT CMU", },
  { icon: Languages, label: "Languages", value: "Thai · English" },
];

const About = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-10 md:pt-16 text-center space-y-5 animate-fade-in">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">
          About Me
        </p>

        <h1 className="text-5xl md:text-6xl">
          A little <span className="italic font-light">about</span> who I am.
        </h1>

        <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          I enjoy creating tools that simplify my daily life 
          while continuously learning new technologies.
        </p>
      </section>

      <Divider />

      <section className="max-w-5xl mx-auto px-6 md:px-8 space-y-8">
        <div className="flex items-baseline gap-4 animate-fade-in">
          <h2 className="text-2xl md:text-3xl">Personal Information</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {info.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`group glass-card rounded-3xl p-6 flex items-start gap-4 
                hover:-translate-y-2 hover:scale-[1.05] hover:shadow-2xl 
                transition-all duration-300 animate-fade-in-left
                ${item.label === "Education" ? "shadow-lg shadow-red-500/20" : ""}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-2xl 
                  bg-gradient-to-br from-white to-secondary 
                  flex items-center justify-center shrink-0"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition duration-300" />
                </div>

                <div className="w-full">
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {item.label}
                  </p>

                  <p className="font-medium mt-1 transition duration-300
                    group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;