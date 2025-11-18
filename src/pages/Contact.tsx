// src/pages/Contact.tsx
import { Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-muted/60 via-muted/40 to-background flex flex-col items-center">
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-t from-secondary/20 to-primary/40 text-center py-24 relative">
                {/* You can replace this with your own illustration later */}
                <div className="absolute inset-0 bg-[url('/your-sky-image.png')] bg-cover bg-center opacity-30" />
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
                        Hello.
                    </h1>
                    <h2 className="text-lg md:text-xl text-muted-foreground">
                        Let&apos;s work together on your next project.
                    </h2>
                </div>
            </section>

            {/* Contact Card */}
            <section className="w-full max-w-5xl -mt-16 md:-mt-24 relative z-10 px-6 md:px-0">
                <div className="bg-white/80 backdrop-blur-md border border-border shadow-lg rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-[1fr,1.5fr]">
                        {/* Left Panel */}
                        <div className="bg-muted/40 p-10 flex flex-col justify-center space-y-4 border-b md:border-b-0 md:border-r border-border/60">
                            <Mail className="h-6 w-6 text-primary" />
                            <h3 className="text-xl font-semibold">For commissions or inquiries</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                For collaborations, art commissions, or design projects — reach out anytime!
                            </p>
                            <a
                                href="mailto:hello@anabindiu.com"
                                className="text-primary font-semibold underline decoration-primary/40 hover:text-primary/80"
                            >
                                hello@anabindiu.com
                            </a>

                            <p className="text-xs text-muted-foreground">or send a message via this form ↓</p>

                            {/* Optional social links */}
                            <div className="flex gap-3 pt-4">
                                <a
                                    href="https://instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition"
                                >
                                    <Instagram className="h-5 w-5 text-primary" />
                                </a>
                                <a
                                    href="https://facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition"
                                >
                                    <Facebook className="h-5 w-5 text-primary" />
                                </a>
                            </div>
                        </div>

                        {/* Right Panel - Form */}
                        <form className="p-10 space-y-6 bg-white/70">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:outline-none"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Write a message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-primary/40 focus:outline-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="px-8 mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
