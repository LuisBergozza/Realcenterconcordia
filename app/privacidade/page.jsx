import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Real Center Materiais de Construção e Acabamentos, em conformidade com a LGPD.",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <main className="legal" id="conteudo">
      <div className="container legal__inner">
        <p className="eyebrow">Política de Privacidade</p>
        <h1 className="legal__title">Como tratamos os seus dados</h1>
        <p className="legal__updated">Última atualização: junho de 2026</p>

        <p>
          A <strong>Real Center Materiais de Construção e Acabamentos</strong>{" "}
          (CNPJ 03.451.272/0001-04) valoriza a sua privacidade e está comprometida
          com a proteção dos seus dados pessoais, em conformidade com a Lei nº
          13.709/2018 (Lei Geral de Proteção de Dados — LGPD).
        </p>

        <h2>1. Quais dados coletamos</h2>
        <p>
          Coletamos apenas os dados que você nos fornece voluntariamente — como nome,
          telefone, e-mail e o conteúdo das mensagens enviadas pelo formulário de
          contato ou por nossos canais de atendimento.
        </p>

        <h2>2. Como utilizamos os dados</h2>
        <p>
          Utilizamos os seus dados exclusivamente para responder solicitações,
          elaborar orçamentos e prestar atendimento. Não comercializamos nem
          compartilhamos os seus dados com terceiros para fins de marketing.
        </p>

        <h2>3. Compartilhamento</h2>
        <p>
          Os dados poderão ser compartilhados apenas quando necessário para a
          execução do atendimento (por exemplo, logística de entrega) ou para o
          cumprimento de obrigações legais.
        </p>

        <h2>4. Seus direitos</h2>
        <p>
          Você pode, a qualquer momento, solicitar a confirmação, o acesso, a
          correção ou a exclusão dos seus dados pessoais, bem como revogar o
          consentimento concedido. Para isso, entre em contato pelos nossos canais
          oficiais.
        </p>

        <h2>5. Contato</h2>
        <p>
          Em caso de dúvidas sobre esta Política ou sobre o tratamento dos seus
          dados, fale conosco:
        </p>
        <ul className="legal__contact">
          <li>Telefone / WhatsApp: (49) 3444-9110</li>
          {/* TROCAR: e-mail oficial */}
          <li>E-mail: contato@realcenter.com.br</li>
          <li>
            Endereço: R. Dr. Maruri, 1563 — Térreo, Centro — Concórdia/SC — CEP
            89700-158
          </li>
        </ul>

        <p className="legal__back">
          <Link href="/">← Voltar para a página inicial</Link>
        </p>
      </div>
    </main>
  );
}
