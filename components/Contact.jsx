export default function Contact() {
  return (
    <section className="section" id="contato" aria-labelledby="contato-title">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Contato &amp; Localização</p>
          <h2 id="contato-title" className="section__title">
            Vamos conversar sobre sua obra.
          </h2>
          <p className="section__text section__text--center">
            Nossa equipe está pronta para atender você com a atenção que seu projeto merece.
          </p>
        </header>

        <ul className="contact-info contact-info--row reveal">
          <li>
            <span className="contact-info__icon" aria-hidden="true">📍</span>
            <div>
              <strong>Endereço</strong>
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.+Dr.+Maruri,+1563,+Centro,+Concórdia+-+SC,+89700-158"
                target="_blank"
                rel="noopener noreferrer"
              >
                R. Dr. Maruri, 1563 — Térreo, Centro — Concórdia/SC — CEP 89700-158
              </a>
            </div>
          </li>
          <li>
            <span className="contact-info__icon" aria-hidden="true">📞</span>
            <div>
              <strong>Telefone / WhatsApp</strong>
              <a href="tel:+554934449110">(49) 3444-9110</a>
            </div>
          </li>
          <li>
            <span className="contact-info__icon" aria-hidden="true">🕐</span>
            <div>
              <strong>Horário de atendimento</strong>
              <span>Segunda a sexta, 7h às 18h · Sábado, 7h às 12h</span>
            </div>
          </li>
        </ul>

        <div className="contact-cta reveal">
          <a
            href="https://wa.me/554934449110?text=Olá! Gostaria de solicitar um orçamento."
            className="btn btn--primary btn--lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="map reveal" aria-label="Mapa da localização">
        {/* Embed do Google Maps (sem chave de API) apontando para o endereço real */}
        <iframe
          title="Localização da Real Center em Concórdia/SC"
          src="https://www.google.com/maps?q=R.+Dr.+Maruri,+1563,+Centro,+Concórdia+-+SC,+89700-158&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
