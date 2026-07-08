/* Projetos Inspiradores / Showroom — 4 fotos empilhadas + vídeo vertical ao lado. */
const PHOTOS = [
  "/assets/img/Showroom/foto 1.webp",
  "/assets/img/Showroom/foto 2.webp",
  "/assets/img/Showroom/foto 3.webp",
  "/assets/img/Showroom/foto 4.webp",
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

        <div className="showroom">
          <div className="showroom__photos reveal">
            {PHOTOS.map((src, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img key={src} src={src} alt={`Ambiente inspirador ${i + 1}`} loading="lazy" width="2160" height="960" />
            ))}
          </div>

          <div className="showroom__video reveal">
            <video autoPlay muted loop playsInline preload="metadata" poster="/assets/videos/showroom-poster.webp">
              <source src="/assets/videos/showroom.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
