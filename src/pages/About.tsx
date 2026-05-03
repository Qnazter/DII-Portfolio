import { Mail, MapPin, User, Calendar, Languages, Phone } from "lucide-react";
import Divider from "@/components/Divider";

const info = [
  { icon: User, label: "Name", value: "Pannarat Wattanakraimet" },
  { icon: Calendar, label: "Date of Birth", value: "30 October 2007" },
  { icon: MapPin, label: "Location", value: "Chiang Mai, Thailand" },
  { icon: Mail, label: "Email", value: "wattanakraimetpannarat@gmail.com" },
  { icon: Phone, label: "Phone", value: "081-538-6444" },
  { icon: Languages, label: "Languages", value: "Thai · English" },
];

const About = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-10 md:pt-16 text-center space-y-5 animate-fade-in">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">About Me</p>
        <h1 className="text-5xl md:text-6xl">
          A little <span className="italic font-light">about</span> who I am.
        </h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          I'm a developer who enjoys building polished, performant interfaces — curious
          about everything from systems to design.
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
                className="glass-card rounded-3xl p-6 flex items-start gap-4 hover:-translate-y-1 transition-all animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-white to-secondary flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="font-medium mt-1">{item.value}</p>
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