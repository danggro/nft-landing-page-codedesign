import Link from "next/link";

export default function LinkFooter1(props) {
  return (
    <li>
      <Link
        href={props.href}
        className="text-lg font-bold underline decoration-2 hover:text-primary"
      >
        {props.children}
      </Link>
    </li>
  );
}
