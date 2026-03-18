"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Scissors, Sparkles, Star } from 'lucide-react';

export default function BarberHousePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeMediumTitles"
      background="fluid"
      cardStyle="inset"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="The Barber House"
          navItems={[
            { name: "Služby", id: "services" },
            { name: "Recenze", id: "testimonials" },
            { name: "Kontakt", id: "contact" }
          ]}
          button={{ text: "Rezervace", href: "#" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Znovu objevte svou sebevědomost"
          description="Luxusní holič v Praze na Libušské 319 — odborné střihy, holení na starobylý způsob a styling pro moderního gentlemana. Kontaktujte nás dnes pro zážitek zakořeněný v tradici a zdokonalený odborností."
          tag="LUXUSNÍ PÉČE O VZHLED"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[]}
          buttonAnimation="slide-up"
          kpis={[
            { value: "15+", label: "Let zkušeností" },
            { value: "60+", label: "Spokojených klientů" },
            { value: "100%", label: "Doporučených služeb" }
          ]}
          enableKpiAnimation={true}
          mediaAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-holding-juice-while-getting-haircut_613910-5727.jpg"
          imageAlt="Interiér luxusního barbershopu The Barber House"
          background={{ variant: "gradient-bars" }}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyOne
          title="Odborně vytvářené služby"
          description="Každá služba je navržena tak, aby zvýšila vaši péči o vzhled a sebevědomost. Naši holič kombinují tradiční techniky s moderní odborností, aby dosáhli výjimečných výsledků."
          tag="PRÉMIOVÉ SLUŽBY"
          tagIcon={Scissors}
          tagAnimation="slide-up"
          accordionItems={[
            {
              id: "haircut",              title: "Profesionální střihy",              content: "Odborné střihy přizpůsobené vašemu stylu a tvaru obličeje. Pomocí precizních technik vylepšených léty zkušeností poskytujeme ostré linie a dokonalé přechody. 45 minut. 35–50 €."
            },
            {
              id: "shave",              title: "Holení na starobylý způsob",              content: "Tradiční luxusní zážitek s prémiovými produkty. Příprava teplým ručníkem, odborné namydlení a přesná technika holení na starobylý způsob pro nejhladší holení. Včetně balzámu po holení. 30 minut. 40–55 €."
            },
            {
              id: "styling",              title: "Styling a péče o vzhled",              content: "Konzultativní přístup ke styling vlasů, doporučení produktů a rutiny péče o vzhled. Naučte se profesionální tipy a objevte produkty, které vhodně fungují pro vaše vlasy. 30 minut. 30–40 €."
            },
            {
              id: "packages",              title: "Členské balíčky",              content: "Exkluzivní výhody včetně prioritního rezervování, 10% slevy na služby, bezplatné vzorky produktů a přístup do VIP salónu. Dostupné měsíční a čtvrtletní možnosti."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/full-shot-man-getting-haircut_23-2149220553.jpg"
          imageAlt="Profesionální holič poskytující odbornou službu střihu vlasů"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="right"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          testimonials={[
            {
              id: "1",              name: "Nam Le-Hoang",              handle: "@namlehoang",              imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",              imageAlt: "Nam Le-Hoang",              testimonial: "Barbři se vyznají v práci! Naprostá spokojenost"
            },
            {
              id: "2",              name: "Radovan Jansa",              handle: "@radovanjansa",              imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",              imageAlt: "Radovan Jansa",              testimonial: "Skvělé služby a haircut. Teď také výrazně rozšířili a zmodernizovali prostory holičství. Určitě doporučuji 👍💈✂️💇‍♂️"
            },
            {
              id: "3",              name: "Nam Trương",              handle: "@namtruong",              imageSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",              imageAlt: "Nam Trương",              testimonial: "Zkušení holiči. Vřele doporučuji."
            },
            {
              id: "4",              name: "Danh Phạm",              handle: "@danhpham",              imageSrc: "https://images.unsplash.com/photo-1522228115018-61b2f0398a1e?w=400&h=400&fit=crop",              imageAlt: "Danh Phạm",              testimonial: "Tento Barber shop je fantastické a holiči jsou zde velmi profesionální a pohlední."
            },
            {
              id: "5",              name: "Achala Fernando",              handle: "@achalafernando",              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",              imageAlt: "Achala Fernando",              testimonial: "Velmi dobrá obsluha! Vřele doporučuji..."
            }
          ]}
          animationType="slide-up"
          title="Co říkají naši klienti"
          tag="OVĚŘENÉ RECENZE"
          textboxLayout="default"
          useInvertedBackground={false}
          description=""
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Kontaktujte nás"
          description="Máte otázky? Rádi vám pomůžeme. Vyplňte formulář a my se vám brzy ozvu."
          inputs={[
            {
              name: "name",              type: "text",              placeholder: "Vaše jméno",              required: true
            },
            {
              name: "email",              type: "email",              placeholder: "Váš e-mail",              required: true
            },
            {
              name: "phone",              type: "tel",              placeholder: "Vaše telefonní číslo",              required: false
            }
          ]}
          textarea={{
            name: "message",            placeholder: "Vaše zpráva",            rows: 5,
            required: true
          }}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Odeslat"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "The Barber House",              items: [
                { label: "Libušská 319", href: "#" },
                { label: "Praha, Česká republika", href: "#" },
                { label: "+420 XXX XXX XXX", href: "tel:+420" },
                { label: "info@thebarbershop.cz", href: "mailto:info@thebarbershop.cz" }
              ]
            },
            {
              title: "Služby",              items: [
                { label: "Střihy", href: "#services" },
                { label: "Holení na starobylý způsob", href: "#services" },
                { label: "Styling a péče", href: "#services" },
                { label: "Členské balíčky", href: "#services" }
              ]
            },
            {
              title: "Společnost",              items: [
                { label: "Recenze", href: "#testimonials" },
                { label: "Kontakt", href: "#contact" }
              ]
            },
            {
              title: "Právní informace",              items: [
                { label: "Zásady ochrany osobních údajů", href: "#" },
                { label: "Podmínky služeb", href: "#" },
                { label: "Podmínky rezervace", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 The Barber House. Všechna práva vyhrazena. Vytvořeno s přesností."
        />
      </div>
    </ThemeProvider>
  );
}