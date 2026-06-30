export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow reveal">Materiais de Construção &amp; Acabamentos</p>
          <h1 id="hero-title" className="hero__title reveal">
            Tudo para a sua obra, com a solidez de quem{" "}
            <em>constrói confiança</em>.
          </h1>
          <p className="hero__lead reveal">
            Desde 2007, a Real Center reúne as melhores marcas, atendimento
            especializado e a credibilidade de uma referência em Concórdia e região.
          </p>
          <div className="hero__actions reveal">
            <a href="#contato" className="btn btn--primary">
              Solicitar orçamento
            </a>
            <a href="#produtos" className="btn btn--outline">
              Nossos produtos
            </a>
          </div>
        </div>

        {/* TROCAR: vídeo ou fotos profissionais da loja.
            Para usar vídeo, descomente o bloco <video> abaixo e
            remova a div .hero__visual-img. */}
        <div className="hero__visual reveal" aria-hidden="true">
          {/*
          <video
            className="hero__visual-video"
            autoPlay muted loop playsInline
            poster="/assets/img/hero-poster.jpg"
          >
            <source src="/assets/img/hero.mp4" type="video/mp4" />
          </video>
          */}
          <div className="hero__visual-img"></div>
          <div className="hero__visual-badge">
            <strong>+19</strong>
            <span>
              anos construindo
              <br />
              junto com você
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
