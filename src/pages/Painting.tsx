// src/pages/Painting.tsx
import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    Ruler,
    Truck,
    Package,
    Share2,
} from "lucide-react";

import { useState } from "react";
import paintingCover from "@/assets/Moonrisepainting2.png";
import paintingDetail1 from "@/assets/Moonrisepainting1.png";
import paintingDetail2 from "@/assets/Moonrisepainting3.png";
import paintingVideo from "@/assets/MoonriseDaydream.mp4";

type MediaItem =
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; alt: string };

type Product = {
    id: string;
    title: string;
    price: string;
    teaser: string;
    description: string;
    cover: string;
    media: MediaItem[];
};

const products: Product[] = [
    {
        id: "moonrise-painting-tote-bag",
        title: "Moonrise Daydream – Tote Bag",
        price: "$20.00 CAD",
        teaser:
            "A dreamy tote with a dog and goose floating through moonlit clouds, a little calm universe you can carry everywhere.",
        description:
            "A small dog and a gentle goose drift through cotton-candy clouds under a rising moon. Moonrise Daydream is a little universe about quiet friendship, wonder, and slowing down enough to notice the colors in the sky. Designed for everyday use : from café runs to library days; it’s a soft reminder to carry a bit of calm magic with you.",
        cover: paintingCover,
        media: [
            {
                type: "image",
                src: paintingCover,
                alt: "Moonrise Painting – full artwork on a tote bag",
            },
            {
                type: "image",
                src: paintingDetail1,
                alt: "Moonrise Painting – close-up of print",
            },
            {
                type: "image",
                src: paintingDetail2,
                alt: "Moonrise Painting – styled photo",
            },
            {
                type: "video",
                src: paintingVideo,
                alt: "Moonrise Painting – video preview",
            },
        ],
    },
];


const findProductById = (id: string | undefined) =>
    products.find((p) => p.id === id);

/* ---------- LIST PAGE: /painting ---------- */

const PaintingList = () => {
    const product = products[0]; // you can add more later

    return (
        <div className="min-h-screen bg-background">
            {/* Top bar */}
            <nav className="border-b border-border bg-background/90 backdrop-blur">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                    <span className="text-sm font-medium text-muted-foreground">
                        Ana Bindiu · Products
                    </span>
                </div>
            </nav>

            <main className="section-padding max-w-6xl mx-auto space-y-10">
                {/* Heading like Naomi's “Products / Fan Favorites” */}
                <header className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold">Products</h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Fan Favorites
                    </p>
                </header>

                {/* Single product card – Painting 3 as cover */}
                <section className="grid gap-8">
                    <Card className="bg-white/90 border-border/80 p-4 md:p-6">
                        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-start">
                            {/* Left: big cover image */}
                            <button
                                type="button"
                                className="relative overflow-hidden rounded-2xl border border-border/80 bg-muted/40 image-hover-dynamic w-full"
                            >
                                <Link to={`/painting/${product.id}`} className="block">
                                    <img
                                        src={product.cover}
                                        alt={product.title}
                                        className="w-full rounded-2xl object-cover"
                                        loading="lazy"
                                    />
                                </Link>
                            </button>


                            {/* Right: copy & CTA */}
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <h2 className="text-2xl md:text-3xl font-semibold">
                                        {product.title}
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        From {product.price}
                                    </p>
                                </div>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    {product.teaser}
                                </p>

                                <Button
                                    asChild
                                    size="lg"
                                    className="mt-2 bg-secondary hover:bg-secondary/90"
                                >
                                    <Link to={`/painting/${product.id}`}>
                                        View product details
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </section>
            </main>
        </div>
    );
};

/* ---------- PRODUCT DETAIL PAGE: /painting/:productId ---------- */

