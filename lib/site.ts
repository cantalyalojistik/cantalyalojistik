export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://4vksvg4q9x-afk.github.io/cantalyalojistik';

export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(path: string) {
  if (!path.startsWith('/')) {
    return path;
  }

  return `${siteBasePath}${path}`;
}
