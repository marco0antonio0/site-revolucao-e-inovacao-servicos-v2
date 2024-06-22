import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Revolução e Inovação Belém - Serviços para Condomínios e Empresas</title>
        <meta name="description" content="A Revolução e Inovação em Belém oferece soluções personalizadas de portaria, limpeza e administração para condomínios e empresas. Entre em contato para saber mais." />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:title" content="Revolução e Inovação Belém - Serviços para Condomínios" />
        <meta property="og:description" content="A Revolução e Inovação em Belém oferece soluções personalizadas de portaria, limpeza e administração para condomínios e empresas. Entre em contato para saber mais." />
        <meta property="og:image" content="images/preview.png" />
        <meta property="og:url" content="https://www.revolucaoeinovacao.com" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:title" content="Revolução e Inovação Belém - Serviços para Condomínios" />
        <meta name="twitter:description" content="A Revolução e Inovação em Belém oferece soluções personalizadas de portaria, limpeza e administração para condomínios e empresas. Entre em contato para saber mais." />
        <meta name="twitter:image" content="images/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* <!-- Additional SEO Meta Tags --> */}
        <meta name="keywords" content="Revolução e Inovação, Belém, serviços para condomínios, portaria, limpeza, administração, empresas, eventos" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
