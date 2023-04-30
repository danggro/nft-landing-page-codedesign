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
          <CardCategories href="/" src={Art} alt="Art" ctg="Art" />
          <CardCategories
            href="/"
            src={Collection}
            alt="Collection"
            ctg="Collection"
          />
          <CardCategories
            href="/"
            src={DomainName}
            alt="DomainName"
            ctg="Domain Name"
          />
          <CardCategories href="/" src={Music} alt="Music" ctg="Music" />
          <CardCategories
            href="/"
            src={Photography}
            alt="Photography"
            ctg="Photography"
          />
          <CardCategories href="/" src={Sport} alt="Sport" ctg="Sport" />
          <CardCategories
            href="/"
            src={TradingCard}
            alt="TradingCard"
            ctg="Trading Card"
          />
          <CardCategories href="/" src={Utility} alt="Utility" ctg="Utility" />
        </div>
      </Container>
    </section>
  );
}
