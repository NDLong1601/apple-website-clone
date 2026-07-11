import Image from "next/image";
import Link from "next/link";

import { AppleLogoIcon, Menu, Search, ShoppingBag } from "@/components/icons";

const navItems = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

const productFamilies = [
  ["Mac", "/images/apple-store/nav-mac.png"],
  ["iPhone", "/images/apple-store/nav-iphone.png"],
  ["iPad", "/images/apple-store/nav-ipad.png"],
  ["Apple Watch", "/images/apple-store/nav-watch.png"],
  ["Apple Vision Pro", "/images/apple-store/nav-vision.png"],
  ["AirPods", "/images/apple-store/nav-airpods.png"],
  ["AirTag", "/images/apple-store/nav-airtag.png"],
  ["Apple TV 4K", "/images/apple-store/nav-tv.png"],
  ["HomePod", "/images/apple-store/nav-homepod.png"],
  ["Accessories", "/images/apple-store/nav-iphone.png"],
  ["Apple Gift Card", "/images/apple-store/nav-gift-card.png"],
];

type CardTone = "light" | "dark";

type FeatureCard = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  price?: string;
  image?: string;
  tone?: CardTone;
  wide?: boolean;
};

const latestCards: FeatureCard[] = [
  {
    eyebrow: "iPhone 17 Pro",
    title: "All out Pro.",
    subtitle: "From $1099 or $45.79/mo. for 24 mo.",
    image: "/images/apple-store/latest-iphone-17-pro.jpg",
    tone: "dark",
  },
  {
    eyebrow: "New",
    title: "MacBook Neo",
    subtitle: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo. for 12 mo.",
    image: "/images/apple-store/latest-macbook-neo.jpg",
  },
  {
    eyebrow: "iPhone 17",
    title: "Your new iPhone.",
    subtitle: "From $799 or $33.29/mo. for 24 mo.",
    image: "/images/apple-store/latest-iphone-17.jpg",
  },
  {
    eyebrow: "Apple Watch Series 11",
    title: "The ultimate way to watch your health.",
    subtitle: "From $399 or $33.25/mo. for 12 mo.",
    image: "/images/apple-store/nav-watch.png",
  },
];

const helpCards: FeatureCard[] = [
  {
    eyebrow: "Apple Specialist",
    title: "Shop one on one with a Specialist.",
    subtitle: "Online or in a store.",
    image: "/images/apple-store/help-specialist.jpg",
    wide: true,
  },
  {
    title: "Shop with a Specialist over video.",
    subtitle: "Choose your next device in a guided, one-way video session.",
    image: "/images/apple-store/help-video.jpg",
  },
  {
    eyebrow: "Today at Apple",
    title: "Explore Apple Intelligence.",
    subtitle: "Come try it for yourself in a free session at the Apple Store.",
    image: "/images/apple-store/store-card-50-taa-ai-202604-9139c3bc.jpg",
  },
  {
    eyebrow: "Today at Apple",
    title: "Join free sessions at your Apple Store.",
    subtitle: "Learn about the latest features and how to go further.",
  },
  {
    eyebrow: "Personal Setup",
    title: "Set up your new device with help from a Specialist.",
  },
];

const differenceCards = [
  ["Trade in your current device.", "Get credit toward a new one.", "text-[#007aff]"],
  ["Pay in full or pay over time.", "Your choice.", "text-[#68cc45]"],
  ["Make them yours.", "Engrave a mix of emoji, names, and numbers for free.", "text-[#ac39ff]"],
  ["Enjoy two-hour delivery.", "Or free delivery and easy pickup.", "text-[#00a86b]"],
  ["Get a personalized shopping experience.", "In the Apple Store app.", "text-[#007aff]"],
];

