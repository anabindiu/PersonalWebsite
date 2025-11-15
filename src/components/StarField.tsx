import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    alphaChange: number;
    speedX: number;
    speedY: number;
}

const StarField = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;

        const resize = () => {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            const ratio = window.devicePixelRatio || 1;

            canvas.width = width * ratio;
            canvas.height = height * ratio;
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        const STAR_COUNT = 80;
        const stars: Star[] = [];

        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2.2 + 1.2, // slightly bigger stars
                alpha: Math.random(),
                alphaChange:
                    (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
                speedX: (Math.random() - 0.5) * 0.08,
                speedY: (Math.random() - 0.5) * 0.08,
            });
        }

        const draw = () => {
            // super subtle background wash so stars stay bright
            ctx.clearRect(0, 0, width, height);
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, "rgba(255, 255, 255, 0.04)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0.02)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            for (const star of stars) {
                // update alpha for twinkle
                star.alpha += star.alphaChange;
                if (star.alpha <= 0.15 || star.alpha >= 1) {
                    star.alphaChange *= -1;
                }

                // move star
                star.x += star.speedX;
                star.y += star.speedY;

                // wrap around edges
                if (star.x < -10) star.x = width + 10;
                if (star.x > width + 10) star.x = -10;
                if (star.y < -10) star.y = height + 10;
                if (star.y > height + 10) star.y = -10;

                // draw bright core
                ctx.save();
                ctx.globalAlpha = star.alpha;

                ctx.beginPath();
                ctx.fillStyle = "rgba(255,255,255,1)";
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                // strong white glow
                ctx.beginPath();
                ctx.globalAlpha = star.alpha * 0.9;
                ctx.fillStyle = "rgba(255,255,255,1)";
                ctx.arc(star.x, star.y, star.radius * 3.8, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
            }}
        />
    );
};

export default StarField;
