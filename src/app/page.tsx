"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, HelpCircle, Scissors, Sparkles, Users } from 'lucide-react';

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
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Book Now", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Rediscover Your Confidence"
          description="Prague's luxury barbershop at Libušská 319—expert haircuts, straight-razor shaves, and styling for the modern gentleman. Book online or call us today for an experience rooted in tradition and refined by expertise."
          tag="LUXURY GROOMING EXPERIENCE"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Book Your Appointment", href: "#contact" },
            { text: "Call Now: +420 XXX XXX XXX", href: "tel:+420" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-holding-juice-while-getting-haircut_613910-5727.jpg"
          imageAlt="The Barber House luxury barbershop interior"
          background={{ variant: "gradient-bars" }}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyOne
          title="Expertly Crafted Services"
          description="Each service is designed to elevate your grooming ritual and confidence. Our barbers combine traditional techniques with modern expertise to deliver exceptional results."
          tag="PREMIUM SERVICES"
          tagIcon={Scissors}
          tagAnimation="slide-up"
          accordionItems={[
            {
              id: "haircut",              title: "Professional Haircuts",              content: "Expert cuts tailored to your style and face shape. Using precision techniques refined over years of experience, we deliver sharp lines and perfect fades. 45 minutes. €35–€50."
            },
            {
              id: "shave",              title: "Straight-Razor Shaves",              content: "Traditional luxury experience with premium products. Hot towel preparation, expert lathering, and precise straight-razor technique for the smoothest shave. Includes aftershave balm. 30 minutes. €40–€55."
            },
            {
              id: "styling",              title: "Styling & Grooming",              content: "Consultative approach to hair styling, product recommendations, and grooming routines. Learn pro tips and discover products that work for your hair. 30 minutes. €30–€40."
            },
            {
              id: "packages",              title: "Membership Packages",              content: "Exclusive benefits including priority booking, 10% service discount, complimentary product samples, and VIP lounge access. Monthly and quarterly options available."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/full-shot-man-getting-haircut_23-2149220553.jpg"
          imageAlt="Professional barber providing expert haircut service"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Crafted Traditions Meet Modern Excellence" },
            { type: "image", src: "http://img.b2bpic.net/free-photo/male-hairdresser-combing-hair-elderly-client-barbershop_23-2148181912.jpg", alt: "The Barber House skilled barbers at work" }
          ]}
          buttons={[{ text: "Discover Our Story", href: "#team" }]}
          buttonAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFive
          title="Meet Our Expert Barbers"
          description="Each barber at The Barber House brings years of expertise, passion for craft, and a commitment to exceptional service. We're not just cutting hair—we're building confidence."
          team={[
            {
              id: "1",              name: "Martin Dvořák",              role: "Master Barber & Founder",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-black-man-wool-suit_613910-1886.jpg",              imageAlt: "Martin Dvořák, Master Barber"
            },
            {
              id: "2",              name: "Jakub Novotný",              role: "Senior Barber & Stylist",              imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-bearded-photographer-wearing-classic-suit-holding-retro-camera-standing-with-his-arms-crossed_613910-19282.jpg",              imageAlt: "Jakub Novotný, Senior Barber"
            },
            {
              id: "3",              name: "Tomáš Krčil",              role: "Straight-Razor Specialist",              imageSrc: "http://img.b2bpic.net/free-photo/hipster-style-bearded-man_158595-705.jpg",              imageAlt: "Tomáš Krčil, Shave Specialist"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="OUR TEAM"
          tagIcon={Users}
          tagAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          testimonials={[
            {
              id: "1",              name: "David Petřík",              role: "CEO",              company: "PetroTech Solutions",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-chinese-woman-smiling-confident-standing-street_839833-7633.jpg",              imageAlt: "David Petřík testimonial"
            },
            {
              id: "2",              name: "Filip Svoboda",              role: "Entrepreneur",              company: "Svoboda Ventures",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-wearing-yellow-bandana_273609-13339.jpg",              imageAlt: "Filip Svoboda testimonial"
            },
            {
              id: "3",              name: "Lukáš Horák",              role: "Creative Director",              company: "Horák Design Studio",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-showing-double-thumbs-up-blouse-cardigan-looking-merry-front-view_176474-109580.jpg",              imageAlt: "Lukáš Horák testimonial"
            },
            {
              id: "4",              name: "Petr Marek",              role: "Marketing Manager",              company: "Digital Prague Agency",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-hispanic-woman-standing-isolated-background-success-sign-doing-positive-gesture-with-hand-thumbs-up-smiling-happy-cheerful-expression-winner-gesture_839833-8011.jpg",              imageAlt: "Petr Marek testimonial"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
          title="Trusted by Prague's Finest"
          description="Our clients consistently praise our attention to detail, expert technique, and welcoming atmosphere. See what they have to say about their experience."
          tag="CLIENT TESTIMONIALS"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Common Questions"
          description="Find answers to frequently asked questions about our services, booking process, and barbershop experience."
          tag="FAQ"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How do I book an appointment?",              content: "You can book online through our website using our scheduling system, or call us directly at +420 XXX XXX XXX. We offer flexible availability including evening and weekend slots for busy professionals."
            },
            {
              id: "2",              title: "What is your cancellation policy?",              content: "We require 24-hour notice for cancellations or rescheduling. Cancellations within 24 hours may incur a 50% service fee. We understand life happens—just let us know as soon as possible."
            },
            {
              id: "3",              title: "Do you offer walk-ins?",              content: "While we prioritize booked appointments, we welcome walk-ins based on barber availability. During peak hours, walk-in wait times may vary. Booking ahead guarantees your preferred time and barber."
            },
            {
              id: "4",              title: "What payment methods do you accept?",              content: "We accept cash, card payments (Visa, Mastercard, American Express), and bank transfers. All payment methods are secure and processed immediately upon service completion."
            },
            {
              id: "5",              title: "Are there parking options nearby?",              content: "Our Libušská 319 location has street parking available and is accessible via public transit. The nearest tram stop is a 5-minute walk. Paid parking garage is available one block away."
            },
            {
              id: "6",              title: "Do you offer gift certificates?",              content: "Yes! Gift certificates are available for any service or dollar amount. They're perfect for the gentleman who has everything. Contact us or purchase online through our website."
            }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to experience luxury grooming? Book your appointment today or give us a call. Our barbers look forward to serving you."
          animationType="entrance-slide"
          buttons={[
            { text: "Book Your Appointment", href: "#" },
            { text: "Call: +420 XXX XXX XXX", href: "tel:+420" }
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
                { label: "Prague, Czech Republic", href: "#" },
                { label: "+420 XXX XXX XXX", href: "tel:+420" },
                { label: "info@thebarbershop.cz", href: "mailto:info@thebarbershop.cz" }
              ]
            },
            {
              title: "Services",              items: [
                { label: "Haircuts", href: "#services" },
                { label: "Straight-Razor Shaves", href: "#services" },
                { label: "Styling & Grooming", href: "#services" },
                { label: "Membership Packages", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#team" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Booking Terms", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          copyrightText="© 2024 The Barber House. All rights reserved. Crafted with precision."
        />
      </div>
    </ThemeProvider>
  );
}