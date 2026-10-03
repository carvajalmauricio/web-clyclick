"use client";

import { useState, type ReactNode } from "react";

export const CALENDLY_EVENT_URL = "https://calendly.com/arielvela8910/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

let widgetLoading: Promise<void> | undefined;
function loadWidget() {
  if (widgetLoading) return widgetLoading;
  const styles = new Promise<void>((resolve, reject) => {
    const style = document.createElement("link");
    const timer = window.setTimeout(() => {
      style.remove();
      reject(new Error("Widget timeout"));
    }, 10000);
    style.rel = "stylesheet";
    style.href = "https://assets.calendly.com/assets/external/widget.css";
    style.onload = () => {
      window.clearTimeout(timer);
      resolve();
    };
    style.onerror = () => {
      window.clearTimeout(timer);
      style.remove();
      reject(new Error("Widget unavailable"));
    };
    document.head.append(style);
  });
  const script = new Promise<void>((resolve, reject) => {
    if (window.Calendly) {
      resolve();
      return;
    }
    const element = document.createElement("script");
    const timer = window.setTimeout(() => {
      element.remove();
      reject(new Error("Widget timeout"));
    }, 10000);
    element.src = "https://assets.calendly.com/assets/external/widget.js";
    element.async = true;
    element.onload = () => {
      window.clearTimeout(timer);
      if (window.Calendly) resolve();
      else reject(new Error("Widget unavailable"));
    };
    element.onerror = () => {
      window.clearTimeout(timer);
      element.remove();
      reject(new Error("Widget unavailable"));
    };
    document.body.append(element);
  });
  widgetLoading = Promise.all([styles, script])
    .then(() => undefined)
    .catch((error) => {
      widgetLoading = undefined;
      throw error;
    });
  return widgetLoading;
}

export function CalendlyPopupLink({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const [loading, setLoading] = useState(false);
  const openPopup = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    )
      return;
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await loadWidget();
      window.Calendly!.initPopupWidget({ url: CALENDLY_EVENT_URL });
    } catch {
      window.location.assign(CALENDLY_EVENT_URL);
    } finally {
      setLoading(false);
    }
  };

  return (
    <a
      href={CALENDLY_EVENT_URL}
      onClick={openPopup}
      className={className}
      aria-busy={loading}
    >
      {children}
    </a>
  );
}
