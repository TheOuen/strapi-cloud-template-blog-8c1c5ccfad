module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {},
      actionOptions: {
        upload: {
          sizeLimit: 100 * 1024 * 1024, // 100MB in bytes
        },
        uploadStream: {
          maxFileSize: 100 * 1024 * 1024, // 100MB in bytes
        },
      },
    },
  },
  // If you want to use Cloudinary as a provider instead of local storage,
  // uncomment this section and install the plugin:
  // yarn add @strapi/provider-upload-cloudinary
  /*
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  */
});
