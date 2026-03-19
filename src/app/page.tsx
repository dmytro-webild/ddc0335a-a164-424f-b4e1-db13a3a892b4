"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function BarberHousePage() {
  const handleContactSubmit = (data: Record<string, string>) => {
    // Send form data to the specified email
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'neco00517@gmail.com',
        subject: 'New Contact Form Submission',
        data: data,
      }),
    }).then(response => {
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    }).catch(error => {
      console.error('Error sending email:', error);
    });
  };

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
            { name: "Recenze", id: "testimonials" }
          ]}
          button={{ text: "Rezervovat", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Tvůj styl. Naše práce."
          description="Luxusní holič v Praze na Libušské 319 s odbornými střihy, holením na starobylý způsob a stylingem pro moderního gentlemana."
          background={{ variant: "plain" }}
          tag="PRÉMIOVÝ BARBER SHOP"
          buttons={[]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773928698484-6h7xk70d.jpg?_wi=1",              imageAlt: "Interiér luxusního barbershopu The Barber House"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773928698484-blyzax49.jpg?_wi=1",              imageAlt: "Profesionální holič poskytující odbornou službu střihu vlasů"
            }
          ]}
          mediaAnimation="slide-up"
          rating={0}
          ratingText=""
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          testimonials={[
            {
              id: "1",              name: "Nam Le-Hoang",              handle: "@namlehoang",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773925606192-ozb9ewdk.png",              imageAlt: "Nam Le-Hoang",              testimonial: "Barbři se vyznají v práci! Naprostá spokojenost"
            },
            {
              id: "2",              name: "Radovan Jansa",              handle: "@radovanjansa",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773925719532-rkm6swdp.png",              imageAlt: "Radovan Jansa",              testimonial: "Skvělé služby a haircut. Teď také výrazně rozšířili a zmodernizovali prostory holichství. Určitě doporučuji 👍💈✂️💇‍♂️"
            },
            {
              id: "3",              name: "Nam Trương",              handle: "@namtruong",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773925810852-e8nmddb3.png",              imageAlt: "Nam Trương",              testimonial: "Zkušení holiči. Vřele doporučuji."
            },
            {
              id: "4",              name: "Danh Phạm",              handle: "@danhpham",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773925837916-yo3g6bqk.png",              imageAlt: "Danh Phạm",              testimonial: "Tento Barber shop je fantastické a holiči jsou zde velmi profesionální a pohlední."
            },
            {
              id: "5",              name: "Achala Fernando",              handle: "@achalafernando",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773925669028-4jxwa0y7.png",              imageAlt: "Achala Fernando",              testimonial: "Velmi dobrá obsluha! Vřele doporučuji..."
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
          description="Máte otázky? Rádi vám pomůžeme. Vyplňte formulář a my se vám brzy ozveme."
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
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773928698484-5qxd7iwr.jpg?_wi=2"
          imageAlt="Interiér luxusního barbershopu The Barber House"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Odeslat"
          onSubmit={handleContactSubmit}
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
                { label: "Střihy", href: "/" },
                { label: "Holení na starobylý způsob", href: "/" },
                { label: "Styling a péče", href: "/" },
                { label: "Členské balíčky", href: "/" }
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