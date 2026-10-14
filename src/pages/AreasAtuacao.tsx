import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, MessageCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import FinalCta from '@/components/FinalCta'
import { areasDetalhadas, navegacaoAreas } from '@/data/areas'

const WHATSAPP_BASE = 'https://wa.me/5517981045910'

const AreasAtuacao = () => {
  const location = useLocation()
  const paginaRef = useRef<HTMLDivElement>(null)
  const [areaAtiva, setAreaAtiva] = useState(navegacaoAreas[0].id)

  useEffect(() => {
    const atualizarAreaAtiva = () => {
      const secoes = Array.from(document.querySelectorAll<HTMLElement>('.area-section'))
      const pontoDeLeitura = window.scrollY + Math.min(250, window.innerHeight * 0.32)
      let atual = secoes[0]?.dataset.navId

      secoes.forEach((secao) => {
        if (secao.offsetTop <= pontoDeLeitura) atual = secao.dataset.navId
      })

      if (atual) setAreaAtiva(atual)
    }

    atualizarAreaAtiva()
    window.addEventListener('scroll', atualizarAreaAtiva, { passive: true })
    window.addEventListener('resize', atualizarAreaAtiva)
    return () => {
      window.removeEventListener('scroll', atualizarAreaAtiva)
      window.removeEventListener('resize', atualizarAreaAtiva)
    }
  }, [])

  useEffect(() => {
    if (!location.hash) return

    const id = decodeURIComponent(location.hash.slice(1))
    const timer = window.setTimeout(() => {
      const alvo = document.getElementById(id)
      if (!alvo) return

      alvo.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (alvo.classList.contains('area-section')) {
        alvo.classList.add('hash-target')
        const navId = alvo.dataset.navId
        if (navId) setAreaAtiva(navId)
        window.setTimeout(() => alvo.classList.remove('hash-target'), 1100)
      }
    }, 80)

    return () => window.clearTimeout(timer)
  }, [location.hash])

  useEffect(() => {
    const elementos = paginaRef.current?.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!elementos?.length) return

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible')
            observador.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.06 },
    )

    elementos.forEach((elemento) => observador.observe(elemento))
    return () => observador.disconnect()
  }, [])

  const linkWhatsApp = (tema: string) =>
    `${WHATSAPP_BASE}?text=${encodeURIComponent(`Olá, gostaria de falar sobre ${tema}`)}`

  return (
    <div ref={paginaRef}>
      <section
        className="page-banner cement-surface cement-corners"
        aria-labelledby="titulo-pagina-areas"
      >
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36">
          <nav
            className="mb-7 flex items-center gap-2 text-sm font-semibold text-[#4A4640]"
            aria-label="Navegação estrutural"
          >
            <Link className="transition-colors hover:text-[#16233F]" to="/">
              Início
            </Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page" className="text-[#16233F]">
              Áreas de Atuação
            </span>
          </nav>
          <span className="eyebrow">Atuação jurídica completa</span>
          <h1
            id="titulo-pagina-areas"
            className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[0.95] text-[#16233F] sm:text-6xl lg:text-7xl"
          >
            Áreas de Atuação
          </h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4A4640] sm:text-xl">
            Conheça em detalhes as soluções jurídicas oferecidas para proteger direitos, patrimônio
            e relações familiares.
          </p>
        </div>
      </section>

      <nav className="areas-chips lg:hidden" aria-label="Sumário das áreas de atuação">
        <div className="flex w-max min-w-full gap-2 px-4 py-3">
          {navegacaoAreas.map((area) => (
            <a
              key={area.id}
              href={`#${area.destino}`}
              className={`area-chip ${areaAtiva === area.id ? 'is-active' : ''}`}
              aria-current={areaAtiva === area.id ? 'location' : undefined}
            >
              {area.titulo}
            </a>
          ))}
        </div>
      </nav>

      <section
        className="cement-surface border-t-2 border-[#B99B5F] py-14 sm:py-20 lg:py-24"
        aria-label="Conteúdo das áreas de atuação"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l-2 border-[#B99B5F] bg-[#16233F] p-6 shadow-xl">
              <p className="mb-5 font-display text-2xl font-semibold text-[#EDE7DC]">
                Nesta página
              </p>
              <nav className="flex flex-col" aria-label="Sumário das áreas de atuação">
                {navegacaoAreas.map((area) => (
                  <a
                    key={area.id}
                    href={`#${area.destino}`}
                    className={`side-area-link ${areaAtiva === area.id ? 'is-active' : ''}`}
                    aria-current={areaAtiva === area.id ? 'location' : undefined}
                  >
                    {area.titulo}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0 space-y-7">
            <div data-reveal className="reveal-up border-l-2 border-[#B99B5F] pl-5">
              <p className="text-lg leading-8 text-[#4A4640]">
                A atuação reúne experiência extrajudicial, análise técnica e acompanhamento próximo
                em todas as etapas. Selecione um tema para consultar os serviços relacionados.
              </p>
            </div>

            {areasDetalhadas.map((area, indice) => (
              <section
                id={area.id}
                key={area.id}
                data-nav-id={area.navegacaoId}
                data-reveal
                className={`area-section reveal-up ${indice % 2 === 0 ? 'is-light' : 'is-dark'}`}
                aria-labelledby={`titulo-${area.id}`}
              >
                <Accordion type="single" collapsible defaultValue="conteudo">
                  <AccordionItem value="conteudo" className="border-0">
                    <AccordionTrigger className="area-accordion-trigger px-5 py-6 text-left hover:no-underline sm:px-8 sm:py-8">
                      <span>
                        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#8B713D]">
                          {String(indice + 1).padStart(2, '0')}
                        </span>
                        <span
                          id={`titulo-${area.id}`}
                          className="area-heading block font-display text-3xl font-semibold leading-tight text-[#16233F] sm:text-4xl"
                        >
                          {area.titulo}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-7 sm:px-8 sm:pb-9">
                      <div className="mb-6 h-px w-20 bg-[#B99B5F]" aria-hidden="true" />
                      {area.introducao && (
                        <p className="mb-5 text-lg font-semibold leading-8 text-[#34312C]">
                          {area.introducao}
                        </p>
                      )}
                      <ul className="area-bullets">
                        {area.itens.map((item, itemIndice) => (
                          <li key={`${area.id}-${itemIndice}`}>{item}</li>
                        ))}
                      </ul>
                      <a
                        className="area-whatsapp mt-8"
                        href={linkWhatsApp(area.titulo)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={18} aria-hidden="true" />
                        Consultar sobre este tema no WhatsApp
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  )
}

export default AreasAtuacao
