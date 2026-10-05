export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

/** Jede Seite hat einen Schlüssel; darüber findet der Sprachumschalter die Übersetzung. */
export const routes = {
  home: { de: '/', en: '/en/' },
  donate: { de: '/spenden/', en: '/en/donate/' },
  projects: { de: '/projekte/', en: '/en/projects/' },
  education: { de: '/projekte/bildungssystem/', en: '/en/projects/education-system/' },
  digital: { de: '/projekte/digital-empowerment/', en: '/en/projects/digital-empowerment/' },
  hygiene: { de: '/projekte/hygiene/', en: '/en/projects/hygiene/' },
  news: { de: '/aktuelles/', en: '/en/news/' },
  about: { de: '/ueber-uns/', en: '/en/about/' },
  teamKenya: { de: '/ueber-uns/team-kenya/', en: '/en/about/team-kenya/' },
  transparency: { de: '/ueber-uns/transparenz/', en: '/en/about/transparency/' },
  join: { de: '/mitmachen/', en: '/en/get-involved/' },
  contact: { de: '/kontakt/', en: '/en/contact/' },
  imprint: { de: '/impressum/', en: '/en/imprint/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
} as const satisfies Record<string, Record<Lang, string>>;
export type RouteKey = keyof typeof routes;

export const nav: { key: RouteKey; label: Record<Lang, string> }[] = [
  { key: 'donate', label: { de: 'Spenden', en: 'Donate' } },
  { key: 'projects', label: { de: 'Projekte', en: 'Projects' } },
  { key: 'news', label: { de: 'Aktuelles', en: 'News' } },
  { key: 'about', label: { de: 'Über uns', en: 'About us' } },
  { key: 'join', label: { de: 'Mitmachen', en: 'Get involved' } },
  { key: 'contact', label: { de: 'Kontakt', en: 'Contact' } },
];

export const ui = {
  de: {
    'site.title': 'Smiles Africa Charity',
    'site.claim': 'Bildung, die Zukunft schafft.',
    'site.description':
      'Smiles Africa e.V. ermöglicht Kindern und Jugendlichen aus Korogocho, Nairobi, eine zukunftsorientierte Ausbildung – durch Stipendien und Mentoring vor Ort.',
    'cta.donate': 'Jetzt spenden',
    'cta.join': 'Mitmachen',
    'cta.more': 'Mehr erfahren',
    'nav.menu': 'Menü',
    'nav.skip': 'Zum Inhalt springen',
    'news.readMore': 'Weiterlesen',
    'news.all': 'Alle Beiträge',
    'news.latest': 'Aktuelles',
    'news.by': 'von',
    'news.empty': 'Noch keine Beiträge auf Englisch – hier sind die neuesten deutschen Beiträge.',
    'footer.contactDe': 'Kontakt Deutschland',
    'footer.contactKe': 'Kontakt Kenia',
    'footer.bank': 'Spendenkonto',
    'footer.follow': 'Folge uns',
    'video.consent':
      'Beim Abspielen wird eine Verbindung zu YouTube (Google) hergestellt. Mehr dazu in der Datenschutzerklärung.',
    'video.play': 'Video laden und abspielen',
  },
  en: {
    'site.title': 'Smiles Africa Charity',
    'site.claim': 'Education that creates a future.',
    'site.description':
      'Smiles Africa e.V. gives children and young people from Korogocho, Nairobi, access to future-oriented education – through scholarships and local mentoring.',
    'cta.donate': 'Donate now',
    'cta.join': 'Get involved',
    'cta.more': 'Learn more',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'news.readMore': 'Read more',
    'news.all': 'All posts',
    'news.latest': 'News',
    'news.by': 'by',
    'news.empty': 'No English posts yet – here are our latest posts in German.',
    'footer.contactDe': 'Contact Germany',
    'footer.contactKe': 'Contact Kenya',
    'footer.bank': 'Bank details',
    'footer.follow': 'Follow us',
    'video.consent':
      'Playing the video connects to YouTube (Google). See our privacy policy for details.',
    'video.play': 'Load and play video',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['de']): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function url(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/** Externe Ziele, die mehrfach vorkommen. */
export const links = {
  betterplace:
    'https://www.betterplace.org/de/projects/59168-qualitative-bildung-fur-kids-jugendliche-in-kenia-smiles-africa-charity',
  betterplaceDonate:
    'https://www.betterplace.org/de/donate/platform/projects/59168-qualitative-bildung-fur-kids-jugendliche-in-kenia-smiles-africa-charity',
  instagramDe: 'https://www.instagram.com/smilesafricacharity_de/',
  instagramKe: 'https://www.instagram.com/smilesafricacharity_ke/',
  facebook: 'https://www.facebook.com/SmilesAfricaCharity/',
  email: 'info@smilesafrica.de',
} as const;

export const org = {
  name: 'Smiles Africa e.V.',
  street: 'Moltkestr. 3a',
  city: '55118 Mainz',
  iban: 'DE46 5519 0000 0928 7020 18',
  bic: 'MVBMDE55',
  kenya: {
    name: 'Smiles Africa CLG',
    contact: 'Peter Mwashi Litonde',
    address: 'Postbox 64349-00620, Nairobi, Kenya',
  },
} as const;
