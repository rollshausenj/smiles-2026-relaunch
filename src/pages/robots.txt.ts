import type { APIRoute } from 'astro';
import { INDEXING } from '../config';

export const GET: APIRoute = () => {
  const body = INDEXING ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
