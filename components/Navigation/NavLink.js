import LinkNav from "./LinkNav";

export default function NavLink() {
  return (
    <ul className="flex gap-10">
      <LinkNav href="#Auction">Auction</LinkNav>
      <LinkNav href="#">Community</LinkNav>
      <LinkNav href="#">Explore</LinkNav>
    </ul>
  );
}
