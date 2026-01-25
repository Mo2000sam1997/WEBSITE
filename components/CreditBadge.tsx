import Image from "next/image";

interface CreditBadgeProps {
  amount: number | string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function CreditBadge({ amount, size = "md", className = "" }: CreditBadgeProps) {
  const sizes = {
    sm: { icon: 16, text: "text-xs" },
    md: { icon: 20, text: "text-sm" },
    lg: { icon: 28, text: "text-base" },
    xl: { icon: 36, text: "text-lg" },
  };

  const { icon, text } = sizes[size];

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <Image
        src="/images/credit-icon.png"
        alt="credits"
        width={icon}
        height={icon}
        className="flex-shrink-0"
      />
      <span className={`font-medium text-text-primary ${text}`}>{amount}</span>
    </span>
  );
}
