Built with [NextJS](https://nextjs.org), [React](https://react.dev/) & [TailwindCSS](https://tailwindcss.com/).

## Blogs

For the blog section, [Medium](https://medium.com) is integrated.
To enable the blogs section, enter the blog URL in the `blog.json` config file.

## Run Locally

To start the development server, simply run:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

This template uses the JSON files in the config directory for the most of the sites content.
I.e. to customize it, make sure to edit all the config files as per your needs.\
To then export a static HTML, CSS & JS build, run:

```bash
npx next build
```

This will pre-render all the HTML based on the config values & export that to the out directory.

## Deploy

For deployment, I recommend utilizing [Cloudflare Pages](https://pages.cloudflare.com/).\
Just register your Cloudflare account, create a new Pages project, upload your out folder (you have to [build for production](#build-for-production) before) and your site is live on a .pages.dev subdomain!\
You can as well link your own custom domain for free.

## Attributions

Sample Candidate Images taken from [Unsplash](https://unsplash.com).