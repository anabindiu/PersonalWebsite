// src/components/AboutStorybook.tsx
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

type StorySlide = {
    title: string;
    subtitle?: string;
    text: string;
};

const slides: StorySlide[] = [
    {
        title: "Chapter I · Arad, Romania",
        subtitle: "A house full of colour and sketchbooks",
        text:
            "Once upon a time in a small city called Arad, there was a girl who grew up between paint swatches and floor plans. While her family dreamed in colours and furniture layouts, she secretly loved puzzles, patterns, and the quiet thrill of solving a problem that wouldn’t leave her alone."
    },
    {
        title: "Chapter II · Between stethoscopes and code",
        subtitle: "The almost-doctor season",
        text:
            "When her family moved to Canada, the plan was simple: become a doctor, help people, do the ‘sensible’ thing. She studied chemistry, memorized molecules, and tried to convince her heart this was it. But every late-night study session whispered the same thing: something about this path didn’t quite fit."
    },
    {
        title: "Chapter III · The brave semester",
        subtitle: "Four girls in a room full of code",
        text:
            "One semester, she listened to that small, stubborn gut feeling and took a full load of computer science courses. She walked into classrooms where there were only a handful of women—sometimes just four. It felt scary and bold and perfectly right, all at the same time."
    },
    {
        title: "Chapter IV · Where art and logic hold hands",
        subtitle: "Designing feelings into interfaces",
        text:
            "Somewhere between data structures, debugging, and late-night projects, she realized something beautiful: the way her family designed rooms was not so different from how she was now designing interfaces. Code became another kind of sketchbook, and UX felt like interior design for the mind."
    },
    {
        title: "Chapter V · A gentle kind of ambition",
        subtitle: "For the girls who don’t think they fit",
        text:
            "Today, she writes code, paints skies, photographs quiet moments, and dreams about building tools that actually make people’s lives softer and easier. She hopes that one day, another girl who doesn’t feel like she belongs in tech will see her work and think, ‘Maybe there’s a place for me here too.’"
    }
];

const AboutStorybook = () => {
    const [index, setIndex] = useState(0);

    const current = slides[index];

    const goPrev = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goNext = () => {
        setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section
            id="storybook"
            className="mt-16 md:mt-20 space-y-6"
            aria-label="Ana's storybook"
        >
            <div className="flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-[#d481a6]">
                <Sparkles className="h-4 w-4" />
                <span>Little storybook</span>
            </div>

            <Card className="bg-white/90 border-[#f1c6d9]/60 shadow-sm p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-center">
                    {/* Text side */}
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#a08fb0]">
                            {index + 1} / {slides.length}
                        </p>
                        <h3 className="text-xl md:text-2xl font-semibold text-[#f1c6d9]">
                            {current.title}
                        </h3>
                        {current.subtitle && (
                            <p className="text-sm font-medium text-[#7d6a92]">
                                {current.subtitle}
                            </p>
                        )}
                        <p className="text-sm md:text-base leading-relaxed text-[#6a5878]">
                            {current.text}
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={goPrev}
                                className="border-[#f1c6d9]/70 text-[#7d6a92] hover:bg-[#fdf0ea]"
                                aria-label="Previous chapter"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={goNext}
                                className="border-[#f1c6d9]/70 text-[#7d6a92] hover:bg-[#fdf0ea]"
                                aria-label="Next chapter"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Image placeholder side – you can swap this with your own images later */}
                    <div className="relative">
                        <div className="aspect-[4/3] w-full rounded-3xl border border-[#f1c6d9]/50 bg-[#fdf0ea] flex items-center justify-center text-xs md:text-sm text-[#b28aa2]">
                            {/* TODO: replace with a real <img /> later */}
                            Future illustration goes here ✨
                        </div>
                        <div className="absolute -bottom-3 -right-3 hidden md:block rounded-2xl bg-white/90 border border-[#c7d7e8]/60 px-3 py-2 text-[11px] text-[#7d6a92] shadow-sm">
                            I’ll add real photos soon.
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
};

export default AboutStorybook;
