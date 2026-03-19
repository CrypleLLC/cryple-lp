"use client";

import Link from "next/link";

interface GetAppButtonProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

export default function GetAppButton({ className = "btn-primary", style, text = "Get Early Access" }: GetAppButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formSection = document.getElementById('early-access');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Link href="#early-access" className={className} onClick={handleClick} style={style}>
      {text}
    </Link>
  );
}
