import Container from "../Container";
import TitleSection from "../TitleSection";
import Seller from "./Seller";
import Seller1 from "@/public/seller/Ellipse-1.png";
import Seller2 from "@/public/seller/Ellipse-2.png";
import Seller3 from "@/public/seller/Ellipse-3.png";
import Seller4 from "@/public/seller/Ellipse-4.png";
import Seller5 from "@/public/seller/Ellipse-5.png";
import Seller6 from "@/public/seller/Ellipse-6.png";
import Seller7 from "@/public/seller/Ellipse-7.png";
import Seller8 from "@/public/seller/Ellipse-8.png";

export default function SectionTopSeller() {
  return (
    <section className="pt-[60px]">
      <Container>
        <div className="text-center">
          <TitleSection>TOP SELLER</TitleSection>
          <div className="flex justify-center gap-10 mt-10">
            <Seller src={Seller1} alt="Seller1" name="RizKhen" />
            <Seller src={Seller2} alt="Seller2" name="Jhiehe" />
            <Seller src={Seller3} alt="Seller3" name="Fukiep" />
            <Seller src={Seller4} alt="Seller4" name="Hags" />
            <Seller src={Seller5} alt="Seller5" name="Berhans" />
            <Seller src={Seller6} alt="Seller6" name="Abdiliee" />
            <Seller src={Seller7} alt="Seller7" name="Wetur Art" />
            <Seller src={Seller8} alt="Seller8" name="Pokko" />
          </div>
        </div>
      </Container>
    </section>
  );
}
