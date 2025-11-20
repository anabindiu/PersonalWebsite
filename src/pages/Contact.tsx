// src/pages/Contact.tsx
import { Mail, Instagram, Facebook, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#fdf7ff] flex flex-col">
            {/* Top Nav with back + tabs */}
            <nav className="border-b border-border bg-background/90 backdrop-blur">
                {/* Back + label row */}
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                </div>

                {/* Tabs row */}
                <div className="max-w-6xl mx-auto px-6 pb-4 flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
                    <a href="/#about" className="hover:text-primary transition-colors">
                        About
                    </a>
                    <Link to="/development" className="hover:text-primary transition-colors">
                        Development
                    </Link>
                    <Link to="/painting" className="hover:text-primary transition-colors">
                        Painting
                    </Link>
                    <Link to="/photography" className="hover:text-primary transition-colors">
                        Photography
                    </Link>
                    <span className="text-primary">Contact</span>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="w-full bg-gradient-to-t from-[#dac2e2]/40 via-[#f1c6d9]/40 to-transparent text-center py-24 relative">
                <div className="absolute inset-0 bg-[url('/your-sky-image.png')] bg-cover bg-center opacity-20 pointer-events-none" />
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-semibold text-[#c58ab8] mb-2">
                        Hello.
                    </h1>
                    <h2 className="text-lg md:text-xl text-[#7d6a92]">
                        Let&apos;s work together on your next project.
                    </h2>
                </div>
            </section>

            {/* Contact Card */}
            <section className="w-full max-w-5xl -mt-16 md:-mt-24 relative z-10 px-6 md:px-0 pb-16 mx-auto">
                <div className="bg-white/90 backdrop-blur-md border border-[#f1c6d9]/40 shadow-lg rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-[1fr,1.5fr]">
                        {/* Left Panel */}
                        <div className="bg-[#fdf0ea] p-10 flex flex-col justify-center space-y-4 border-b md:border-b-0 md:border-r border-[#f1c6d9]/40">
                            <Mail className="h-6 w-6 text-[#f1c6d9]" />
                            <h3 className="text-xl font-semibold text-[#4b394f]">
                                For commissions or inquiries
                            </h3>
                            <p className="text-sm leading-relaxed text-[#7d6a92]">
                                For collaborations, art commissions, or design projects — reach out anytime!
                            </p>
                            <a
                                href="mailto:anabindiu11@gmail.com"
                                className="text-[#f1c6d9] font-semibold underline decoration-[#f1c6d9]/50 hover:text-[#e6aec4]"
                            >
                                anabindiu11@gmail.com
                            </a>

                            <p className="text-xs text-[#a08fb0]">or send a message via this form ↓</p>

                            {/* Social links */}
                            <div className="flex gap-3 pt-4">
                                <a
                                    href="https://www.instagram.com/cristinabindiu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition"
                                >
                                    <Instagram className="h-5 w-5 text-[#f1c6d9]" />
                                </a>
                                <a
                                    href="https://www.facebook.com/cristina.bindiu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition"
                                >
                                    <Facebook className="h-5 w-5 text-[#f1c6d9]" />
                                </a>
                            </div>
                        </div>

                        {/* Right Panel - Form */}
                        <form onSubmit={handleSubmit} className="p-10 space-y-6 bg-white/80">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-[#7d6a92]">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="w-full rounded-md border border-[#f1c6d9]/60 bg-[#fff9fd] px-3 py-2 text-sm focus:ring-2 focus:ring-[#f1c6d9]/70 focus:outline-none"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-[#7d6a92]">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="w-full rounded-md border border-[#f1c6d9]/60 bg-[#fff9fd] px-3 py-2 text-sm focus:ring-2 focus:ring-[#f1c6d9]/70 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-[#7d6a92]">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full rounded-md border border-[#f1c6d9]/60 bg-[#fff9fd] px-3 py-2 text-sm focus:ring-2 focus:ring-[#f1c6d9]/70 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-[#7d6a92]">
                                    Write a message
                                </label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    className="w-full rounded-md border border-[#f1c6d9]/60 bg-[#fff9fd] px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-[#f1c6d9]/70 focus:outline-none"
                                />
                            </div>

                            {/* Status messages */}
                            {status === "success" && (
                                <p className="text-xs text-emerald-600">
                                    Thank you! Your message has been sent.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-xs text-red-500">
                                    Something went wrong. Please try again or email me directly.
                                </p>
                            )}

                            <Button
                                type="submit"
                                className="px-8 mt-2 bg-[#f1c6d9] hover:bg-[#e6aec4] text-white"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending…" : "Submit"}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
