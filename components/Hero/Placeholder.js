export default function Placeholder(props) {
  return (
    <div className="flex gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        fill="none"
        viewBox="0 0 21 21"
      >
        <ellipse
          cx="9.767"
          cy="10.001"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          rx="8.989"
          ry="8.977"
        ></ellipse>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.018 16.71l3.524 3.511"
        ></path>
      </svg>
      <span className="font-medium text-secondary/70">{props.children}</span>
    </div>
  );
}
