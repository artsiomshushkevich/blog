const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = async phase => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        ...(phase === PHASE_PRODUCTION_BUILD
            ? {
                  images: { loader: 'custom', loaderFile: './imageLoader.js' },
                  basePath: '/blog',
                  output: 'export'
              }
            : {})
    };

    return nextConfig;
};
