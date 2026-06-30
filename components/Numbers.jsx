const STATS = [
  { count: 19, suffix: "", prefix: "+", label: "Anos de mercado" },
  { count: 30000, suffix: "", prefix: "+", label: "Clientes atendidos" },
  { count: 5000, suffix: "", prefix: "+", label: "Produtos disponíveis" },
  // TROCAR: confirmar total real (há 15 logos em destaque no carrossel)
  { count: 15, suffix: "", prefix: "+", label: "Marcas parceiras" },
];

export default function Numbers() {
  return (
    <section className="numbers" id="numeros" aria-labelledby="num-title">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Números da empresa</p>
          <h2 id="num-title" className="section__title">
            A solidez de quem construiu uma história.
          </h2>
        </header>
        <ul className="numbers__grid reveal" aria-label="Indicadores da empresa">
          {STATS.map((s) => (
            <li className="numbers__item" key={s.label}>
              <strong
                data-count={s.count}
                data-prefix={s.prefix || ""}
                data-suffix={s.suffix || ""}
              >
                {s.prefix}0
              </strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
