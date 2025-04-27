module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'", 
            'data:', 
            'blob:',
            'dl.airtable.com', 
            '*.unsplash.com',
            '*.pexels.com', 
            '*.cloudinary.com',
            '*.media.strapiapp.com'
          ],
          'media-src': [
            "'self'", 
            'data:',
            'blob:', 
            'dl.airtable.com',
            '*.unsplash.com',
            '*.pexels.com', 
            '*.cloudinary.com',
            '*.media.strapiapp.com'
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
