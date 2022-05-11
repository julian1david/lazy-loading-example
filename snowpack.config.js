/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    out: 'docs',
    metaUrlPath: 'snowpack',
    baseUrl: 'https://julian1david.github.io/lazy-loading-example',
  },
}
