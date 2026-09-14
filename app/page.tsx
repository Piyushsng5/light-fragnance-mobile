import Image from "next/image";

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
  return (
    <main className="min-h-screen bg-[#fff9f1] text-[#2d1b2e]">

      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="sticky top-0 z-50 border-b border-[#eadbd0] bg-[#fff9f1]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <a href="#" className="group">
            <h1 className="text-xl font-semibold tracking-wide sm:text-2xl">
              Light{" "}
              <span className="text-[#d85c7a]">&</span>{" "}
              Fragrance
            </h1>

            <p className="mt-0.5 text-[9px] tracking-[0.28em] text-[#8c6b5d] sm:text-[10px]">
              HANDCRAFTED CANDLES
            </p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a
              href="#"
              className="transition hover:text-[#d85c7a]"
            >
              Home
            </a>

            <a
              href="#shop"
              className="transition hover:text-[#d85c7a]"
            >
              Shop
            </a>

            <a
              href="#collections"
              className="transition hover:text-[#d85c7a]"
            >
              Collections
            </a>

            <a
              href="#gifting"
              className="transition hover:text-[#d85c7a]"
            >
              Gifting
            </a>

            <a
              href="#story"
              className="transition hover:text-[#d85c7a]"
            >
              Our Story
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">

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

            {/* Mobile menu */}
            <button
              aria-label="Menu"
              className="ml-1 text-2xl lg:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </header>


      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">

        {/* Decorative circles */}
        <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#f3c4ad]/40" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#e6a5b7]/30" />

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">

          {/* Hero content */}
          <div className="relative z-10 max-w-xl">

            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-[#d85c7a]" />

              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d85c7a]">
                Handcrafted in India
              </p>
            </div>

            <h2 className="text-6xl font-medium leading-[1.02] tracking-tight sm:text-7xl">
              Light up
              <br />
              your{" "}
              <span className="font-serif italic text-[#d85c7a]">
                moments.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#765e56] sm:text-lg">
              Beautiful handcrafted candles made to bring warmth,
              fragrance and a little magic into your everyday moments.
            </p>

            <p className="mt-3 max-w-lg text-sm leading-7 text-[#8c6b5d]">
              Thoughtfully created in India for your home, celebrations
              and the people you love.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#shop"
                className="rounded-full bg-[#d85c7a] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#d85c7a]/20 transition hover:-translate-y-1 hover:bg-[#bd4c69]"
              >
                Shop Candles
              </a>

              <a
                href="#collections"
                className="rounded-full border border-[#2d1b2e] px-8 py-4 text-sm font-semibold transition hover:bg-[#2d1b2e] hover:text-white"
              >
                Explore Collection
              </a>
            </div>

            {/* Small trust points */}
            <div className="mt-10 flex flex-wrap gap-6 text-xs text-[#765e56]">
              <span>✦ Handcrafted</span>
              <span>✦ Made in India</span>
              <span>✦ Perfect for gifting</span>
            </div>
          </div>


          {/* Hero image composition */}
          <div className="relative mx-auto h-[600px] w-full max-w-[560px]">

            {/* Background blob */}
            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2c5ad]" />

            <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e99db5]" />

            {/* Main image */}
            <div className="absolute left-1/2 top-1/2 z-10 h-[460px] w-[370px] -translate-x-1/2 -translate-y-1/2 rotate-2 overflow-hidden rounded-[35px] border-[10px] border-[#fff9f1] shadow-2xl">

              <Image
                src="/images/hero-candle.jpeg"
                alt="Handcrafted decorative candle by Light & Fragrance"
                fill
                priority
                className="object-cover"
                sizes="370px"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-7 pt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  Light & Fragrance
                </p>

                <p className="mt-2 font-serif text-2xl italic text-white">
                  Made with love
                </p>
              </div>
            </div>


            {/* Floating flower */}
            <div className="absolute bottom-10 left-2 z-20 h-36 w-36 -rotate-6 overflow-hidden rounded-full border-8 border-[#fff9f1] shadow-xl">
              <Image
                src="/images/orange-flower-candles.jpeg"
                alt="Orange flower candle"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>


            {/* Floating sun candle */}
            <div className="absolute right-0 top-10 z-20 h-32 w-32 rotate-6 overflow-hidden rounded-full border-8 border-[#fff9f1] shadow-xl">
              <Image
                src="/images/sun-moon-candles.jpeg"
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
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#765e56] sm:justify-between lg:px-8">
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
        className="bg-white px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d85c7a]">
              Explore Our World
            </p>

            <h2 className="mt-3 text-4xl font-medium sm:text-5xl">
              Candles for every occasion
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[#765e56]">
              From little everyday joys to special celebrations,
              find a candle made for the moment.
            </p>
          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

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
        className="bg-[#fff9f1] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex items-end justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d85c7a]">
                Loved by many
              </p>

              <h2 className="mt-3 text-4xl font-medium sm:text-5xl">
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


          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

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


          <div className="mt-10 text-center sm:hidden">
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
        className="bg-white px-6 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Image collage */}
          <div className="relative h-[570px]">

            <div className="absolute left-0 top-0 h-[390px] w-[70%] overflow-hidden rounded-[35px] shadow-xl">
              <Image
                src="/images/flower-candles.jpeg"
                alt="Handcrafted flower candles"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[310px] w-[58%] overflow-hidden rounded-[35px] border-[10px] border-white shadow-xl">
              <Image
                src="/images/baby-candle.jpeg"
                alt="Handcrafted blue decorative candle"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>

            {/* Small decorative circle */}
            <div className="absolute bottom-28 left-4 h-24 w-24 rounded-full bg-[#e7bd55] opacity-80" />
          </div>


          {/* Story */}
          <div className="max-w-xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d85c7a]">
              The Light & Fragrance story
            </p>

            <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
              Little lights.
              <br />
              <span className="font-serif italic text-[#d85c7a]">
                Beautiful memories.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#765e56]">
              We believe a candle is more than just a source of light.
              It can make a quiet evening feel special, turn a celebration
              into a memory and make a thoughtful gift even more meaningful.
            </p>

            <p className="mt-5 leading-7 text-[#8c6b5d]">
              At Light & Fragrance, every candle is thoughtfully created
              with attention to shape, colour, fragrance and detail.
              Our designs are inspired by the simple beauty found around us
              and made especially for Indian homes and celebrations.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex rounded-full border border-[#2d1b2e] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#2d1b2e] hover:text-white"
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
        className="relative overflow-hidden bg-[#f3dfd0] px-6 py-24 lg:px-8"
      >

        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/30" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#d85c7a]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d85c7a]">
              Thoughtful gifting
            </p>

            <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
              Give them
              <br />
              a little{" "}
              <span className="font-serif italic text-[#d85c7a]">
                light.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#765e56]">
              From birthdays and anniversaries to weddings, festivals
              and those “just because” moments — candles make beautiful,
              thoughtful gifts.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="rounded-full bg-[#2d1b2e] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#4a304a]"
              >
                Shop Gifts
              </a>

              <a
                href="#"
                className="rounded-full border border-[#2d1b2e] px-8 py-4 text-sm font-semibold transition hover:bg-white"
              >
                Gift Collections
              </a>
            </div>
          </div>


          <div className="relative mx-auto h-[430px] w-full max-w-[500px]">

            <div className="absolute left-0 top-10 h-[330px] w-[330px] rotate-[-5deg] overflow-hidden rounded-[35px] shadow-xl">
              <Image
                src="/images/sun-moon-candles.jpeg"
                alt="Sun and moon handcrafted candles"
                fill
                className="object-cover"
                sizes="330px"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rotate-[6deg] overflow-hidden rounded-[35px] border-8 border-[#f3dfd0] shadow-xl">
              <Image
                src="/images/orange-flower-candles.jpeg"
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
      <section className="bg-[#2d1b2e] px-6 py-20 text-white lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3c4ad]">
              Why Light & Fragrance
            </p>

            <h2 className="mt-3 text-4xl font-medium">
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
      <section className="bg-[#fff9f1] px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d85c7a]">
            Stay in the glow
          </p>

          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">
            A little light in your inbox
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#765e56]">
            Be the first to know about new candles, special collections,
            gifting ideas and festive launches.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="h-14 flex-1 rounded-full border border-[#dfcec0] bg-white px-6 text-sm outline-none transition placeholder:text-[#aa9589] focus:border-[#d85c7a]"
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
      <footer className="border-t border-[#eadbd0] bg-white px-6 py-14 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold">
              Light{" "}
              <span className="text-[#d85c7a]">&</span>{" "}
              Fragrance
            </h3>

            <p className="mt-1 text-[10px] tracking-[0.25em] text-[#8c6b5d]">
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


        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-[#eadbd0] pt-7 text-xs text-[#8c6b5d] sm:flex-row">
          <p>© 2026 Light & Fragrance. All rights reserved.</p>

          <p>
            Handcrafted with ♥ in India
          </p>
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
      className="group relative h-[330px] overflow-hidden rounded-[30px]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 25vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-white/85">
          {subtitle}
        </p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] opacity-0 transition duration-300 group-hover:opacity-100">
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
    <div className="group">

      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#f3e9df]">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Tag */}
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#2d1b2e] backdrop-blur">
          {tag}
        </div>

        {/* Wishlist */}
        <button
          aria-label={`Add ${name} to wishlist`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg shadow-sm transition hover:bg-[#d85c7a] hover:text-white"
        >
          ♡
        </button>

        {/* Add button */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="w-full rounded-full bg-white py-3 text-sm font-semibold shadow-lg transition hover:bg-[#d85c7a] hover:text-white">
            Add to cart
          </button>
        </div>

      </div>


      <div className="mt-4 flex items-start justify-between gap-3">

        <div>
          <h3 className="font-semibold">
            {name}
          </h3>

          <p className="mt-1 text-xs text-[#8c6b5d]">
            Handcrafted candle
          </p>
        </div>

        <p className="whitespace-nowrap font-semibold">
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