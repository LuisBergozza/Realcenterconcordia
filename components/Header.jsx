"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#projetos", label: "Showroom" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  /* Header dinâmico ao rolar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Trava o scroll do body com o menu mobile aberto */
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  /* Fecha o menu com ESC */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* Destaque do link ativo conforme a seção visível */
  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className="site-header"
      data-header
      {...(scrolled ? { "data-scrolled": "" } : {})}
    >
      <div className="container header__inner">
        <a className="brand" href="#topo" aria-label="Real Center Materiais de Construção — página inicial">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/logo.webp"
            alt="Real Center Materiais de Construção"
            className="brand__logo"
            width="234"
            height="44"
          />
        </a>

        <nav
          className={`nav${open ? " is-open" : ""}`}
          id="nav-principal"
          aria-label="Navegação principal"
        >
          <ul className="nav__list">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? "is-active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav__cta">
              <a href="https://realcenter9.lojavirtualnuvem.com.br/" className="btn btn--soon" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                Loja Online
                <span className="badge">Em breve</span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {open && (
        <div
          className="nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
