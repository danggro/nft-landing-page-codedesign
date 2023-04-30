import Link from "next/link";
import Container from "../Container";
import LinkFooter1 from "./LinkFooter-1";
import LogoFooter from "./LogoFooter";

export default function Footer() {
  return (
    <footer className="relative pt-[160px]">
      <div className="absolute w-screen bottom-0 h-[227px] bg-primary/20 -z-10"></div>
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-10">
            <div className="w-[408px]">
              <a href="#header">
                <LogoFooter />
              </a>
              <p className="mt-10 text-lg font-medium">
                MahyuNFT is the largest NFTs Marketplace of Etherium (ETH). Buy,
                sell, and discover exclusive digital items.
              </p>
            </div>
            <ul className="space-y-5">
              <LinkFooter1 href="/">About us</LinkFooter1>
              <LinkFooter1 href="/">
                Frequently Asked Questions (FAQ)
              </LinkFooter1>
              <LinkFooter1 href="/">Help Center</LinkFooter1>
              <LinkFooter1 href="/">How to Buy and Sell</LinkFooter1>
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium">
              Subscribe MahyuNFT for newsletter right now!
            </p>
            <div className="flex gap-3 mt-5">
              <input
                type="email"
                placeholder="Insert your email here"
                className="rounded-[11px] text-lg px-5 py-4 bg-white/40 border outline-none border-white text-[#d9d9d9] "
              />
              <button className="px-8 py-2 text-lg font-medium bg-primary rounded-[11px] hover:underline border border-transparent hover:border-white">
                Sent
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className=" bg-primary mt-[60px]">
        <Container>
          <div className="flex justify-between py-5">
            <p className="text-lg">&copy; 2023 Mahyu.my.id</p>
            <ul className="flex gap-[30px]">
              <li>
                <Link href="/" className="text-lg hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