const PaintingProduct = ({ product }: { product: Product }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeMedia = product.media[activeIndex];
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="min-h-screen bg-background">
            {/* Top bar */}
            <nav className="border-b border-border bg-background/90 backdrop-blur">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="/painting"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to products
                    </Link>
                    <span className="text-sm font-medium text-muted-foreground">
                        Ana Bindiu · {product.title}
                    </span>
                </div>
            </nav>

            <main className="section-padding max-w-6xl mx-auto space-y-10">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-start">
                    {/* Left: big media viewer */}
                    <section className="space-y-4">
                        <Card className="bg-white/90 border-border/80 p-4 md:p-6">
                            {activeMedia.type === "image" ? (
                                <img
                                    src={activeMedia.src}
                                    alt={activeMedia.alt}
                                    className="w-full rounded-2xl object-cover"
                                />
                            ) : (
                                <video
                                    controls
                                    className="w-full rounded-2xl"
                                    src={activeMedia.src}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </Card>



                        {/* Thumbnails / media strip */}
                        <div className="flex gap-3 overflow-x-auto pb-2">
                            {product.media.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`flex-shrink-0 rounded-xl border ${index === activeIndex
                                            ? "border-primary ring-2 ring-primary/40"
                                            : "border-border"
                                        } bg-muted/40 overflow-hidden w-20 h-20 md:w-24 md:h-24`}
                                >
                                    {item.type === "image" ? (
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                                            Video
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Right: info / “buy” area */}
                    <section className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl md:text-4xl font-bold">
                                {product.title}
                            </h1>
                            <p className="text-base font-medium">{product.price}</p>
                            <p className="text-xs text-muted-foreground">
                                Shipping calculated at checkout.
                            </p>
                        </div>

                        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                            <p>{product.description}</p>
                            <p>
                                Printed on a durable, reusable tote with a soft feel and comfy straps : perfect for books, sketchbooks, groceries, or whatever you’re dreaming up.
                            </p>
                        </div>

                        {/* Simple “size & quantity” placeholders  */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    Quantity
                                </p>
                                <div className="inline-flex items-center border border-border rounded-md">
                                    <button
                                        type="button"
                                        className="px-3 py-2 text-sm"
                                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                    >
                                        −
                                    </button>

                                    <input
                                        type="number"
                                        min={1}
                                        value={quantity}
                                        onChange={(e) => {
                                            const value = parseInt(e.target.value, 10);
                                            if (Number.isNaN(value)) {
                                                setQuantity(1);
                                            } else {
                                                setQuantity(Math.max(1, value));
                                            }
                                        }}
                                        className="w-12 text-center text-sm border-l border-r border-border bg-background"
                                    />

                                    <button
                                        type="button"
                                        className="px-3 py-2 text-sm"
                                        onClick={() => setQuantity((q) => q + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>


                            {/* Extra details – similar to Naomi's accordions */}
                            <div className="mt-6 space-y-3 border-t border-border pt-4">
                                <details className="rounded-md border border-border/70 bg-background px-4 py-3">
                                    <summary className="flex cursor-pointer items-center justify-between text-sm font-medium list-none">
                                        <span className="inline-flex items-center gap-2">
                                            <Ruler className="h-4 w-4 text-muted-foreground" />
                                            Material Details
                                        </span>
                                        <span className="text-xs text-muted-foreground">+</span>
                                    </summary>
                                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                                        100% cotton canvas tote, approx. 15&quot; × 16&quot;, with long handles
                                        for over-the-shoulder carry. Printed with soft, durable inks so the
                                        colors stay bright without the fabric feeling stiff.
                                    </p>
                                </details>

                                <details className="rounded-md border border-border/70 bg-background px-4 py-3">
                                    <summary className="flex cursor-pointer items-center justify-between text-sm font-medium list-none">
                                        <span className="inline-flex items-center gap-2">
                                            <Truck className="h-4 w-4 text-muted-foreground" />
                                            Made-To-Order
                                        </span>
                                        <span className="text-xs text-muted-foreground">+</span>
                                    </summary>
                                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                                        Each tote is made to order to reduce waste. Please allow 5–10 business
                                        days for production before shipping.
                                    </p>
                                </details>

                                <details className="rounded-md border border-border/70 bg-background px-4 py-3">
                                    <summary className="flex cursor-pointer items-center justify-between text-sm font-medium list-none">
                                        <span className="inline-flex items-center gap-2">
                                            <Package className="h-4 w-4 text-muted-foreground" />
                                            Shipping &amp; Returns FAQ
                                        </span>
                                        <span className="text-xs text-muted-foreground">+</span>
                                    </summary>
                                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                                        Ships from Calgary, AB. If something arrives damaged or incorrect,
                                        reach out within 14 days and we’ll work on a replacement or refund.
                                    </p>
                                </details>

                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1 text-xs font-medium text-secondary hover:text-secondary/80"
                                >
                                    <Share2 className="h-3 w-3" />
                                    Share
                                </button>
                            </div>


                            <Button className="w-full mt-2 bg-secondary hover:bg-secondary/90">
                                Add to cart (coming soon)
                            </Button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

/* ---------- ROUTER WRAPPER ---------- */

const Painting = () => {
    const { productId } = useParams<{ productId?: string }>();
    const product = findProductById(productId);

    if (productId && product) {
        return <PaintingProduct product={product} />;
    }

    return <PaintingList />;
};

export default Painting;
