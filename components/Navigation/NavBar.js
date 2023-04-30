import Button from "../Button";
import Container from "../Container";
import Wallet from "./Icon/Wallet";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";

export default function NavBar() {
  return (
    <nav className="fixed bg-black top-0 w-screen z-50 py-[10px]">
      <Container>
        <div className="flex items-center justify-between">
          <NavLogo />
          <NavLink />
          <Button variant="small" icon={<Wallet />}>
            My Wallet
          </Button>
        </div>
      </Container>
    </nav>
  );
}
