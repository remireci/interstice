"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Locale } from "@/lib/i18n";

const labels = {
  nl: {
    open: "Lees het editoriaal",
    close: "Sluiten",
  },
  en: {
    open: "Read the editorial",
    close: "Close",
  },
  fr: {
    open: "Lire l’éditorial",
    close: "Fermer",
  },
} as const;

export function EditorialPanel({
  locale,
  title,
  html,
}: {
  locale: Locale;
  title: string;
  html: string;
}) {
  const [open, setOpen] = useState(false);
  //   const [mounted, setMounted] = useState(false);
  const t = labels[locale];

  //   useLayoutEffect(() => {
  //     setMounted(true);
  //   }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const overlay = open ? (
    <div
      className="editorial-layer"
      aria-hidden={false}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      <button
        type="button"
        className="editorial-backdrop"
        onClick={() => setOpen(false)}
        aria-label={t.close}
        style={{
          position: "fixed",
          inset: 0,
          border: 0,
          background: "rgba(17, 17, 17, 0.16)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          pointerEvents: "auto",
        }}
      />

      <aside
        className="editorial-float prose"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{
          position: "fixed",
          top: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(34rem, calc(100vw - 2rem))",
          maxHeight: "calc(100vh - 2rem)",
          overflow: "auto",
          padding: 0,
          background: "rgba(247, 247, 245, 0.9)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(17, 17, 17, 0.12)",
          boxShadow: "0 18px 48px rgba(0, 0, 0, 0.14)",
          pointerEvents: "auto",
        }}
      >
        <div
          className="editorial-float__header"
          style={{
            position: "sticky",
            top: 0,
            margin: 0,
            padding: "0.95rem 1rem 0.85rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
            background: "rgba(247, 247, 245, 0.94)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderBottom: "1px solid rgba(17, 17, 17, 0.1)",
            zIndex: 2,
          }}
        >
          {/* <h2
            className="editorial-float__title"
            style={{
              margin: 0,
              fontSize: "0.98rem",
              lineHeight: 1.15,
              fontFamily: "var(--font-ui)",
            }}
          >
            {title}
          </h2> */}
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.68rem",
              lineHeight: 1.3,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(17, 17, 17, 0.54)",
            }}
          >
            {locale === "nl"
              ? "Brontekst"
              : locale === "fr"
                ? "Texte source"
                : "Source text"}
          </span>

          <button
            type="button"
            className="editorial-float__close"
            onClick={() => setOpen(false)}
            style={{
              padding: 0,
              border: 0,
              background: "transparent",
              fontFamily: "var(--font-ui)",
              fontSize: "0.88rem",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {t.close}
          </button>
        </div>

        <div
          className="editorial-float__body"
          style={{
            padding: "1rem",
            fontSize: "0.97rem",
            lineHeight: 1.68,
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </aside>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        className="editorial-trigger"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0.95rem 0 0",
          padding: "0.45rem 0.7rem",
          border: "1px solid rgba(17, 17, 17, 0.14)",
          borderRadius: "999px",
          background: "rgba(17, 17, 17, 0.04)",
          fontFamily: "var(--font-ui)",
          fontSize: "0.9rem",
          fontWeight: 500,
          lineHeight: 1.2,
          color: "var(--color-text)",
          textDecoration: "none",
          boxShadow: "0 1px 0 rgba(17, 17, 17, 0.03)",
          cursor: "pointer",
        }}
      >
        {t.open}
      </button>

      {/* {mounted ? createPortal(overlay, document.body) : null} */}
      {open ? createPortal(overlay, document.body) : null}
    </>
  );
}
