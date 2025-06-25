import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts.js';

export async function GET() {
  const posts = await getCollection('blog');

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // Replace this with your actual site URL
    site: 'https://austins-maritime-oil-and-gas-insight.netlify.app',
    items: posts.map((post) => ({
      ...post.data,
      link: `https://austins-maritime-oil-and-gas-insight.netlify.app/blog/${post.id}/`,
    })),
  });
}