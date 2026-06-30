const CARDS = [
  {
    icon: "◈",
    title: "Atendimento especializado",
    text: "Nossa equipe está preparada para orientar e ajudar você a encontrar as melhores soluções para cada etapa da obra ou reforma.",
  },
  {
    icon: "❖",
    title: "Produtos selecionados",
    text: "Trabalhamos com marcas reconhecidas e uma curadoria de produtos para garantir qualidade, durabilidade e confiança.",
  },
  {
    icon: "▣",
    title: "Estrutura e agilidade para atender você",
    text: "Com ampla estrutura, estoque preparado e processos ágeis, oferecemos mais praticidade e eficiência do início ao fim da compra.",
  },
  {
    icon: "✦",
    title: "Preço justo para construir melhor",
    text: "Condições competitivas e excelente custo-benefício para você realizar sua obra com qualidade sem gastar além do necessário.",
  },
];

export default function Differentials() {
  return (
    <section className="section section--dark" id="diferenciais" aria-labelledby="dif-title">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Por que escolher a Real Center</p>
          <h2 id="dif-title" className="section__title">
            Motivos para construir com a gente.
          </h2>
        </header>

        <div className="whychoose">
          {/* TROCAR: imagem da seção (loja, equipe ou ambiente) */}
          <div className="whychoose__media reveal" aria-hidden="true"></div>

          <div className="cards cards--2">
            {CARDS.map((card) => (
              <article className="card reveal" key={card.title}>
                <div className="card__icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
