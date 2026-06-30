"use client";

import { useEffect, useState } from "react";

/* Linhas de produtos. Cada grupo abre um popup com seus itens organizados.
   TROCAR/COMPLETAR itens conforme o catálogo real da loja. */
const GROUPS = [
  {
    key: "construcao-bruta",
    name: "Construção Bruta",
    desc: "A base sólida para erguer a sua obra.",
    items: ["Cimento", "Cal", "Areia", "Brita", "Blocos", "Tijolos", "Vergalhões"],
  },
  {
    key: "acabamentos",
    name: "Acabamentos",
    desc: "O toque final que transforma ambientes.",
    items: [
      "Porcelanatos",
      "Pisos",
      "Revestimentos",
      "Rodapés",
      "Rejuntes",
      "Placas vinílicas",
    ],
  },
  {
    key: "banheiro",
    name: "Banheiro",
    desc: "Louças, metais e acessórios completos.",
    items: ["Vasos", "Cubas", "Torneiras", "Chuveiros", "Acessórios"],
  },
  {
    key: "hidraulica",
    name: "Hidráulica",
    desc: "Tudo para a instalação de água e esgoto.",
    items: ["Tubos", "Conexões", "Caixas d'água", "Bombas"],
  },
];

export default function Products() {
  const [openKey, setOpenKey] = useState(null);
  const active = GROUPS.find((g) => g.key === openKey) || null;

  /* Fecha com ESC e trava o scroll do body enquanto o popup está aberto */
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setOpenKey(null);
    document.addEventListener("keydown", onKey);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [active]);

  return (
    <section className="section" id="produtos" aria-labelledby="prod-title">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Tudo para a sua obra</p>
          <h2 id="prod-title" className="section__title">
            Da fundação ao acabamento, em um só lugar.
          </h2>
          <p className="section__text section__text--center">
            Explore nossas linhas de produtos. Clique em uma categoria para ver
            tudo o que ela reúne.
          </p>
        </header>

        <div className="categories">
          {GROUPS.map((g) => (
            <button
              type="button"
              className="category reveal"
              key={g.key}
              onClick={() => setOpenKey(g.key)}
              aria-haspopup="dialog"
            >
              {/* TROCAR: foto representativa da categoria (background via CSS) */}
              <span className="category__overlay"></span>
              <span className="category__label">{g.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Popup / Modal ---------- */}
      {active && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setOpenKey(null)}
        >
          <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              aria-label="Fechar"
              onClick={() => setOpenKey(null)}
            >
              ✕
            </button>
            <p className="eyebrow">Linha de produtos</p>
            <h3 id="modal-title" className="modal__title">
              {active.name}
            </h3>
            <p className="modal__desc">{active.desc}</p>

            <ul className="modal__items">
              {active.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="modal__foot">
              <a href="#contato" className="btn btn--primary" onClick={() => setOpenKey(null)}>
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
