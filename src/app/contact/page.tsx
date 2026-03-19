"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ContactPage() {
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
            { name: "Recenze", id: "testimonials" },
            { name: "Kontakt", id: "contact" }
          ]}
          button={{ text: "Rezervovat", href: "#contact" }}
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
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773928698484-6h7xk70d.jpg?_wi=3"
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
                { label: "Recenze", href: "/" },
                { label: "Kontakt", href: "/contact" }
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
