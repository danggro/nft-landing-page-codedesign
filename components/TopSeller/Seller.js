import Image from "next/image";

export default function Seller(props) {
  return (
    <div>
      <Image src={props.src} alt={props.alt} />
      <p className="mt-4 text-xl font-medium text-center">{props.name}</p>
    </div>
  );
}
