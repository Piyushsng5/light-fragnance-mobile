"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    name: "Chocolate Bloom Candle",
    price: "₹499",
    image: "/images/hero-candle.jpg",
    tag: "Bestseller",
  },
  {
    name: "Little Dreamer Candle",
    price: "₹599",
    image: "/images/baby-candle.jpg",
    tag: "New",
  },
  {
    name: "Sun & Moon Candle",
    price: "₹449",
    image: "/images/sun-moon-candles.jpg",
    tag: "Handcrafted",
  },
  {
    name: "Bloom Flower Candle",
    price: "₹1000",
    image: "/images/orange-flower-candles.jpg",
    tag: "Popular",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff9f1] text-[#2d1b2e]">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="sticky top-0 z-50 border-b border-[#eadbd0] bg-[#fff9f1]/95 backdrop-blur">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="group" onClick={closeMobileMenu}>
            <h1 className="text-lg font-semibold tracking-wide sm:text-2xl">
              Light <span className="text-[#d85c7a]">&</span> Fragrance
            </h1>

            <p className="mt-0.5 text-[8px] tracking-[0.22em] text-[#8c6b5d] sm:text-[10px] sm:tracking-[0.28em]">
              HANDCRAFTED CANDLES
            </p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a href="#" className="transition hover:text-[#d85c7a]">
              Home
            </a>

            <a href="#shop" className="transition hover:text-[#d85c7a]">
              Shop
            </a>

            <a href="#collections" className="transition hover:text-[#d85c7a]">
              Collections
            </a>

            <a href="#gifting" className="transition hover:text-[#d85c7a]">
              Gifting
            </a>

            <a href="#story" className="transition hover:text-[#d85c7a]">
              Our Story
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              aria-label="Search"
              className="hidden text-xl transition hover:text-[#d85c7a] sm:block"
            >
              ⌕
            </button>

            <button
              aria-label="Wishlist"
              className="text-xl transition hover:text-[#d85c7a]"
            >
              ♡
            </button>

            <button
              aria-label="Shopping bag"
              className="relative text-xl"
            >
              🛍

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#d85c7a] text-[9px] font-semibold text-white">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-2xl transition hover:bg-[#f3dfd0] lg:hidden"
            >
              {mobileMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

 {/* Mobile Navigation */}
<div
  className={
    "overflow-hidden border-t border-[#eadbd0] bg-[#fff9f1] transition-all duration-300 lg:hidden " +
    (mobileMenuOpen
      ? "max-h-[420px] opacity-100"
      : "max-h-0 opacity-0")
  }
>
  <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
    <a
      href="#"
      onClick={closeMobileMenu}
      className="border-b border-[#eadbd0] py-4 text-sm font-medium"
    >
      Home
    </a>

    <a
      href="#shop"
      onClick={closeMobileMenu}
      className="border-b border-[#eadbd0] py-4 text-sm font-medium"
    >
      Shop
    </a>

    <a
      href="#collections"
      onClick={closeMobileMenu}
      className="border-b border-[#eadbd0] py-4 text-sm font-medium"
    >
      Collections
    </a>

    <a
      href="#gifting"
      onClick={closeMobileMenu}
      className="border-b border-[#eadbd0] py-4 text-sm font-medium"
    >
      Gifting
    </a>

    <a
      href="#story"
      onClick={closeMobileMenu}
      className="py-4 text-sm font-medium"
    >
      Our Story
    </a>
  </nav>
</div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#f3c4ad]/40" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#e6a5b7]/30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:min-h-[720px] lg:grid-cols-2 lg:gap-10 lg:px-8">
          {/* Hero content */}
          <div className="relative z-10 max-w-xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <div className="h-px w-8 bg-[#d85c7a] sm:w-10" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d85c7a] sm:text-xs sm:tracking-[0.32em]">
                Handcrafted in India
              </p>
            </div>

            <h2 className="text-5xl font-medium leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              Light up
              <br />
              your{" "}
              <span className="font-serif italic text-[#d85c7a]">
                moments.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#765e56] sm:mt-7 sm:text-lg sm:leading-8">
              Beautiful handcrafted candles made to bring warmth,
              fragrance and a little magic into your everyday moments.
            </p>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[#8c6b5d] sm:leading-7">
              Thoughtfully created in India for your home, celebrations
              and the people you love.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#shop"
                className="rounded-full bg-[#d85c7a] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#d85c7a]/20 transition hover:-translate-y-1 hover:bg-[#bd4c69] sm:px-8 sm:py-4"
              >
                Shop Candles
              </a>

              <a
                href="#collections"
                className="rounded-full border border-[#2d1b2e] px-7 py-3.5 text-center text-sm font-semibold transition hover:bg-[#2d1b2e] hover:text-white sm:px-8 sm:py-4"
              >
                Explore Collection
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[#765e56] sm:mt-10 sm:gap-6 sm:text-xs">
              <span>✦ Handcrafted</span>
              <span>✦ Made in India</span>
              <span>✦ Perfect for gifting</span>
            </div>
          </div>

          {/* Hero image composition */}
          <div className="relative mx-auto mt-5 h-[430px] w-full max-w-[500px] sm:h-[520px] lg:mt-0 lg:h-[600px] lg:max-w-[560px]">
            <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2c5ad] sm:h-[410px] sm:w-[410px] lg:h-[480px] lg:w-[480px]" />

            <div className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e99db5] sm:h-[315px] sm:w-[315px] lg:h-[370px] lg:w-[370px]" />

            {/* Main image */}
            <div className="absolute left-1/2 top-1/2 z-10 h-[330px] w-[265px] -translate-x-1/2 -translate-y-1/2 rotate-2 overflow-hidden rounded-[28px] border-[7px] border-[#fff9f1] shadow-2xl sm:h-[410px] sm:w-[325px] sm:rounded-[32px] sm:border-[9px] lg:h-[460px] lg:w-[370px] lg:rounded-[35px] lg:border-[10px]">
              <Image
                src="/images/hero-candle.jpg"
                alt="Handcrafted decorative candle by Light & Fragrance"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 265px, (max-width: 1024px) 325px, 370px"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.25em]">
                  Light & Fragrance
                </p>

                <p className="mt-1 font-serif text-xl italic text-white sm:mt-2 sm:text-2xl">
                  Made with love
                </p>
              </div>
            </div>

            {/* Floating flower */}
            <div className="absolute bottom-3 left-0 z-20 h-24 w-24 -rotate-6 overflow-hidden rounded-full border-5 border-[#fff9f1] shadow-xl sm:bottom-6 sm:h-32 sm:w-32 sm:border-7 lg:bottom-10 lg:left-2 lg:h-36 lg:w-36 lg:border-8">
              <Image
                src="/images/orange-flower-candles.jpg"
                alt="Orange flower candle"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>

            {/* Floating sun candle */}
            <div className="absolute right-0 top-2 z-20 h-24 w-24 rotate-6 overflow-hidden rounded-full border-5 border-[#fff9f1] shadow-xl sm:top-7 sm:h-28 sm:w-28 sm:border-7 lg:top-10 lg:h-32 lg:w-32 lg:border-8">
              <Image
                src="/images/sun-moon-candles.jpg"
                alt="Sun and moon candles"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BRAND STRIP
      ====================================================== */}
      <section className="border-y border-[#eadbd0] bg-[#f8eee5]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#765e56] sm:gap-x-12 sm:px-6 sm:py-6 sm:text-xs sm:tracking-[0.2em] lg:px-8 lg:justify-between">
          <span>Handcrafted in India</span>
          <span className="hidden sm:block">✦</span>
          <span>Beautifully Scented</span>
          <span className="hidden sm:block">✦</span>
          <span>Made for Gifting</span>
          <span className="hidden sm:block">✦</span>
          <span>Made with Love</span>
        </div>
      </section>

      {/* =====================================================
          SHOP BY CATEGORY
      ====================================================== */}
      <section
        id="collections"
        className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d85c7a] sm:text-xs sm:tracking-[0.3em]">
              Explore Our World
            </p>

            <h2 className="mt-3 text-3xl font-medium sm:text-5xl">
              Candles for every occasion
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#765e56] sm:text-base">
              From little everyday joys to special celebrations,
              find a candle made for the moment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            <CategoryCard
              image="/images/hero-candle.jpg"
              title="Decorative"
              subtitle="Beautiful pieces for your home"
            />

            <CategoryCard
              image="/images/orange-flower-candles.jpg"
              title="Flower Candles"
              subtitle="Delicate blooms that brighten spaces"
            />

            <CategoryCard
              image="/images/sun-moon-candles.jpg"
              title="Statement Candles"
              subtitle="Unique shapes made to stand out"
            />

            <CategoryCard
              image="/images/baby-candle.jpg"
              title="Special Moments"
              subtitle="Candles made for celebrations"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BESTSELLERS
      ====================================================== */}
      <section
        id="shop"
        className="bg-[#fff9f1] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between sm:mb-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d85c7a] sm:text-xs sm:tracking-[0.3em]">
                Loved by many
              </p>

              <h2 className="mt-3 text-3xl font-medium sm:text-5xl">
                Our favourites
              </h2>
            </div>

            <a
              href="#"
              className="hidden text-sm font-semibold underline underline-offset-4 transition hover:text-[#d85c7a] sm:block"
            >
              View all candles →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-7 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                image={product.image}
                name={product.name}
                price={product.price}
                tag={product.tag}
              />
            ))}
          </div>

          <div className="mt-9 text-center sm:hidden">
            <a
              href="#"
              className="text-sm font-semibold underline underline-offset-4"
            >
              View all candles →
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY SECTION
      ====================================================== */}
      <section
        id="story"
        className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 sm:gap-14 lg:grid-cols-2">
          {/* Image collage */}
          <div className="relative mx-auto h-[400px] w-full max-w-[550px] sm:h-[500px] lg:h-[570px]">
            <div className="absolute left-0 top-0 h-[280px] w-[72%] overflow-hidden rounded-[25px] shadow-xl sm:h-[350px] sm:rounded-[30px] lg:h-[390px] lg:rounded-[35px]">
              <Image
                src="/images/flower-candles.jpg"
                alt="Handcrafted flower candles"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 50vw"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[220px] w-[58%] overflow-hidden rounded-[25px] border-[7px] border-white shadow-xl sm:h-[270px] sm:rounded-[30px] sm:border-[9px] lg:h-[310px] lg:rounded-[35px] lg:border-[10px]">
              <Image
                src="/images/baby-candle.jpg"
                alt="Handcrafted blue decorative candle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 40vw"
              />
            </div>

            <div className="absolute bottom-20 left-2 h-16 w-16 rounded-full bg-[#e7bd55] opacity-80 sm:bottom-24 sm:h-20 sm:w-20 lg:bottom-28 lg:h-24 lg:w-24" />
          </div>

          {/* Story */}
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d85c7a] sm:text-xs sm:tracking-[0.3em]">
              The Light & Fragrance story
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              Little lights.
              <br />
              <span className="font-serif italic text-[#d85c7a]">
                Beautiful memories.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-[#765e56] sm:mt-7 sm:text-lg sm:leading-8">
              We believe a candle is more than just a source of light.
              It can make a quiet evening feel special, turn a celebration
              into a memory and make a thoughtful gift even more meaningful.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#8c6b5d] sm:text-base">
              At Light & Fragrance, every candle is thoughtfully created
              with attention to shape, colour, fragrance and detail.
              Our designs are inspired by the simple beauty found around us
              and made especially for Indian homes and celebrations.
            </p>

            <a
              href="#"
              className="mt-7 inline-flex rounded-full border border-[#2d1b2e] px-6 py-3 text-sm font-semibold transition hover:bg-[#2d1b2e] hover:text-white sm:mt-8 sm:px-7 sm:py-3.5"
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          GIFTING
      ====================================================== */}
      <section
        id="gifting"
        className="relative overflow-hidden bg-[#f3dfd0] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/30" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#d85c7a]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d85c7a] sm:text-xs sm:tracking-[0.3em]">
              Thoughtful gifting
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              Give them
              <br />
              a little{" "}
              <span className="font-serif italic text-[#d85c7a]">
                light.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#765e56] sm:mt-6 sm:text-lg sm:leading-8">
              From birthdays and anniversaries to weddings, festivals
              and those “just because” moments — candles make beautiful,
              thoughtful gifts.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#shop"
                className="rounded-full bg-[#2d1b2e] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#4a304a] sm:px-8 sm:py-4"
              >
                Shop Gifts
              </a>

              <a
                href="#"
                className="rounded-full border border-[#2d1b2e] px-7 py-3.5 text-center text-sm font-semibold transition hover:bg-white sm:px-8 sm:py-4"
              >
                Gift Collections
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-[350px] w-full max-w-[500px] sm:h-[430px]">
            <div className="absolute left-0 top-5 h-[260px] w-[260px] rotate-[-5deg] overflow-hidden rounded-[28px] shadow-xl sm:top-10 sm:h-[330px] sm:w-[330px] sm:rounded-[35px]">
              <Image
                src="/images/sun-moon-candles.jpg"
                alt="Sun and moon handcrafted candles"
                fill
                className="object-cover"
                sizes="330px"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[190px] w-[190px] rotate-[6deg] overflow-hidden rounded-[25px] border-6 border-[#f3dfd0] shadow-xl sm:h-[250px] sm:w-[250px] sm:rounded-[35px] sm:border-8">
              <Image
                src="/images/orange-flower-candles.jpg"
                alt="Orange flower candles"
                fill
                className="object-cover"
                sizes="250px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY US
      ====================================================== */}
      <section className="bg-[#2d1b2e] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f3c4ad] sm:text-xs sm:tracking-[0.3em]">
              Why Light & Fragrance
            </p>

            <h2 className="mt-3 text-3xl font-medium sm:text-4xl">
              Made for beautiful moments
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Feature
              icon="✦"
              title="Handcrafted"
              text="Every candle is carefully made with attention to detail."
            />

            <Feature
              icon="♡"
              title="Made in India"
              text="Proudly created with love and inspired by Indian homes."
            />

            <Feature
              icon="✧"
              title="Beautiful Designs"
              text="Unique shapes and colours made to look beautiful anywhere."
            />

            <Feature
              icon="🎁"
              title="Perfect Gifts"
              text="Thoughtful candles for birthdays, festivals and celebrations."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}
      <section className="bg-[#fff9f1] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d85c7a] sm:text-xs sm:tracking-[0.3em]">
            Stay in the glow
          </p>

          <h2 className="mt-4 text-3xl font-medium sm:text-5xl">
            A little light in your inbox
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#765e56] sm:text-base">
            Be the first to know about new candles, special collections,
            gifting ideas and festive launches.
          </p>

          <form className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:mt-8 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="h-14 min-w-0 flex-1 rounded-full border border-[#dfcec0] bg-white px-5 text-sm outline-none transition placeholder:text-[#aa9589] focus:border-[#d85c7a] sm:px-6"
            />

            <button
              type="submit"
              className="h-14 rounded-full bg-[#d85c7a] px-8 text-sm font-semibold text-white transition hover:bg-[#bd4c69]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="border-t border-[#eadbd0] bg-white px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold">
              Light <span className="text-[#d85c7a]">&</span> Fragrance
            </h3>

            <p className="mt-1 text-[9px] tracking-[0.25em] text-[#8c6b5d]">
              HANDCRAFTED CANDLES
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#765e56]">
              Beautiful handcrafted candles made in India for
              homes, celebrations and thoughtful gifting.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold">Shop</h4>

            <div className="mt-5 space-y-3 text-sm text-[#765e56]">
              <a href="#" className="block hover:text-[#d85c7a]">
                All Candles
              </a>

              <a href="#" className="block hover:text-[#d85c7a]">
                Decorative Candles
              </a>

              <a href="#" className="block hover:text-[#d85c7a]">
                Flower Candles
              </a>

              <a href="#" className="block hover:text-[#d85c7a]">
                Gift Candles
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold">Information</h4>

            <div className="mt-5 space-y-3 text-sm text-[#765e56]">
              <a href="#story" className="block hover:text-[#d85c7a]">
                Our Story
              </a>

              <a href="#" className="block hover:text-[#d85c7a]">
                Contact Us
              </a>

              <a href="#" className="block hover:text-[#d85c7a]">
                Shipping & Delivery
              </a>

              <a href="#" className="block hover:text-[#d85c7a]">
                Returns
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold">Follow us</h4>

            <div className="mt-5 flex gap-3">
              <SocialButton label="Instagram" icon="◎" />
              <SocialButton label="Facebook" icon="f" />
              <SocialButton label="Pinterest" icon="p" />
            </div>

            <p className="mt-5 text-sm text-[#765e56]">
              Follow our candle journey ✨
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-[#eadbd0] pt-7 text-xs text-[#8c6b5d] sm:mt-12 sm:flex-row">
          <p>© 2026 Light & Fragrance. All rights reserved.</p>

          <p>Handcrafted with ♥ in India</p>
        </div>
      </footer>
    </main>
  );
}

