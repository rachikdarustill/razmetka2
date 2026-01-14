import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://leoni.example.com';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return [
    {
      url: `${baseUrl}${basePath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
