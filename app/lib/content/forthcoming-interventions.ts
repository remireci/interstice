import type { Locale } from "@/lib/i18n";

export type ForthcomingIntervention = {
  slug: string;
  expectedAt?: string;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
};

export const forthcomingInterventions: ForthcomingIntervention[] = [
  {
    slug: "editorial-context-de-witte-raaf",
    expectedAt: "2026-05",
    title: {
      en: "On editorial refusal and institutional framing",
      nl: "Over redactionele weigering en institutionele kadering",
      fr: "Sur le refus éditorial et le cadrage institutionnel",
    },
    intro: {
      en: "A forthcoming intervention examining the editorial and institutional context in which a response was not published.",
      nl: "Een aankomende interventie die de redactionele en institutionele context onderzoekt waarin een reactie niet werd opgenomen.",
      fr: "Une intervention à venir analysant le contexte éditorial et institutionnel dans lequel une réaction n’a pas été publiée.",
    },
  },
];
