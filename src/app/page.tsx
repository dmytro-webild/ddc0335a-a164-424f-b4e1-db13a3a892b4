"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Scissors, Sparkles } from 'lucide-react';

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
            { name: "Kontakt", id: "contact" }
          ]}
          button={{ text: "Rezervace", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Znovu objevte svou sebevědomost"
          description="Luxusní holič v Praze na Libušské 319 — odborné střihy, holení na starobylý způsob a styling pro moderního gentlemana. Kontaktujte nás dnes pro zážitek zakořeněný v tradici a zdokonalený odborností."
          tag="LUXUSNÍ PÉČE O VZHLED"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
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

      <div id="contact" data-section="contact">
        <ContactText
          text="Jste připraveni zažít luxusní péči o vzhled? Rezervujte si svou schůzku ještě dnes nebo nám zavolejte. Naši holiči se těší na vaši návštěvu."
          animationType="entrance-slide"
          buttons={[
            { text: "Rezervovat schůzku", href: "#" },
            { text: "Zavolat: +420 XXX XXX XXX", href: "tel:+420" }
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
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
                { label: "Kontakt", href: "#contact" }
              ]
            },
            {
              title: "Právní informace",              items: [
                { label: "Zásady ochrany osobních údajů", href: "#" },
                { label: "Podmínky služeb", href: "#" },
                { label: "Podmínky rezervace", href: "#" },
                { label: "Kontakt", href: "#contact" }
              ]
            }
          ]}
          copyrightText="© 2024 The Barber House. Všechna práva vyhrazena. Vytvořeno s přesností."
        />
      </div>
    </ThemeProvider>
  );
}