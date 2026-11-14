# Hariom Sharma — Standalone Node.js Portfolio

https://portfolio-722r.onrender.com

This is the standalone portfolio project for Hariom Sharma. It is intentionally separate from the future AdSnap image-editing application.

## Stack

The portfolio uses only a simple Node.js web stack: **Node.js**, **Express**, **EJS**, plain **CSS**, and vanilla **JavaScript**. It does not use React, Tailwind, TypeScript, Vite, or a frontend build step.

## Run locally

Install dependencies and start the server from this directory:

```bash
npm install
npm start
```

Then open `http://localhost:3000` in a browser. During development, use:

```bash
npm run dev
```

The health endpoint is available at `http://localhost:3000/health`.

## Project structure

| Path | Purpose |
| --- | --- |
| `server.js` | Express server, EJS configuration, static files, homepage route, and health endpoint |
| `views/index.ejs` | Server-rendered portfolio page |
| `public/styles.css` | Plain CSS design system and responsive layout |
| `public/app.js` | Small vanilla JavaScript mobile-navigation behavior |
| `data/portfolio.js` | Portfolio credentials, projects, skills, experience, and certificates |
| `public/assets/` | Resume, certificates, and local visual assets |

## Current portfolio content

The page includes personal details, education, experience, technical and core skills, troubleshooting, leadership and NSS volunteering, certificates, contact links, resume download, and the approved project set. The project set includes ShopEasy/e-commerce, face-recognition attendance, weather forecasting, AdSnap, and the featured NASA Mission Control project. The Certificates section now also includes the CSVTU Certificate of Recognition for **Robotics & Drone Making**, completed with an **A+ grade from 15 July to 15 August 2025**.

AdSnap is intentionally kept as an individual project card. It is not mixed into the portfolio server. Its future application should be implemented as a separate Node.js project with its own API routes for background removal, background modification, and image generation.

## Connected repositories

- ShopEasy/e-commerce: https://github.com/harishrarma/ShopEasy-
- Face recognition attendance: https://github.com/harishrarma/face-recognition-face-attendance-match
- Weather forecasting: https://github.com/harishrarma/weather-forecasting-
- NASA Mission Control: https://github.com/harishrarma/nasa-project-master
- GitHub profile: https://github.com/harishrarma
- LeetCode: https://leetcode.com/u/sRADoEZxtu/
- LinkedIn: https://www.linkedin.com/in/hariom-sharma

## Credentials and supplied files

The supplied resume is included at `public/assets/Hariom-Sharma-Resume.pdf`. Certificate images are included under `public/assets/certificates/`. No secret API keys are included in this ZIP. Public profile links are stored in `data/portfolio.js`.

## Customizing the portfolio

Edit `data/portfolio.js` to update contact details, project links, skills, experience, or certificates. Edit `views/index.ejs` for content structure and `public/styles.css` for visual styling. Keep AdSnap API credentials and any future provider credentials in environment variables in the separate AdSnap project; never commit secrets into this portfolio repository.

## Delivery note

This project is a clean source package. It includes the necessary Node.js files and local assets, but not `node_modules`. Run `npm install` after extracting the ZIP.
