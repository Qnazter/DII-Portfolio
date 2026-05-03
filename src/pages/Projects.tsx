import { FolderOpen, ExternalLink } from "lucide-react";
import Divider from "@/components/Divider";

type ProjectItem = {
  title: string;
  description?: string;
  link?: string;
  tech?: string[]; 
};

type Section = {
  id: string;
  title: string;
  children?: {
    id: string;
    title: string;
    projects?: ProjectItem[];
    note?: string;
  }[];
};

const sections: Section[] = [
  {
    id: "1",
    title: "Professional Experience",
    children: [
      {
        id: "1.1",
        title: "Production Project",
        note: "No projects here yet",
      },
      {
        id: "1.2",
        title: "Competition Project",
        note: "No projects here yet",
      },
      {
        id: "1.3",
        title: "Academic Project",
        projects: [
          {
            title: "Unity Game Development for Beginners",
            description:
              "A 2D platformer where players run, jump, and avoid obstacles. Built with C#, focusing on game physics and tilemaps.",
            link: "https://youtu.be/zN1b8Sil0pI?si=_um-ahf64NkAR6O-",
            tech: ["C#", "Unity"], 
          },
        ],
      },
      {
        id: "1.4",
        title: "Personal Project",
        projects: [
          {
            title: "SineNix | Study Tracker App",
            description:
              "Developed a webpage using WixVibe, I'm focusing on debugging and fixing platform limitations. This project taught me real-world problem solving and adapting to technical constraints",
            link: "https://my-site-mt3ut87v-wattanakraimetpann.wix-vibe.com",
            tech: ["React", "TailwindCSS", "TypeScript"], 
          },

          {
            title: "TikTok Downloader Line Bot",
            description:
              "A LINE bot that downloads TikTok videos quickly and easily. Built with Node.js, focusing on API integration and automation.",
            link: "https://line.me/R/ti/p/%40457esiwm",
            tech: ["Node.js", "Line Messaging API", "Render"], 
          },
        ],
      },
      {
        id: "1.5",
        title: "Open Source / Contributions",
        note: "No projects here yet",
      },
    ],
  },

  {
    id: "2",
    title: "Self-Development",
    children: [
      {
        id: "2.1",
        title: "Certifications & Courses",
        projects: [
          {
            title: "Web Building Certification | freeCodeCamp",
            description: "Learned building web apps for beginners with HTML, CSS, and JavaScript for 300 hours.",
            link: "https://www.freecodecamp.org/certification/qnazter/responsive-web-design",
            tech: ["HTML", "CSS", "JavaScript"],
          },
          {
            title: "Python Programming | Talent RAC",
            description: "Learned Python programming concepts With Robotics, AI, and Coding: RAC",
            link: "https://learn.teacherpd.ipst.ac.th/certificates/70af3196e4a44953adfca01e43dd794a",
            tech: ["Python", "AI"],
            
          },
        ],
      },
    ],
  },

  {
    id: "3",
    title: "Awards & Achievements",
    children: [
      {
        id: "3.1",
        title: "Competitions",
        note: "No projects here yet",
      },
    ],
  },

  {
    id: "4",
    title: "Leadership & Volunteer",
    children: [
      {
        id: "4.1",
        title: "Activities",
        projects: [
          {
            title: "The 53rd Student Council of CMUDS",
            description: "Developing communication, responsibility, and leadership skills. Worked in Lighting & Sound, gaining hands-on experience in technical operations and problem-solving.",
            link: "https://www.instagram.com/demon53official/",
            tech: ["Leadership", "Communication", "Responsibility"],
          },
          {
            title: "Futsal Player | Team Captain",
            description: "As team captain at the Jao Ram Games, Led the team to 2nd runner-up out of 11 teams. This experience strengthened my responsibility, resilience, decision-making, and leadership.",
            link: "https://www.instagram.com/futsal_cmud/",
            tech: ["Teamwork", "Leadership", "Responsibility"],
          },
        ],
      },
    ],
  },
];

const EmptyCard = ({ note }: { note?: string }) => (
  <div className="glass-card rounded-2xl p-5 flex items-center gap-3 text-sm text-muted-foreground">
    <FolderOpen className="w-4 h-4" />
    {note ?? "Coming soon"}
  </div>
);

const ProjectCard = ({ title, description, link, tech }: ProjectItem) => (
  <a
    href={link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="group glass-card rounded-2xl p-5 transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl block"
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="font-semibold text-lg">{title}</p>

        {tech && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/20 text-foreground/70"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {description && (
          <p className="text-sm text-muted-foreground mt-2">
            {description}
          </p>
        )}
      </div>

      {link && (
        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition" />
      )}
    </div>
  </a>
);

const Projects = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-10 md:pt-16 text-center space-y-5 animate-fade-in">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">
          Projects
        </p>
        <h1 className="text-5xl md:text-6xl">
          Things I've <span className="italic font-light">built</span>.
        </h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Organized by category — from professional work to personal experiments.
        </p>
      </section>

      <Divider />

      <section className="max-w-5xl mx-auto px-6 md:px-8 space-y-14">
        {sections.map((section, si) => (
          <div
            key={section.id}
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: `${si * 80}ms` }}
          >
            <div className="flex items-baseline">
              <h2 className="text-2xl md:text-3xl">{section.title}</h2>
              <div className="flex-1 h-px bg-foreground/15 ml-4" />
            </div>

            {section.children ? (
              <div className="space-y-6 md:pl-10">
                {section.children.map((c, i) => (
                  <div
                    key={c.id}
                    className="space-y-3 animate-fade-in-left"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <h3 className="text-base font-medium">{c.title}</h3>

                    {c.projects && c.projects.length > 0 ? (
                      <div className="grid md:grid-cols-2 gap-4">
                        {c.projects.map((p, idx) => (
                          <ProjectCard key={idx} {...p} />
                        ))}
                      </div>
                    ) : (
                      <EmptyCard note={c.note} />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="md:pl-10">
                <EmptyCard />
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;