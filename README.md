## 💀 Dread-it - A Social News App

![app version](https://img.shields.io/github/package-json/version/werd-uk/fe-nc-news?style=flat-square) ![commit history](https://img.shields.io/github/last-commit/werd-uk/fe-nc-news/main?style=flat-square)

## Front-end - hosted on netlify [nc-dread-it.netlify.app](nc-dread-it.netlify.app)

Dread-it is a simple front-end that leverages an [**express.js based back-end service**](https://github.com/werd-uk/nc-news) to complete a social news website, allowing users the ability to post, comment and vote on news articles - big news, local news, or whatever takes their interest.

### Contributions

You're more than welcome to contribute to this app, taking it in your own direction.

#### Dependencies

[![node.js](https://img.shields.io/badge/node.js-v22.12-417e38?style=flat-square&logo=node.js)](https://nodejs.org/en/download)
[![vite](https://img.shields.io/badge/vite-v6.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/guide/)
[![react](https://img.shields.io/badge/react.js-v19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![react-router](https://img.shields.io/badge/react--router-v7.1-CA4245?style=flat-square&logo=react-router)](https://reactrouter.com/home)
[![axios](https://img.shields.io/badge/axios-v1.7-5A29E4?style=flat-square&logo=axios)](https://axios-http.com/docs/intro)

#### Styling

[![tailwindcss](https://img.shields.io/badge/tailwindcss-v4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com/blog/tailwindcss-v4)
[![@tailwindcss/vite](https://img.shields.io/badge/@tailwindcss/vite-v4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com/docs/installation/using-vite)
[![headless-ui](https://img.shields.io/badge/@headlessui/react-v2.2-66E3FF?style=flat-square&logo=headless-ui)](https://headlessui.com/)
[![phosphor-icons](https://img.shields.io/badge/@phosphor--icons/react-v2.2-3C402B?style=flat-square&logo=phosphor-icons)](https://phosphoricons.com/)

### Getting started (after you fork this repo)

```bash
#bash
git clone https://github.com/[YOUR_USERNAME]/fe-nc-news
cd fe-nc-news
npm install # installs all packages noted in package.json
```

```bash
npm run dev # to start the app in dev, accessing in the browser
```

```bash
npm run build # to start the build process
```

### Optional: Alt Tag Retrieval

> [!IMPORTANT]
> The images stored in the database are primarily hosting on [Pexels](https://www.pexels.com/api/), so for improved accessibility, this app retrieves the alt tag from their API. You will need to create an API account, getting an API key with Pexels and update it in the `.env` file stored in the root directory of your project.

<pre>
<span style="color:#7ee787"><em>./.env</em></span>
VITE_PEXELS_API=<span style="color:#7ee787"><em>YOURAPIKEYGOESHERE</em></span>
</code>
</pre>

> This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
