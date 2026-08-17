"use client";

import type { ReactNode } from "react";

export const CALENDLY_EVENT_URL = "https://calendly.com/arielvela8910/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function CalendlyPopupLink({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const openPopup = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!window.Calendly) return;

    event.preventDefault();
    window.Calendly.initPopupWidget({ url: CALENDLY_EVENT_URL });
  };

  return (
    <a href={CALENDLY_EVENT_URL} onClick={openPopup} className={className}>
      {children}
    </a>
  );
}
