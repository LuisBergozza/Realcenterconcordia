import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Numbers from "@/components/Numbers";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import Differentials from "@/components/Differentials";
import StoreStructure from "@/components/StoreStructure";
import Showroom from "@/components/Showroom";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Sobre a Real Center */}
        <About />
        {/* 3. Números da Empresa */}
        <Numbers />
        {/* 4. Tudo para sua obra (linhas de produtos + popup) */}
        <Products />
        {/* 5. Marcas Parceiras (carrossel infinito) */}
        <Brands />
        {/* 6. Por que escolher a Real Center? */}
        <Differentials />
        {/* 7. Estrutura da Loja */}
        <StoreStructure />
        {/* 8. Projetos Inspiradores / Showroom */}
        <Showroom />
        {/* 9 e 10. Contato / CTA / Localização */}
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
