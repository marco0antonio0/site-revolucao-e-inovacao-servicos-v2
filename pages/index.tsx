import { Inter } from "next/font/google";
import SectionSobreNos from "@/components/sectionSobreNos";
import Background from "@/components/background";
import Topbar from "@/components/topbar";
import Carrosel from "@/components/carrosel";
import SectionServicos from "@/components/sectionServicos";
import SectionContato from "@/components/sectionContato";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {


  return (
    <main
      className={`flex min-h-screen flex-col  ${inter.className}`}
    >
      <header>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Revolução e Inovação Belém - Serviços para Condomínios e Empresas</title>
        <meta name="description" content="A Revolução e Inovação em Belém oferece soluções personalizadas de portaria, limpeza e administração para condomínios e empresas. Entre em contato para saber mais." />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:title" content="Revolução e Inovação Belém - Serviços para Condomínios" />
        <meta property="og:description" content="A Revolução e Inovação em Belém oferece soluções personalizadas de portaria, limpeza e administração para condomínios e empresas. Entre em contato para saber mais." />
        <meta property="og:image" content="/images/preview.png" />
        <meta property="og:url" content="https://www.revolucaoeinovacao.com" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:title" content="Revolução e Inovação Belém - Serviços para Condomínios" />
        <meta name="twitter:description" content="A Revolução e Inovação em Belém oferece soluções personalizadas de portaria, limpeza e administração para condomínios e empresas. Entre em contato para saber mais." />
        <meta name="twitter:image" content="/images/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* <!-- Additional SEO Meta Tags --> */}
        <meta name="keywords" content="Revolução e Inovação, Belém, serviços para condomínios, portaria, limpeza, administração, empresas, eventos" />
      </header>
      <Background />
      <Topbar selected={[true, false, false]} />
      <Carrosel />
      <SectionSobreNos />
      <SectionServicos />
      <SectionContato />
      <div className="w-[100%] h-[180px] bg-black flex flex-row xxl:h-[120px] lg:h-[100px]"> <span className="text-white opacity-50 m-auto lg:text-sm">Revolução e inovação serviços</span></div>
    </main>
  );
}


