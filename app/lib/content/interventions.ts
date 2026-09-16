import type { Locale } from "@/lib/i18n";

export type InterventionBodyBlock = {
  id: string;
  html: Record<Locale, string>;
  marginalNote?: {
    sourceLabel?: Record<Locale, string>;
    quote?: Record<Locale, string>;
    comment: Record<Locale, string>;
  };
};

export type InterventionEntry = {
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  authors: string[];
  seoTitle: Record<Locale, string>;
  seoDescription: Record<Locale, string>;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  listingIntro: Record<Locale, string>;
  contextLabel: Record<Locale, string>;
  contextText: Record<Locale, string>;
  bibliographyLabel: Record<Locale, string>;
  bibliographyHtml?: Record<Locale, string>;
  bodyHtml?: Record<Locale, string>;
  bodyBlocks?: InterventionBodyBlock[];
  marginalia?: Array<{
    id: string;
    text: Record<Locale, string>;
    anchorParagraph: number;
  }>;
  ghosts?: Array<{
    id: string;
    text: Record<Locale, string>;
    anchorParagraph: number;
  }>;
  editorialHtml?: Record<Locale, string>;
  editorialTitle?: Record<Locale, string>;
};

export const interventions: InterventionEntry[] = [
  {
    slug: "christophe-van-gerrewey-de-witte-raaf-response",
    publishedAt: "2026-04-16",
    authors: ["Interstice"],

    seoTitle: {
      en: "Response to Christophe Van Gerrewey on Adorno and thinking",
      nl: "Reactie op Christophe Van Gerrewey over Adorno en denken",
      fr: "Réponse à Christophe Van Gerrewey sur Adorno et la pensée",
    },
    seoDescription: {
      en: "A response to an editorial in De Witte Raaf, examining the misreading of Adorno and the programmatic call for 'better thinking'.",
      nl: "Een reactie op een editoriaal in De Witte Raaf, over de lezing van Adorno en de oproep tot ‘beter denken’.",
      fr: "Une réponse à un éditorial de De Witte Raaf, analysant la lecture d’Adorno et l’appel à « mieux penser ».",
    },
    title: {
      en: "Adorno against the program of the better life",
      nl: "Adorno tegen het programma van het betere leven",
      fr: "Adorno contre le programme de la vie meilleure",
    },
    intro: {
      en: "A response submitted as a readers’ letter to De Witte Raaf and not published. The text addresses a misreading of Adorno and the transformation of critique into program.",
      nl: "Een als lezersbrief ingestuurde maar niet gepubliceerde tekst. De tekst behandelt een verschuiving in de lezing van Adorno en de omzetting van kritiek in een programma.",
      fr: "Un texte soumis comme lettre de lecteur à De Witte Raaf mais non publié. Il examine une lecture d’Adorno et la transformation de la critique en programme.",
    },
    listingIntro: {
      en: "A response to Christophe Van Gerrewey’s editorial in De Witte Raaf, examining his reading of Adorno and the transformation of critique into a program of improvement.",

      nl: "Een reactie op het editoriaal van Christophe Van Gerrewey in De Witte Raaf, over zijn lezing van Adorno en de omzetting van kritiek in een programma van verbetering.",

      fr: "Une réponse à l’éditorial de Christophe Van Gerrewey dans De Witte Raaf, consacrée à sa lecture d’Adorno et à la transformation de la critique en programme d’amélioration.",
    },
    contextLabel: {
      en: "Context",
      nl: "Context",
      fr: "Contexte",
    },
    contextText: {
      en: "This text was submitted as a readers’ letter following an editorial by Christophe Van Gerrewey in De Witte Raaf. In correspondence, the editor indicated that readers’ responses are welcomed, and acknowledged a significant conceptual error in the editorial. The response was nevertheless not published.",
      nl: "Deze tekst werd ingestuurd als lezersreactie op een editoriaal van Christophe Van Gerrewey in De Witte Raaf. In correspondentie gaf de hoofdredacteur aan dat lezersreacties welkom zijn, en erkende hij een belangrijke denkfout in het editoriaal. De reactie werd desondanks niet opgenomen.",
      fr: "Ce texte a été soumis comme réaction de lecteur à un éditorial de Christophe Van Gerrewey dans De Witte Raaf. Dans la correspondance, le rédacteur en chef a indiqué que les réactions de lecteurs sont bienvenues et a reconnu une erreur conceptuelle importante dans l’éditorial. La réponse n’a néanmoins pas été publiée.",
    },
    bibliographyLabel: {
      en: "Selected context and bibliography",
      nl: "Geselecteerde context en bibliografie",
      fr: "Contexte et bibliographie sélective",
    },

    bibliographyHtml: {
      en: `
        <ul>
          <li>Selected publications by Christophe Van Gerrewey.</li>
          <li>Relevant references to De Witte Raaf.</li>
          <li>Editorial note by Interstice.</li>
        </ul>
      `,
      nl: `
        <ul>
          <li>Geselecteerde publicaties van Christophe Van Gerrewey.</li>
          <li>Relevante verwijzingen naar De Witte Raaf.</li>
          <li>Redactionele noot van Interstice.</li>
        </ul>
      `,
      fr: `
        <ul>
          <li>Publications sélectionnées de Christophe Van Gerrewey.</li>
          <li>Références pertinentes à De Witte Raaf.</li>
          <li>Note éditoriale d’Interstice.</li>
        </ul>
      `,
    },
    bodyHtml: {
      en: `      <p><strong>On the neutralization of negative dialectics</strong></p>

      <p>The January issue of De Witte Raaf was presented by its editor-in-chief Christophe Van Gerrewey under the title “What is called thinking?”...</p>

      <p>(Full translation or placeholder if you don’t translate yet)</p>
      <p class="follow-up-note">
A subsequent intervention will examine the editorial and institutional context in which this response was not published.
</p>
      `,
      nl: `      <p><strong>Over de neutralisering van negatieve dialectiek</strong></p>

      <p>Het januarinummer van De Witte Raaf werd door hoofdredacteur Christophe Van Gerrewey gepresenteerd onder de titel ‘Wat heet denken?’...</p>

      <!-- (👉 hier laat je je volledige tekst staan zoals je hem gaf, ongewijzigd) -->

      <p>De crisis waarin de westerse democratieën zich bevinden, is wellicht eerder gelinkt aan ‘gebrekkig lezen’ dan aan ‘gebrekkig denken’. Door een lezing die het ontologische niveau verschuift, ontneemt de editorialist het denken van Adorno zijn interne weerstand en neutraliseert zo zijn kritische spanning. Dat is niet zonder ironie.</p>

        <p class="follow-up-note">
Een latere interventie zal de redactionele en institutionele context analyseren waarin deze reactie niet werd opgenomen.
</p>
      `,
      fr: `      <p><strong>Sur la neutralisation de la dialectique négative</strong></p>

      <p>Le numéro de janvier de De Witte Raaf a été présenté par son rédacteur en chef Christophe Van Gerrewey sous le titre « Qu’appelle-t-on penser ? »...</p>

      <p>(Traduction à venir)</p>
      <p class="follow-up-note">
Une intervention suivante analysera le contexte éditorial et institutionnel dans lequel cette réaction n’a pas été publiée.
</p>
`,
    },
    marginalia: [
      {
        id: "m1",
        anchorParagraph: 4,
        text: {
          en: "This reverses Heidegger: his work is precisely a sustained critique of modern thinking.",
          nl: "Dit keert Heidegger om: zijn werk is juist een volgehouden kritiek op het moderne denken.",
          fr: "Cela inverse Heidegger : son œuvre est précisément une critique soutenue de la pensée moderne.",
        },
      },
      {
        id: "m2",
        anchorParagraph: 4,
        text: {
          en: "A fundamental critique is reduced to rhetorical prelude.",
          nl: "Een fundamentele kritiek wordt herleid tot retorische opstap.",
          fr: "Une critique fondamentale est réduite à un simple prélude rhétorique.",
        },
      },
      {
        id: "m3",
        anchorParagraph: 6,
        text: {
          en: "The ‘therein’ does not refer to a human desire for understanding.",
          nl: "Dat ‘daarin’ verwijst niet naar een menselijk verlangen naar begrip.",
          fr: "Le « là-dedans » ne renvoie pas à un désir humain de compréhension.",
        },
      },
      {
        id: "m4",
        anchorParagraph: 7,
        text: {
          en: "This is where immanent critique becomes anthropology.",
          nl: "Hier wordt immanente kritiek antropologie.",
          fr: "C’est ici que la critique immanente devient anthropologie.",
        },
      },
      {
        id: "m5",
        anchorParagraph: 8,
        text: {
          en: "Adorno’s silence is not failure but a dialectical moment.",
          nl: "Adorno’s verstommen is geen tekort, maar een dialectisch moment.",
          fr: "Le mutisme chez Adorno n’est pas un manque, mais un moment dialectique.",
        },
      },
      {
        id: "m6",
        anchorParagraph: 9,
        text: {
          en: "Thinking is turned into output.",
          nl: "Denken wordt hier omgezet in output.",
          fr: "La pensée est ici convertie en production.",
        },
      },
      {
        id: "m7",
        anchorParagraph: 9,
        text: {
          en: "Art appears as fuel for a program.",
          nl: "Kunst verschijnt hier als brandstof voor een programma.",
          fr: "L’art apparaît ici comme combustible d’un programme.",
        },
      },
      {
        id: "m8",
        anchorParagraph: 11,
        text: {
          en: "The misreading is not incidental; it neutralizes resistance.",
          nl: "De foute lezing is niet bijkomstig; ze neutraliseert weerstand.",
          fr: "Le contresens n’est pas accessoire ; il neutralise la résistance.",
        },
      },
    ],
    ghosts: [
      {
        id: "g1",
        anchorParagraph: 4,
        text: {
          en: "“the important lines of reasoning must and will still emerge”",
          nl: "‘de belangrijke redeneringen moeten en zullen zich nog aandienen’",
          fr: "« les raisonnements importants doivent et vont encore advenir »",
        },
      },
      {
        id: "g2",
        anchorParagraph: 8,
        text: {
          en: "“thinking neither stops nor falls silent”",
          nl: "‘het denken stopt noch verstomt’",
          fr: "« la pensée ne s’arrête ni ne se tait »",
        },
      },
    ],
    bodyBlocks: [
      {
        id: "b1",
        html: {
          nl: `
        <p><strong>Over de neutralisering van negatieve dialectiek</strong></p>
        <p>Het januarinummer van <em>De Witte Raaf</em> werd door hoofdredacteur Christophe Van Gerrewey gepresenteerd onder de titel ‘Wat heet denken?’. Van de teksten in deze editie wordt in het editoriaal gesteld dat ze de uitdaging aangaan ‘om beter te denken, vanuit de overtuiging dat alleen zo een beter leven binnen bereik komt’.</p>
        <p>Bij een overtreffende trap hoort doorgaans een referentiepunt, maar dit wordt niet expliciet door de editorialist vernoemd. De lezer kan veronderstellen dat het thema zich plaatst tegen de achtergrond van de malaise waarin de westerse democratieën zich sinds enkele decennia bevinden. Vervolgens rijst de vraag of er in de afgelopen decennia ‘niet goed genoeg is gedacht’.</p>
      `,
          en: `
        <p><strong>On the neutralization of negative dialectics</strong></p>
        <p>The January issue of <em>De Witte Raaf</em> was presented by editor-in-chief Christophe Van Gerrewey under the title “What is called thinking?”. In the editorial, the texts in this issue are said to take up the challenge “to think better, from the conviction that only thus a better life comes within reach”.</p>
        <p>A comparative usually presupposes a point of reference, yet this is not explicitly named by the editorialist. The reader may suppose that the theme is set against the background of the malaise in which Western democracies have found themselves for several decades. The question then arises whether, in those decades, things have “not been thought well enough”.</p>
      `,
          fr: `
        <p><strong>Sur la neutralisation de la dialectique négative</strong></p>
        <p>Le numéro de janvier de <em>De Witte Raaf</em> a été présenté par son rédacteur en chef Christophe Van Gerrewey sous le titre « Qu’appelle-t-on penser ? ». L’éditorial affirme que les textes réunis dans ce numéro relèvent le défi de « mieux penser, dans la conviction que c’est seulement ainsi qu’une vie meilleure devient accessible ».</p>
        <p>Un comparatif suppose généralement un point de référence, mais celui-ci n’est pas explicitement nommé par l’éditorialiste. Le lecteur peut supposer que le thème s’inscrit sur fond du malaise dans lequel les démocraties occidentales se trouvent depuis plusieurs décennies. Se pose alors la question de savoir si, durant ces dernières décennies, on n’aurait « pas pensé assez bien ».</p>
      `,
        },
      },

      {
        id: "b2",
        html: {
          nl: `
        <p>Sinds de Tweede Wereldoorlog is een enorme hoeveelheid denkwerk verricht dat expliciet gericht was op maatschappelijke transformatie. Op socio-politiek en institutioneel vlak valt te denken aan de oprichting van de Verenigde Naties, de Universele Verklaring van de Rechten van de Mens, of de voortschrijdende Europese integratie. Theoretische interventies zoals het postkoloniale denken van Frantz Fanon en Edward Said, de structurele kritiek op het eurocentrisme, of feministische en genderkritische analyses bij auteurs als Simone de Beauvoir en Judith Butler, hebben ingegrepen in bestaande kaders van representatie en macht. Zulke denkbewegingen hebben niet mechanisch, maar via complexe institutionele, sociale en politieke processen bijgedragen aan verschuivingen die voor velen reële verbeteringen van levensomstandigheden hebben betekend.</p>
        <p>Dat dergelijke verworvenheden vandaag onder druk staan, bewijst niet dat er ‘onvoldoende’ is gedacht, maar veeleer dat de verhouding tussen denken en maatschappelijke werkelijkheid geen lineair of afdwingbaar karakter heeft.</p>
      `,
          en: `
        <p>Since the Second World War, an enormous amount of thought has been produced that was explicitly directed toward social transformation. On the socio-political and institutional level, one may think of the founding of the United Nations, the Universal Declaration of Human Rights, or the ongoing process of European integration. Theoretical interventions such as the postcolonial thought of Frantz Fanon and Edward Said, structural critiques of Eurocentrism, or feminist and gender-critical analyses by authors such as Simone de Beauvoir and Judith Butler have intervened in existing frameworks of representation and power. Such movements of thought have contributed, not mechanically but through complex institutional, social, and political processes, to shifts that have meant real improvements in living conditions for many.</p>
        <p>That such achievements are under pressure today does not prove that there has been “insufficient” thinking, but rather that the relation between thought and social reality is neither linear nor enforceable.</p>
      `,
          fr: `
        <p>Depuis la Seconde Guerre mondiale, une quantité considérable de travail théorique a été accomplie en vue d’une transformation sociale. Sur les plans socio-politique et institutionnel, on peut penser à la création des Nations unies, à la Déclaration universelle des droits de l’homme, ou encore à l’intégration européenne en cours. Des interventions théoriques telles que la pensée postcoloniale de Frantz Fanon et Edward Said, la critique structurelle de l’eurocentrisme, ou encore les analyses féministes et critiques du genre chez des auteurs comme Simone de Beauvoir et Judith Butler, sont intervenues dans des cadres établis de représentation et de pouvoir. De tels mouvements de pensée ont contribué, non pas mécaniquement mais à travers des processus institutionnels, sociaux et politiques complexes, à des déplacements qui ont signifié pour beaucoup de réelles améliorations des conditions de vie.</p>
        <p>Que de tels acquis soient aujourd’hui sous pression ne prouve pas qu’on aurait « insuffisamment » pensé, mais plutôt que le rapport entre la pensée et la réalité sociale n’a rien de linéaire ni de contraignable.</p>
      `,
        },
      },

      {
        id: "b3",
        html: {
          nl: `
        <p>Tegen deze achtergrond doet de editorialist beroep op het denken van Adorno, maar niet nadat eerst Heidegger is opgevoerd. De wijze waarop dat gebeurt, verdient overigens zelf een korte bedenking. Heideggers uitspraak dat wij ‘nog niet denken’ verwijst niet naar een tekort aan intellectuele inspanning, maar naar een fundamentele kritiek op het moderne, berekenende denken. Heidegger bedoelt met ‘niet denken’ niet een gebrek aan ideeën, maar een onvermogen om zich te verhouden tot wat zich aan het berekenende denken onttrekt. Door het citaat te gebruiken als retorische opstap naar een oproep tot ‘beter denken’, wordt Heideggers fundamentele kritiek op het berekenende denken verschoven naar het niveau van een oproep tot intellectuele verbetering.</p>
        <p>Dat vervolgens Adorno als correctief wordt ingevoerd, is veelzeggend. Alsof het westerse denken eerst door Heidegger heen moet om zich daarna, via Adorno, moreel te zuiveren. Maar wie de complexe verhouding tussen Adorno en Heidegger kent, weet dat ook hier geen eenvoudige oplossing voorhanden is.</p>
      `,
          en: `
        <p>Against this background, the editorialist turns to Adorno, but only after first introducing Heidegger. The manner in which this is done already calls for a brief remark. Heidegger’s statement that we “do not yet think” does not refer to a lack of intellectual effort, but to a fundamental critique of modern, calculative thinking. By “not thinking”, Heidegger does not mean a shortage of ideas, but an incapacity to relate to what escapes calculative thought. By using the quotation as a rhetorical prelude to a call for “better thinking”, Heidegger’s fundamental critique of calculative thought is shifted onto the level of an appeal to intellectual improvement.</p>
        <p>That Adorno is then introduced as a corrective is telling. It is as if Western thought must first pass through Heidegger and then, via Adorno, morally purify itself. But anyone familiar with the complex relation between Adorno and Heidegger knows that no simple solution is available here either.</p>
      `,
          fr: `
        <p>Dans ce contexte, l’éditorialiste fait appel à la pensée d’Adorno, mais non sans avoir d’abord convoqué Heidegger. La manière dont cela se produit mérite d’ailleurs elle-même une brève remarque. Lorsque Heidegger affirme que nous « ne pensons pas encore », il ne vise pas un manque d’effort intellectuel, mais une critique fondamentale de la pensée moderne, calculante. Par « ne pas penser », Heidegger n’entend pas une absence d’idées, mais une incapacité à se rapporter à ce qui échappe à la pensée calculante. En utilisant cette citation comme prélude rhétorique à un appel à « mieux penser », la critique heideggérienne de la pensée calculante est déplacée au niveau d’une exhortation à l’amélioration intellectuelle.</p>
        <p>Le fait qu’Adorno soit ensuite introduit comme correctif est révélateur. Comme si la pensée occidentale devait d’abord passer par Heidegger pour ensuite, via Adorno, se purifier moralement. Mais quiconque connaît la relation complexe entre Adorno et Heidegger sait qu’il n’existe pas non plus ici de solution simple.</p>
      `,
        },
        marginalNote: {
          sourceLabel: {
            nl: "Uit het editoriaal",
            en: "From the editorial",
            fr: "De l’éditorial",
          },
          quote: {
            nl: `‘Toch laat Heidegger na te bekritiseren welke ideeën het zijn die een tijdsgewricht bedenkelijk maken, en schuift hij de taak voor zich uit om anders te denken.’`,
            en: `“Yet Heidegger fails to criticize which ideas make an age troubling, and postpones the task of thinking otherwise.”`,
            fr: `« Pourtant, Heidegger ne critique pas les idées qui rendent une époque inquiétante et remet à plus tard la tâche de penser autrement. »`,
          },
          comment: {
            nl: `Dit keert Heidegger om: zijn werk is juist een volgehouden kritiek op het moderne denken.`,
            en: `This reverses Heidegger: his work is precisely a sustained critique of modern thinking.`,
            fr: `Cela inverse Heidegger : son œuvre est précisément une critique soutenue de la pensée moderne.`,
          },
        },
      },

      {
        id: "b4",
        html: {
          nl: `
        <p>Ter ondersteuning van zijn betoog citeert de editorialist vervolgens uit <em>Negative Dialektik</em> (1966) een passage die deel uitmaakt van Adorno’s kritiek op de naoorlogse heropleving van ontologie, met name in Heideggers seinsdenken. Adorno analyseert de wijze waarop het ontologische denken, in zijn streven naar zuiverheid en zelfgenoegzame geslotenheid, dreigt te verstarren. Het citaat sluit aan op een passage waar het grammaticale en conceptuele onderwerp ‘de ontologie’ is. Wanneer hij schrijft dat wat zich daarin toont niet zozeer mystieke meditatie is als wel de nood van een denken dat zijn andersheid zoekt, verwijst dat ‘daarin’ naar de zelfinsluiting en ritualisering van de ontologie. Het verwijst niet naar een algemeen menselijk verlangen naar begrip, zoals de editorialist stelt.</p>
      `,
          en: `
        <p>To support his argument, the editorialist then quotes a passage from <em>Negative Dialectics</em> (1966), a passage that belongs to Adorno’s critique of the postwar revival of ontology, especially Heidegger’s thinking of Being. Adorno analyzes the way ontological thought, in its striving for purity and self-sufficient closure, risks hardening into rigidity. The quotation follows a passage in which the grammatical and conceptual subject is “ontology”. When Adorno writes that what appears “therein” is not so much mystical meditation as the distress of a thought seeking what is other than itself, that “therein” refers to the self-enclosure and ritualization of ontology. It does not refer to a general human desire for understanding, as the editorialist claims.</p>
      `,
          fr: `
        <p>Pour étayer son propos, l’éditorialiste cite ensuite un passage de <em>Dialectique négative</em> (1966), passage qui s’inscrit dans la critique adornienne de la reprise d’après-guerre de l’ontologie, notamment dans la pensée de l’Être chez Heidegger. Adorno analyse la manière dont la pensée ontologique, dans sa quête de pureté et de clôture autosuffisante, risque de se figer. La citation s’enchaîne à un passage dont le sujet grammatical et conceptuel est « l’ontologie ». Lorsqu’il écrit que ce qui s’y manifeste n’est pas tant une méditation mystique que la détresse d’une pensée cherchant ce qui est autre qu’elle-même, ce « y » renvoie à l’auto-enfermement et à la ritualisation de l’ontologie. Il ne renvoie pas à un désir humain général de compréhension, comme l’affirme l’éditorialiste.</p>
      `,
        },
        marginalNote: {
          sourceLabel: {
            nl: "Uit het editoriaal",
            en: "From the editorial",
            fr: "De l’éditorial",
          },
          quote: {
            nl: `‘Het menselijke verlangen naar begrip wordt niet ernstig genomen ...’`,
            en: `“The human desire for understanding is not taken seriously ...”`,
            fr: `« Le désir humain de compréhension n’est pas pris au sérieux ... »`,
          },
          comment: {
            nl: `Dat ‘daarin’ verwijst bij Adorno niet naar een menselijk verlangen naar begrip.`,
            en: `In Adorno, the “therein” does not refer to a human desire for understanding.`,
            fr: `Chez Adorno, le « là-dedans » ne renvoie pas à un désir humain de compréhension.`,
          },
        },
      },

      {
        id: "b5",
        html: {
          nl: `
        <p>Bij Adorno gaat het helemaal niet over een oproep tot beter denken, noch over maatschappelijk ingrijpen of morele optimalisering. Adorno analyseert de interne dynamiek van de ontologie zelf: de angst van het begrip om in de confrontatie met het niet-identieke zijn eigen aanspraken te verliezen, en de tendens van de filosofie om uit die angst te verstarren tot een ritueel gebaar.</p>
        <p>De lezing van de editorialist doet het analyseniveau subtiel maar beslissend verschuiven. Een immanente kritiek van een filosofische vorm wordt zo een antropologische observatie, en van daaruit een programmatische oproep om ‘beter te denken’. De negatieve diagnose wordt aldus omgebogen tot een motiverend gebaar.</p>
      `,
          en: `
        <p>In Adorno, this is not at all a call for better thinking, nor for social intervention or moral optimization. Adorno is analyzing the internal dynamics of ontology itself: the fear of the concept that, in confronting the non-identical, it may lose its own claims, and philosophy’s tendency, out of this fear, to rigidify into ritual gesture.</p>
        <p>The editorialist’s reading subtly yet decisively shifts the level of analysis. An immanent critique of a philosophical form thus becomes an anthropological observation, and from there a programmatic appeal to “think better”. The negative diagnosis is thereby converted into a motivating gesture.</p>
      `,
          fr: `
        <p>Chez Adorno, il ne s’agit nullement d’un appel à mieux penser, ni d’une invitation à l’intervention sociale ou à l’optimisation morale. Adorno analyse la dynamique interne de l’ontologie elle-même : la peur du concept de perdre ses propres prétentions dans la confrontation avec le non-identique, et la tendance de la philosophie à se figer, à partir de cette peur, en geste rituel.</p>
        <p>La lecture de l’éditorialiste déplace subtilement mais décisivement le niveau d’analyse. Une critique immanente d’une forme philosophique devient ainsi une observation anthropologique, puis un appel programmatique à « mieux penser ». Le diagnostic négatif se trouve dès lors infléchi en geste motivant.</p>
      `,
        },
        marginalNote: {
          sourceLabel: {
            nl: "Uit het editoriaal",
            en: "From the editorial",
            fr: "De l’éditorial",
          },
          quote: {
            nl: `‘om beter te denken, vanuit de overtuiging dat alleen zo een beter leven binnen bereik komt’`,
            en: `“to think better, from the conviction that only thus a better life comes within reach”`,
            fr: `« mieux penser, dans la conviction que c’est seulement ainsi qu’une vie meilleure devient accessible »`,
          },
          comment: {
            nl: `Hier wordt immanente kritiek omgebogen tot programma.`,
            en: `Here, immanent critique is bent back into program.`,
            fr: `Ici, la critique immanente est transformée en programme.`,
          },
        },
      },

      {
        id: "b6",
        html: {
          nl: `
        <p>De overgang in het editoriaal is veelzeggend. Waar Adorno schrijft dat in het verstommen van de filosofie ‘ook iets waars’ roert, volgt onmiddellijk de stelling van de editorialist dat het denken ‘stopt noch verstomt’. Wat bij Adorno verschijnt als een moment van waarheid – een terughoudendheid tegenover het niet-identieke, een weigering om het andere onder het begrip te subsumeren – wordt hier impliciet hernomen als een tekort dat overwonnen moet worden. Bij Adorno is verstommen geen tekort maar een dialectisch moment. Voor de editorialist wordt het een te vermijden toestand.</p>
        <p>Bij Adorno impliceert het verstommen een vorm van conceptuele bescheidenheid: denken dat zijn grenzen erkent en zich niet onmiddellijk in culturele productie vertaalt. Het editoriaal daarentegen koppelt denken direct aan interventie, aan lezen als voorbereiding, aan essays als bijdragen tot een beter leven. Dat is geen detailverschil, maar een andere denkethiek. Deze programmatische inschakeling van Adorno’s denken gaat gepaard met een instrumentalisering van kunst en cultuur, die hier vooral als ‘brandstof voor het denken’ worden opgevoerd – alsof hun waarde afhangt van hun bijdrage aan een intellectueel project, en niet van hun eigen logica.</p>
      `,
          en: `
        <p>The transition in the editorial is telling. Where Adorno writes that in philosophy’s falling silent “something true also stirs”, the editorialist immediately follows with the claim that thinking “neither stops nor falls silent”. What appears in Adorno as a moment of truth — a restraint before the non-identical, a refusal to subsume the other under the concept — is here implicitly taken up as a deficiency that must be overcome. In Adorno, falling silent is not a deficiency but a dialectical moment. For the editorialist, it becomes a state to be avoided.</p>
        <p>In Adorno, this falling silent implies a form of conceptual modesty: a thinking that recognizes its limits and does not immediately translate itself into cultural production. The editorial, by contrast, links thinking directly to intervention, to reading as preparation, to essays as contributions to a better life. This is not a minor difference, but a different ethics of thought. This programmatic enlistment of Adorno’s thinking goes together with an instrumentalization of art and culture, which appear here primarily as “fuel for thought” — as if their value depended on their contribution to an intellectual project rather than on their own logic.</p>
      `,
          fr: `
        <p>Le passage opéré dans l’éditorial est révélateur. Là où Adorno écrit que dans le mutisme de la philosophie « quelque chose de vrai se remue aussi », l’éditorialiste enchaîne immédiatement avec l’affirmation selon laquelle la pensée « ne s’arrête ni ne se tait ». Ce qui apparaît chez Adorno comme un moment de vérité — une retenue à l’égard du non-identique, un refus de subsumer l’autre sous le concept — est ici implicitement repris comme un manque à dépasser. Chez Adorno, le mutisme n’est pas un déficit mais un moment dialectique. Pour l’éditorialiste, il devient un état à éviter.</p>
        <p>Chez Adorno, ce mutisme implique une forme de modestie conceptuelle : une pensée qui reconnaît ses limites et ne se traduit pas immédiatement en production culturelle. L’éditorial, au contraire, relie directement la pensée à l’intervention, la lecture à la préparation, les essais à des contributions à une vie meilleure. Il ne s’agit pas d’une nuance de détail, mais d’une autre éthique de la pensée. Cette mobilisation programmatique de la pensée d’Adorno s’accompagne d’une instrumentalisation de l’art et de la culture, ici présentés surtout comme un « carburant pour la pensée » — comme si leur valeur dépendait de leur contribution à un projet intellectuel plutôt que de leur logique propre.</p>
      `,
        },
        marginalNote: {
          sourceLabel: {
            nl: "Uit het editoriaal",
            en: "From the editorial",
            fr: "De l’éditorial",
          },
          quote: {
            nl: `‘Dat het denken, hoe het ook moge heten, stopt noch verstomt’`,
            en: `“That thinking, whatever its name may be, neither stops nor falls silent”`,
            fr: `« Que la pensée, quel que soit son nom, ne s’arrête ni ne se taise »`,
          },
          comment: {
            nl: `Verstommen is hier geen tekort, maar een dialectisch moment.`,
            en: `Falling silent is not a deficiency here, but a dialectical moment.`,
            fr: `Ici, le mutisme n’est pas un manque, mais un moment dialectique.`,
          },
        },
      },

      {
        id: "b7",
        html: {
          nl: `
        <p>In zijn oorspronkelijke context articuleert het citaat niet de volharding van het denken, maar zijn verlamming; niet de belofte van een beter leven, maar de spanning tussen denken en zijn eigen onmogelijkheid.</p>
        <p>Daarmee staat niet de maatschappelijke inzet van het denken ter discussie, maar wel de programmatische inschakeling van Adorno’s ontologiekritiek. Indien Adorno’s woorden hun volle gewicht behouden, bevestigen zij niet het programma van ‘beter denken voor een beter leven’. Zij werpen eerder twijfel op over de vanzelfsprekendheid waarmee zo’n programma kan worden geformuleerd. In die zin dreigt het editoriaal precies dat te doen wat Adorno analyseert: de filosofische spanning omvormen tot een geruststellend gebaar.</p>
        <p>De crisis waarin de westerse democratieën zich bevinden, is wellicht eerder gelinkt aan ‘gebrekkig lezen’ dan aan ‘gebrekkig denken’. Door een lezing die het ontologische niveau verschuift, ontneemt de editorialist het denken van Adorno zijn interne weerstand en neutraliseert zo zijn kritische spanning. Dat is niet zonder ironie.</p>
        <p class="follow-up-note">Een volgende interventie zal de redactionele en institutionele context analyseren waarin deze reactie niet werd opgenomen.</p>
      `,
          en: `
        <p>In its original context, the quotation articulates not the perseverance of thought but its paralysis; not the promise of a better life, but the tension between thought and its own impossibility.</p>
        <p>What is at issue here is therefore not the social relevance of thought as such, but the programmatic enlistment of Adorno’s critique of ontology. If Adorno’s words retain their full weight, they do not confirm the program of “better thinking for a better life”. Rather, they cast doubt on the self-evidence with which such a program can be formulated. In that sense, the editorial risks doing precisely what Adorno analyzes: transforming philosophical tension into a reassuring gesture.</p>
        <p>The crisis in which Western democracies find themselves is perhaps linked less to “deficient thinking” than to “deficient reading”. By means of a reading that shifts the ontological level, the editorialist deprives Adorno’s thought of its internal resistance and thereby neutralizes its critical tension. That is not without irony.</p>
        <p class="follow-up-note">A subsequent intervention will examine the editorial and institutional context in which this response was not published.</p>
      `,
          fr: `
        <p>Dans son contexte original, la citation n’articule pas la persévérance de la pensée, mais sa paralysie ; non pas la promesse d’une vie meilleure, mais la tension entre la pensée et sa propre impossibilité.</p>
        <p>Ce n’est donc pas l’enjeu social de la pensée en tant que tel qui est ici mis en question, mais la mobilisation programmatique de la critique adornienne de l’ontologie. Si les mots d’Adorno conservent tout leur poids, ils ne confirment pas le programme du « mieux penser pour une vie meilleure ». Ils jettent plutôt un doute sur l’évidence avec laquelle un tel programme peut être formulé. En ce sens, l’éditorial risque de faire précisément ce qu’Adorno analyse : transformer la tension philosophique en geste rassurant.</p>
        <p>La crise dans laquelle se trouvent les démocraties occidentales est peut-être moins liée à une « pensée déficiente » qu’à une « lecture déficiente ». Par une lecture qui déplace le niveau ontologique, l’éditorialiste ôte à la pensée d’Adorno sa résistance interne et neutralise ainsi sa tension critique. Cela n’est pas sans ironie.</p>
        <p class="follow-up-note">Une intervention suivante analysera le contexte éditorial et institutionnel dans lequel cette réaction n’a pas été publiée.</p>
      `,
        },
        marginalNote: {
          sourceLabel: {
            nl: "Uit het editoriaal",
            en: "From the editorial",
            fr: "De l’éditorial",
          },
          quote: {
            nl: `‘redeneren is reageren, wat kunst en cultuur meteen van een bestaansreden voorziet’`,
            en: `“reasoning is reacting, which at once provides art and culture with a reason for being”`,
            fr: `« raisonner, c’est réagir, ce qui fournit d’emblée à l’art et à la culture leur raison d’être »`,
          },
          comment: {
            nl: `Kunst verschijnt hier als brandstof voor een intellectueel programma.`,
            en: `Art appears here as fuel for an intellectual program.`,
            fr: `L’art apparaît ici comme carburant d’un programme intellectuel.`,
          },
        },
      },
    ],
    editorialTitle: {
      nl: "Wat heet denken?",
      en: "What is called thinking?",
      fr: "Qu’appelle-t-on penser ?",
    },
    editorialHtml: {
      nl: `
      <p style="font-size:12px;color:#777;">
Fragmenten uit het editoriaal, oorspronkelijk gepubliceerd in <em>De Witte Raaf</em>.
Voor de volledige tekst, zie:
<a href="https://www.dewitteraaf.be/editie/239/" target="_blank">dewitteraaf.be</a>.
</p>
    <p><strong>Wat heet denken?</strong></p>

    <p>‘Het meest be-denkelijke komt in onze bedenkelijke tijd hierin tot uiting dat wij nog niet denken.’ Het is een citaat van Martin Heidegger, uit een lezing uit 1951 getiteld <em>Was heißt Denken?</em>. Het lijkt verleidelijk – de belangrijke redeneringen, zeker in een verontrustend tijdperk, moeten en zullen zich nog aandienen. Toch laat Heidegger na te bekritiseren welke ideeën het zijn die een tijdsgewricht bedenkelijk maken, en schuift hij de taak voor zich uit om anders te denken. Het menselijke verlangen naar begrip wordt niet ernstig genomen, en inzichtelijkheid wordt een fata morgana. ‘Daarin komt’, zoals Theodor Adorno schreef in 1966 in <em>Negative Dialektik</em>, ‘niet zozeer mystieke meditatie als wel de nood van de gedachte tot uiting, die toe wil naar hetgeen anders is dan zijzelf en die zich niets kan permitteren zonder de angst om dat wat ze beweert, te verliezen. Tendentieel verandert filosofie in een ritueel gebaar. Er roert zich daarin ook iets waars, namelijk haar verstommen.’</p>

    <p>Dat het denken, hoe het ook moge heten, stopt noch verstomt – het is een overtuiging die aan de basis ligt van <em>De Witte Raaf</em>, en van dit nummer in het bijzonder. In een tiental essays en artikelen wordt de uitdaging aangegaan om beter te denken, vanuit de overtuiging dat alleen zo een beter leven binnen bereik komt. De belangrijkste aanname: er is geen denken dat niet door lezen wordt voorbereid; redeneren is reageren, wat kunst en cultuur meteen van een bestaansreden voorziet. </p>

    <p>...</p>
    <p>Het januarinummer van <em>De Witte Raaf</em> wordt op die manier een bescheiden staalkaart van hoe er vandaag in het Nederlands gedacht kan worden. De selectie is uiteraard relatief en deels toevallig. Desondanks blijkt één idee constant: een kwart ver in het derde millennium is denken ook altijd terugblikken op de twintigste eeuw – niet uit escapisme, maar omdat een bijziend heden nood heeft aan intelligente verziendheid.</p>

    <p><strong>Christophe Van Gerrewey</strong></p>
  `,

      en: `
      <p style="font-size:12px;color:#777;">
Excerpts from the editorial, originally published in <em>De Witte Raaf</em>.
For the full text, see:
<a href="https://www.dewitteraaf.be/editie/239/" target="_blank">dewitteraaf.be</a>.
</p>
    <p><strong>What is called thinking?</strong></p>

    <p>“The most thought-provoking thing in our thought-provoking time is that we are still not thinking.” It is a quotation from Martin Heidegger, from a 1951 lecture entitled <em>Was heißt Denken?</em>. The temptation is clear: important lines of reasoning, especially in a troubling age, must and will still emerge. Yet Heidegger, so the editorial suggests, fails to criticize which ideas make an age troubling, and postpones the task of thinking otherwise. The human desire for understanding is not taken seriously, and intelligibility becomes a fata morgana. “Therein,” as Theodor Adorno wrote in 1966 in <em>Negative Dialectics</em>, “what finds expression is less mystical meditation than the plight of thought, which wants to move toward what is other than itself and can permit itself nothing without the fear of losing what it claims. Tendentiously philosophy turns into a ritual gesture. Something true also stirs therein, namely its falling silent.”</p>

<span class="editorial-translation">
“What shows in this ontology is not so much mystical meditation as the distress of a thinking that seeks its otherness and cannot make a move without fearing to lose what it claims. Tendentially, philosophy becomes a ritualistic posture. Yet there is a truth stirring in that posture as well: the truth of philosophy falling silent.” 
(<em>Negative Dialectics</em>, trans. E.B. Ashton, Routledge, 2004)
</span>

    <p>That thinking, whatever it may be called, neither stops nor falls silent — this is a conviction that lies at the basis of <em>De Witte Raaf</em>, and of this issue in particular. Across some ten essays and articles, the challenge is taken up to think better, from the conviction that only in this way can a better life come within reach. The fundamental assumption is this: there is no thinking that is not prepared by reading; reasoning is reacting, which at once provides art and culture with a reason for being.</p>

    <p>...</p>

    <p>The January issue of <em>De Witte Raaf</em> thus becomes a modest sample of how thinking can take place in Dutch today. The selection is of course relative and partly contingent. Even so, one idea remains constant: a quarter of the way into the third millennium, thinking is always also a looking back at the twentieth century — not out of escapism, but because a short-sighted present stands in need of intelligent far-sightedness.</p>

    <p><strong>Christophe Van Gerrewey</strong></p>
  `,

      fr: `
    <p><strong>Qu’appelle-t-on penser ?</strong></p>

    <p>« Ce qu’il y a de plus digne d’être pensé dans notre temps qui donne à penser, c’est que nous ne pensons pas encore. » Il s’agit d’une citation de Martin Heidegger, tirée d’une conférence de 1951 intitulée <em>Was heißt Denken?</em>. La tentation est claire : les raisonnements importants, surtout en une époque inquiétante, doivent et vont encore advenir. Pourtant, suggère l’éditorial, Heidegger ne critique pas les idées qui rendent une époque inquiétante et remet à plus tard la tâche de penser autrement. Le désir humain de comprendre n’est pas pris au sérieux, et l’intelligibilité devient un mirage. « Là-dedans », comme l’écrivait Theodor Adorno en 1966 dans <em>Dialectique négative</em>, « s’exprime moins une méditation mystique que la détresse d’une pensée qui veut aller vers ce qui est autre qu’elle-même et qui ne peut rien se permettre sans craindre de perdre ce qu’elle affirme. Tendentiellement, la philosophie se transforme en geste rituel. Il s’y remue aussi quelque chose de vrai, à savoir son mutisme. »</p>

    <span class="editorial-translation">
« Ce n'est pas tant une méditation mystique qui se manifeste là que la détresse de la pensée qui veut aller vers son autre et ne peut rien se permettre sans la peur d'y perdre ce qu’elle affirme. De par sa tendance la philosophie devient gestus rituel. Certes il s’y manifeste aussi quelque chose de vrai, son silence. » 
(<em>Dialectique Négative</em>, trad. Gérard Coffin, Joëlle Masson, Olivier Masson, Alain Renaut et Dagmar Trousson, Editions Payot et Rivages, 2001)
</span>

    <p>Que la pensée, quel que soit le nom qu’on lui donne, ne s’arrête ni ne se taise — voilà une conviction qui est au fondement de <em>De Witte Raaf</em>, et de ce numéro en particulier. Dans une dizaine d’essais et d’articles, le défi est relevé de mieux penser, dans la conviction que c’est seulement ainsi qu’une vie meilleure devient accessible. L’hypothèse essentielle est la suivante : il n’y a pas de pensée qui ne soit préparée par la lecture ; raisonner, c’est réagir, ce qui fournit d’emblée à l’art et à la culture leur raison d’être. </p>

    <p>...</p>
    <p>Le numéro de janvier de <em>De Witte Raaf</em> devient ainsi un modeste échantillon de la manière dont il est aujourd’hui possible de penser en néerlandais. La sélection est évidemment relative et en partie contingente. Pourtant, une idée demeure constante : un quart de chemin dans le troisième millénaire, penser consiste toujours aussi à se retourner vers le XXe siècle — non par escapisme, mais parce qu’un présent myope a besoin d’une intelligente clairvoyance.</p>

    <p><strong>Christophe Van Gerrewey</strong></p>
  `,
    },
  },

  {
    slug: "connection-as-ideology",
    publishedAt: "2026-09-15",
    authors: ["Interstice"],

    title: {
      en: "Connection as Ideology",
      nl: "Verbinding als ideologie",
      fr: "Le lien comme idéologie",
    },

    seoTitle: {
      en: "Connection as Ideology",
      nl: "Verbinding als ideologie",
      fr: "Le lien comme idéologie",
    },

    seoDescription: {
      en: "Interstice examines how ‘connection’ has become a normative ideal in European cultural policy, and what this means for democratic plurality and the autonomy of art.",
      nl: "Interstice onderzoekt hoe ‘verbinding’ een normatief ideaal is geworden in het Europese cultuurbeleid, en wat dat betekent voor democratische pluraliteit en de autonomie van kunst.",
      fr: "Interstice examine comment le « lien » est devenu un idéal normatif dans les politiques culturelles européennes, et ce que cela implique pour la pluralité démocratique et l’autonomie de l’art.",
    },

    intro: {
      en: "Across European cultural policy, ‘connection’ is increasingly presented as a social value to which art and culture can contribute. This intervention examines what is politically and artistically at stake in that expectation.",
      nl: "In het Europese cultuurbeleid wordt ‘verbinding’ steeds nadrukkelijker als maatschappelijke waarde aan kunst en cultuur gekoppeld. Deze interventie onderzoekt wat daarbij politiek en artistiek op het spel staat.",
      fr: "Dans les politiques culturelles européennes, le « lien » est de plus en plus présenté comme une valeur sociale à laquelle l’art et la culture sont appelés à contribuer. Cette intervention examine ce qui, politiquement et artistiquement, se joue dans cette attente.",
    },

    listingIntro: {
      en: "An examination of how connection has become a democratic and cultural ideal, and of what is at stake when art is asked to reconcile social conflict.",

      nl: "Een onderzoek naar hoe verbinding een democratisch en cultureel ideaal is geworden, en naar wat er op het spel staat wanneer van kunst wordt verwacht dat zij maatschappelijke tegenstellingen verzoent.",

      fr: "Une analyse de la manière dont le lien est devenu un idéal démocratique et culturel, et de ce qui se joue lorsque l’on attend de l’art qu’il réconcilie les conflits sociaux.",
    },

    contextLabel: {
      en: "Context",
      nl: "Context",
      fr: "Contexte",
    },

    contextText: {
      en: "This intervention takes as its point of departure the growing appeal to ‘connection’ in European cultural policy and a public debate in which culture was presented as a democratic counterforce to social division.",
      nl: "Deze interventie vertrekt van het toenemende beroep op ‘verbinding’ in het Europese cultuurbeleid en van een publiek debat waarin cultuur als democratisch tegenwicht tegen maatschappelijke verdeeldheid werd voorgesteld.",
      fr: "Cette intervention part du recours croissant au « lien » dans les politiques culturelles européennes et d’un débat public où la culture fut présentée comme un contrepoids démocratique aux divisions sociales.",
    },

    bibliographyLabel: {
      en: "Sources and references",
      nl: "Bronnen en referenties",
      fr: "Sources et références",
    },

    bibliographyHtml: {
      nl: `
    <ul>
      <li>Theodor W. Adorno, <em>Ästhetische Theorie</em> (1970).</li>
      <li>Theodor W. Adorno, <em>Negative Dialektik</em> (1966).</li>
      <li>Hannah Arendt, <em>The Human Condition</em> (1958).</li>
      <li>Alexis de Tocqueville, <em>De la démocratie en Amérique</em> (1835–1840).</li>
      <li>Chantal Mouffe, <em>The Democratic Paradox</em> (2000) en <em>Agonistics</em> (2013).</li>
      <li>Kristy Butler, “Vampiric Narratives: Constructing Authenticity in Bram Stoker’s Dracula”, <em>FORUM</em>, nr. 12 (2011).</li>
      <li>Filmfestival Oostende, programma en toelichting bij Ruth Becquarts “De verhalen die ons verbinden”, FFO26.</li>
      <li>VRT, <em>De Afspraak</em>, uitzending van 28 januari 2026.</li>
      <li>United States Holocaust Memorial Museum, documentatie over cultuur, <em>Volksgemeinschaft</em> en cultuurpolitiek in het Derde Rijk.</li>
      <li>Treccani, lemma over de <em>Opera Nazionale Dopolavoro</em>.</li>
      <li>Ministère de la Culture (Frankrijk), <em>Culture et lien social</em>.</li>
      <li>Initiative kulturelle Integration (Duitsland), <em>Zusammenhalt in Vielfalt</em>.</li>
      <li>Ministerio de Cultura (Spanje), beleidsverklaringen over cultuur, territoriale verbondenheid en sociale cohesie.</li>
      <li>Ministero della Cultura (Italië), <em>Cultura nei piccoli comuni</em>.</li>
      <li>European Commission, <em>Culture Compass for Europe</em>.</li>
    </ul>
  `,

      en: `
    <ul>
      <li>Theodor W. Adorno, <em>Ästhetische Theorie</em> (1970).</li>
      <li>Theodor W. Adorno, <em>Negative Dialektik</em> (1966).</li>
      <li>Hannah Arendt, <em>The Human Condition</em> (1958).</li>
      <li>Alexis de Tocqueville, <em>De la démocratie en Amérique</em> (1835–1840).</li>
      <li>Chantal Mouffe, <em>The Democratic Paradox</em> (2000) and <em>Agonistics</em> (2013).</li>
      <li>Kristy Butler, “Vampiric Narratives: Constructing Authenticity in Bram Stoker’s Dracula”, <em>FORUM</em>, no. 12 (2011).</li>
      <li>Filmfestival Oostende, programme and accompanying text for Ruth Becquart’s “De verhalen die ons verbinden” (“The stories that connect us”), FFO26.</li>
      <li>VRT, <em>De Afspraak</em>, broadcast of 28 January 2026.</li>
      <li>United States Holocaust Memorial Museum, documentation on culture, <em>Volksgemeinschaft</em> and cultural policy in the Third Reich.</li>
      <li>Treccani, entry on the <em>Opera Nazionale Dopolavoro</em>.</li>
      <li>Ministère de la Culture (France), <em>Culture et lien social</em>.</li>
      <li>Initiative kulturelle Integration (Germany), <em>Zusammenhalt in Vielfalt</em>.</li>
      <li>Ministerio de Cultura (Spain), policy statements on culture, territorial connectedness and social cohesion.</li>
      <li>Ministero della Cultura (Italy), <em>Cultura nei piccoli comuni</em>.</li>
      <li>European Commission, <em>Culture Compass for Europe</em>.</li>
    </ul>
  `,

      fr: `
    <ul>
      <li>Theodor W. Adorno, <em>Ästhetische Theorie</em> (1970).</li>
      <li>Theodor W. Adorno, <em>Negative Dialektik</em> (1966).</li>
      <li>Hannah Arendt, <em>The Human Condition</em> (1958).</li>
      <li>Alexis de Tocqueville, <em>De la démocratie en Amérique</em> (1835–1840).</li>
      <li>Chantal Mouffe, <em>The Democratic Paradox</em> (2000) et <em>Agonistics</em> (2013).</li>
      <li>Kristy Butler, “Vampiric Narratives: Constructing Authenticity in Bram Stoker’s Dracula”, <em>FORUM</em>, no 12 (2011).</li>
      <li>Filmfestival Oostende, programme et texte de présentation autour de « De verhalen die ons verbinden » (« Les histoires qui nous relient ») de Ruth Becquart, FFO26.</li>
      <li>VRT, <em>De Afspraak</em>, émission du 28 janvier 2026.</li>
      <li>United States Holocaust Memorial Museum, documentation sur la culture, la <em>Volksgemeinschaft</em> et la politique culturelle du Troisième Reich.</li>
      <li>Treccani, entrée consacrée à l’<em>Opera Nazionale Dopolavoro</em>.</li>
      <li>Ministère de la Culture (France), <em>Culture et lien social</em>.</li>
      <li>Initiative kulturelle Integration (Allemagne), <em>Zusammenhalt in Vielfalt</em>.</li>
      <li>Ministerio de Cultura (Espagne), déclarations de politique culturelle sur la cohésion territoriale et sociale.</li>
      <li>Ministero della Cultura (Italie), <em>Cultura nei piccoli comuni</em>.</li>
      <li>Commission européenne, <em>Culture Compass for Europe</em>.</li>
    </ul>
  `,
    },

    bodyBlocks: [
      {
        id: "b1",
        html: {
          nl: `
        <p>In het Europese cultuurbeleid heeft zich de voorbije jaren een opvallend eensluidend vocabularium gevestigd. Cultuur moet mensen verbinden, sociale cohesie versterken, polarisering tegengaan, bruggen slaan tussen gemeenschappen en de democratische weerbaarheid vergroten. In Frankrijk wordt cultuur als hefboom voor <em>lien social</em> ingezet; in Duitsland wordt zij verbonden met <em>Zusammenhalt in Vielfalt</em>; in Spanje en Italië verschijnt zij in vergelijkbare termen als instrument van sociale cohesie; ook op Europees niveau wordt cultuur steeds nadrukkelijker voorgesteld als een kracht van verbondenheid, veerkracht en democratie. De politieke bedoelingen achter dit discours zijn doorgaans herkenbaar en vaak sympathiek. Juist daarom valt nauwelijks nog op welke stilzwijgende veronderstellingen eraan ten grondslag liggen. ‘Verbinding’ functioneert er niet alleen als beschrijving van een mogelijk effect van culturele praktijken, maar steeds vaker als een vooraf gegeven maatschappelijke waarde — alsof meer verbinding vanzelf ook meer democratie betekent.</p>

        <p>Hoe gemakkelijk die gelijkstelling tot stand komt, werd op 28 januari 2026 bijna exemplarisch zichtbaar in <em>De Afspraak</em>, een debatprogramma van de Nederlandstalige Belgische openbare omroep VRT. Geert Mak, Nederlands schrijver en historisch verslaggever, en Christophe Busch, directeur van het Hannah Arendt Instituut en onderzoeker van collectief geweld, bespraken er de autoritaire ontwikkelingen in de Verenigde Staten. Mak omschreef die ontwikkelingen als een fascistisch proces dat een mogelijk <em>point of no return</em> naderde; Busch verbond een dergelijk kantelpunt onder meer met de mogelijkheid dat de komende verkiezingen zouden worden gemanipuleerd, verhinderd of uitgesteld. Hun vergelijking met het Europese fascisme van de twintigste eeuw was niet zonder nuances. Zij wezen ook op verschillen tussen beide historische constellaties en op de mogelijke weerstand van rechters, deelstaten en andere democratische instituties. Later in dezelfde uitzending presenteerde actrice en auteur Ruth Becquart het programma van Filmfestival Oostende onder het teken van ‘de verhalen die ons verbinden’. Film en cultuur verschenen daarbij als krachten die empathie kunnen opwekken, mensen kunnen samenbrengen en maatschappelijke verdeeldheid kunnen tegengaan; de andere tafelgasten verwelkomden die gedachte zonder merkbare reserve. Opmerkelijk is niet dat zij waarde hechtten aan culturele ontmoeting, maar hoe moeiteloos de analyse van fascisme overging in een pleidooi voor verbinding door middel van cultuur. Waar democratische weerbaarheid eerst nog werd verbonden met instituties, tegenmachten en blijvend politiek conflict, verscheen zij vervolgens als een kwestie van maatschappelijke samenhang — alsof het vermogen mensen te verenigen vanzelf aan de democratische zijde staat.</p>
      `,

          en: `
        <p>Within European cultural policy, a strikingly uniform vocabulary has taken hold in recent years. Culture is expected to connect people, strengthen social cohesion, counter polarization, build bridges between communities and enhance democratic resilience. In France, culture is deployed as a lever for <em>lien social</em>; in Germany it is associated with <em>Zusammenhalt in Vielfalt</em>; in Spain and Italy it appears in similar terms as an instrument of social cohesion; at the European level, too, culture is increasingly presented as a force of connectedness, resilience and democracy. The political intentions behind this discourse are generally understandable and often sympathetic. Precisely for that reason, the tacit assumptions underlying it are easily overlooked. ‘Connection’ functions not only as a description of a possible effect of cultural practices, but increasingly as a social value taken for granted in advance — as though more connection automatically meant more democracy.</p>

        <p>How readily that equation can be established became almost paradigmatically visible on 28 January 2026 in <em>De Afspraak</em>, a debate programme on the Dutch-language Belgian public broadcaster VRT. Geert Mak, a Dutch writer and historical chronicler, and Christophe Busch, director of the Hannah Arendt Institute and a researcher of collective violence, discussed the authoritarian developments in the United States. Mak described these developments as a fascist process approaching a possible <em>point of no return</em>; Busch associated such a tipping point, among other things, with the possibility that the forthcoming elections might be manipulated, obstructed or postponed. Their comparison with twentieth-century European fascism was not without nuance. They also pointed to differences between the two historical constellations and to the possible resistance of judges, individual states and other democratic institutions. Later in the same broadcast, actress and writer Ruth Becquart presented the programme of Filmfestival Oostende under the heading ‘the stories that connect us’. Film and culture appeared as forces capable of generating empathy, bringing people together and counteracting social division; the other guests welcomed the idea without noticeable reservation. What is striking is not that they valued cultural encounter, but how effortlessly the analysis of fascism gave way to a plea for connection through culture. Whereas democratic resilience had first been linked to institutions, countervailing powers and enduring political conflict, it subsequently appeared as a matter of social cohesion — as though the capacity to unite people were automatically on the side of democracy.</p>
      `,

          fr: `
        <p>Dans les politiques culturelles européennes, un vocabulaire remarquablement homogène s’est imposé au cours des dernières années. La culture doit créer du lien, renforcer la cohésion sociale, lutter contre la polarisation, jeter des ponts entre les communautés et accroître la résilience démocratique. En France, la culture est mobilisée comme levier de <em>lien social</em> ; en Allemagne, elle est associée au <em>Zusammenhalt in Vielfalt</em> ; en Espagne et en Italie, elle apparaît dans des termes comparables comme instrument de cohésion sociale ; au niveau européen également, la culture est de plus en plus présentée comme une force de lien, de résilience et de démocratie. Les intentions politiques qui sous-tendent ce discours sont généralement compréhensibles et souvent sympathiques. C’est précisément pourquoi les présupposés tacites sur lesquels il repose passent si facilement inaperçus. Le « lien » ne fonctionne plus seulement comme la description d’un effet possible des pratiques culturelles, mais de plus en plus comme une valeur sociale donnée d’avance — comme si davantage de lien signifiait automatiquement davantage de démocratie.</p>

        <p>La facilité avec laquelle cette équivalence peut s’établir est apparue de manière presque exemplaire le 28 janvier 2026 dans <em>De Afspraak</em>, une émission de débat de la chaîne publique belge néerlandophone VRT. Geert Mak, écrivain néerlandais et chroniqueur de l’histoire contemporaine, et Christophe Busch, directeur de l’Institut Hannah Arendt et chercheur sur la violence collective, y discutaient des évolutions autoritaires aux États-Unis. Mak décrivait ces évolutions comme un processus fasciste approchant un possible <em>point of no return</em> ; Busch associait notamment un tel point de bascule à la possibilité que les prochaines élections soient manipulées, empêchées ou reportées. Leur comparaison avec les fascismes européens du XXe siècle n’était pas dépourvue de nuances. Ils soulignaient également les différences entre les deux constellations historiques ainsi que la résistance possible des juges, des États fédérés et d’autres institutions démocratiques. Plus tard dans la même émission, l’actrice et autrice Ruth Becquart présenta le programme du Filmfestival Oostende sous le signe des « histoires qui nous relient ». Le film et la culture y apparurent comme des forces capables de susciter l’empathie, de rapprocher les individus et de contrer les divisions sociales ; les autres invités accueillirent cette idée sans réserve perceptible. Ce qui frappe n’est pas qu’ils aient accordé de la valeur à la rencontre culturelle, mais la facilité avec laquelle l’analyse du fascisme céda la place à un plaidoyer pour le lien par la culture. Alors que la résilience démocratique avait d’abord été rapportée aux institutions, aux contre-pouvoirs et à la persistance du conflit politique, elle apparut ensuite comme une question de cohésion sociale — comme si la capacité à réunir les individus se situait d’elle-même du côté démocratique.</p>
      `,
        },
      },

      {
        id: "b2",
        html: {
          nl: `
        <p>De twintigste eeuw levert voor die vanzelfsprekendheid een ongemakkelijke tegenproef. De fascistische bewegingen van die periode waren niet alleen ongeëvenaard in hun vermogen mensen uit te sluiten, te vervolgen en te vernietigen; ze waren eveneens uitzonderlijk krachtige machines van maatschappelijke integratie, collectieve identificatie en culturele gemeenschapsvorming. In het nationaalsocialisme kreeg die beweging haar meest radicale vorm in het ideaal van de <em>Volksgemeinschaft</em>: sociale, politieke en culturele verschillen moesten worden ondergeschikt gemaakt aan de voorstelling van één raciaal gedefinieerd volk. Verbinding en uitsluiting waren daarbij geen tegengestelde processen. De gemeenschap werd mede gevormd door te bepalen wie er niet toe behoorde. Cultuur speelde daarin geen bijkomstige rol. Via de <em>Gleichschaltung</em> werden culturele instellingen, beroepsorganisaties, muziek, film, theater, literatuur en beeldende kunst in overeenstemming gebracht met de doelstellingen van het regime; de <em>Reichskulturkammer</em> bepaalde mee wie binnen het culturele leven kon werken, terwijl de tentoonstelling <em>Entartete Kunst</em> zichtbaar maakte welke kunst buiten de gewenste culturele orde werd geplaatst. Het fascistische Italië ontwikkelde een verwante logica. De <em>Opera Nazionale Dopolavoro</em> bracht culturele, sportieve en recreatieve verenigingen samen onder regimecontrole en maakte van vrijetijdsbesteding een instrument van maatschappelijke integratie en politieke inbedding. De relevante vraag is daarom niet of cultuur kan verbinden. Dat kan zij ongetwijfeld. De vraag is welke gemeenschap zij vormt, rond welke beelden en verhalen, welke verschillen daarin kunnen blijven bestaan — en wie of wat buiten die gemeenschap terechtkomt.</p>
      `,

          en: `
        <p>The twentieth century provides an uncomfortable counter-test to that assumption. The fascist movements of the period were not only unparalleled in their capacity to exclude, persecute and destroy people; they were also exceptionally powerful machines of social integration, collective identification and cultural community-building. Under National Socialism, this movement found its most radical form in the ideal of the <em>Volksgemeinschaft</em>: social, political and cultural differences were to be subordinated to the image of a single racially defined people. Connection and exclusion were not opposing processes. The community was formed in part by determining who did not belong to it. Culture played no secondary role in this. Through <em>Gleichschaltung</em>, cultural institutions, professional organizations, music, film, theatre, literature and the visual arts were brought into line with the objectives of the regime; the <em>Reichskulturkammer</em> helped determine who was permitted to work within cultural life, while the exhibition <em>Entartete Kunst</em> made visible which art was placed outside the desired cultural order. Fascist Italy developed a related logic. The <em>Opera Nazionale Dopolavoro</em> brought cultural, sporting and recreational associations together under regime control and turned leisure into an instrument of social integration and political incorporation. The relevant question, therefore, is not whether culture can connect. It undoubtedly can. The question is what kind of community it forms, around which images and narratives, which differences can continue to exist within it — and who or what ends up outside that community.</p>
      `,

          fr: `
        <p>Le XXe siècle fournit à cette évidence une contre-épreuve dérangeante. Les mouvements fascistes de cette période ne furent pas seulement sans équivalent dans leur capacité à exclure, persécuter et détruire ; ils furent également des machines exceptionnellement puissantes d’intégration sociale, d’identification collective et de formation culturelle de la communauté. Sous le national-socialisme, ce mouvement trouva sa forme la plus radicale dans l’idéal de la <em>Volksgemeinschaft</em> : les différences sociales, politiques et culturelles devaient être subordonnées à la représentation d’un peuple unique défini racialement. Lien et exclusion n’étaient pas des processus opposés. La communauté se constituait aussi en déterminant qui n’en faisait pas partie. La culture n’y jouait nullement un rôle secondaire. Par la <em>Gleichschaltung</em>, les institutions culturelles, les organisations professionnelles, la musique, le cinéma, le théâtre, la littérature et les arts visuels furent alignés sur les objectifs du régime ; la <em>Reichskulturkammer</em> contribuait à déterminer qui pouvait travailler dans le champ culturel, tandis que l’exposition <em>Entartete Kunst</em> rendait visible l’art placé hors de l’ordre culturel souhaité. L’Italie fasciste développa une logique apparentée. L’<em>Opera Nazionale Dopolavoro</em> rassembla sous le contrôle du régime des associations culturelles, sportives et récréatives, faisant des loisirs un instrument d’intégration sociale et d’encadrement politique. La question pertinente n’est donc pas de savoir si la culture peut créer du lien. Elle le peut sans aucun doute. La question est de savoir quelle communauté elle forme, autour de quelles images et de quels récits, quelles différences peuvent y subsister — et qui ou quoi se retrouve hors de cette communauté.</p>
      `,
        },
      },

      {
        id: "b3",
        html: {
          nl: `
        <p>Alexis de Tocqueville zag in de negentiende eeuw al dat democratie niet alleen wordt bedreigd door een macht boven de samenleving, maar ook door de mogelijkheid dat de meerderheid zichzelf met het geheel vereenzelvigt. Tegen die ‘tirannie van de meerderheid’ stelde hij geen ideaal van consensus, maar een dicht weefsel van instituties, lokale autonomie, vrije associaties en publieke tegenkrachten waarin maatschappelijke macht zich kan verspreiden en begrenzen.</p>

        <p>Als verbinding op zichzelf geen democratische norm vormt, rijst de vraag wat democratische gemeenschapsvorming dan wel onderscheidt van haar autoritaire tegenvormen. Het antwoord ligt niet in een sterkere eenheid, maar in het vermogen verschillen te laten voortbestaan zonder ze in vijandschap te laten omslaan. Bij Hannah Arendt is pluraliteit geen hinderpaal voor het politieke, maar juist een van zijn voorwaarden: mensen delen een wereld zonder daarom vanuit hetzelfde standpunt te spreken of te handelen. Het gemeenschappelijke ontstaat niet doordat verschillen verdwijnen, maar doordat zij binnen een publieke ruimte naast elkaar kunnen verschijnen. Zo’n ruimte bestaat echter niet vanzelf. Zij moet politiek worden opgebouwd en beschermd door instituties die verhinderen dat één positie zich met het geheel kan vereenzelvigen.</p>

        <p>Chantal Mouffe maakt die institutionele dimensie nog explicieter. Democratie veronderstelt volgens haar niet dat fundamentele tegenstellingen uiteindelijk in consensus kunnen worden opgelost; zij vereist praktijken en instituties die antagonismen zo vormgeven dat politieke tegenstanders elkaar niet als uit te schakelen vijanden, maar als legitieme opponenten blijven erkennen. Rechtspraak, parlementaire procedures, verkiezingen, machtsverdeling en andere institutionele tegenwichten zijn vanuit dat perspectief geen uitwendige waarborgen van een reeds bestaande democratische gemeenschap: zij behoren tot de mechanismen waardoor politieke verdeeldheid democratisch kan blijven functioneren. Maatschappelijk conflict is dan niet zonder meer een tekort waaraan cultuur een einde moet maken. Het kan ook het zichtbare teken zijn van een pluraliteit die democratisch moet worden georganiseerd, begrensd en uitgehouden. Het onderscheid tussen democratische en autoritaire politiek ligt dan minder in de hoeveelheid verbinding die zij produceren dan in de vraag of verschil, conflict en tegenspraak binnen de gemeenschap institutioneel kunnen blijven bestaan zonder te worden geneutraliseerd of uitgestoten.</p>
      `,

          en: `
        <p>Already in the nineteenth century, Alexis de Tocqueville saw that democracy is threatened not only by a power standing above society, but also by the possibility that the majority might identify itself with the whole. Against this ‘tyranny of the majority’, he did not set an ideal of consensus, but a dense fabric of institutions, local autonomy, voluntary associations and public counterforces through which social power can be dispersed and limited.</p>

        <p>If connection is not in itself a democratic norm, the question arises as to what distinguishes democratic forms of community from their authoritarian counterparts. The answer does not lie in stronger unity, but in the capacity to allow differences to persist without letting them turn into enmity. For Hannah Arendt, plurality is not an obstacle to the political but one of its conditions: people share a world without therefore speaking or acting from the same standpoint. The common world does not arise because differences disappear, but because they can appear alongside one another within a public space. Such a space does not exist by itself. It must be politically constructed and protected by institutions that prevent any one position from identifying itself with the whole.</p>

        <p>Chantal Mouffe makes this institutional dimension even more explicit. Democracy, in her account, does not presuppose that fundamental oppositions can ultimately be resolved in consensus; it requires practices and institutions that shape antagonisms in such a way that political opponents continue to recognize one another not as enemies to be eliminated but as legitimate adversaries. Courts, parliamentary procedures, elections, the distribution of power and other institutional counterweights are, from this perspective, not external safeguards of an already existing democratic community: they belong to the mechanisms through which political division can continue to function democratically. Social conflict is therefore not necessarily a deficiency that culture must overcome. It can also be the visible sign of a plurality that must be democratically organized, bounded and sustained. The distinction between democratic and authoritarian politics then lies less in the amount of connection they produce than in whether difference, conflict and dissent can continue to exist institutionally within the community without being neutralized or expelled.</p>
      `,

          fr: `
        <p>Alexis de Tocqueville voyait déjà au XIXe siècle que la démocratie n’est pas seulement menacée par un pouvoir situé au-dessus de la société, mais aussi par la possibilité que la majorité s’identifie elle-même au tout. À cette « tyrannie de la majorité », il n’opposait pas un idéal de consensus, mais un tissu dense d’institutions, d’autonomie locale, d’associations libres et de contre-pouvoirs publics permettant au pouvoir social de se disperser et de se limiter.</p>

        <p>Si le lien ne constitue pas en lui-même une norme démocratique, la question se pose de savoir ce qui distingue alors la formation démocratique d’une communauté de ses formes autoritaires. La réponse ne réside pas dans une unité plus forte, mais dans la capacité à laisser subsister les différences sans les laisser basculer dans l’inimitié. Chez Hannah Arendt, la pluralité n’est pas un obstacle au politique, mais l’une de ses conditions : les êtres humains partagent un monde sans pour autant parler ou agir depuis le même point de vue. Le commun ne naît pas de la disparition des différences, mais de leur possibilité d’apparaître côte à côte dans un espace public. Or un tel espace n’existe pas de lui-même. Il doit être politiquement construit et protégé par des institutions empêchant qu’une position particulière puisse s’identifier au tout.</p>

        <p>Chantal Mouffe rend cette dimension institutionnelle encore plus explicite. Selon elle, la démocratie ne suppose pas que les oppositions fondamentales puissent finalement se résoudre dans le consensus ; elle exige des pratiques et des institutions capables de donner forme aux antagonismes de telle sorte que les adversaires politiques continuent à se reconnaître non comme des ennemis à éliminer, mais comme des adversaires légitimes. La justice, les procédures parlementaires, les élections, la répartition des pouvoirs et les autres contrepoids institutionnels ne sont, dans cette perspective, pas des garanties extérieures à une communauté démocratique déjà constituée : ils font partie des mécanismes par lesquels la division politique peut continuer à fonctionner démocratiquement. Le conflit social n’est donc pas nécessairement un manque auquel la culture devrait mettre fin. Il peut aussi être le signe visible d’une pluralité qu’il faut organiser, encadrer et soutenir démocratiquement. La différence entre politique démocratique et politique autoritaire réside alors moins dans la quantité de lien qu’elles produisent que dans la possibilité pour la différence, le conflit et la contestation de continuer à exister institutionnellement au sein de la communauté sans être neutralisés ou rejetés.</p>
      `,
        },
      },

      {
        id: "b4",
        html: {
          nl: `
        <p>Een van de films waarmee Filmfestival Oostende zijn programma rond verbinding illustreert, maakt ironisch genoeg zichtbaar waarom dat begrip te weinig zegt. <em>Bram Stoker’s Dracula</em> kan ongetwijfeld een gemeenschappelijke ervaring produceren: in een filmzaal wordt ook het griezelen gedeeld, en juist de gelijktijdige confrontatie met angst en afschuw kan tijdelijk een publiek vormen. Maar daarmee is nog weinig gezegd over de politieke betekenis van die verbinding. Interessanter is wat de film zelf met grenzen en identiteiten doet. In een Žižekiaans geïnspireerde lezing verschijnt Dracula als een figuur die zich niet stabiel laat onderbrengen in de tegenstellingen waarop een orde steunt: levend en dood, eigen en vreemd, aantrekking en afstoting. De vampier is geen element dat uiteindelijk harmonieus in een gemeenschap wordt opgenomen, maar een hardnekkige rest die haar grenzen juist zichtbaar en instabiel maakt. <em>Gothic</em> fictie kan zo een ruimte openen waarin tegenstrijdige posities niet noodzakelijk worden verzoend, maar naast elkaar blijven bestaan en elkaar ontregelen. Misschien ligt precies daarin een andere politieke mogelijkheid van kunst: niet alleen in haar vermogen een gedeeld affect voort te brengen, maar in haar vermogen ons te confronteren met wat zich niet zonder rest in een gemeenschappelijk verhaal laat opnemen.</p>
      `,

          en: `
        <p>One of the films with which Filmfestival Oostende illustrates its programme around connection ironically reveals why the concept says too little. <em>Bram Stoker’s Dracula</em> can undoubtedly produce a shared experience: in a cinema, fear itself is shared, and the simultaneous confrontation with fear and horror can temporarily constitute a public. But this still tells us little about the political meaning of that connection. More interesting is what the film itself does with boundaries and identities. In a Žižek-inspired reading, Dracula appears as a figure who cannot be stably contained within the oppositions on which an order rests: living and dead, familiar and foreign, attraction and repulsion. The vampire is not an element ultimately absorbed harmoniously into a community, but a persistent remainder that makes its boundaries visible and unstable. <em>Gothic</em> fiction can thus open a space in which conflicting positions are not necessarily reconciled, but continue to coexist and unsettle one another. Perhaps precisely here lies a different political possibility of art: not only in its capacity to produce a shared affect, but in its capacity to confront us with what cannot be incorporated without remainder into a common narrative.</p>
      `,

          fr: `
        <p>L’un des films par lesquels le Filmfestival Oostende illustre son programme autour du lien montre ironiquement pourquoi ce concept ne suffit pas. <em>Bram Stoker’s Dracula</em> peut sans aucun doute produire une expérience commune : dans une salle de cinéma, la peur elle-même est partagée, et la confrontation simultanée à la peur et à l’effroi peut temporairement constituer un public. Mais cela nous dit encore peu de chose sur la signification politique de ce lien. Plus intéressant est ce que le film lui-même fait aux frontières et aux identités. Dans une lecture inspirée de Žižek, Dracula apparaît comme une figure qui ne peut être assignée de manière stable aux oppositions sur lesquelles repose un ordre : vivant et mort, familier et étranger, attraction et répulsion. Le vampire n’est pas un élément finalement intégré de manière harmonieuse à une communauté, mais un reste obstiné qui rend ses frontières visibles et instables. La fiction <em>gothic</em> peut ainsi ouvrir un espace dans lequel des positions contradictoires ne sont pas nécessairement réconciliées, mais continuent de coexister et de se déstabiliser mutuellement. Peut-être est-ce précisément là que réside une autre possibilité politique de l’art : non seulement dans sa capacité à produire un affect partagé, mais dans sa capacité à nous confronter à ce qui ne peut être intégré sans reste dans un récit commun.</p>
      `,
        },
      },

      {
        id: "b5",
        html: {
          nl: `
        <p>Dat brengt ons van de politieke betekenis van verbinding naar de positie van de kunst zelf. Het hedendaagse discours spreekt gemakkelijk over ‘cultuur’ alsof daarmee één samenhangend maatschappelijk instrument wordt aangeduid, terwijl culturele praktijken, gemeenschapsvorming en artistieke productie niet zonder meer samenvallen. Voor Adorno is kunst allerminst van de samenleving afgesloten: zij ontstaat binnen maatschappelijke verhoudingen en draagt hun tegenstellingen in zich. Haar kritische mogelijkheid berust echter juist op een relatieve autonomie tegenover maatschappelijke functies en doeleinden. Kunst kan verbinden, inzicht voortbrengen, politieke gevoeligheid veranderen of bestaande gemeenschappen ontregelen; problematisch wordt het wanneer zulke mogelijke werkingen normatief worden vastgelegd als datgene waaraan haar maatschappelijke betekenis wordt afgemeten. De nationaalsocialistische cultuurpolitiek laat in extreme vorm zien wat er gebeurt wanneer maatschappelijke doelstellingen het criterium worden waaraan kunst wordt beoordeeld.</p>

        <p>Het probleem beperkt zich bovendien niet tot het hedendaagse vocabularium van sociale cohesie. In een <a href="/nl/interventions/christophe-van-gerrewey-de-witte-raaf-response">eerdere interventie</a> wees <em>Interstice</em> op een verwante beweging in het editoriaal ‘Wat heet denken?’ van het Nederlandstalige kunsttijdschrift <em>De Witte Raaf</em>. Daar werden kunst en cultuur opgenomen in een programma van ‘beter denken’ dat een ‘beter leven’ binnen bereik moest brengen — opmerkelijk genoeg met Adorno als een van de filosofische autoriteiten. Waar de doelstelling verschilt — intellectuele verbetering daar, maatschappelijke verbinding hier — vertoont de formele beweging een duidelijke verwantschap: aan kunst wordt een maatschappelijk potentieel toegeschreven dat vervolgens in de richting van een gewenste uitkomst wordt gelezen. Dat kunst mensen kan verbinden of het denken kan veranderen, verleent haar onmiskenbaar maatschappelijke betekenis. Wanneer zulke mogelijke effecten echter als normatieve verwachting de benadering van kunst vooraf structureren, wordt zij van meet af aan onder een heteronoom criterium gelezen. Juist waar kunst zich niet volledig laat reduceren tot zulke verwachtingen, kan iets zichtbaar worden van wat Adorno het niet-identieke noemt: wat zich niet restloos laat opnemen in onze begrippen, functies en verwachtingen.</p>

        <p>Daar raakt het niet-identieke aan Adorno’s opvatting van de autonomie van kunst. Voor zover aan kunst überhaupt een maatschappelijke functie kan worden toegeschreven, ligt die paradoxaal genoeg in haar functieloosheid: in het feit dat zij zich niet volledig laat onderwerpen aan de doeleinden en gebruiksvormen van de maatschappelijke orde waarvan zij tegelijk deel uitmaakt. Precies daardoor kan zij als ‘sociale antithese van de samenleving’ optreden. Haar maatschappelijke kracht ligt niet in het beantwoorden aan een normatief interpretatiekader, maar juist in haar vermogen zich daaraan te onttrekken en zichtbaar te maken wat zich binnen de bestaande maatschappelijke orde niet zonder rest laat identificeren.</p>
      `,

          en: `
        <p>This brings us from the political meaning of connection to the position of art itself. Contemporary discourse readily speaks of ‘culture’ as though it denoted a single coherent social instrument, even though cultural practices, community-building and artistic production do not simply coincide. For Adorno, art is by no means sealed off from society: it arises within social relations and carries their contradictions within itself. Yet its critical potential rests precisely on a relative autonomy vis-à-vis social functions and ends. Art can connect, generate insight, alter political sensibilities or unsettle existing communities; the problem arises when such possible effects are normatively fixed as that against which its social significance is measured. National Socialist cultural policy shows in extreme form what happens when social objectives become the criterion by which art is judged.</p>

        <p>The problem, moreover, is not confined to the contemporary vocabulary of social cohesion. In an <a href="/en/interventions/christophe-van-gerrewey-de-witte-raaf-response">earlier intervention</a>, <em>Interstice</em> pointed to a related movement in the editorial ‘What is called thinking?’ in the Dutch-language art journal <em>De Witte Raaf</em>. There, art and culture were incorporated into a programme of ‘better thinking’ that was to bring a ‘better life’ within reach — remarkably, with Adorno as one of its philosophical authorities. Where the aim differs — intellectual improvement there, social connection here — the formal movement shows a clear affinity: a social potential is attributed to art and subsequently read in the direction of a desired outcome. That art can connect people or change thought gives it undeniable social significance. When such possible effects, however, structure our approach to art in advance as normative expectations, art is read from the outset according to a heteronomous criterion. Precisely where art cannot be fully reduced to such expectations, something may become visible of what Adorno calls the non-identical: that which cannot be absorbed without remainder into our concepts, functions and expectations.</p>

        <p>Here, the non-identical intersects with Adorno’s conception of the autonomy of art. To the extent that art can be said to have a social function at all, that function lies paradoxically in its functionlessness: in the fact that it cannot be fully subordinated to the ends and forms of use of the social order of which it is nevertheless a part. Precisely for this reason it can act as the ‘social antithesis of society’. Its social force lies not in answering to a normative interpretive framework, but in its capacity to withdraw from it and render visible what, within the existing social order, resists identification without remainder.</p>
      `,

          fr: `
        <p>Cela nous conduit de la signification politique du lien à la position de l’art lui-même. Le discours contemporain parle volontiers de « culture » comme s’il s’agissait d’un instrument social unique et cohérent, alors que pratiques culturelles, formation de communautés et production artistique ne coïncident nullement. Chez Adorno, l’art n’est en rien séparé de la société : il naît au sein des rapports sociaux et porte en lui leurs contradictions. Sa possibilité critique repose pourtant précisément sur une autonomie relative vis-à-vis des fonctions et des finalités sociales. L’art peut créer du lien, produire de la connaissance, modifier les sensibilités politiques ou déstabiliser des communautés existantes ; le problème apparaît lorsque de tels effets possibles sont normativement fixés comme ce à l’aune de quoi sa signification sociale est mesurée. La politique culturelle national-socialiste montre, sous une forme extrême, ce qui se produit lorsque des objectifs sociaux deviennent le critère à partir duquel l’art est jugé.</p>

        <p>Le problème ne se limite d’ailleurs pas au vocabulaire contemporain de la cohésion sociale. Dans une <a href="/fr/interventions/christophe-van-gerrewey-de-witte-raaf-response">intervention antérieure</a>, <em>Interstice</em> a mis en évidence un mouvement apparenté dans l’éditorial « Qu’appelle-t-on penser ? » de la revue d’art néerlandophone <em>De Witte Raaf</em>. L’art et la culture y étaient intégrés dans un programme de « mieux penser » censé mettre une « vie meilleure » à portée de main — fait remarquable, avec Adorno parmi les autorités philosophiques mobilisées. Si l’objectif diffère — amélioration intellectuelle là, lien social ici — le mouvement formel présente une nette parenté : un potentiel social est attribué à l’art, puis lu dans la direction d’un résultat souhaité. Que l’art puisse créer du lien ou transformer la pensée lui confère indéniablement une signification sociale. Mais lorsque de tels effets possibles structurent d’avance, comme attentes normatives, notre approche de l’art, celui-ci se trouve d’emblée lu selon un critère hétéronome. C’est précisément là où l’art ne se laisse pas entièrement réduire à de telles attentes que peut apparaître quelque chose de ce qu’Adorno appelle le non-identique : ce qui ne se laisse pas absorber sans reste dans nos concepts, nos fonctions et nos attentes.</p>

        <p>C’est ici que le non-identique rejoint la conception adornienne de l’autonomie de l’art. Pour autant que l’on puisse attribuer à l’art une fonction sociale, celle-ci réside paradoxalement dans son absence de fonction : dans le fait qu’il ne se laisse pas entièrement soumettre aux finalités et aux usages de l’ordre social dont il fait pourtant partie. C’est précisément ainsi qu’il peut agir comme « antithèse sociale de la société ». Sa force sociale ne réside pas dans sa conformité à un cadre interprétatif normatif, mais dans sa capacité à s’y soustraire et à rendre visible ce qui, au sein de l’ordre social existant, résiste à toute identification sans reste.</p>
      `,
        },
      },

      {
        id: "b6",
        html: {
          nl: `
        <p>Tegen deze achtergrond krijgt de opmerkelijke eensgezindheid binnen het hedendaagse Europese cultuurbeleid een ander gewicht. De Franse overheid noemt artistieke en culturele praktijken expliciet krachtige hefbomen van <em>cohésion sociale</em>; in Duitsland onderzoekt de door de federale overheid ondersteunde <em>Initiative kulturelle Integration</em> onder het motto <em>Zusammenhalt in Vielfalt</em> hoe cultuur het samenleven in een plurale samenleving kan bevorderen; in Spanje wordt cultuur door het ministerie voorgesteld als een as van territoriale verbondenheid en sociale cohesie; een recent Italiaans programma omschrijft cultuur uitdrukkelijk als instrument om sociale cohesie en burgerparticipatie te versterken. Ook de Europese Unie koppelt cultuur in haar <em>Culture Compass</em> rechtstreeks aan veerkracht, sociale en territoriale cohesie en democratische ontwikkeling. Opmerkelijk is niet dat deze beleidsprogramma’s identiek zouden zijn — dat zijn ze niet — maar dat uiteenlopende politieke en culturele tradities steeds opnieuw bij een vergelijkbare verwachting uitkomen: cultuur wordt aangesproken op het vermogen samenhang, wederzijds begrip, participatie, weerbaarheid en een gedeelde publieke wereld mede te produceren.</p>
      `,

          en: `
        <p>Against this background, the striking convergence within contemporary European cultural policy takes on a different weight. The French government explicitly describes artistic and cultural practices as powerful levers of <em>cohésion sociale</em>; in Germany, the federally supported <em>Initiative kulturelle Integration</em>, under the motto <em>Zusammenhalt in Vielfalt</em>, explores how culture can foster coexistence within a plural society; in Spain, culture is presented by the ministry as an axis of territorial connectedness and social cohesion; a recent Italian programme explicitly describes culture as an instrument for strengthening social cohesion and civic participation. The European Union likewise links culture in its <em>Culture Compass</em> directly to resilience, social and territorial cohesion and democratic development. What is striking is not that these policy programmes are identical — they are not — but that different political and cultural traditions repeatedly converge on a comparable expectation: culture is called upon to help produce cohesion, mutual understanding, participation, resilience and a shared public world.</p>
      `,

          fr: `
        <p>Dans cette perspective, la remarquable convergence qui traverse aujourd’hui les politiques culturelles européennes prend un autre poids. Le gouvernement français qualifie explicitement les pratiques artistiques et culturelles de puissants leviers de <em>cohésion sociale</em> ; en Allemagne, l’<em>Initiative kulturelle Integration</em>, soutenue par le gouvernement fédéral, examine sous la devise <em>Zusammenhalt in Vielfalt</em> comment la culture peut favoriser la coexistence dans une société plurielle ; en Espagne, le ministère présente la culture comme un axe de cohésion territoriale et sociale ; un programme italien récent décrit explicitement la culture comme un instrument permettant de renforcer la cohésion sociale et la participation citoyenne. L’Union européenne, elle aussi, relie directement la culture, dans son <em>Culture Compass</em>, à la résilience, à la cohésion sociale et territoriale ainsi qu’au développement démocratique. Ce qui frappe n’est pas que ces programmes soient identiques — ils ne le sont pas — mais que des traditions politiques et culturelles différentes convergent sans cesse vers une attente comparable : la culture est appelée à contribuer à produire de la cohésion, de la compréhension mutuelle, de la participation, de la résilience et un monde public partagé.</p>
      `,
        },
      },

      {
        id: "b7",
        html: {
          nl: `
        <p>Daar ligt een verdergaand risico. Wanneer culturele instellingen, subsidiemechanismen en beleidskaders systematisch waarde toekennen aan productie die verbinding, participatie, empathie of maatschappelijke cohesie kan aantonen, ontstaat een voorkeur voor kunst die zich in zulke doelstellingen laat inschrijven. Dat gebeurt niet noodzakelijk door expliciete uitsluiting; het kan evenzeer via programmering, financiering en de taal waarin artistieke relevantie wordt beoordeeld. Precies daardoor dreigt de ruimte kleiner te worden voor werk dat geen oplossing aanbiedt, geen gemeenschap sticht en geen antagonisme omzet in een gedeeld verhaal. Vanuit Mouffes democratiebegrip is dat allesbehalve een bijkomstig verlies: democratie heeft plaatsen nodig waar conflict en verschil zichtbaar en betwistbaar kunnen blijven. Vanuit Adorno geldt voor kunst iets vergelijkbaars: haar maatschappelijke kracht ligt juist in wat zich aan een vooraf gewenste functie onttrekt.</p>

        <p>Het bezwaar richt zich dus niet tegen denken, verbinding, empathie of democratische weerbaarheid als mogelijke gevolgen van kunst. Integendeel. De vraag is wat er gebeurt wanneer zulke mogelijke gevolgen tot verwachting, opdracht of criterium van culturele waarde worden gemaakt. Politieke, economische en sociale verhoudingen produceren antagonismen die institutioneel moeten worden verwerkt; wanneer vervolgens aan cultuur wordt gevraagd die spanningen affectief te verzachten of symbolisch te verzoenen, verschuift een politiek probleem naar het culturele domein. Cultuur dreigt dan minder een plaats te worden waar maatschappelijke tegenstellingen zichtbaar en ervaarbaar kunnen blijven dan een middel waarmee hun gevolgen draaglijker worden gemaakt.</p>
      `,

          en: `
        <p>There lies a further risk. When cultural institutions, funding mechanisms and policy frameworks systematically assign value to work that can demonstrate connection, participation, empathy or social cohesion, a preference emerges for art that can inscribe itself within such objectives. This does not necessarily occur through explicit exclusion; it can operate just as effectively through programming, funding and the language in which artistic relevance is assessed. Precisely for this reason, the space available to work that offers no solution, founds no community and converts no antagonism into a shared narrative risks shrinking. From Mouffe’s conception of democracy, this is anything but a secondary loss: democracy needs places where conflict and difference can remain visible and contestable. From Adorno’s perspective, something similar holds for art: its social force lies precisely in what escapes a function desired in advance.</p>

        <p>The objection, then, is not directed against thought, connection, empathy or democratic resilience as possible effects of art. On the contrary. The question is what happens when such possible effects are turned into expectations, tasks or criteria of cultural value. Political, economic and social relations produce antagonisms that must be dealt with institutionally; when culture is subsequently asked to soften those tensions affectively or reconcile them symbolically, a political problem shifts into the cultural domain. Culture then risks becoming less a place where social contradictions can remain visible and palpable than a means by which their consequences are made more bearable.</p>
      `,

          fr: `
        <p>Un risque plus profond apparaît ici. Lorsque les institutions culturelles, les mécanismes de subvention et les cadres politiques accordent systématiquement de la valeur à des productions capables de démontrer du lien, de la participation, de l’empathie ou de la cohésion sociale, une préférence se dessine en faveur d’un art susceptible de s’inscrire dans de tels objectifs. Cela ne passe pas nécessairement par une exclusion explicite ; cette sélection peut tout aussi bien s’opérer par la programmation, le financement et le langage dans lequel la pertinence artistique est évaluée. L’espace disponible pour des œuvres qui n’offrent aucune solution, ne fondent aucune communauté et ne transforment aucun antagonisme en récit partagé risque ainsi de se réduire. Du point de vue de la démocratie agonistique de Mouffe, il ne s’agit nullement d’une perte secondaire : la démocratie a besoin de lieux où conflit et différence puissent rester visibles et contestables. Du point de vue d’Adorno, quelque chose de comparable vaut pour l’art : sa force sociale réside précisément dans ce qui échappe à une fonction souhaitée d’avance.</p>

        <p>L’objection ne vise donc pas la pensée, le lien, l’empathie ou la résilience démocratique en tant qu’effets possibles de l’art. Au contraire. La question est de savoir ce qui se produit lorsque de tels effets possibles deviennent des attentes, des missions ou des critères de valeur culturelle. Les rapports politiques, économiques et sociaux produisent des antagonismes qui doivent être traités institutionnellement ; lorsque l’on demande ensuite à la culture d’atténuer affectivement ces tensions ou de les réconcilier symboliquement, un problème politique se déplace vers le domaine culturel. La culture risque alors de devenir moins un lieu où les contradictions sociales peuvent rester visibles et sensibles qu’un moyen de rendre leurs conséquences plus supportables.</p>
      `,
        },
      },

      {
        id: "b8",
        html: {
          nl: `
        <p>Verbinding kan waardevol zijn, maar is politiek onbepaald. Democratie vraagt niet om maximale verbinding, maar om instituties en culturele vormen waarin verschillen kunnen blijven bestaan. Kunst kan verbinden, maar haar democratische betekenis kan evenzeer liggen in haar vermogen verbinding te weigeren, gemeenschap te verstoren of tegenstellingen onverzoend te laten.</p>
      `,

          en: `
        <p>Connection can be valuable, but it is politically indeterminate. Democracy does not require maximum connection, but institutions and cultural forms within which differences can continue to exist. Art can connect, but its democratic significance may equally lie in its capacity to refuse connection, disrupt community or leave contradictions unreconciled.</p>
      `,

          fr: `
        <p>Le lien peut avoir de la valeur, mais il est politiquement indéterminé. La démocratie n’exige pas un maximum de lien, mais des institutions et des formes culturelles au sein desquelles les différences puissent subsister. L’art peut créer du lien, mais sa signification démocratique peut tout autant résider dans sa capacité à refuser le lien, à perturber la communauté ou à laisser les contradictions sans réconciliation.</p>
      `,
        },
      },
    ],

    marginalia: [],
  },
];
