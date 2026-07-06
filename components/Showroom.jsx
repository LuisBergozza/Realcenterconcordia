/* Projetos Inspiradores / Showroom — ambientes por categoria.
   TROCAR: fotos próprias ou cedidas pelas marcas (background via CSS). */
const AMBIENTS = [
  { label: "Cozinhas", className: "gallery__item gallery__item--lg reveal" },
  { label: "Banheiros", className: "gallery__item reveal" },
  { label: "Fachadas", className: "gallery__item reveal" },
  { label: "Áreas gourmet", className: "gallery__item reveal" },
  { label: "Salas", className: "gallery__item gallery__item--wide reveal" },
  { label: "Áreas externas", className: "gallery__item reveal" },
];

export default function Showroom() {
  return (
    <section className="section section--muted" id="projetos" aria-labelledby="show-title">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Projetos inspiradores</p>
          <h2 id="show-title" className="section__title">
            Inspire-se em ambientes reais.
          </h2>
          <p className="section__text section__text--center">
            Ideias e combinações para visualizar o resultado do seu projeto antes mesmo
            de começar.
          </p>
        </header>

        <div className="gallery">
          {AMBIENTS.map((item) => (
            <figure className={item.className} key={item.label}>
              <span>{item.label}</span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
