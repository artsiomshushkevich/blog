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
                  basePath: BASE_PATH,
                  images: {
                      path: `${BASE_PATH}/_next/image`
                  }
              }
            : {})
    };

    return nextConfig;
};
