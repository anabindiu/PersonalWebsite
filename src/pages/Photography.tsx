// src/pages/Photography.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, ArrowLeft } from "lucide-react";

import photo1 from "@/assets/photo-1.png";
import photo2 from "@/assets/photo-2.png";
import photo3 from "@/assets/photo-3.png";
import photo4 from "@/assets/photo-4.png";
import photo5 from "@/assets/photo-5.png";
import photo6 from "@/assets/photo-6.png";
import photo7 from "@/assets/photo-7.png";
import photo8 from "@/assets/photo-8.png";
import photo9 from "@/assets/photo-9.png";
import photo10 from "@/assets/photo-10.png";
import photo11 from "@/assets/mepic1.jpg";
import photo12 from "@/assets/mepic2.jpg";
import photo13 from "@/assets/mepic3.jpg";
import photo14 from "@/assets/mepic4.jpg";
import photo15 from "@/assets/italy1.jpg";
import photo16 from "@/assets/italy2.jpg";
import photo17 from "@/assets/italy3.jpg";
import photo18 from "@/assets/italy4.jpg";
import photo19 from "@/assets/italy5.jpg";
import photo20 from "@/assets/italy6.jpg";
import photo21 from "@/assets/italy7.jpg";
import photo22 from "@/assets/budapest1.jpg";
import photo23 from "@/assets/canada1.jpg";
import photo24 from "@/assets/italy8.jpg";
import photo25 from "@/assets/budapest2.jpg";

const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
    photo21,
    photo22,
    photo23,
    photo24,
    photo25,
];

const Photography = () => {
    return (
        <div className="min-h-screen bg-[#fdf7ff] text-foreground">
            {/* top nav with back + brand + tabs */}
            <nav className="border-b border-[#f1c6d9]/40 bg-[#fff9fd]/90 backdrop-blur">
                {/* back + brand row */}
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#f1c6d9]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                </div>

                {/* tabs row */}
                <div className="max-w-6xl mx-auto px-6 pb-4 flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
                    <a href={`${import.meta.env.BASE_URL}#about`} className="hover:text-[#f1c6d9] transition-colors">
                        About
                    </a>
                    <Link
                        to="/development"
                        className="hover:text-[#f1c6d9] transition-colors"
                    >
                        Development
                    </Link>
                    <Link
                        to="/painting"
                        className="hover:text-[#f1c6d9] transition-colors"
                    >
                        Painting
                    </Link>
                    {/* active tab */}
                    <span className="text-[#9cb6cf]">
                        Photography
                    </span>
                    <Link
                        to="/contact"
                        className="hover:text-[#f1c6d9] transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </nav>

            <main className="section-padding max-w-6xl mx-auto space-y-10">
                {/* intro */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="space-y-3 max-w-xl">
                        <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#7d6a92]">
                            <Camera className="h-4 w-4" />
                            <span>Photography Portfolio</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#9cb6cf]">
                            Quiet, cinematic moments from everyday life.
                        </h1>
                        <p className="text-sm md:text-base text-muted-foreground">
                            A collection of walks, travels, and in-between scenes that feel a bit
                            like film stills : soft light, honest emotion, and little details I
                            don&apos;t want to forget.
                        </p>
                    </div>

                    <Button
                        asChild
                        size="lg"
                        className="bg-[#9cb6cf] hover:bg-[#86a4c3] text-white"
                    >
                        <a href="#gallery">Scroll to gallery</a>
                    </Button>
                </div>

                {/* gallery */}
                <section id="gallery" className="space-y-6">
                    <Card className="p-4 md:p-6 bg-white/85 border border-[#c7d7e8] shadow-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {photos.map((photo, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-[#f1c6d9]/60 bg-[#fdf0ea] image-hover-dynamic cursor-zoom-in"
                                >
                                    <img
                                        src={photo}
                                        alt={`Photography work ${index + 1}`}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </Card>
                </section>
            </main>
        </div>
    );
};

export default Photography;
