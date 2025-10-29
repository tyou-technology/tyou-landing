"use client"

import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import { InstagramIcon, Mail, Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    // Refs para capturar os valores do formulário
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const companyRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    // Número do WhatsApp (sem espaços, parênteses, etc.)
    const phoneNumber = "5518997970919" // +55 (18) 99797-0919 → apenas números

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const name = nameRef.current?.value.trim() || "Cliente"
        const email = emailRef.current?.value.trim() || "sem email"
        const company = companyRef.current?.value.trim() || "sem empresa"
        const message = messageRef.current?.value.trim() || "sem mensagem"

        // Monta a mensagem
        const text = `Olá! Meu nome é *${name}*.\n\n` +
            `Empresa: ${company}\n` +
            `Email: ${email}\n\n` +
            `Mensagem:\n${message}`

        // Codifica para URL
        const encodedMessage = encodeURIComponent(text)

        // Abre WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <section id="contact" className="py-24 lg:py-32 bg-secondary/5 relative" ref={ref}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <span className="text-primary text-sm font-mono tracking-wider uppercase">Get In Touch</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
                                Let's Build Something Amazing Together
                            </h2>
                            <p className="text-lg text-muted leading-relaxed text-pretty">
                                Ready to transform your vision into reality? Contact us today to discuss your project
                                and discover how we can help your business thrive.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: Mail,
                                    title: "Email",
                                    value: "tyou.contato@gmail.com",
                                    href: "mailto:tyou.contato@gmail.com"
                                },
                                { icon: Phone, title: "Phone", value: "+55 (18) 99797-0919", href: "tel:+5518997970919" },
                                {
                                    icon: InstagramIcon,
                                    title: "Social Media",
                                    value: "@tyoutecnologia",
                                    href: "https://instagram.com/tyoutecnologia",
                                },
                            ].map((contact, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                >
                                    <motion.div whileHover={{ x: 8, scale: 1.02 }} transition={{ duration: 0.2 }}>
                                        <Card className="p-6 bg-card border-border hover:border-[#00a5b4] transition-all flex items-start gap-4 cursor-pointer">
                                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                                <contact.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-semibold mb-1">{contact.title}</div>
                                                <a
                                                    href={contact.href}
                                                    className="text-muted hover:text-[#00a5b4] transition-colors cursor-pointer"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {contact.value}
                                                </a>
                                            </div>
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="p-8 bg-card border-border">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {[
                                    { id: "name", label: "Name", type: "text", placeholder: "Your name", ref: nameRef },
                                    { id: "email", label: "Email", type: "email", placeholder: "your@email.com", ref: emailRef },
                                    { id: "company", label: "Company", type: "text", placeholder: "Your company name", ref: companyRef },
                                ].map((field, index) => (
                                    <motion.div
                                        key={field.id}
                                        className="space-y-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    >
                                        <label htmlFor={field.id} className="text-sm font-medium">
                                            {field.label}
                                        </label>
                                        <input
                                            id={field.id}
                                            type={field.type}
                                            ref={field.ref}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder={field.placeholder}
                                            required={field.id === "name" || field.id === "email"}
                                        />
                                    </motion.div>
                                ))}

                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                >
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        ref={messageRef}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                >
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="submit"
                                            className="w-full bg-primary text-primary-foreground hover:bg-[#00a5b4] cursor-pointer transition-colors"
                                            size="lg"
                                        >
                                            Send via WhatsApp
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}