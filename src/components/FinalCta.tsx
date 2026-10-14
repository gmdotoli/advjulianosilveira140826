import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5517981045910'

export default function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="titulo-cta-final">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:py-20">
        <div>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.24em] text-[#D8C294]">
            Atendimento jurídico
          </span>
          <h2
            id="titulo-cta-final"
            className="font-display text-4xl font-semibold leading-tight text-[#EDE7DC] sm:text-5xl"
          >
            Precisa de orientação jurídica?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#EDE7DC]/75">
            Entre em contato para apresentar o seu caso e receber uma orientação clara, segura e
            personalizada.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <a
            className="cta-button cta-whatsapp min-w-[250px]"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com Juliano Silveira pelo WhatsApp"
          >
            <MessageCircle aria-hidden="true" size={21} />
            Fale no WhatsApp
          </a>
          <span className="font-display text-2xl tracking-wide text-[#D8C294]">17 981045910</span>
        </div>
      </div>
    </section>
  )
}
