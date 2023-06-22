/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/media',
              publicPath: '_next/static/media',
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  