module.exports = {
    siteMetadata: {
        siteUrl: `https://cloud.gdgtucson.com`,
        facebookAppId: `1716588708633676`,
        twitterUsername: `@gdgtucson`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GDG Cloud Tucson`,
                short_name: `GDG Cloud Tucson`,
                description: ``,
                lang: `en`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`
            }
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-react-helmet`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: `GTM-`,
                includeInDevelopment: false,
                defaultDataLayer: { platform: `cumulus-pwa` }
            }
        },
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `https://cloud.gdgtucson.com`,
                sitemap: `https://cloud.gdgtucson.com/sitemap.xml`,
                resolveEnv: () => process.env.GATSBY_ENV,
                env: {
                    development: {
                        policy: [{ userAgent: `*`, disallow: [`/`] }]
                    },
                    production: {
                        policy: [{ userAgent: `*`, allow: `/` }]
                    }
                }
            }
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://cloud.gdgtucson.com`
            }
        },
        {
            resolve: `gatsby-plugin-sentry`,
            options: {
                dsn: `https://@sentry.io/`,
                release: process.env.SENTRY_RELEASE || `unsetReleaseId`,
                environment: process.env.NODE_ENV,
                enabled: (() =>
                    [`production`, `staging`].indexOf(process.env.NODE_ENV) !==
                    -1)()
            }
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Roboto`,
                        variants: [`300`, `400`, `500`, `600`]
                    },
                    {
                        family: `Product Sans`
                    } /*,
                    {
                        family: `Material Icons`
                    } */
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Material Icons']
                }
            }
        },
        {
            resolve: `gatsby-plugin-compile-es6-packages`,
            options: {
                modules: [``]
            }
        }
    ]
};
