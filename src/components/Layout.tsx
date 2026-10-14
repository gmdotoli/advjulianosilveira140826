import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Clock3, Instagram, Mail, Menu, MessageCircle, Phone } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import logoAdv from '@/assets/logo-adv-ff892.png'

const WHATSAPP_URL = 'https://wa.me/5517981045910'
const INSTAGRAM_URL = 'https://www.instagram.com/adv.julianosilveira'
const EMAIL = 'advocaciajulianosilveira@gmail.com'

function Marca({ compacta = false }: { compacta?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <img
        src={logoAdv}
        alt="Logotipo Juliano Silveira Advocacia"
        className={
          compacta ? 'h-11 w-11 shrink-0 object-contain' : 'h-12 w-12 shrink-0 object-contain'
        }
        width="1024"
        height="1024"
      />
      <span className="min-w-0 leading-none">
        <strong className="block truncate font-display text-base font-semibold tracking-[0.13em] text-[#EDE7DC] sm:text-lg">
          JULIANO SILVEIRA
        </strong>
        <span className="mt-1 block text-[10px] font-semibold tracking-[0.3em] text-[#D8C294] sm:text-[11px]">
          ADVOCACIA
        </span>
      </span>
    </span>
  )
}

export default function Layout() {
  const location = useLocation()
  const [menuAberto, setMenuAberto] = useState(false)
  const contatoDestino = `${location.pathname}#contato`

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (location.hash) {
        const id = decodeURIComponent(location.hash.slice(1))
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    }, 40)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  const fecharMenu = () => setMenuAberto(false)

  return (
    <div className="min-h-screen bg-[#CFC8BD] text-[#1C1B19]">
      <a href="#conteudo-principal" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <header className="site-header">
        <div className="mx-auto flex h-[74px] w-full max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="min-w-0 rounded-sm focus-visible:outline-none"
            aria-label="Juliano Silveira Advocacia — início"
          >
            <Marca compacta />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            <Link className={`nav-link ${location.pathname === '/' ? 'is-active' : ''}`} to="/">
              Início
            </Link>
            <Link
              className={`nav-link ${location.pathname === '/areas-de-atuacao' ? 'is-active' : ''}`}
              to="/areas-de-atuacao"
            >
              Áreas de Atuação
            </Link>
            <Link className="nav-link" to={contatoDestino}>
              Contato
            </Link>
            <a
              className="header-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
          </nav>

          <Sheet open={menuAberto} onOpenChange={setMenuAberto}>
            <SheetTrigger asChild>
              <button
                className="menu-trigger lg:hidden"
                type="button"
                aria-label="Abrir menu de navegação"
              >
                <Menu size={25} aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] max-w-sm border-l border-[#B99B5F]/60 bg-[#16233F] px-0 text-[#EDE7DC] [&>button]:text-[#EDE7DC]"
            >
              <SheetHeader className="border-b border-[#D8C294]/20 px-6 pb-6 pt-8 text-left">
                <SheetTitle className="text-left">
                  <Marca />
                </SheetTitle>
                <SheetDescription className="pt-2 text-sm text-[#EDE7DC]/60">
                  Advocacia especializada e atendimento personalizado.
                </SheetDescription>
              </SheetHeader>

              <nav
                className="flex h-[calc(100%-150px)] flex-col px-6 py-8"
                aria-label="Navegação móvel"
              >
                <div className="flex flex-col gap-1">
                  <Link className="mobile-nav-link" to="/" onClick={fecharMenu}>
                    Início
                  </Link>
                  <Link className="mobile-nav-link" to="/areas-de-atuacao" onClick={fecharMenu}>
                    Áreas de Atuação
                  </Link>
                  <Link className="mobile-nav-link" to="/#sobre" onClick={fecharMenu}>
                    Sobre
                  </Link>
                  <Link className="mobile-nav-link" to={contatoDestino} onClick={fecharMenu}>
                    Contato
                  </Link>
                </div>

                <a
                  className="cta-button cta-whatsapp mt-auto w-full"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={fecharMenu}
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  Fale no WhatsApp
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main id="conteudo-principal" key={location.pathname} className="route-fade min-h-screen">
        <Outlet />
      </main>

      <footer id="contato" className="site-footer scroll-mt-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_1.3fr_0.8fr] lg:gap-14 lg:py-16">
          <div>
            <img
              src={logoAdv}
              alt="Logotipo Juliano Silveira Advocacia"
              className="mx-auto w-full max-w-[230px] border border-[#D8C294]/35 shadow-2xl lg:mx-0"
              width="1024"
              height="1024"
              loading="lazy"
              decoding="async"
            />
            <p className="mx-auto mt-5 max-w-xs text-center text-sm leading-relaxed text-[#EDE7DC]/65 lg:mx-0 lg:text-left">
              Atendimento jurídico seguro, próximo e comprometido com cada história.
            </p>
          </div>

          <div>
            <h2 className="footer-heading">Contato e atendimento</h2>
            <address className="mt-6 space-y-4 not-italic">
              <a
                className="footer-contact"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={19} aria-hidden="true" />
                <span>
                  <strong>WhatsApp</strong>
                  <small>17 981045910</small>
                </span>
              </a>
              <a
                className="footer-contact"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={19} aria-hidden="true" />
                <span>
                  <strong>Instagram</strong>
                  <small>@adv.julianosilveira</small>
                </span>
              </a>
              <a className="footer-contact" href={`mailto:${EMAIL}`}>
                <Mail size={19} aria-hidden="true" />
                <span>
                  <strong>E-mail</strong>
                  <small className="break-all">{EMAIL}</small>
                </span>
              </a>
              <div className="footer-contact items-start">
                <Clock3 size={19} className="mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Horário de atendimento</strong>
                  <small>Segunda à Sexta - 09h00 as 17h00</small>
                </span>
              </div>
            </address>
          </div>

          <div>
            <h2 className="footer-heading">Atalhos</h2>
            <nav
              className="mt-6 flex flex-col items-center gap-3 lg:items-start"
              aria-label="Atalhos do rodapé"
            >
              <Link className="footer-link" to="/">
                Início
              </Link>
              <Link className="footer-link" to="/#sobre">
                Sobre
              </Link>
              <Link className="footer-link" to="/areas-de-atuacao">
                Áreas de Atuação
              </Link>
              <Link className="footer-link" to={contatoDestino}>
                Contato
              </Link>
            </nav>
            <a
              className="cta-button cta-gold mx-auto mt-7 w-full max-w-[240px] lg:mx-0"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-[#EDE7DC]/10 px-5 py-5 text-center text-xs leading-relaxed text-[#EDE7DC]/55 sm:text-sm">
          © Juliano Silveira Advocacia — OAB/SP nº 556.823. Todos os direitos reservados.
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp md:hidden"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle size={27} aria-hidden="true" />
      </a>
    </div>
  )
}
