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
Een volgende interventie zal de redactionele en institutionele context analyseren waarin deze reactie niet werd opgenomen.
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

    <p>“The most thought-provoking thing in our thought-provoking time is that we are still not thinking.” It is a quotation from Martin Heidegger, from a 1951 lecture entitled <em>Was heißt Denken?</em>. The temptation is clear: important lines of reasoning, especially in a troubling age, must and will still emerge. Yet Heidegger, so the editorial suggests, fails to criticize which ideas make an age troubling, and postpones the task of thinking otherwise. The human desire for understanding is not taken seriously, and intelligibility becomes a fata morgana. “What shows in this ontology,” as Theodor Adorno wrote in 1966 in <em>Negative Dialectics</em>, “is not so much mystical meditation as the distress of a thinking that seeks its otherness and cannot make a move without fearing to lose what it claims. Tendentially, philosophy becomes a ritualistic posture. Yet there is a truth stirring in that posture as well: the truth of philosophy falling silent.”</p>

    <p>That thinking, whatever it may be called, neither stops nor falls silent — this is a conviction that lies at the basis of <em>De Witte Raaf</em>, and of this issue in particular. Across some ten essays and articles, the challenge is taken up to think better, from the conviction that only in this way can a better life come within reach. The fundamental assumption is this: there is no thinking that is not prepared by reading; reasoning is reacting, which at once provides art and culture with a reason for being.</p>

    <p>...</p>

    <p>The January issue of <em>De Witte Raaf</em> thus becomes a modest sample of how thinking can take place in Dutch today. The selection is of course relative and partly contingent. Even so, one idea remains constant: a quarter of the way into the third millennium, thinking is always also a looking back at the twentieth century — not out of escapism, but because a short-sighted present stands in need of intelligent far-sightedness.</p>

    <p><strong>Christophe Van Gerrewey</strong></p>
  `,

      fr: `
    <p><strong>Qu’appelle-t-on penser ?</strong></p>

    <p>« Ce qu’il y a de plus digne d’être pensé dans notre temps qui donne à penser, c’est que nous ne pensons pas encore. » Il s’agit d’une citation de Martin Heidegger, tirée d’une conférence de 1951 intitulée <em>Was heißt Denken?</em>. La tentation est claire : les raisonnements importants, surtout en une époque inquiétante, doivent et vont encore advenir. Pourtant, suggère l’éditorial, Heidegger ne critique pas les idées qui rendent une époque inquiétante et remet à plus tard la tâche de penser autrement. Le désir humain de comprendre n’est pas pris au sérieux, et l’intelligibilité devient un mirage. « Ce n'est pas tant une méditation mystique qui se manifeste là », comme l’écrivait Theodor Adorno en 1966 dans <em>Dialectique négative</em>, « que la détresse de la pensée qui veut aller vers son autre et ne peut rien se permettre sans la peur d'y perdre ce qu’elle affirme. De par sa tendance la philosophie devient gestus rituel. Certes il s’y manifeste aussi quelque chose de vrai, son silence. »</p>

    <p>Que la pensée, quel que soit le nom qu’on lui donne, ne s’arrête ni ne se taise — voilà une conviction qui est au fondement de <em>De Witte Raaf</em>, et de ce numéro en particulier. Dans une dizaine d’essais et d’articles, le défi est relevé de mieux penser, dans la conviction que c’est seulement ainsi qu’une vie meilleure devient accessible. L’hypothèse essentielle est la suivante : il n’y a pas de pensée qui ne soit préparée par la lecture ; raisonner, c’est réagir, ce qui fournit d’emblée à l’art et à la culture leur raison d’être. </p>

    <p>...</p>
    <p>Le numéro de janvier de <em>De Witte Raaf</em> devient ainsi un modeste échantillon de la manière dont il est aujourd’hui possible de penser en néerlandais. La sélection est évidemment relative et en partie contingente. Pourtant, une idée demeure constante : un quart de chemin dans le troisième millénaire, penser consiste toujours aussi à se retourner vers le XXe siècle — non par escapisme, mais parce qu’un présent myope a besoin d’une intelligente clairvoyance.</p>

    <p><strong>Christophe Van Gerrewey</strong></p>
  `,
    },
  },

  {
    slug: "against-the-ideology-of-connection",
    publishedAt: "2026-03-23",
    authors: ["Interstice"],

    seoTitle: {
      en: "Against the Ideology of Connection",
      nl: "Tegen de ideologie van verbinding",
      fr: "Contre l’idéologie du lien",
    },

    seoDescription: {
      en: "Interstice examines how the notion of ‘connection’ can function as a depoliticizing force, masking conflict and reinforcing forms of domination.",
      nl: "Interstice onderzoekt hoe het begrip ‘verbinding’ kan functioneren als een depolitiserende kracht die conflict maskeert en vormen van dominantie versterkt.",
      fr: "Interstice examine comment la notion de « lien » peut fonctionner comme une force dépolitisante qui masque les conflits et renforce des formes de domination.",
    },

    title: {
      en: "Against the Ideology of Connection",
      nl: "Tegen de ideologie van verbinding",
      fr: "Contre l’idéologie du lien",
    },

    intro: {
      en: "In contemporary cultural discourse, ‘connection’ is often presented as an unquestioned good. This intervention questions that assumption.",
      nl: "In het hedendaagse culturele discours wordt ‘verbinding’ vaak voorgesteld als een vanzelfsprekend goed. Deze interventie stelt die veronderstelling in vraag.",
      fr: "Dans le discours culturel contemporain, le « lien » est souvent présenté comme un bien évident. Cette intervention en interroge le présupposé.",
    },

    contextLabel: {
      en: "Context",
      nl: "Context",
      fr: "Contexte",
    },

    contextText: {
      en: "Prompted by cultural programming that foregrounds ‘connection’ as a response to contemporary crises, and by the uncritical endorsement of this notion in public debate. This text forms part of a broader intervention that will be further developed.",
      nl: "Aangezet door culturele programmatie waarin ‘verbinding’ als antwoord op hedendaagse crises wordt voorgesteld, en door de onkritische omarming van dit begrip in het publieke debat. Deze tekst maakt deel uit van een bredere interventie die verder zal worden uitgewerkt.",
      fr: "Inspiré par des programmations culturelles qui présentent le « lien » comme réponse aux crises contemporaines, ainsi que par l’adhésion non critique à cette notion dans le débat public. Ce texte s’inscrit dans une intervention plus large qui sera développée ultérieurement.",
    },

    bibliographyLabel: {
      en: "Notes",
      nl: "Notities",
      fr: "Notes",
    },

    bodyHtml: {
      en: `
        <p>In recent years, “connection” has become a central term in cultural and political discourse. It is invoked as a remedy against fragmentation, polarization, and social anxiety. Culture, in particular, is increasingly called upon to “connect”.</p>

        <p>This appeal appears self-evident. Yet it rests on an unexamined assumption: that connection is inherently emancipatory. This intervention challenges that assumption.</p>

        <p>Not all forms of connection are politically neutral. On the contrary, connection can function as a powerful mechanism of alignment, normalization, and control. It can suppress conflict by framing disagreement as a failure of relation rather than as a structural or political antagonism.</p>

        <p>Historically, reactionary and fascist movements have demonstrated a remarkable capacity to produce intense forms of collective attachment. They do not lack connection; they mobilize it. The problem is therefore not the absence of connection, but the forms it takes and the structures it reinforces.</p>

        <p>When culture defines its role in terms of connection, it risks displacing conflict instead of articulating it. It risks transforming political contradictions into interpersonal deficits, and structural tensions into communicative problems.</p>

        <p>A critical practice cannot be grounded in connection alone. It must be able to sustain disjunction, disagreement, and forms of non-relation. It must recognize that not everything can, or should, be reconciled.</p>

        <p>Connection is not a solution in itself. It is a form that can either reproduce or contest existing structures of power. To treat it as an unquestioned good is to abandon critique at the very moment it is most needed.</p>

        <p>This text marks a first articulation of a position that will be developed in subsequent interventions.</p>
      `,

      nl: `
        <p>In de voorbije jaren is ‘verbinding’ een centraal begrip geworden in het culturele en politieke discours. Het wordt ingezet als remedie tegen fragmentatie, polarisatie en maatschappelijke onrust. Vooral van cultuur wordt verwacht dat zij “verbindt”.</p>

        <p>Deze oproep lijkt vanzelfsprekend. Ze berust echter op een niet-geëxamineerde veronderstelling: dat verbinding op zich emancipatorisch is. Deze interventie stelt die veronderstelling in vraag.</p>

        <p>Niet elke vorm van verbinding is politiek neutraal. Integendeel, verbinding kan functioneren als een krachtig mechanisme van afstemming, normalisering en controle. Ze kan conflict onderdrukken door meningsverschillen te herformuleren als een gebrek aan relatie, eerder dan als een structureel of politiek antagonisme.</p>

        <p>Historisch gezien hebben reactionaire en fascistische bewegingen een opmerkelijk vermogen getoond om intense vormen van collectieve verbondenheid te produceren. Zij missen geen verbinding; zij mobiliseren haar. Het probleem is dus niet de afwezigheid van verbinding, maar de vormen die zij aanneemt en de structuren die zij versterkt.</p>

        <p>Wanneer cultuur haar rol definieert in termen van verbinding, dreigt zij conflict te verplaatsen in plaats van het te articuleren. Politieke tegenstellingen worden dan herleid tot interpersoonlijke tekorten, en structurele spanningen tot communicatieproblemen.</p>

        <p>Een kritische praktijk kan niet uitsluitend op verbinding berusten. Zij moet ruimte laten voor breuk, verschil en onverenigbaarheid. Niet alles kan, of moet, worden verzoend.</p>

        <p>Verbinding is geen oplossing op zich. Het is een vorm die bestaande machtsstructuren kan reproduceren of juist bevragen. Haar als vanzelfsprekend goed beschouwen betekent de kritiek opgeven op het moment dat ze het meest nodig is.</p>

        <p>Deze tekst vormt een eerste formulering van een positie die in volgende interventies verder zal worden uitgewerkt.</p>
      `,

      fr: `
        <p>Ces dernières années, la notion de « lien » s’est imposée comme un terme central du discours culturel et politique. Elle est mobilisée comme remède à la fragmentation, à la polarisation et à l’anxiété sociale. La culture, en particulier, est appelée à « créer du lien ». </p>

        <p>Cet appel paraît aller de soi. Il repose pourtant sur un présupposé rarement interrogé : que le lien serait en lui-même émancipateur. Cette intervention en questionne l’évidence.</p>

        <p>Toutes les formes de lien ne sont pas politiquement neutres. Le lien peut fonctionner comme un mécanisme puissant d’alignement, de normalisation et de contrôle. Il peut neutraliser le conflit en transformant les désaccords en défauts de relation plutôt qu’en antagonismes structurels ou politiques.</p>

        <p>Historiquement, les mouvements réactionnaires et fascistes ont démontré une capacité remarquable à produire des formes intenses d’attachement collectif. Ils ne manquent pas de lien ; ils le mobilisent. Le problème n’est donc pas l’absence de lien, mais les formes qu’il prend et les structures qu’il renforce.</p>

        <p>Lorsque la culture définit son rôle en termes de lien, elle risque de déplacer le conflit au lieu de l’articuler. Les contradictions politiques deviennent alors des déficits interpersonnels, et les tensions structurelles des problèmes de communication.</p>

        <p>Une pratique critique ne peut se fonder uniquement sur le lien. Elle doit pouvoir soutenir la disjonction, le désaccord et des formes de non-relation. Tout ne peut pas, ni ne doit, être réconcilié.</p>

        <p>Le lien n’est pas une solution en soi. C’est une forme qui peut reproduire ou contester les structures de pouvoir existantes. Le traiter comme un bien évident revient à abandonner la critique au moment où elle est la plus nécessaire.</p>

        <p>Ce texte constitue une première formulation d’une position qui sera développée dans des interventions ultérieures.</p>
      `,
    },

    marginalia: [
      {
        id: "m1",
        anchorParagraph: 3,
        text: {
          en: "Connection can be a technique of control.",
          nl: "Verbinding kan een techniek van controle zijn.",
          fr: "Le lien peut être une technique de contrôle.",
        },
      },
      {
        id: "m2",
        anchorParagraph: 5,
        text: {
          en: "Not every conflict is a failure of relation.",
          nl: "Niet elk conflict is een relationeel falen.",
          fr: "Tout conflit n’est pas un échec relationnel.",
        },
      },
    ],
  },
];
