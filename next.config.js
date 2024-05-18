// @ts-check

const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const BASE_PATH = '/blog';

module.exports = async phase => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        ...(phase === PHASE_PRODUCTION_BUILD
            ? {
                  images: { unoptimized: true, loader: 'custom', loaderFile: './imageLoader.js' },
                  basePath: BASE_PATH,
                  output: 'export'
              }
            : {})
    };

    return nextConfig;
};
