"use client";

import Link from "next/link";

export default function EarlyAccessButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formSection = document.getElementById('early-access');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Link href="#early-access" className="cta-button" onClick={handleClick}>
      Get Early Access
    </Link>
  );
}
