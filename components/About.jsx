export default function About() {
  return (
    <section className="section" id="sobre" aria-labelledby="sobre-title">
      <div className="container grid-2 grid-2--about">
        <div className="reveal">
          <p className="eyebrow">Sobre a Real Center</p>
          <h2 id="sobre-title" className="section__title">
            Uma referência em construção e acabamentos.
          </h2>
          <p className="section__text">
            Mais do que uma loja de materiais, a Real Center é um parceiro para quem
            busca qualidade, confiança e bom atendimento.
          </p>
          <p className="section__text">
            Do alicerce ao acabamento final, acompanhamos cada etapa do seu projeto
            com a credibilidade de quem é reconhecido pela excelência no atendimento e
            pela parceria com as melhores marcas do mercado.
          </p>

          {/* Mini-cards de destaques institucionais */}
          <ul className="about__facts">
            <li>
              <strong>2007</strong>
              <span>Ano de fundação</span>
            </li>
            <li>
              <strong>+4.000 m²</strong>
              <span>Loja &amp; depósito</span>
            </li>
            <li>
              <strong>+40</strong>
              <span>Colaboradores</span>
            </li>
          </ul>

          <ul className="check-list">
            <li>Curadoria de produtos de qualidade</li>
            <li>Atendimento técnico e consultivo</li>
            <li>Ambiente preparado para inspirar</li>
            <li>Compromisso com prazo e entrega</li>
          </ul>
        </div>

        {/* TROCAR: fotos da loja e foto aérea do depósito */}
        <div className="about__media reveal" aria-hidden="true">
          <div className="about__img about__img--1"></div>
          <div className="about__img about__img--2"></div>
          <div className="about__badge">
            <strong>Confiança</strong>
            <span>Padrão de qualidade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
