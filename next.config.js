// @ts-check

const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const BASE_PATH = '/blog';

module.exports = async phase => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        // ...(phase === PHASE_PRODUCTION_BUILD
        //     ? {
        //           basePath: BASE_PATH,
        //           images: {
        //               remotePatterns: [
        //                   {
        //                       protocol: 'https',
        //                       hostname: 'artsiomshushkevich.github.io',
        //                       port: '',
        //                       pathname: '/blog/**'
        //                   }
        //               ],
        //               path: `${BASE_PATH}/_next/image`,
        //               unoptimized: true
        //           }
        //       }
        //     : {})
    };
    console.log('!!!!!', phase);
    console.log('####', PHASE_PRODUCTION_BUILD === phase);
    /**
     * @type {import('next').NextConfig}
     */
    return {
        ...(phase === PHASE_PRODUCTION_BUILD
            ? {
                  images: { unoptimized: true },
                  basePath: BASE_PATH,
                  output: 'export'
              }
            : {})
    };
};

// /**
//  * @type {import('next').NextConfig}
//  */
// module.exports = {};
