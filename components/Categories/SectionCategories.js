import Container from "../Container";
import TitleSection from "../TitleSection";
import CardCategories from "./CardCategories";
import Art from "@/public/categories/Art.png";
import Collection from "@/public/categories/Collection.png";
import DomainName from "@/public/categories/Domain-Name.png";
import Music from "@/public/categories/Music.png";
import Photography from "@/public/categories/Photography.png";
import Sport from "@/public/categories/Sport.png";
import TradingCard from "@/public/categories/Trading-Card.png";
import Utility from "@/public/categories/Utility.png";

export default function SectionCategories() {
  return (
    <section className="pt-[100px]">
      <Container>
        <div className="mb-10 text-center">
          <TitleSection>CATEGORIES</TitleSection>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-5">
          <CardCategories src={Art} alt="Art" ctg="Art" />
          <CardCategories src={Collection} alt="Collection" ctg="Collection" />
          <CardCategories src={DomainName} alt="DomainName" ctg="Domain Name" />
          <CardCategories src={Music} alt="Music" ctg="Music" />
          <CardCategories
            src={Photography}
            alt="Photography"
            ctg="Photography"
          />
          <CardCategories src={Sport} alt="Sport" ctg="Sport" />
          <CardCategories
            src={TradingCard}
            alt="TradingCard"
            ctg="Trading Card"
          />
          <CardCategories src={Utility} alt="Utility" ctg="Utility" />
        </div>
      </Container>
    </section>
  );
}
