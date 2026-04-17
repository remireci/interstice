import type { Locale } from "@/lib/i18n";

type MarginalNote = {
  sourceLabel?: Record<Locale, string>;
  quote?: Record<Locale, string>;
  comment: Record<Locale, string>;
};

type BodyBlock = {
  id: string;
  html: Record<Locale, string>;
  marginalNote?: MarginalNote;
};

export function ArticleBlocks({
  blocks,
  locale,
}: {
  blocks: BodyBlock[];
  locale: Locale;
}) {
  return (
    <div className="article-blocks">
      {blocks.map((block) => (
        <div key={block.id} className="block-row">
          <div
            className="block-content prose"
            dangerouslySetInnerHTML={{ __html: block.html[locale] }}
          />

          {block.marginalNote ? (
            <aside
              className="marginal-note marginal-note--composite"
              aria-label="Marginal note"
            >
              {block.marginalNote ? (
                <aside
                  className="marginal-note marginal-note--composite"
                  aria-label="Marginal note"
                >
                  {block.marginalNote.quote?.[locale] ? (
                    <span className="marginal-note__quote-wrap">
                      {block.marginalNote.sourceLabel?.[locale] ? (
                        <span className="marginal-note__source">
                          {block.marginalNote.sourceLabel[locale]}
                        </span>
                      ) : null}
                      <span className="marginal-note__quote">
                        {block.marginalNote.quote[locale]}
                      </span>
                    </span>
                  ) : null}
                </aside>
              ) : null}

              <span className="marginal-note__comment">
                {block.marginalNote.comment[locale]}
              </span>
            </aside>
          ) : null}
        </div>
      ))}
    </div>
  );
}
