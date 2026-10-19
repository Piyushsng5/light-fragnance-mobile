"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    name: "Diet Coke Candle",
    price: "₹699",
    image: "/images/diet-coke-candle.jpg",
    tag: "Limited Edition",
  },
  {
    name: "Ethnic Mosaic Votive Candle",
    price: "₹499",
    image: "/images/01_Ethnic_Mosaic_Votive_Candle.jpg",
    tag: "Handcrafted",
  },
  {
    name: "Serene Veiled Maiden Candle",
    price: "₹599",
    image: "/images/02_Serene_Veiled_Maiden_Bust_Candle.jpg",
    tag: "Artisan",
  },
  {
    name: "Heart-Shaped Rose Bouquet Candle",
    price: "₹1000",
    image: "/images/03_Heart_Shaped_Rose_Bouquet_Candle.jpg",
    tag: "Bestseller",
  },
  {
    name: "Sculpted Rose Tower Candle",
    price: "₹699",
    image: "/images/04_Sculpted_Rose_Tower_Candle.jpg",
    tag: "Popular",
  },
  {
    name: "Full Bloom Peony Candle",
    price: "₹699",
    image: "/images/05_Full_Bloom_Peony_Candle.jpg",
    tag: "Floral",
  },
  {
    name: "Lotus Bud Candle",
    price: "₹599",
    image: "/images/06_Lotus_Bud_Candle.jpg",
    tag: "New",
  },
  {
    name: "Ocean Wave Gel Cloud Candle",
    price: "₹799",
    image: "/images/07_Ocean_Wave_Gel_Cloud_Candle.jpg",
    tag: "Statement",
  },
  {
    name: "Ribbed Cone Tree Candles",
    price: "₹499",
    image: "/images/08_Ribbed_Cone_Tree_Candles.jpg",
    tag: "Minimal",
  },
  {
    name: "Pastel Lavender Container Candle",
    price: "₹449",
    image: "/images/09_Pastel_Lavender_Container_Candle.jpg",
    tag: "Pastel",
  },
  {
    name: "Classic Mauve Pillar Candle",
    price: "₹449",
    image: "/images/10_Classic_Mauve_Pillar_Candle.jpg",
    tag: "Classic",
  },
  {
    name: "Botanical Bloom Glow",
    price: "₹699",
    image: "/images/1.1_Botanical_Bloom_Glow.jpg",
    tag: "Botanical",
  },
  {
    name: "Serenity Buddha Glow",
    price: "₹799",
    image: "/images/1.2_Serenity_Buddha_Glow.jpg",
    tag: "Artisan",
  },
  {
    name: "Rose Whisper Candle",
    price: "₹699",
    image: "/images/1.3_Rose_Whisper_Candle.jpg",
    tag: "Floral",
  },
  {
    name: "Velvet Heartlight Candle",
    price: "₹799",
    image: "/images/1.4_Velvet_Heartlight_Candle.jpg",
    tag: "Bestseller",
  },
  {
    name: "Amber Peace Pillar",
    price: "₹599",
    image: "/images/1.5_Amber_Peace_Pillar.jpg",
    tag: "Classic",
  },
  {
    name: "Ivory Dream Pillars",
    price: "₹699",
    image: "/images/2.1_Ivory_Dream_Pillars.jpg",
    tag: "Minimal",
  },
  {
    name: "Golden Heirloom Candle",
    price: "₹799",
    image: "/images/2.2_Golden_Heirloom_Candle.jpg",
    tag: "Statement",
  },
  {
    name: "Rosewater Layers Candle",
    price: "₹699",
    image: "/images/2.3_Rosewater_Layers_Candle.jpg",
    tag: "Layered",
  },
  {
    name: "Blush Ribbed Elegance",
    price: "₹499",
    image: "/images/2.4_Blush_Ribbed_Elegance.jpg",
    tag: "Minimal",
  },
  {
    name: "Crimson Rose Sculpture",
    price: "₹799",
    image: "/images/2.5_Crimson_Rose_Sculpture.jpg",
    tag: "Floral",
  },
  {
    name: "Sunlit Citrus Glow",
    price: "₹699",
    image: "/images/3.1_Sunlit_Citrus_Glow.jpg",
    tag: "Fresh",
  },
  {
    name: "Caramel Cake Delight",
    price: "₹799",
    image: "/images/3.2_Caramel_Cake_Delight.jpg",
    tag: "Dessert",
  },
  {
    name: "Blooming Peony Candle",
    price: "₹699",
    image: "/images/3.3_Blooming_Peony_Candle.jpg",
    tag: "Floral",
  },
  {
    name: "Purple Rain",
    price: "₹899",
    image: "/images/purple-rain.jpg",
    tag: "Artisan",
  },
  {
    name: "Ocean Breeze Gel Candle",
    price: "₹799",
    image: "/images/3.5_Ocean_Breeze_Gel_Candle.jpg",
    tag: "Oceanic",
  },
];

