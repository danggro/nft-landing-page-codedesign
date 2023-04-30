import Image from "next/image";

export default function CardAuction(props) {
  return (
    <div className="flex gap-5 p-5 rounded-xl gdr-auction-2">
      <Image src={props.src} alt={props.alt} className="flex-shrink-0" />
      <div className="space-y-1">
        <h6 className="pr-8 text-lg font-bold">{props.title}</h6>
        <span className="flex justify-between">
          <p className="font-medium">{props.price} ETH</p>
          <p className="text-primary-2">{props.time}</p>
        </span>
      </div>
    </div>
  );
}
