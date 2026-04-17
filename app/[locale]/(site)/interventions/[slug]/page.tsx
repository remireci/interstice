import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { interventions } from "@/lib/content/interventions";
import { locales, type Locale } from "@/lib/i18n";
import { EditorialPanel } from "@/components/editorial-panel";
import { ArticleBlocks } from "@/components/article-blocks";

type Props = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

function getIntervention(slug: string) {
  return interventions.find((item) => item.slug === slug);
}

function buildUrl(locale: Locale, slug: string) {
  return `https://www.interstice.be/${locale}/interventions/${slug}`;
}

export async function generateStaticParams() {
  return interventions.flatMap((post) =>
    locales.map((locale) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getIntervention(slug);

  if (!post) return {};

  return {
    title: post.seoTitle[locale],
    description: post.seoDescription[locale],
    alternates: {
      canonical: buildUrl(locale, slug),
      languages: {
        en: buildUrl("en", slug),
        nl: buildUrl("nl", slug),
        fr: buildUrl("fr", slug),
        "x-default": buildUrl("en", slug),
      },
    },
    openGraph: {
      type: "article",
      url: buildUrl(locale, slug),
      title: post.seoTitle[locale],
      description: post.seoDescription[locale],
      siteName: "Interstice",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle[locale],
      description: post.seoDescription[locale],
    },
  };
}

export default async function InterventionPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getIntervention(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle[locale],
    description: post.seoDescription[locale],
    author: post.authors.map((name) => ({
      "@type": "Organization",
      name,
    })),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: locale,
    mainEntityOfPage: buildUrl(locale, slug),
    publisher: {
      "@type": "Organization",
      name: "Interstice",
      url: "https://www.interstice.be",
    },
  };

  const paragraphs = post.bodyHtml
    ? post.bodyHtml[locale]
        .split("</p>")
        .filter(Boolean)
        .map((chunk) => `${chunk}</p>`)
    : [];

  return (
    <article className="article-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="article-header">
        <p className="article-kicker">Intervention</p>
        <h1 className="article-title">{post.title[locale]}</h1>
        <p className="article-intro">{post.intro[locale]}</p>
      </header>
      <section className="article-context" aria-labelledby="context-heading">
        <h2 id="context-heading" className="section-label">
          {post.contextLabel[locale]}
        </h2>
        <p>{post.contextText[locale]}</p>
        {post.editorialHtml?.[locale] && post.editorialTitle?.[locale] ? (
          <EditorialPanel
            locale={locale}
            title={post.editorialTitle[locale]}
            html={post.editorialHtml[locale]}
          />
        ) : null}
      </section>

      {post.bodyBlocks?.length ? (
        <ArticleBlocks blocks={post.bodyBlocks} locale={locale} />
      ) : (
        <div className="article-grid">
          <div className="article-main prose">
            {paragraphs.map((html, index) => {
              const note = post.marginalia?.find(
                (item) => item.anchorParagraph === index + 1,
              );

              return (
                <div key={index} className="paragraph-row">
                  <div
                    className="paragraph-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  {note ? (
                    <aside className="marginal-note" aria-label="Marginal note">
                      {note.text[locale]}
                    </aside>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {post.bibliographyHtml?.[locale] ? (
        <section
          className="article-bibliography"
          aria-labelledby="bibliography-heading"
        >
          <details>
            <summary id="bibliography-heading">
              {post.bibliographyLabel[locale]}
            </summary>
            <div
              className="prose bibliography-content"
              dangerouslySetInnerHTML={{
                __html: post.bibliographyHtml[locale],
              }}
            />
          </details>
        </section>
      ) : null}
      {/* <ArticleBody
        html={post.bodyHtml[locale]}
        locale={locale}
        marginalia={post.marginalia}
        ghosts={post.ghosts}
      /> */}
    </article>
  );
}
