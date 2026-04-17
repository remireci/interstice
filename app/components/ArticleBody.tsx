"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

type MarginalNote = {
  id: string;
  text: Record<Locale, string>;
  anchorParagraph: number;
};

type GhostFragment = {
  id: string;
  text: Record<Locale, string>;
  anchorParagraph: number;
};

type Props = {
  html: string;
  locale: Locale;
  marginalia?: MarginalNote[];
  ghosts?: GhostFragment[];
};

function ParagraphGhost({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`ghost-layer ${isVisible ? "ghost-layer--visible" : ""}`}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}

export function ArticleBody({
  html,
  locale,
  marginalia = [],
  ghosts = [],
}: Props) {
  const paragraphs = html
    .split("</p>")
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => p + "</p>");

  return (
    <div className="article-grid">
      {paragraphs.map((paragraph, index) => {
        const paragraphIndex = index + 1;

        const notes = marginalia.filter(
          (m) => m.anchorParagraph === paragraphIndex,
        );

        const paragraphGhosts = ghosts.filter(
          (g) => g.anchorParagraph === paragraphIndex,
        );

        return (
          <Fragment key={paragraphIndex}>
            <div className="paragraph-row">
              <div
                className="paragraph-content"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />

              {notes.map((note) => (
                <aside key={note.id} className="marginal-note">
                  {note.text[locale]}
                </aside>
              ))}

              {paragraphGhosts.map((ghost) => (
                <ParagraphGhost key={ghost.id} text={ghost.text[locale]} />
              ))}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
