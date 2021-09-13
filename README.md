# mdn-minimalist

[![Netlify Status](https://api.netlify.com/api/v1/badges/9b97df5e-40a6-47b0-9c73-5a1086c3e2a6/deploy-status)](https://app.netlify.com/sites/mdn-minimalist/deploys)

The base Sass for Mozilla Developer based projects and products.

## Testing changes locally

Before you can start working with minimalist, you need to install [Hugo](https://gohugo.io/getting-started/installing/).

When making changes to minimalist, testing is done via the styleguide. To run the styleguide, built on Hugo, run the following command in your terminal:

```bash
yarn styleguide
```

This will do an initial build and startup Hugo. You can now browser the styleguide locally at [http://localhost:1313](http://localhost:1313). Hugo will run in watch mode so, if any files or assets changes, it will automatically rebuild and reload the current page in the browser.

When you make a change to minimalist, you need to trigger a new build of the minimalist source. In a separate terminal instance, run the following:

```bash
yarn build:styleguide:sass
```
