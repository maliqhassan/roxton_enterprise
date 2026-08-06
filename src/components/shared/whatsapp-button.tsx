import { Reveal } from "@/components/motion/reveal";
import { WhatsappIcon } from "@/components/shared/social-icons";
import { siteConfig } from "@/config/site";

// WhatsApp's own brand green, not our token palette — this represents a
// third-party platform's identity, not ours (same reasoning as the social
// icons using platform-accurate glyphs).
const WHATSAPP_GREEN = "#25D366";

export function WhatsAppButton() {
  const digits = siteConfig.contact.phone.replace(/\D/g, "");

  return (
    <div className="fixed right-6 bottom-6 z-[var(--z-toast)]">
      <Reveal variant="scale" delay={0.6}>
        <a
          href={`https://wa.me/${digits}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="hover-lift flex size-14 items-center justify-center rounded-full text-white shadow-lg"
          style={{ backgroundColor: WHATSAPP_GREEN }}
        >
          <WhatsappIcon className="size-7" />
        </a>
      </Reveal>
    </div>
  );
}
