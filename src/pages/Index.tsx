import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  Building2,
  ChevronDown,
  FileCheck2,
  FileText,
  FolderOpen,
  KeyRound,
  MessageCircle,
  Scale,
} from 'lucide-react'
import FinalCta from '@/components/FinalCta'
import logoAdv from '@/assets/logo-adv-ff892.png'
import fotoJuliano from '@/assets/whatsapp-image-2026-10-14-at-16.34.38-9893b.jpeg'

const WHATSAPP_URL = 'https://wa.me/5517981045910'

type AreaPreview = {
  titulo: string
  descricao: string
  destino: string
  Icone: LucideIcon
}

const areas: AreaPreview[] = [
  {
    titulo: 'DIREITO DE FAMÍLIA E DAS SUCESSÕES',
    descricao: 'Soluções para relações familiares, inventários e planejamento sucessório.',
    destino: 'direito-de-familia-e-das-sucessoes',
    Icone: Scale,
  },
  {
    titulo: 'DIREITO IMOBILIARIO',
    descricao: 'Segurança jurídica para negócios, posse, propriedade e regularização.',
    destino: 'direito-imobiliario',
    Icone: KeyRound,
  },
  {
    titulo: 'DIREITO REGISTRAL E NOTARIAL',
    descricao: 'Assessoria técnica perante cartórios e registros de imóveis.',
    destino: 'direito-notarial-e-registral',
    Icone: FileCheck2,
  },
  {
    titulo: 'DIREITO URBANISTICO',
    descricao: 'Orientação em regularização, documentação e ocupação urbana.',
    destino: 'direito-urbanistico',
    Icone: Building2,
  },
  {
    titulo: 'DIREITO CIVIL',
    descricao: 'Prevenção e solução de conflitos patrimoniais e contratuais.',
    destino: 'direito-civil',
    Icone: FileText,
  },
  {
    titulo: 'EXTRAJUDICIAL',
    descricao: 'Atuação ágil em procedimentos e instrumentos fora do Judiciário.',
    destino: 'extrajudicial',
    Icone: FolderOpen,
  },
]

const Index = () => {
  const paginaRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.12 },
    )

    elementos.forEach((elemento) => observador.observe(elemento))
    return () => observador.disconnect()
  }, [])

  return (
    <div ref={paginaRef}>
      <section
        className="hero-section cement-surface cement-corners"
        aria-labelledby="titulo-principal"
      >
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-5 pb-20 pt-28 text-center sm:px-8 sm:pt-32">
          <div className="hero-cascade flex w-full flex-col items-center">
            <img
              src={logoAdv}
              alt="Logotipo Juliano Silveira Advocacia"
              className="hero-logo w-[min(86vw,420px)]"
              width="1024"
              height="1024"
              fetchPriority="high"
              decoding="async"
            />
            <h1 id="titulo-principal" className="sr-only">
              Juliano Silveira Advocacia
            </h1>
            <p className="mt-7 max-w-2xl font-display text-2xl font-semibold leading-snug text-[#16233F] sm:text-3xl lg:text-[2.15rem]">
              Advocacia especializada em Direito Imobiliário, Família e Sucessões
            </p>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <a
                className="cta-button cta-gold w-full sm:w-auto"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Fale no WhatsApp
              </a>
              <Link className="cta-button cta-outline w-full sm:w-auto" to="/areas-de-atuacao">
                Áreas de Atuação
                <ArrowRight size={19} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <a className="scroll-cue" href="#sobre" aria-label="Ir para a seção Sobre o Advogado">
            <span>Conheça o escritório</span>
            <ChevronDown size={24} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        id="sobre"
        className="cement-surface border-t-2 border-[#B99B5F] py-20 sm:py-24 lg:py-28"
        aria-labelledby="titulo-sobre"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div data-reveal className="reveal-up relative">
            <div className="photo-frame">
              <img
                src={fotoJuliano}
                alt="Advogado Juliano Silveira"
                className="block h-auto w-full"
                width="1536"
                height="864"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-3 h-20 w-20 border-b-2 border-r-2 border-[#B99B5F] sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28"
              aria-hidden="true"
            />
          </div>

          <div data-reveal className="reveal-up">
            <span className="eyebrow">Sobre o advogado</span>
            <h2 id="titulo-sobre" className="section-title mt-3">
              Juliano Silveira
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="mt-7 text-xl font-semibold leading-relaxed text-[#25231F] sm:text-2xl">
              Advogado | Especialista Inventários • Divórcios • Família e Sucessões • Imobiliário
              +20 anos de Experiência no Extrajudicial
            </p>
            <div className="mt-6 inline-flex border border-[#B99B5F]/70 bg-[#16233F] px-4 py-2 text-sm font-semibold tracking-[0.16em] text-[#EDE7DC] shadow-lg">
              OAB/SP nº 556.823
            </div>
            <p className="mt-6 text-lg leading-8 text-[#4A4640]">
              Cada atendimento é conduzido com escuta, clareza e estratégia, respeitando as
              particularidades de cada caso. A ampla experiência no extrajudicial permite buscar
              caminhos seguros e eficientes, sempre com atuação próxima e responsável.
            </p>
            <a
              className="cta-button cta-navy mt-8"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Agende uma consulta pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section
        id="areas"
        className="bg-[#BDB4A7] py-20 sm:py-24 lg:py-28"
        aria-labelledby="titulo-areas"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <header data-reveal className="reveal-up mx-auto max-w-3xl text-center">
            <span className="eyebrow">Atuação jurídica</span>
            <h2 id="titulo-areas" className="section-title mt-3">
              Áreas de Atuação
            </h2>
            <span className="gold-rule mx-auto" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed text-[#4A4640]">
              Assessoria jurídica técnica e personalizada para decisões familiares, patrimoniais,
              imobiliárias e extrajudiciais.
            </p>
          </header>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {areas.map(({ titulo, descricao, destino, Icone }, indice) => (
              <article
                key={titulo}
                data-reveal
                className="area-card reveal-up"
                style={{ transitionDelay: `${(indice % 3) * 70}ms` }}
              >
                <span className="area-icon" aria-hidden="true">
                  <Icone size={30} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-[1.3rem] font-bold leading-snug tracking-[0.04em] text-[#16233F]">
                  {titulo}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-[#4A4640]">{descricao}</p>
                <Link className="area-link mt-7" to={`/areas-de-atuacao#${destino}`}>
                  Ver detalhes <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16233F]" aria-label="Diferenciais do escritório">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-5 px-5 py-9 text-center text-[#EDE7DC] sm:px-8 lg:flex-row lg:gap-8 lg:py-8">
          <strong>+20 anos de Experiência no Extrajudicial</strong>
          <span className="trust-diamond" aria-hidden="true" />
          <strong>Atendimento Segunda à Sexta - 09h00 as 17h00</strong>
          <span className="trust-diamond" aria-hidden="true" />
          <strong>OAB/SP nº 556.823</strong>
        </div>
      </section>

      <FinalCta />
    </div>
  )
}

export default Index
