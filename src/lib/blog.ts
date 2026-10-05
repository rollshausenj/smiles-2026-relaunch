import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

/** Sprache aus dem Ordner (de/… oder en/…) */
export const postLang = (post: Post): Lang => (post.id.startsWith('en/') ? 'en' : 'de');

export const postSlug = (post: Post): string => post.id.replace(/^(de|en)\//, '');

export const postUrl = (post: Post): string =>
  postLang(post) === 'en' ? `/en/news/${postSlug(post)}/` : `/aktuelles/${postSlug(post)}/`;

export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection(
    'blog',
    (p) => postLang(p) === lang && (import.meta.env.DEV || !p.data.draft),
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (date: Date, lang: Lang): string =>
  date.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
