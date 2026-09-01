import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  Globe,
  UserPlus,
  MapPin,
  Share2,
  BadgeCheck,
  Clock,
  Download,
  Activity,
  Hand,
  ClipboardList,
  Dumbbell,
  ShieldPlus,
  Bandage,
  CircleDot,
  Syringe,
  Wrench,
  Calendar,
  CalendarCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spine-X Chiropractic Clinic | Dr. Chandresh Zinzala, Vadodara" },
      {
        name: "description",
        content:
          "Digital card of Spine-X Chiropractic Clinic, Vadodara. Dr. Chandresh Zinzala, Chiropractor & Osteopath. Call, WhatsApp, directions and appointments.",
      },
      { property: "og:title", content: "Spine-X Chiropractic Clinic | Dr. Chandresh Zinzala" },
      {
        property: "og:description",
        content:
          "Chiropractic, physiotherapy and pain management in Akota, Vadodara. Tap to call, WhatsApp or book an appointment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "9099244119";
const TEL = "+919099244119";
const WEBSITE = "https://spinexchiropractic.in";
const ADDRESS_LINES = [
  "Tower - B, FF-01, Pratham Plaza",
  "Near Nayara Petrol Pump",
  "MujMahuda Road, Akota",
  "Vadodara, Gujarat - 390020",
];
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Spine-X+Chiropractic+Clinic+Pratham+Plaza+MujMahuda+Road+Akota+Vadodara+390020";
const LOGO_SRC = "/images/logo.png";
const DOCTOR_PHOTO_SRC = "/images/image.png";

const CONDITIONS = [
  { name: "Back Pain", note: "Lumbar pain from muscle, tendon or disc injury." },
  { name: "Neck Pain", note: "Cervical discomfort from posture, strain or nerve compression." },
  { name: "Sciatica", note: "Pain radiating along the sciatic nerve into the leg." },
  { name: "Cervical / Lumbar Disc Bulge", note: "Relieves nerve pressure and restores spinal function." },
  { name: "Cervical Spondylosis", note: "Age-related degeneration of neck discs and joints." },
  { name: "Rotator Cuff / Shoulder Pain", note: "Pain and weakness in overhead shoulder movement." },
  { name: "Frozen Shoulder", note: "Adhesive capsulitis with pain and limited motion." },
  { name: "Posture Correction", note: "Improve alignment and reduce everyday strain." },
  { name: "Sports Injury", note: "Recovery for ligament tears and muscle strains." },
  { name: "Body Alignment", note: "Aligning spine, shoulders, hips and knees." },
];

const THERAPIES = [
  { name: "Chiropractic", icon: Hand },
  { name: "Musculoskeletal Assessment & Treatment", icon: Activity },
  { name: "Customized Treatment Plans", icon: ClipboardList },
  { name: "Physiotherapy", icon: Dumbbell },
  { name: "Pain Management", icon: ShieldPlus },
  { name: "Taping", icon: Bandage },
  { name: "Cupping Therapy", icon: CircleDot },
  { name: "Needling Therapy", icon: Syringe },
  { name: "IASTM (MFR)", icon: Wrench },
];

const GALLERY = [
  { src: "/images/p-10.jpg", alt: "Chiropractic treatment session at Spine-X Chiropractic clinic" },
  { src: "/images/p-11.jpg", alt: "Patient receiving spinal adjustment therapy at Spine-X Chiropractic" },
  { src: "/images/p-12.jpg", alt: "Physiotherapy treatment in progress at Spine-X Chiropractic clinic" },
];

const QUALIFICATIONS = [
  "Chiropractor & Osteopath",
  "COMT(UK) Certified",
  "Physiotherapy (PT)",
  "Registration No: GSCPT/10124",
];

const TRUST = [
  "Qualified Chiropractor & Osteopath",
  "COMT(UK) Certified",
  "Physiotherapy Background",
  "Personalized Treatment Plans",
  "Natural, Non-Surgical Care",
];

const TIME_SLOTS = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM",
  "06:00 PM - 07:00 PM",
  "07:00 PM - 08:00 PM",
];

const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Zinzala;Chandresh;;Dr.;",
  "FN:Dr. Chandresh Zinzala",
  "ORG:Spine-X Chiropractic Clinic",
  "TITLE:Chiropractor & Osteopath",
  `TEL;TYPE=CELL:${TEL}`,
  `URL:${WEBSITE}`,
  `ADR;TYPE=WORK:;;${ADDRESS_LINES[0]}, ${ADDRESS_LINES[1]}, ${ADDRESS_LINES[2]};Vadodara;Gujarat;390020;India`,
  "END:VCARD",
].join("\n");

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function saveContact() {
  downloadBlob(new Blob([VCARD], { type: "text/vcard;charset=utf-8" }), "spine-x-chiropractic.vcf");
}

function formatDateInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-5 text-center">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      <h2 className="mt-1 font-display text-xl font-semibold leading-snug text-foreground sm:text-2xl">{title}</h2>
      <span className="brand-gradient mx-auto mt-3 block h-1 w-12 rounded-full" />
    </div>
  );
}

function Index() {
  const [cardUrl, setCardUrl] = useState(WEBSITE);
  const [form, setForm] = useState({ name: "", phone: "", need: "", date: "", time: "" });
  const today = formatDateInputValue(new Date());

  useEffect(() => {
    setCardUrl(window.location.href.split("#")[0] ?? WEBSITE);
  }, []);

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&data=${encodeURIComponent(cardUrl)}`;

  async function shareCard() {
    const data = {
      title: "Spine-X Chiropractic Clinic",
      text: "Spine-X Chiropractic Clinic — Dr. Chandresh Zinzala, Vadodara",
      url: cardUrl,
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        /* user cancelled */
      }
    }
    await navigator.clipboard?.writeText(cardUrl);
  }

  async function downloadQr() {
    try {
      const res = await fetch(qrSrc);
      downloadBlob(await res.blob(), "spine-x-card-qr.png");
    } catch {
      window.open(qrSrc, "_blank");
    }
  }

  function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Appointment request%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ARequirement: ${form.need}%0ADate: ${form.date}%0ATime Slot: ${form.time}`;
    window.open(`https://wa.me/91${PHONE}?text=${msg}`, "_blank");
  }

  const actions = [
    { label: "Call Now", icon: Phone, href: `tel:${TEL}` },
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/91${PHONE}` },
    { label: "Website", icon: Globe, href: WEBSITE },
    { label: "Directions", icon: MapPin, href: MAPS_URL },
  ];

  return (
    <main className="mx-auto w-full max-w-[560px] overflow-hidden px-3 pb-32 pt-4 min-[380px]:px-4 sm:px-5 sm:pb-28 sm:pt-5">
      {/* Profile / hero */}
      <header className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-float)] min-[380px]:rounded-[2rem]">
        <div className="brand-gradient px-4 pb-16 pt-6 text-center min-[380px]:px-5">
          <div className="mx-auto flex flex-col items-center">
            <div className="rounded-xl bg-white px-3 py-2 shadow-md">
              <img
                src={LOGO_SRC}
                alt="Spine-X Chiropractic Clinic logo"
                className="h-14 w-auto sm:h-18"
                width={280}
                height={112}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5">
            {["Chiropractor", "Osteopath", "COMT(UK)"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-primary-foreground/30 bg-primary-foreground/15 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="-mt-14 px-4 pb-6 text-center min-[380px]:px-5">
          <div className="mx-auto h-36 w-36 overflow-hidden rounded-full shadow-[var(--shadow-card)]">
            <img
              src={DOCTOR_PHOTO_SRC}
              alt="Dr. Chandresh Zinzala, Chiropractor & Osteopath at Spine-X Chiropractic Clinic"
              className="h-full w-full object-cover object-[center_50%]"
              width={256}
              height={256}
            />
          </div>
          <h1 className="mt-4 font-display text-2xl leading-tight font-bold text-foreground">
            Dr. Chandresh Zinzala
          </h1>
          <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Chiropractor &amp; Osteopath
          </p>
          <p className="mt-2 text-xs text-muted-foreground">Spine-X Chiropractic Clinic · Akota, Vadodara</p>

          <div className="mt-6 grid grid-cols-1 gap-2.5 min-[360px]:grid-cols-2">
            {actions.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-2xl border border-border soft-gradient px-3.5 py-3 text-left text-xs font-semibold text-secondary-foreground transition-shadow hover:shadow-[var(--shadow-card)] active:scale-[0.98]"
              >
                <span className="brand-gradient flex h-8 w-8 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="h-4 w-4 text-primary-foreground" aria-hidden />
                </span>
                <span className="min-w-0 leading-tight">{label}</span>
              </a>
            ))}
          </div>
          <div className="mt-2.5 grid grid-cols-1 gap-2.5 min-[360px]:grid-cols-2">
            <button
              type="button"
              onClick={saveContact}
              className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-3 py-3 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <UserPlus className="h-4 w-4 text-primary" aria-hidden /> Save Contact
            </button>
            <button
              type="button"
              onClick={shareCard}
              className="brand-gradient flex items-center justify-center gap-2 rounded-2xl px-3 py-3 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Share2 className="h-4 w-4" aria-hidden /> Share Card
            </button>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="surface-card mt-4 p-4 min-[380px]:p-5">
        <SectionTitle eyebrow="About" title="Your Spine Health Specialist" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Dr. Chandresh Zinzala is a qualified Chiropractor &amp; Osteopath with COMT(UK) certification and a
          physiotherapy background, with years of experience treating spine-related conditions.
        </p>
        <ul className="mt-4 grid gap-2">
          {QUALIFICATIONS.map((q) => (
            <li key={q} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <BadgeCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              {q}
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="surface-card mt-4 p-4 min-[380px]:p-5">
        <SectionTitle eyebrow="Services" title="Problems We Treat" />
        <div className="grid gap-2">
          {CONDITIONS.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-border soft-gradient p-3 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <p className="font-display text-sm font-semibold text-foreground">{c.name}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Therapies */}
      <section className="surface-card mt-4 p-4 min-[380px]:p-5">
        <SectionTitle eyebrow="Therapies" title="Techniques We Use" />
        <div className="grid grid-cols-1 gap-2 min-[360px]:grid-cols-2">
          {THERAPIES.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex min-w-0 items-start gap-2 rounded-2xl border border-border bg-card p-3 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <span className="brand-gradient flex h-7 w-7 shrink-0 items-center justify-center rounded-xl">
                <Icon className="h-3.5 w-3.5 text-primary-foreground" aria-hidden />
              </span>
              <p className="min-w-0 text-xs font-semibold leading-snug text-foreground">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="surface-card mt-4 p-4 min-[380px]:p-5">
        <SectionTitle eyebrow="Gallery" title="Inside The Clinic" />
        <div className="grid grid-cols-3 gap-2">
          {GALLERY.map((g) => (
            <img
              key={g.src}
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="aspect-square w-full rounded-2xl border border-border object-cover"
            />
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="surface-card mt-4 p-4 min-[380px]:p-5">
        <SectionTitle eyebrow="Why Choose Us" title="Care You Can Trust" />
        <div className="flex flex-wrap gap-2">
          {TRUST.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Contact / location */}
      <section className="surface-card mt-4 p-4 min-[380px]:p-5">
        <SectionTitle eyebrow="Contact" title="Visit Our Clinic" />
        <a href={`tel:${TEL}`} className="flex items-center gap-3 rounded-2xl border border-border p-3">
          <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
          <span className="text-sm font-semibold text-foreground">9099 244 119</span>
        </a>
        <div className="mt-2 flex items-start gap-3 rounded-2xl border border-border p-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
          <address className="text-sm not-italic leading-relaxed text-muted-foreground">
            {ADDRESS_LINES.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </div>
        <div className="mt-2 flex items-start gap-3 rounded-2xl border border-border p-3">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
          <div className="text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Monday – Saturday</p>
            <p>9:00 AM – 1:00 PM</p>
            <p>4:00 PM – 8:00 PM</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2 min-[360px]:grid-cols-3">
          <a
            href={`tel:${TEL}`}
            className="flex items-center justify-center gap-1.5 rounded-2xl border border-border bg-secondary/60 py-2.5 text-xs font-semibold text-secondary-foreground"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden /> Call
          </a>
          <a
            href={`https://wa.me/91${PHONE}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-2xl border border-border bg-secondary/60 py-2.5 text-xs font-semibold text-secondary-foreground"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden /> WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-2xl border border-border bg-secondary/60 py-2.5 text-xs font-semibold text-secondary-foreground"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden /> Maps
          </a>
        </div>
      </section>

      {/* Appointment */}
      <section id="book" className="brand-gradient mt-4 rounded-3xl p-4 text-primary-foreground min-[380px]:p-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-80">Appointment</p>
        <h2 className="mt-1 font-display text-xl font-semibold">Book Your Consultation</h2>
        <form onSubmit={submitEnquiry} className="mt-4 grid gap-2">
          <input
            required
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-2xl border border-primary-foreground/25 bg-primary-foreground/12 px-3 py-2.5 text-sm placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
          />
          <input
            required
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="rounded-2xl border border-primary-foreground/25 bg-primary-foreground/12 px-3 py-2.5 text-sm placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
          />
          <input
            placeholder="Requirement (e.g. back pain)"
            value={form.need}
            onChange={(e) => setForm({ ...form, need: e.target.value })}
            className="rounded-2xl border border-primary-foreground/25 bg-primary-foreground/12 px-3 py-2.5 text-sm placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
          />
          <label className="relative block">
            <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-70" aria-hidden />
            {!form.date && (
              <span className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-sm text-primary-foreground/60">
                Select Date
              </span>
            )}
            <input
              required
              type="date"
              min={today}
              value={form.date}
              onClick={(e) => e.currentTarget.showPicker?.()}
              onChange={(e) => setForm({ ...form, date: e.target.value, time: "" })}
              className={`w-full rounded-2xl border border-primary-foreground/25 bg-primary-foreground/12 px-9 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary-foreground/40 ${
                form.date ? "text-primary-foreground" : "text-transparent"
              }`}
            />
          </label>
          <label className="relative block">
            <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-70" aria-hidden />
            <select
              required
              disabled={!form.date}
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full appearance-none rounded-2xl border border-primary-foreground/25 bg-primary-foreground/12 px-9 py-2.5 text-sm text-primary-foreground transition focus:outline-none focus:ring-2 focus:ring-primary-foreground/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option value="">Select Time Slot</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot} className="text-foreground">
                  {slot}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-card px-4 py-3 text-sm font-bold text-primary transition-transform active:scale-[0.99]"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden /> Book Appointment
          </button>
          <a
            href={`tel:${TEL}`}
            className="flex items-center justify-center gap-2 rounded-2xl border border-primary-foreground/40 px-4 py-3 text-sm font-semibold"
          >
            <Phone className="h-4 w-4" aria-hidden /> Call Now
          </a>
        </form>
      </section>

      {/* QR / share */}
      <section className="surface-card mt-4 p-4 text-center min-[380px]:p-5">
        <SectionTitle eyebrow="Share" title="Scan to View My Profile" />
        <img
          src={qrSrc}
          alt="QR code linking to the Spine-X Chiropractic digital card"
          width={160}
          height={160}
          loading="lazy"
          className="mx-auto h-40 w-40 rounded-2xl border border-border p-2"
        />
        <div className="mt-4 grid gap-2">
          <button
            type="button"
            onClick={downloadQr}
            className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-secondary/60 py-2.5 text-xs font-semibold text-secondary-foreground"
          >
            <Download className="h-4 w-4 text-primary" aria-hidden /> Download QR
          </button>
          <div className="grid grid-cols-1 gap-2 min-[360px]:grid-cols-2">
            <button
              type="button"
              onClick={shareCard}
              className="brand-gradient flex items-center justify-center gap-2 rounded-2xl py-2.5 text-xs font-semibold text-primary-foreground"
            >
              <Share2 className="h-4 w-4" aria-hidden /> Share Card
            </button>
            <button
              type="button"
              onClick={saveContact}
              className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card py-2.5 text-xs font-semibold text-foreground"
            >
              <UserPlus className="h-4 w-4 text-primary" aria-hidden /> Save Contact
            </button>
          </div>
        </div>
        <p className="mt-5 text-[0.7rem] text-muted-foreground">
          Spine-X Chiropractic Clinic · Vadodara, Gujarat
        </p>
      </section>

      {/* Sticky quick actions */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-card/95 px-3 py-2.5 backdrop-blur min-[380px]:px-4">
        <div className="mx-auto grid max-w-[560px] grid-cols-3 gap-2">
          <a
            href={`tel:${TEL}`}
            className="flex min-w-0 items-center justify-center gap-1 rounded-2xl border border-border px-1 py-2.5 text-[0.7rem] font-semibold text-foreground min-[380px]:gap-1.5 min-[380px]:text-xs"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden /> Call
          </a>
          <a
            href={`https://wa.me/91${PHONE}`}
            target="_blank"
            rel="noreferrer"
            className="flex min-w-0 items-center justify-center gap-1 rounded-2xl border border-border px-1 py-2.5 text-[0.7rem] font-semibold text-foreground min-[380px]:gap-1.5 min-[380px]:text-xs"
          >
            <MessageCircle className="h-4 w-4 text-accent" aria-hidden /> WhatsApp
          </a>
          <a
            href="#book"
            className="brand-gradient flex min-w-0 items-center justify-center gap-1 rounded-2xl px-1 py-2.5 text-[0.7rem] font-bold text-primary-foreground min-[380px]:gap-1.5 min-[380px]:text-xs"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden /> Book
          </a>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground min-[380px]:text-sm">
          Designed and Developed by{" "}
          <a
            href="https://vynkcard.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-foreground underline-offset-2 hover:text-primary hover:underline"
          >
            Vynkcard
          </a>
        </p>
      </div>
    </main>
  );
}
