import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    title: "Manifesto",
    intro:
      "Interstice is an international collective of artists and writers with a changing composition.",
    paragraphs: [
      "The collective publishes texts and interventions at the intersection of immanent critique, system critique, art, and political analysis.",
      "Interstice invites writers and artists to submit contributions. Each submission is reviewed anonymously by the current members of the collective.",
      "Anyone who publishes a contribution is considered a member for at least one year and commits to taking part in the review of new submissions.",
      "Interstice works exclusively on the basis of arguments, not on the basis of references, reputation, or position.",
      "The collective is not a closed circle but a working form: provisional, critical, and open to new voices.",
    ],
  },
  nl: {
    title: "Manifest",
    intro:
      "Interstice is een internationaal collectief van kunstenaars en schrijvers met een wisselende bezetting.",
    paragraphs: [
      "Het collectief publiceert teksten en interventies op het snijvlak van immanente kritiek, systeemkritiek, kunst en politieke analyse.",
      "Interstice nodigt schrijvers en kunstenaars uit om bijdragen in te dienen. Elke inzending wordt anoniem beoordeeld door de huidige leden van het collectief.",
      "Wie een bijdrage publiceert, wordt voor minstens één jaar als lid beschouwd en engageert zich om nieuwe bijdragen mee te beoordelen.",
      "Interstice werkt uitsluitend op grond van argumenten, niet op basis van referenties, reputatie of positie.",
      "Het collectief is geen gesloten kring, maar een werkvorm: tijdelijk, kritisch en open voor nieuwe stemmen.",
    ],
  },
  fr: {
    title: "Manifeste",
    intro:
      "Interstice est un collectif international d’artistes et d’écrivains à composition variable.",
    paragraphs: [
      "Le collectif publie des textes et des interventions au croisement de la critique immanente, de la critique du système, de l’art et de l’analyse politique.",
      "Interstice invite les écrivains et les artistes à soumettre des contributions. Chaque proposition est évaluée anonymement par les membres actuels du collectif.",
      "Toute personne qui publie une contribution est considérée comme membre pour au moins un an et s’engage à participer à l’évaluation des nouvelles propositions.",
      "Interstice travaille exclusivement sur la base des arguments, et non sur celle des références, de la réputation ou de la position.",
      "Le collectif n’est pas un cercle fermé mais une forme de travail : provisoire, critique et ouverte à de nouvelles voix.",
    ],
  },
} as const;

export default async function ManifestoPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <article className="article-shell">
      <header className="article-header">
        <p className="article-kicker">Interstice</p>
        <h1 className="article-title">{t.title}</h1>
        <p className="article-intro">{t.intro}</p>
      </header>

      <div className="article-main prose">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
