import Link from "next/link";
import Container from "../Container";
import TitleSection from "../TitleSection";
import Arrow from "./Icon/Arrow";
import Image from "next/image";
import AucLeft from "@/public/auction/AucLeft.png";
import BlueCheck from "@/public/auction/BlueCheck.png";
import Button from "../Button";
import CardAuction from "./CardAuction";
import Auction1 from "@/public/auction/Auction-1.png";
import Auction2 from "@/public/auction/Auction-2.png";
import Auction3 from "@/public/auction/Auction-3.png";
import Auction4 from "@/public/auction/Auction-4.png";

export default function SectionAuction() {
  return (
    <section className="pt-10" id="Auction">
      <Container>
        <div className="flex items-center justify-evenly">
          <div className="w-5/12 ">
            <div className="rounded-[32px] gdr-auction-1 p-10">
              <div className="flex items-center justify-between">
                <TitleSection>🔥 Item Ending Soon</TitleSection>
                <Link href={"/"} className="mt-1 hover:opacity-80">
                  <Arrow />
                </Link>
              </div>
              <Image src={AucLeft} alt="AucLeft" className="my-[30px]" />
              <div className="space-y-3">
                <h6 className="font-bold text-26">Hurricane (Common Body)</h6>
                <div className="flex items-center gap-3">
                  <p className="text-xl font-medium">by Spider Tanks</p>
                  <Image src={BlueCheck} alt="BlueCheck" />
                </div>
              </div>
              <div className="flex justify-between my-10">
                <div className="space-y-3">
                  <p className="text-xl font-medium text-[#9747FF]">
                    Current Bid
                  </p>
                  <p className="font-bold text-32">0.0079 ETH</p>
                </div>
                <div className="space-y-3">
                  <p className="text-xl font-medium text-[#9747FF]">
                    Remaining Time
                  </p>
                  <p className="font-bold text-right text-32">12:34:02</p>
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="large">Place a Bid</Button>
                <Button variant="large-trans">View Artwork</Button>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <TitleSection>New Auction</TitleSection>
            <div className="mt-8 space-y-3 mb-7">
              <CardAuction
                src={Auction1}
                alt="Auction1"
                title="Somewhere Else:094 - Palm Trees & Basketball"
                price="0.5"
                time="03:23:23"
              />
              <CardAuction
                src={Auction2}
                alt="Auction2"
                title="Somewhere Else:094 - Palm Trees & Basketball"
                price="0.5"
                time="03:23:23"
              />
              <CardAuction
                src={Auction3}
                alt="Auction3"
                title="Somewhere Else:094 - Palm Trees & Basketball"
                price="0.5"
                time="03:23:23"
              />
              <CardAuction
                src={Auction4}
                alt="Auction4"
                title="Somewhere Else:094 - Palm Trees & Basketball"
                price="0.5"
                time="03:23:23"
              />
            </div>
            <div className="flex justify-end">
              <Link
                className="flex items-center gap-5 w-fit hover:underline"
                href={"/"}
              >
                View All Auction
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
