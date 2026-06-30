/* Estrutura da Loja — galeria das áreas físicas.
   TROCAR: cada item recebe uma foto real (background via CSS .gallery__item). */
const AREAS = [
  { label: "Fachada", className: "gallery__item gallery__item--lg reveal" },
  { label: "Showroom", className: "gallery__item reveal" },
  { label: "Corredores", className: "gallery__item reveal" },
  { label: "Setor de acabamentos", className: "gallery__item reveal" },
  { label: "Estoque", className: "gallery__item gallery__item--wide reveal" },
  { label: "Atendimento", className: "gallery__item reveal" },
  { label: "Caixa", className: "gallery__item reveal" },
  { label: "Estacionamento", className: "gallery__item gallery__item--wide reveal" },
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
            Da fachada ao estacionamento, cada ambiente foi preparado para receber
            você com conforto e organização.
          </p>
        </header>

        <div className="gallery">
          {AREAS.map((area) => (
            <figure className={area.className} key={area.label}>
              <span>{area.label}</span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
