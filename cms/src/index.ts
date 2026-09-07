import type { Core } from '@strapi/strapi';

function slugifyHalf(title: string): string {
  const words = title.trim().split(/\s+/).filter((w) => /[a-zA-Z0-9]/.test(w));
  const halfCount = Math.max(1, Math.ceil(words.length / 2));

  return words
    .slice(0, halfCount)
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

async function uniqueSlug(strapi: Core.Strapi, base: string, ignoreDocumentId?: string): Promise<string> {
  let slug = base;
  let suffix = 2;

  while (
    await strapi.documents('api::blog-post.blog-post').findFirst({
      filters: { slug, documentId: { $ne: ignoreDocumentId ?? '' } },
    })
  ) {
    slug = `${base}-${suffix++}`;
  }

  return slug;
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ['api::blog-post.blog-post'],

      async beforeCreate(event) {
        const { data } = event.params;
        if (!data.slug && data.title) {
          data.slug = await uniqueSlug(strapi, slugifyHalf(data.title));
        }
      },

      async beforeUpdate(event) {
        const { data, where } = event.params;
        if (!data.slug && data.title) {
          data.slug = await uniqueSlug(strapi, slugifyHalf(data.title), where?.documentId);
        }
      },
    });
  },
};