const accessories: FeatureCard[] = [
  {
    title: "Here and wow.",
    subtitle: "The accessories you love. In a fresh mix of colors.",
    image: "/images/apple-store/nav-accessories.png",
    wide: true,
  },
  {
    eyebrow: "New",
    title: "iPhone 17 Pro Silicone Case with MagSafe - Bright Guava",
    price: "$49.00",
    image: "/images/apple-store/MHW04_SW_COLOR-b998815c.png",
  },
  {
    eyebrow: "New",
    title: "Crossbody Strap - Bright Guava",
    price: "$59.00",
    image: "/images/apple-store/MGFH4_SW_COLOR-77d40cde.png",
  },
  {
    title: "MagSafe Charger (1 m)",
    price: "$39.00",
    image: "/images/apple-store/MHVX4_SW_COLOR-86574e6e.png",
  },
  {
    eyebrow: "New",
    title: "iPhone 17e Clear Case with MagSafe",
    price: "$49.00",
    image: "/images/apple-store/MGFG4_SW_COLOR-7578f975.png",
  },
];

const audio: FeatureCard[] = [
  {
    title: "Get 3 months of Apple Music free.",
    subtitle: "Included with the purchase of select Apple devices.",
    image: "/images/apple-store/store-card-40-airpods-max-202409_GEO_US-71ba9ac0.jpg",
    wide: true,
  },
  {
    eyebrow: "Free Engraving",
    title: "AirPods Max 2 - Midnight",
    price: "$549.00",
    image: "/images/apple-store/airpods-max-select-202409-midnight_SW_COLOR-f3f58c03.png",
  },
  {
    eyebrow: "Free Engraving",
    title: "AirPods Pro 3",
    price: "$249.00",
    image: "/images/apple-store/nav-airpods.png",
  },
  {
    eyebrow: "Free Engraving",
    title: "AirPods 4 with Active Noise Cancellation",
    price: "$179.00",
    image: "/images/apple-store/nav-airpods.png",
  },
  {
    title: "HomePod mini",
    price: "$99.00",
    image: "/images/apple-store/homepod-mini-select-blue-202110_SW_COLOR-29f5cd04.png",
  },
];

const experience: FeatureCard[] = [
  {
    title: "Apple Intelligence.",
    subtitle: "Create, communicate, and get things done effortlessly.",
    image: "/images/apple-store/store-card-50-taa-ai-202604-9139c3bc.jpg",
    wide: true,
  },
  {
    eyebrow: "Today at Apple",
    title: "Join the fun at Apple Camp.",
    subtitle: "Create a helpful superhero in a free session on iPad.",
    image: "/images/apple-store/help-video.jpg",
  },
  {
    eyebrow: "Continuity",
    title: "Powerful alone. Superpowered together.",
  },
  {
    eyebrow: "AppleCare",
    title: "Handled with AppleCare.",
  },
  {
    eyebrow: "Apple Store App",
    title: "Put your bow on it.",
  },
];

const savings: FeatureCard[] = [
  {
    eyebrow: "Carrier deals at Apple",
    title: "Get up to $800-$1100 in credit on a new iPhone after trade-in.",
    image: "/images/apple-store/latest-iphone-17.jpg",
    wide: true,
  },
  {
    eyebrow: "Education",
    title: "Save on a new Mac, iPad, and Apple Watch with education pricing.",
    image: "/images/apple-store/latest-macbook-neo.jpg",
  },
  {
    eyebrow: "Certified Refurbished",
    title: "Shop refurbished Apple products backed by a one-year warranty.",
    image: "/images/apple-store/nav-mac.png",
  },
  {
    eyebrow: "Small Business",
    title: "Shop products and services for your business.",
  },
];

function StoreNavigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[9999] h-11 bg-white/80 text-[#1d1d1f] backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between px-4">
        <Link href="/" className="flex h-full items-center text-black/80">
          <AppleLogoIcon className="size-[17px]" />
          <span className="sr-only">Apple</span>
        </Link>
        <div className="hidden h-full flex-1 items-center justify-around px-7 sm:flex">
          {navItems.map((item) => (
            <Link className="flex h-full items-center whitespace-nowrap text-[12px] text-black/80 hover:text-black" href="#" key={item}>
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6 text-black/80">
          <Search className="size-[17px]" />
          <ShoppingBag className="size-[17px]" />
          <Menu className="size-[18px] sm:hidden" />
        </div>
      </div>
    </nav>
  );
}

function StoreIntro() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 pt-[118px] sm:flex-row sm:items-start sm:justify-between sm:px-8 lg:px-0">
      <h1 className="max-w-[720px] font-[family-name:var(--font-apple-display)] text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#6e6e73] sm:text-[48px]">
        <span className="text-[#1d1d1f]">Store.</span> The best way to buy the products you love.
      </h1>
      <div className="grid gap-4 text-[14px] leading-[18px]">
        <div className="flex gap-3">
          <div className="grid size-9 place-items-center rounded-full bg-white text-[18px]">💬</div>
          <p>
            <span className="block font-semibold text-[#1d1d1f]">Need shopping help?</span>
            <a className="text-[#0066cc]" href="#">Ask a Specialist</a>
          </p>
        </div>
        <div className="flex gap-3">
          <div className="grid size-9 place-items-center rounded-full bg-white text-[18px]">📍</div>
          <p>
            <span className="block font-semibold text-[#1d1d1f]">Visit an Apple Store</span>
            <a className="text-[#0066cc]" href="#">Find one near you</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductFamilyRail() {
  return (
    <section className="mx-auto mt-12 max-w-[1200px] overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 lg:px-0 [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max gap-7">
        {productFamilies.map(([label, image]) => (
          <a className="grid w-[92px] justify-items-center gap-3 text-center text-[14px] font-semibold text-[#1d1d1f]" href="#" key={label}>
            <Image src={image} alt="" width={120} height={78} className="object-contain" unoptimized />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ title, muted }: { title: string; muted: string }) {
  return (
    <h2 className="mb-4 px-5 font-[family-name:var(--font-apple-display)] text-[24px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#6e6e73] sm:px-8 sm:text-[28px] lg:px-0">
      <span className="text-[#1d1d1f]">{title}</span> {muted}
    </h2>
  );
}

function StoreCard({ card, compact = false }: { card: FeatureCard; compact?: boolean }) {
  const dark = card.tone === "dark";
  return (
    <article
      className={`group relative shrink-0 overflow-hidden rounded-[18px] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_26px_rgba(0,0,0,0.12)] ${
        card.wide ? "h-[500px] w-[480px] max-sm:w-[310px]" : compact ? "h-[250px] w-[313px]" : "h-[500px] w-[400px] max-sm:w-[310px]"
      } ${dark ? "bg-black text-white" : "text-[#1d1d1f]"}`}
    >
      {card.image ? (
        <Image
          src={card.image}
          alt=""
          fill
          sizes={card.wide ? "480px" : "400px"}
          className={`${compact ? "object-contain p-10" : "object-cover"} ${card.image.includes("_SW_COLOR") ? "object-contain p-20" : ""}`}
          loading="eager"
          unoptimized={card.image.endsWith(".png")}
        />
      ) : null}
      <div className={`absolute inset-x-0 top-0 z-10 p-7 ${dark ? "text-white" : "text-[#1d1d1f]"}`}>
        {card.eyebrow ? (
          <p className={`mb-2 text-[12px] font-semibold uppercase tracking-[0.01em] ${dark ? "text-white/70" : "text-[#6e6e73]"}`}>{card.eyebrow}</p>
        ) : null}
        <h3 className={`${compact ? "text-[22px]" : "text-[28px]"} max-w-[330px] font-semibold leading-[1.12] tracking-[-0.01em]`}>{card.title}</h3>
        {card.subtitle ? <p className="mt-2 max-w-[310px] text-[17px] leading-[1.25]">{card.subtitle}</p> : null}
        {card.price ? <p className="mt-3 text-[14px] leading-5">{card.price}</p> : null}
      </div>
    </article>
  );
}

function StoreRail({
  title,
  muted,
  cards,
  compact = false,
}: {
  title: string;
  muted: string;
  cards: FeatureCard[];
  compact?: boolean;
}) {
  return (
    <section className="mx-auto mt-10 max-w-[1200px]">
      <SectionTitle title={title} muted={muted} />
      <div className="overflow-x-auto px-5 pb-5 [scrollbar-width:none] sm:px-8 lg:px-0 [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-5">
          {cards.map((card) => (
            <StoreCard card={card} compact={compact} key={`${title}-${card.title}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferenceRail() {
  return (
    <section className="mx-auto mt-10 max-w-[1200px]">
      <SectionTitle title="The Apple Store difference." muted="Even more reasons to shop with us." />
      <div className="overflow-x-auto px-5 pb-5 [scrollbar-width:none] sm:px-8 lg:px-0 [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-5">
          {differenceCards.map(([title, body, color]) => (
            <article className="h-[240px] w-[313px] shrink-0 rounded-[18px] bg-white p-7 shadow-[0_4px_18px_rgba(0,0,0,0.08)]" key={title}>
              <div className={`mb-5 text-[30px] ${color}`}>●</div>
              <h3 className={`text-[24px] font-semibold leading-[1.12] tracking-[-0.01em] ${color}`}>{title}</h3>
              <p className="mt-1 text-[24px] font-semibold leading-[1.12] tracking-[-0.01em] text-[#1d1d1f]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 lg:px-0">
      <h2 className="mb-4 text-[24px] font-semibold text-[#1d1d1f]">Quick Links</h2>
      <div className="flex flex-wrap gap-3">
        {["Find a Store", "Order Status", "Shopping Help", "Returns", "Your Saves"].map((link) => (
          <a className="rounded-full border border-[#d2d2d7] px-4 py-2 text-[14px] text-[#1d1d1f] hover:bg-white" href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
    </section>
  );
}

function StoreFooter() {
  const columns = [
    ["Shop and Learn", "Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "Accessories"],
    ["Account", "Manage Your Apple Account", "Apple Store Account", "iCloud.com", "Entertainment", "Apple One", "Apple TV+", "Apple Music"],
    ["Apple Store", "Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Trade In", "Financing", "Order Status"],
    ["For Business", "Apple and Business", "Shop for Business", "For Education", "Apple and Education", "Shop for College"],
    ["Apple Values", "Accessibility", "Environment", "Privacy", "Supply Chain Innovation", "About Apple", "Newsroom", "Careers"],
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[12px] leading-4 text-black/60">
      <div className="mx-auto max-w-[980px] px-5 pb-6 pt-4">
        <div className="space-y-3 border-b border-black/15 pb-4">
          <p>§ Financing available to qualified customers, subject to credit approval and credit limit. Taxes and shipping are not included in monthly pricing.</p>
          <p>† Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit.</p>
          <p>Apple Intelligence is available in beta on select devices, with Siri and device language set to the same supported language.</p>
        </div>
        <div className="hidden grid-cols-5 gap-7 py-5 sm:grid">
          {columns.map((column) => (
            <div key={column[0]}>
              <h3 className="mb-3 font-semibold text-black/80">{column[0]}</h3>
              <ul className="space-y-2">
                {column.slice(1).map((item) => (
                  <li key={item}><a href="#" className="hover:underline">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="divide-y divide-black/15 py-2 sm:hidden">
          {columns.map((column) => (
            <a className="flex h-9 items-center justify-between text-black/80" href="#" key={column[0]}>
              {column[0]} <span>+</span>
            </a>
          ))}
        </div>
        <p className="border-t border-black/15 pt-4">
          More ways to shop: <a className="text-[#0066cc] underline" href="#">Find an Apple Store</a> or <a className="text-[#0066cc] underline" href="#">other retailer</a> near you.
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
          <p className="sm:ml-auto">United States</p>
        </div>
      </div>
    </footer>
  );
}

export function AppleStorePage() {
  return (
    <>
      <StoreNavigation />
      <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
        <div className="fixed inset-x-0 top-11 z-[9998] bg-white/90 py-3 text-center text-[12px] text-[#1d1d1f] backdrop-blur-xl">
          Pay over time. Shop now and choose monthly payments with Apple Card Monthly Installments. <a className="text-[#0066cc]" href="#">Learn more</a>
        </div>
        <StoreIntro />
        <ProductFamilyRail />
        <StoreRail title="The latest." muted="Take a look at what's new, right now." cards={latestCards} />
        <StoreRail title="Help is here." muted="Whenever and however you need it." cards={helpCards} />
        <DifferenceRail />
        <StoreRail title="Accessories." muted="Essentials that pair perfectly with your favorite devices." cards={accessories} />
        <StoreRail title="Loud and clear." muted="Unparalleled choices for rich, high-quality sound." cards={audio} />
        <StoreRail title="The Apple experience." muted="Do even more with Apple products and services." cards={experience} />
        <StoreRail title="Savings and offers." muted="Exclusive deals, special stores and more." cards={savings} />
        <QuickLinks />
      </main>
      <StoreFooter />
    </>
  );
}
