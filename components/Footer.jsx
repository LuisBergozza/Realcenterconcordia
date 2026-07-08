export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="footer__wordmark" href="#topo" aria-label="Real Center — topo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/logo.webp" alt="Real Center Materiais de Construção" width="234" height="44" />
          </a>
          <p>
            Tudo para a sua obra, com a credibilidade e a confiança de uma referência
            em Concórdia/SC desde 2007.
          </p>
          <div className="footer__social">
            {/* TROCAR: links reais das redes sociais */}
            <a href="https://instagram.com/realcenter" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://facebook.com/realcenter" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Navegação do rodapé">
          <h3>Navegação</h3>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#estrutura">Estrutura</a></li>
            <li><a href="#projetos">Showroom</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Contato</h3>
          <ul>
            <li>R. Dr. Maruri, 1563 — Térreo, Centro — Concórdia/SC</li>
            <li>CEP 89700-158</li>
            <li><a href="tel:+554934449110">(49) 3444-9110</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Atendimento</h3>
          <ul>
            <li>Segunda a sexta: 7h às 18h</li>
            <li>Sábado: 7h às 11:30h</li>
          </ul>
          <span className="footer__online" aria-disabled="true">
            Loja online <span className="badge">Em breve</span>
          </span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {year} Real Center Materiais de Construção e Acabamentos. Todos os direitos reservados.
          </p>
          <p className="footer__legal">
            <span>CNPJ 03.451.272/0001-04</span>
            <a href="/privacidade">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
