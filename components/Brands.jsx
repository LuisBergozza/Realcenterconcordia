/* Marcas parceiras — carrossel infinito (marquee CSS, pausa no hover).
   Logos em /public/assets/img/Marcas. Para adicionar uma marca, basta
   incluir { name, src } na lista abaixo. */
const BRANDS = [
  { name: "ArcelorMittal", src: "/assets/img/Marcas/Ativo 1@4x.png" },
  { name: "Plasbil Revestimentos", src: "/assets/img/Marcas/Ativo 2@4x.png" },
  { name: "Quick-Step", src: "/assets/img/Marcas/Sem Título-1.png" },
  { name: "Balcony", src: "/assets/img/Marcas/logo_site.png" },
  { name: "Supremo Cimentos", src: "/assets/img/Marcas/logo-supremo.png" },
  { name: "Embramaco", src: "/assets/img/Marcas/escolha-logo-porcelanato.png" },
  { name: "Votorantim Cimentos", src: "/assets/img/Marcas/Logotipo_da_Votorantim_Cimentos.svg.png" },
  { name: "Castelli", src: "/assets/img/Marcas/castelli.png" },
  { name: "Deca", src: "/assets/img/Marcas/deca-logo-png_seeklogo-250034.png" },
  { name: "Delta", src: "/assets/img/Marcas/delta.png" },
  { name: "Eucafloor", src: "/assets/img/Marcas/eucafloor.png" },
  { name: "Gerdau", src: "/assets/img/Marcas/gerdau.png" },
  { name: "Graddus", src: "/assets/img/Marcas/graddus.png" },
  { name: "Gaudí Porcelanato", src: "/assets/img/Marcas/imagem-logomarca-gaudi-porcelanato-gaudi-porcelanato-1696516995-0510232023114315.png" },
  { name: "Docol", src: "/assets/img/Marcas/logo-docol.png" },
];

export default function Brands() {
  // Duplicamos a lista para o loop ficar contínuo (sem "salto").
  const loop = [...BRANDS, ...BRANDS];

  return (
    <section className="section section--muted" id="marcas" aria-labelledby="marcas-title">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Marcas parceiras</p>
          <h2 id="marcas-title" className="section__title section__title--sm">
            Trabalhamos apenas com marcas reconhecidas.
          </h2>
        </header>
      </div>

      <div className="marquee reveal" aria-label="Marcas parceiras">
        <ul className="marquee__track">
          {loop.map((brand, i) => (
            <li className="brand" key={`${brand.name}-${i}`} aria-hidden={i >= BRANDS.length}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.src}
                alt={brand.name}
                className="brand__img"
                loading="lazy"
                width="200"
                height="64"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
