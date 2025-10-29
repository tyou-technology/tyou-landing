"use client"

import {Card} from "@/src/components/ui/card"
import {ArrowUpRight} from "lucide-react"
import {motion, useInView} from "framer-motion"
import {useRef} from "react"

const projects = [
    {
        title: "Brasoul Beauty Care",
        category: "Web Application",
        description: "An institutional web platform for a natural cosmetics brand inspired by Amazonian biodiversity. The site features dynamic product showcases for its hair care lines (Radiant, Sublime) and integrates real-time inventory management. It highlights the brand's commitment to sustainability and includes an analytics dashboard to track customer engagement.",
        tags: ["React", "chakra-ui", "Next.js"],
        logoUrl: "/projects/brasoul.png",
        url: "https://www.brasoulbeautycare.com/",
        color: "#b38e46"
    },
    {
        title: "RA Automóveis",
        category: "Web Application",
        description: "A comprehensive web platform for an established automotive dealer with 29 years of market experience. The application showcases a curated inventory of new and high-quality used vehicles, integrated with a real-time stock management system. Key features include detailed financing options and a customer testimonial section to build trust and emphasize quality service.",
        tags: ["React", "chakra-ui", "Next.js"],
        logoUrl: "/projects/raautomoveis.png",
        url: "https://www.raautomoveis.com.br/",
        color: "#cb3438"
    },
    {
        title: "TRIORB",
        category: "Web Application",
        description: "A scalable web platform specializing in high-realism technological visualization for construction and real estate projects. The application delivers immersive AR/VR experiences, including interactive 360° virtual tours and 3D humanized floor plans. It serves as a dynamic portfolio for projects like Residencial Renascence and Terras de Santo Antônio, with a backend to gather insights on user engagement.",
        tags: ["React", "tailwind", "Next.js"],
        logoUrl: "/projects/triorb.png",
        url: "https://www.triorb.com.br/",
        color: "#242dc9"
    },
    {
        title: "Zcom Provedor",
        category: "Web Application",
        description: "A scalable platform for a Brazilian ISP specializing in 100% fiber optic internet and TV services. The application features a robust customer portal for managing subscriptions and accessing support. It also integrates tools for real-time network monitoring and provides an analytics dashboard to track service performance and reliability.",
        tags: ["React", "tailwind", "Next.js"],
        logoUrl: "/projects/zcom.png",
        url: "https://www.zcomprovedor.com.br/desenvolvimento",
        color: "#0E46B9"
    }
]

const hexToRgb = (hex: string): string => {
    const cleanHex = hex.replace('#', '');
    let r = 0, g = 0, b = 0;

    if (cleanHex.length === 3) {
        r = parseInt(cleanHex[0] + cleanHex[0], 16);
        g = parseInt(cleanHex[1] + cleanHex[1], 16);
        b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else if (cleanHex.length === 6) {
        r = parseInt(cleanHex.substring(0, 2), 16);
        g = parseInt(cleanHex.substring(2, 4), 16);
        b = parseInt(cleanHex.substring(4, 6), 16);
    }

    return `${r} ${g} ${b}`;
};

export function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-100px"})

    return (
        <section id="projects" className="py-24 lg:py-32 relative" ref={ref}>
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
                    initial={{opacity: 0, y: 30}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
                    transition={{duration: 0.6}}
                >
                    <div className="max-w-2xl">
                        <span className="text-primary text-sm font-mono tracking-wider uppercase">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">Featured Projects</h2>
                    </div>
                    {/*<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>*/}
                    {/*    <Button*/}
                    {/*        variant="outline"*/}
                    {/*        className="border-muted text-foreground hover:bg-muted/10 hover:text-[#00a5b4] hover:border-[#00a5b4] self-start lg:self-auto bg-transparent cursor-pointer transition-all"*/}
                    {/*    >*/}
                    {/*        View All Projects*/}
                    {/*        <ArrowUpRight className="ml-2 h-4 w-4" />*/}
                    {/*    </Button>*/}
                    {/*</motion.div>*/}
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const color = project.color !== '' ? project.color : '#00a5b4';
                        const rgb = hexToRgb(color); // Convert for opacity usage

                        return (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 40}}
                                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 40}}
                                transition={{duration: 0.6, delay: index * 0.15}}
                            >
                                <motion.div whileHover={{y: -8, scale: 1.02}} transition={{duration: 0.3}}
                                            className="h-full">
                                    <Card
                                        className="group p-8 bg-card border-border hover:border-[var(--color)] transition-all duration-300 h-full flex flex-col"
                                        style={
                                            {
                                                '--color': color,
                                                '--color-rgb': hexToRgb(color),
                                            } as React.CSSProperties
                                        }
                                    >
                                        <div className="flex-grow">
                                            <div className="mb-6 flex justify-between items-center">
                                                <span
                                                    className="text-sm text-[var(--color)] font-mono">{project.category}</span>
                                                <img
                                                    src={project.logoUrl}
                                                    alt={`${project.title} logo`}
                                                    className="w-10 h-10 object-cover bg-muted/20"
                                                    onError={(e) => {
                                                        e.currentTarget.src = 'https://placehold.co/40x40/333/FFF?text=ERR';
                                                        e.currentTarget.onerror = null;
                                                    }}
                                                />
                                            </div>

                                            <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color)] transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-muted leading-relaxed mb-6 text-pretty">{project.description}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <motion.span
                                                        key={tagIndex}
                                                        className="px-3 py-1 text-xs bg-[rgb(var(--color-rgb)_/_10%)] text-[var(--color)] rounded-full cursor-pointer"
                                                        whileHover={{
                                                            scale: 1.1,
                                                            backgroundColor: color,
                                                            color: '#FFFFFF'
                                                        }}
                                                        transition={{duration: 0.2}}
                                                    >
                                                        {tag}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 flex items-center text-sm text-[var(--color)] group-hover:text-[var(--color)] group-hover:gap-2 transition-all w-fit"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            View Live Site
                                            <ArrowUpRight
                                                className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                            />
                                        </a>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
