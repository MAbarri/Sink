export default defineAppConfig({
  title: 'vibemAIler Links',
  documentation: '',
  github: '',
  coffee: '',
  twitter: '',
  telegram: '',
  description: 'Link shortening, cloaking, and click analytics for vibemAIler campaigns.',
  image: '/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
