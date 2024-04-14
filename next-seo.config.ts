import { NextSeoProps } from "next-seo";

export default {
  title: "Tensfer",
  description:
    "Tensfer facilitates seamless access to your users Web3 Portfolios, empowering them to conduct crypto transfers between accounts directly within your platform.",
  twitter: {
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: "https://tensfer.co",
    title: "Tensfer - Connecting crypto",
    description:
      "Easily and safely access a wide range of crypto data sources, to get a full picture of your user’s crypto activity and offer custom-made products.",
    images: [
      {
        url: "http://localhost:3000/openimage-graph.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
} as NextSeoProps;
