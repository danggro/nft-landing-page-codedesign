import Image from "next/image";

export default function CardCategories(props) {
  return (
    <div className="p-5 space-y-5 rounded-[32px] gdr-categories">
      <Image src={props.src} alt={props.alt} />
      <p className="text-xl font-bold text-center">{props.ctg}</p>
    </div>
  );
}
