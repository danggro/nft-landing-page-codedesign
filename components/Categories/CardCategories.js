import Image from "next/image";
import Link from "next/link";

export default function CardCategories(props) {
  return (
    <Link
      href={props.href}
      className="p-5 space-y-5 rounded-[32px] gdr-categories"
    >
      <Image src={props.src} alt={props.alt} />
      <p className="text-xl font-bold text-center">{props.ctg}</p>
    </Link>
  );
}
