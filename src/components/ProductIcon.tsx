import type { Product } from "@/config/products";

type ProductIconProps = {
  icon: Product["icon"];
};

function ProductIcon({ icon }: ProductIconProps) {
  const className =
    "h-5 w-5 text-on-surface-variant transition-colors duration-300 group-hover:text-primary-container";

  if (icon === "crossroads") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3v6m0 6v6M3 12h6m6 0h6M6.3 6.3l4.2 4.2m3 3l4.2 4.2M17.7 6.3l-4.2 4.2m-3 3l-4.2 4.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "cek") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12.5l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="5"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 3v4m8-4v4M4 11h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 15l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ProductIcon };
