import Image from "next/image";
import Container from "../Container";
import Placeholder from "./Placeholder";
import HeroPic from "@/public/HeroPic.png";

export default function SectionHero() {
  return (
    <section className="pt-20" id="header">
      <Container>
        <div className="relative">
          <Image
            src={HeroPic}
            alt="HeroPic"
            className="absolute top-0 w-full h-full -z-10"
          />
          <div className="w-6/12 mx-auto text-center pt-[200px] pb-[60px] space-y-11">
            <h1 className="font-black font-inter text text-[100px] text-hero">
              Collect your NFTs Here!
            </h1>
            <div className="relative">
              <input
                id="inputHero"
                type="text"
                className="border outline-none border-white rounded-full px-[105px] py-[14px] input-hero peer backdrop-blur-sm"
              />
              <label
                className="absolute focus:hidden top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] peer-focus:hidden"
                htmlFor="inputHero"
              >
                <Placeholder>Find your NFT</Placeholder>
              </label>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
