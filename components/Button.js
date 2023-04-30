export default function Button(props) {
  const variants = {
    small: "px-8 py-[18px] bg-primary",
    large: "w-[207px] flex justify-center py-5 bg-primary",
    "large-trans": "w-[207px] border-white flex justify-center py-5 btn-trans",
  };
  const pickedVariant = variants[props.variant];
  return (
    <button
      className={`${pickedVariant} border border-transparent hover:border-white hover:underline font-medium text-lg leading-[20px] items-center flex gap-[14px] rounded-[24px]`}
    >
      {props.icon}
      {props.children}
    </button>
  );
}
