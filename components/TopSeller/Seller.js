import Image from "next/image";
import Link from "next/link";

export default function Seller(props) {
  return (
    <Link href={props.href}>
      <Image src={props.src} alt={props.alt} />
      <p className="mt-4 text-xl font-medium text-center">{props.name}</p>
    </Link>
  );
}
