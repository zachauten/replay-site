import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>replaystats.net</title>
        <link
          rel="preload"
          as="font"
          href={asset("/fonts/Londrina_Shadow/LondrinaShadow-Regular.ttf")}
          type="font/ttf"
          crossOrigin={""}
        />
        <link rel="stylesheet" href={asset("/styles.css")} media="screen" />
      </head>
      <body>
        <Header />
        <Component />
        <Footer />
      </body>
    </html>
  );
}