type Product = (typeof products)[number];

type ProductReview = {
  name: string;
  rating: number;
  comment: string;
};

const productDetails: Record<
  string,
  {
    description: string;
    features: string[];
    reviews: ProductReview[];
  }
> = {
  "Diet Coke Candle": {
    description:
      "A playful, statement-making candle inspired by the iconic Diet Coke can. A fun addition to your collection or a quirky gift.",
    features: [
      "Limited Edition",
      "Statement design",
      "Great for gifting",
    ],
    reviews: [],
  },
  "Ethnic Mosaic Votive Candle": {
    description:
      "A decorative handcrafted candle featuring an intricate mosaic-inspired look, perfect for adding warmth and character to your space.",
    features: [
      "Handcrafted design",
      "Decorative accent",
      "Thoughtful gift",
    ],
    reviews: [],
  },
};

const defaultProductDetails = {
  description:
    "Discover a thoughtfully designed candle from Light & Fragrance, created to bring beauty and warmth to your home or make a special gift.",
  features: [
    "Decorative design",
    "Made for gifting",
    "Light & Fragrance collection",
  ],
  reviews: [] as ProductReview[],
};

type CartItem = Product & {
  quantity: number;
};

const WHATSAPP_NUMBER = "919311443557";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [collectionPage, setCollectionPage] = useState(1);
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);
  const [activeProductPhoto, setActiveProductPhoto] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price.replace(/[₹,]/g, "")) * item.quantity,
    0
  );

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.name === product.name
      );

      if (existing) {
        return current.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (name: string, change: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveProductPhoto(0);
    setProductQuantity(1);
  };

  const goToPage = (page: number) => {
    setCollectionPage(page);
    document
      .getElementById("shop")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const placeWhatsAppOrder = () => {
    if (cart.length === 0) return;

    const orderLines = cart.map(
      (item) =>
        `• ${item.name} × ${item.quantity} — ${item.price}`
    );

    const message = [
      "Hi Light & Fragrance! ✨",
      "",
      "I'd like to place an order:",
      ...orderLines,
      "",
      `Total items: ${cartCount}`,
      `Estimated total: ₹${cartTotal.toLocaleString("en-IN")}`,
      "",
      "Please confirm availability and delivery details.",
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff9f1] text-[#2d1b2e]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#eadbd0] bg-[#fff9f1]/95 backdrop-blur">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            aria-label="Light & Fragrance home"
            onClick={() => setMobileMenuOpen(false)}
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/light-fragrance-logo.png"
              alt="L&F Light & Fragrance — Illuminate. Inspire. Indulge."
              width={76}
              height={76}
              priority
              sizes="76px"
              className="h-14 w-14 object-contain sm:h-[72px] sm:w-[72px]"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm lg:flex">
            <a href="#home" className="hover:text-[#d85c7a]">
              Home
            </a>
            <a href="#shop" className="hover:text-[#d85c7a]">
              Shop
            </a>
            <a href="#collections" className="hover:text-[#d85c7a]">
              Collections
            </a>
            <a href="#gifting" className="hover:text-[#d85c7a]">
              Gifting
            </a>
            <a href="#story" className="hover:text-[#d85c7a]">
              Our Story
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open shopping bag"
              onClick={() => setCartOpen(true)}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-[#eadbd0] bg-[#fffaf4] transition duration-300 hover:border-[#b77c70] hover:bg-[#f7e9df] sm:h-12 sm:w-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B77C70"
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[23px] w-[23px] transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M5.5 8.5h13l1 11h-15l1-11Z" />
                <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
                <path d="M9 12.5c.4.8 1.1 1.2 2 1.2" stroke="#D5A18E" />
              </svg>

              <span className="absolute -right-1 -top-1 flex h-[19px] min-w-[19px] items-center justify-center rounded-full border border-[#fffaf4] bg-[#B77C70] px-1 text-[10px] font-semibold text-white shadow-sm">
                {cartCount}
              </span>
            </button>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              onClick={() =>
                setMobileMenuOpen((open) => !open)
              }
              className="rounded-full p-2 text-2xl lg:hidden"
            >
              {mobileMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="flex flex-col border-t border-[#eadbd0] px-5 py-3 lg:hidden">
            {[
              ["Home", "#home"],
              ["Shop", "#shop"],
              ["Collections", "#collections"],
              ["Gifting", "#gifting"],
              ["Our Story", "#story"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[#eadbd0] py-3 text-sm last:border-0"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d85c7a]">
              Handcrafted in India
            </p>

            <h2 className="text-5xl font-medium leading-tight sm:text-7xl">
              Light up
              <br />
              your{" "}
              <span className="font-serif italic text-[#d85c7a]">
                moments.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-[#765e56]">
              Beautiful handcrafted candles made to bring warmth,
              fragrance and a little magic into your everyday
              moments.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#8c6b5d]">
              Thoughtfully created for your home, celebrations
              and the people you love.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="rounded-full bg-[#d85c7a] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#bd4c69]"
              >
                Shop Candles
              </a>
              <a
                href="#collections"
                className="rounded-full border border-[#2d1b2e] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#2d1b2e] hover:text-white"
              >
                Explore Collection
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-xs text-[#765e56]">
              <span>✦ Handcrafted</span>
              <span>✦ Made in India</span>
              <span>✦ Perfect for gifting</span>
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[550px]">
            <div className="absolute inset-5 rounded-full bg-[#f2c5ad]" />
            <div className="absolute inset-14 rounded-full bg-[#e99db5]" />

            <div className="absolute inset-8 right-16 overflow-hidden rounded-[30px] border-[6px] border-[#fff9f1] shadow-2xl sm:inset-12 sm:right-24">
              <Image
                src="/images/01_Ethnic_Mosaic_Votive_Candle.jpg"
                alt="Ethnic Mosaic Votive Candle"
                fill
                priority
                sizes="(max-width: 640px) 75vw, 380px"
                className="object-cover"
              />
            </div>

            <div className="absolute right-0 top-8 h-28 w-28 overflow-hidden rounded-full border-4 border-[#fff9f1] shadow-xl sm:right-1 sm:top-12 sm:h-36 sm:w-36">
              <Image
                src="/images/07_Ocean_Wave_Gel_Cloud_Candle.jpg"
                alt="Ocean Wave Gel Cloud Candle"
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-8 left-0 h-28 w-28 overflow-hidden rounded-full border-4 border-[#fff9f1] shadow-xl sm:bottom-12 sm:h-36 sm:w-36">
              <Image
                src="/images/2.2_Golden_Heirloom_Candle.jpg"
                alt="Golden Heirloom Candle"
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-y border-[#eadbd0] bg-[#f8eee5] px-4 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 text-center text-[10px] font-semibold uppercase tracking-widest text-[#765e56] sm:text-xs">
          <span>Handcrafted in India</span>
          <span>✦ Beautifully Scented</span>
          <span>✦ Made for Gifting</span>
          <span>✦ Made with Love</span>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        id="collections"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d85c7a]">
              Explore Our World
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl">
              Candles for every occasion
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#765e56]">
              From little everyday joys to special celebrations,
              find a candle made for the moment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              {
                title: "Decorative",
                subtitle: "Beautiful pieces for your home",
                image: "/images/01_Ethnic_Mosaic_Votive_Candle.jpg",
              },
              {
                title: "Flower Candles",
                subtitle: "Delicate blooms for your space",
                image: "/images/05_Full_Bloom_Peony_Candle.jpg",
              },
              {
                title: "Statement Candles",
                subtitle: "Unique shapes that stand out",
                image: "/images/07_Ocean_Wave_Gel_Cloud_Candle.jpg",
              },
              {
                title: "Special Moments",
                subtitle: "Thoughtful candles for celebrations",
                image: "/images/02_Serene_Veiled_Maiden_Bust_Candle.jpg",
              },
            ].map((category) => (
              <a
                key={category.title}
                href="#shop"
                className="group relative h-64 overflow-hidden rounded-2xl sm:h-80"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white sm:p-6">
                  <h3 className="font-semibold sm:text-xl">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/85">
                    {category.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* OUR COLLECTION */}
      <section
        id="shop"
        className="scroll-mt-20 bg-[#fff9f1] px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d85c7a]">
              Loved by many
            </p>
            <h2 className="mt-3 text-3xl font-medium sm:text-5xl">
              Our Collection
            </h2>
            <p className="mt-4 text-sm text-[#765e56]">
              Discover something beautiful for every moment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products
              .slice((collectionPage - 1) * 5, collectionPage * 5)
              .map((product) => {
                const quantity =
                  cart.find((item) => item.name === product.name)
                    ?.quantity ?? 0;

                return (
                  <div key={product.name} className="min-w-0">
                    <div
                      role="button"
                      tabIndex={0}
                      aria-label={`View details for ${product.name}`}
                      onClick={() => openProduct(product)}
                      onKeyDown={(event) => {
                        if (event.target !== event.currentTarget) return;

                        if (
                          event.key === "Enter" ||
                          event.key === " "
                        ) {
                          event.preventDefault();
                          openProduct(product);
                        }
                      }}
                      className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl bg-[#f3e9df]"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider sm:left-3 sm:top-3 sm:text-[10px]">
                        {product.tag}
                      </span>

                      <div className="absolute bottom-3 left-2 right-2 sm:bottom-4 sm:left-3 sm:right-3">
                        {quantity === 0 ? (
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              addToCart(product);
                            }}
                            className="w-full rounded-full bg-white py-3 text-xs font-semibold shadow-lg transition hover:bg-[#d85c7a] hover:text-white sm:text-sm"
                          >
                            Add to cart
                          </button>
                        ) : (
                          <div
                            className="flex items-center justify-between rounded-full bg-white px-2 py-2 shadow-lg"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <button
                              type="button"
                              aria-label={`Decrease ${product.name} quantity`}
                              onClick={(event) => {
                                event.stopPropagation();
                                updateQuantity(product.name, -1);
                              }}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#eadbd0] text-lg transition hover:bg-[#f7e9df]"
                            >
                              −
                            </button>

                            <span className="text-sm font-semibold">
                              {quantity}
                            </span>

                            <button
                              type="button"
                              aria-label={`Increase ${product.name} quantity`}
                              onClick={(event) => {
                                event.stopPropagation();
                                addToCart(product);
                              }}
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d85c7a] text-lg text-white transition hover:bg-[#bd4c69]"
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-3">
                      <h3 className="text-sm font-semibold leading-5 sm:text-base">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold">
                        {product.price}
                      </p>
                      <p className="mt-1 text-xs text-[#8c6b5d]">
                        Handcrafted candle
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* PAGE NUMBERS */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {Array.from(
              { length: Math.ceil(products.length / 5) },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-current={
                  collectionPage === page ? "page" : undefined
                }
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition ${
                  collectionPage === page
                    ? "border-[#2d1b2e] bg-[#2d1b2e] text-white"
                    : "border-[#d9c7bb] bg-white hover:border-[#d85c7a] hover:text-[#d85c7a]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-[#8c6b5d]">
            Page {collectionPage} of {Math.ceil(products.length / 5)} ·
            Showing candles{" "}
            {(collectionPage - 1) * 5 + 1}–
            {Math.min(collectionPage * 5, products.length)}
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="story"
        className="scroll-mt-20 bg-white px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="relative h-[380px] overflow-hidden rounded-3xl sm:h-[500px]">
            <Image
              src="/images/05_Full_Bloom_Peony_Candle.jpg"
              alt="Handcrafted flower candle"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d85c7a]">
              The Light & Fragrance story
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
              Little lights.
              <br />
              <span className="font-serif italic text-[#d85c7a]">
                Beautiful memories.
              </span>
            </h2>
            <p className="mt-6 leading-8 text-[#765e56]">
              We believe a candle is more than just a source of
              light. It can make a quiet evening feel special,
              turn a celebration into a memory and make a
              thoughtful gift even more meaningful.
            </p>
            <p className="mt-4 leading-8 text-[#8c6b5d]">
              At Light & Fragrance, every candle is thoughtfully
              created with attention to shape, colour, fragrance
              and detail.
            </p>
            <a
              href="#shop"
              className="mt-7 inline-flex rounded-full border border-[#2d1b2e] px-7 py-3 font-semibold transition hover:bg-[#2d1b2e] hover:text-white"
            >
              Explore Our Collection
            </a>
          </div>
        </div>
      </section>

      {/* GIFTING */}
      <section
        id="gifting"
        className="scroll-mt-20 bg-[#f3dfd0] px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d85c7a]">
              Thoughtful gifting
            </p>
            <h2 className="mt-4 text-4xl sm:text-6xl">
              Give them
              <br />
              a little{" "}
              <span className="font-serif italic text-[#d85c7a]">
                light.
              </span>
            </h2>
            <p className="mt-5 max-w-lg leading-8 text-[#765e56]">
              From birthdays and anniversaries to weddings,
              festivals and just-because moments, candles make
              beautiful, thoughtful gifts.
            </p>
            <a
              href="#shop"
              className="mt-7 inline-flex rounded-full bg-[#2d1b2e] px-7 py-3.5 font-semibold text-white transition hover:bg-[#4a304a]"
            >
              Shop Gifts
            </a>
          </div>

          <div className="relative h-[350px] overflow-hidden rounded-3xl sm:h-[450px]">
            <Image
              src="/images/1.2_Serenity_Buddha_Glow.jpg"
              alt="Serenity Buddha Glow"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#2d1b2e] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3c4ad]">
              Why Light & Fragrance
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Made for beautiful moments
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "✦",
                title: "Handcrafted",
                text: "Every candle is carefully made with attention to detail.",
              },
              {
                icon: "♡",
                title: "Made in India",
                text: "Proudly created with love and inspired by Indian homes.",
              },
              {
                icon: "✧",
                title: "Beautiful Designs",
                text: "Unique shapes and colours to brighten your space.",
              },
              {
                icon: "🎁",
                title: "Perfect Gifts",
                text: "Thoughtful candles for birthdays and celebrations.",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/70">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#eadbd0] bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-semibold">
              Light <span className="text-[#d85c7a]">&</span>{" "}
              Fragrance
            </h3>
            <p className="mt-1 text-[9px] tracking-[0.25em] text-[#8c6b5d]">
              HANDCRAFTED CANDLES
            </p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#765e56]">
              Beautiful handcrafted candles for homes,
              celebrations and thoughtful gifting.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Shop</h4>
            <div className="mt-4 space-y-3 text-sm text-[#765e56]">
              <a href="#shop" className="block hover:text-[#d85c7a]">
                All Candles
              </a>
              <a href="#collections" className="block hover:text-[#d85c7a]">
                Decorative Candles
              </a>
              <a href="#gifting" className="block hover:text-[#d85c7a]">
                Gift Candles
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Information</h4>
            <div className="mt-4 space-y-3 text-sm text-[#765e56]">
              <a href="#story" className="block hover:text-[#d85c7a]">
                Our Story
              </a>
              <a
                href="mailto:hello@lightandfragrance.in"
                className="block hover:text-[#d85c7a]"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Get in touch</h4>
            <p className="mt-4 text-sm leading-7 text-[#765e56]">
              Have a question about a candle or an order?
            </p>
            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}`,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="mt-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:brightness-95"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[#eadbd0] pt-6 text-xs text-[#8c6b5d] sm:flex-row sm:justify-between">
          <p>© 2026 Light & Fragrance. All rights reserved.</p>
          <p>Handcrafted with ♥ in India</p>
        </div>
      </footer>

      {/* SHOPPING BAG */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-[100] flex justify-end bg-[#21151f]/50 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            className="flex h-full w-full max-w-md flex-col bg-[#fffaf4] shadow-2xl animate-in slide-in-from-right duration-300"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-[#eadbd0] px-6 py-6 sm:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c66b7b]">
                    LIGHT & FRAGRANCE
                  </p>
                  <h2
                    id="cart-title"
                    className="mt-2 font-serif text-3xl text-[#352332]"
                  >
                    Your shopping bag
                  </h2>
                  <p className="mt-1 text-sm text-[#8c756d]">
                    {cartCount}{" "}
                    {cartCount === 1 ? "beautiful find" : "beautiful finds"}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close shopping bag"
                  onClick={() => setCartOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadbd0] text-2xl text-[#352332] transition hover:bg-[#f3e5da]"
                >
                  ×
                </button>
              </div>

              {cart.length > 0 && (
                <div className="mt-5 h-1 overflow-hidden rounded-full bg-[#f0e3d8]">
                  <div className="h-full w-full rounded-full bg-[#d58a91]" />
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-8">
              {cart.length === 0 ? (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f3e5da] text-4xl">
                    🕯️
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-[#352332]">
                    A little light is missing
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-[#8c756d]">
                    Your bag is waiting for something beautiful. Explore
                    our handcrafted candles and find your favourite.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCartOpen(false);
                      document.getElementById("shop")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="mt-6 rounded-full bg-[#352332] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#52394f]"
                  >
                    Discover candles
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {cart.map((item) => (
                    <div
                      key={item.name}
                      className="flex gap-4 border-b border-[#eadbd0] pb-5"
                    >
                      <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#f3e9df]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#c66b7b]">
                          HANDCRAFTED
                        </p>
                        <h3 className="mt-1 text-sm font-semibold leading-5 text-[#352332]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-[#8c756d]">
                          {item.price} each
                        </p>

                        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                          <div className="flex items-center rounded-full border border-[#e5d4c7] bg-white p-1">
                            <button
                              type="button"
                              aria-label={`Decrease ${item.name} quantity`}
                              onClick={() => updateQuantity(item.name, -1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-lg transition hover:bg-[#f3e5da]"
                            >
                              −
                            </button>
                            <span className="min-w-7 text-center text-xs font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase ${item.name} quantity`}
                              onClick={() => updateQuantity(item.name, 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-lg transition hover:bg-[#f3e5da]"
                            >
                              +
                            </button>
                          </div>

                          <p className="text-sm font-semibold text-[#352332]">
                            ₹
                            {(
                              Number(item.price.replace(/[₹,]/g, "")) *
                              item.quantity
                            ).toLocaleString("en-IN")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-[#eadbd0] bg-white px-6 py-6 sm:px-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#8c756d]">Items in your bag</span>
                  <span className="font-medium text-[#352332]">
                    {cartCount}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-base font-semibold text-[#352332]">
                    Estimated total
                  </span>
                  <span className="font-serif text-2xl text-[#352332]">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-[#8c756d]">
                  Delivery charges, availability and final order details
                  will be confirmed on WhatsApp.
                </p>

                <button
                  type="button"
                  onClick={placeWhatsAppOrder}
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#352332] px-6 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-[#52394f] hover:shadow-xl"
                >
                  <span>Continue on WhatsApp</span>
                  <span aria-hidden="true">↗</span>
                </button>

                <p className="mt-4 text-center text-[10px] uppercase tracking-[0.18em] text-[#9b8277]">
                  Made with love · Handcrafted in India
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PRODUCT OVERVIEW MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/45 p-3 backdrop-blur-md sm:p-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-[#fff9f1] p-5 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close product overview"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow"
            >
              ×
            </button>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d85c7a]">
              Light & Fragrance · Product Details
            </p>

            <div className="grid gap-7 pt-3 md:grid-cols-2">
              {/* PRODUCT GALLERY — fixed: one main image and one thumbnail row */}
              <div className="min-w-0">
                {(() => {
                  const photos =
                    selectedProduct.name === "Diet Coke Candle"
                      ? [
                          selectedProduct.image,
                          "/images/diet-coke-2.jpg",
                          "/images/diet-coke-3.jpg",
                        ]
                      : [selectedProduct.image];

                  const currentPhoto =
                    photos[activeProductPhoto] ?? photos[0];

                  return (
                    <>
                      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#f3e9df]">
                        <Image
                          src={currentPhoto}
                          alt={selectedProduct.name}
                          fill
                          sizes="(max-width: 768px) 90vw, 45vw"
                          className="object-cover"
                        />
                      </div>

                      {photos.length > 1 && (
                        <div className="mt-3 grid grid-cols-3 gap-3">
                          {photos.map((photo, photoIndex) => (
                            <button
                              key={photo}
                              type="button"
                              onClick={() =>
                                setActiveProductPhoto(photoIndex)
                              }
                              aria-label={`View product photo ${photoIndex + 1}`}
                              aria-pressed={
                                activeProductPhoto === photoIndex
                              }
                              className={`relative aspect-square overflow-hidden rounded-xl border-2 ${
                                activeProductPhoto === photoIndex
                                  ? "border-[#d85c7a]"
                                  : "border-transparent"
                              }`}
                            >
                              <Image
                                src={photo}
                                alt={`${selectedProduct.name} view ${photoIndex + 1}`}
                                fill
                                sizes="120px"
                                className="object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* PRODUCT DETAILS */}
              <div>
                <span className="inline-block rounded-full bg-[#f3dfd0] px-3 py-1 text-xs font-semibold text-[#8c4c5e]">
                  {selectedProduct.tag}
                </span>

                <h2
                  id="product-modal-title"
                  className="mt-4 pr-8 text-3xl font-medium leading-tight sm:text-4xl"
                >
                  {selectedProduct.name}
                </h2>

                <p className="mt-4 text-2xl font-semibold">
                  {selectedProduct.price}
                </p>

                <p className="mt-4 leading-7 text-[#765e56]">
                  {(
                    productDetails[selectedProduct.name] ??
                    defaultProductDetails
                  ).description}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-[#765e56]">
                  {(
                    productDetails[selectedProduct.name] ??
                    defaultProductDetails
                  ).features.map((feature) => (
                    <li key={feature}>✦ {feature}</li>
                  ))}
                </ul>

                {/* QUANTITY SELECTOR */}
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-sm font-semibold">Quantity</span>

                  <div className="flex items-center gap-4 rounded-full border border-[#eadbd0] bg-white px-3 py-2">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      disabled={productQuantity <= 1}
                      onClick={() =>
                        setProductQuantity((quantity) =>
                          Math.max(1, quantity - 1)
                        )
                      }
                      className="text-xl disabled:opacity-30"
                    >
                      −
                    </button>

                    <span className="min-w-4 text-center">
                      {productQuantity}
                    </span>

                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() =>
                        setProductQuantity((quantity) => quantity + 1)
                      }
                      className="text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* ADD TO BAG */}
                <button
                  type="button"
                  onClick={() => {
                    for (let i = 0; i < productQuantity; i++) {
                      addToCart(selectedProduct);
                    }
                    setSelectedProduct(null);
                    setCartOpen(true);
                  }}
                  className="mt-6 w-full rounded-full bg-[#d85c7a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#bd4c69]"
                >
                  Add to Bag · ₹
                  {(
                    Number(
                      selectedProduct.price.replace(/[₹,]/g, "")
                    ) * productQuantity
                  ).toLocaleString("en-IN")}
                </button>

                {/* CUSTOMER REVIEWS */}
                <div className="mt-9 border-t border-[#eadbd0] pt-6">
                  <h3 className="text-xl font-semibold">
                    Customer Reviews
                  </h3>

                  <p className="mt-2 text-sm text-[#765e56]">
                    Reviews from customers who have experienced this
                    candle.
                  </p>

                  {(
                    productDetails[selectedProduct.name] ??
                    defaultProductDetails
                  ).reviews.length === 0 ? (
                    <div className="mt-4 rounded-2xl bg-white p-5">
                      <p className="font-medium">
                        Be the first to review this candle
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#765e56]">
                        Customer reviews will appear here when genuine
                        feedback is collected.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4 space-y-4">
                      {(
                        productDetails[selectedProduct.name] ??
                        defaultProductDetails
                      ).reviews.map((review, index) => (
                        <div
                          key={`${review.name}-${index}`}
                          className="rounded-2xl bg-white p-4"
                        >
                          <p className="font-semibold">{review.name}</p>
                          <p className="mt-1 text-sm text-amber-600">
                            {"★".repeat(review.rating)}
                            {"☆".repeat(5 - review.rating)}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[#765e56]">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}