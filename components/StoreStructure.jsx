/* Estrutura da Loja — galeria com fotos reais (/public/assets/img/Estrutura). */
const AREAS = [
  { label: "Entrada", src: "/assets/img/Estrutura/Entrada.webp" },
  { label: "Vitrine", src: "/assets/img/Estrutura/Vitirne (3).webp" },
  { label: "Vitrine", src: "/assets/img/Estrutura/Vitirne (4).webp" },
  { label: "Lounge", src: "/assets/img/Estrutura/Lounge.webp" },
  { label: "Expositores de Porcelanatos", src: "/assets/img/Estrutura/Expositores Porcelanatos (1).webp" },
  { label: "Expositores de Porcelanatos", src: "/assets/img/Estrutura/Expositores Porcelanatos (2).webp" },
  { label: "Expositores de Porcelanatos", src: "/assets/img/Estrutura/Expositores Porcelanatos (3).webp" },
  { label: "Louças e Metais", src: "/assets/img/Estrutura/Louças e Metais.webp" },
  { label: "Louças e Metais", src: "/assets/img/Estrutura/Louças e Metais 2.webp" },
  { label: "Bacias Sanitárias", src: "/assets/img/Estrutura/Bacias Sanitárias.webp" },
  { label: "Espaço Kids", src: "/assets/img/Estrutura/Espaço Kids.webp" },
  { label: "Caixa", src: "/assets/img/Estrutura/Caixa.webp" },
];

export default function StoreStructure() {
  return (
    <section className="section" id="estrutura" aria-labelledby="estrutura-title">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Estrutura da loja</p>
          <h2 id="estrutura-title" className="section__title">
            Um espaço pensado para a sua melhor experiência.
          </h2>
          <p className="section__text section__text--center">
            Da entrada aos expositores, cada ambiente foi preparado para receber
            você com conforto e organização.
          </p>
        </header>

        <div className="gallery">
          {AREAS.map((area) => (
            <figure
              className="gallery__item reveal"
              key={area.src}
              style={{ backgroundImage: `url("${area.src}")` }}
            >
              <span>{area.label}</span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