/* ============================================================
   CATEGORY CARD
============================================================ */

function CategoryCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <a
      href="#shop"
      className="group relative h-[300px] overflow-hidden rounded-[25px] sm:h-[330px] sm:rounded-[30px]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
        <h3 className="text-xl font-semibold sm:text-2xl">
          {title}
        </h3>

        <p className="mt-1 text-xs text-white/85 sm:text-sm">
          {subtitle}
        </p>

        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] opacity-100 sm:mt-4 sm:text-xs sm:opacity-0 sm:transition sm:duration-300 sm:group-hover:opacity-100">
          Shop now →
        </p>
      </div>
    </a>
  );
}

/* ============================================================
   PRODUCT CARD
============================================================ */

function ProductCard({
  image,
  name,
  price,
  tag,
}: {
  image: string;
  name: string;
  price: string;
  tag: string;
}) {
  return (
    <div className="group min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#f3e9df] sm:rounded-[28px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Tag */}
        <div className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-wider text-[#2d1b2e] backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px]">
          {tag}
        </div>

        {/* Wishlist */}
        <button
          aria-label={`Add ${name} to wishlist`}
          className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-base shadow-sm transition hover:bg-[#d85c7a] hover:text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10 sm:text-lg"
        >
          ♡
        </button>

        {/* Add button */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
          <button className="w-full rounded-full bg-white py-2.5 text-[11px] font-semibold shadow-lg transition hover:bg-[#d85c7a] hover:text-white sm:py-3 sm:text-sm">
            Add to cart
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2 sm:mt-4 sm:gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold sm:text-base">
            {name}
          </h3>

          <p className="mt-1 text-[10px] text-[#8c6b5d] sm:text-xs">
            Handcrafted candle
          </p>
        </div>

        <p className="whitespace-nowrap text-sm font-semibold sm:text-base">
          {price}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   FEATURE
============================================================ */

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-2xl">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/60">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   SOCIAL BUTTON
============================================================ */

function SocialButton({
  label,
  icon,
}: {
  label: string;
  icon: string;
}) {
  return (
    <button
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfcec0] text-sm font-semibold transition hover:border-[#d85c7a] hover:bg-[#d85c7a] hover:text-white"
    >
      {icon}
    </button>
  );
}
