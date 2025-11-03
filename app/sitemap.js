export default function sitemap() {
  const baseUrl = 'https://adguardy.com';
  
  const routes = [
    '',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  }));
}
