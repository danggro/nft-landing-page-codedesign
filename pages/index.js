import SectionAuction from "@/components/Auction/SectionAuction";
import SectionCategories from "@/components/Categories/SectionCategories";
import Footer from "@/components/Footer/Footer";
import SectionHero from "@/components/Hero/SectionHero";
import NavBar from "@/components/Navigation/NavBar";
import SectionTopSeller from "@/components/TopSeller/SectionTopSeller";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MahyuNFT | Collect Your NFT</title>
      </Head>
      <NavBar />
      <SectionHero />
      <SectionAuction />
      <SectionTopSeller />
      <SectionCategories />
      <Footer />
    </>
  );
}
