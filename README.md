# Portfolio Website

A modern, interactive portfolio website built with Next.js and React.

This project showcases:
- Featured projects
- Certifications
- Contact section with form submission
- Custom animated UI components and 3D visual elements

## Tech Stack

- Next.js 15
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Three.js (`@react-three/fiber`, `@react-three/drei`)
- Sonner (toast notifications)

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev`: Start local development server
- `npm run build`: Create production build and run lint checks
- `npm run start`: Start production server
- `npm run lint`: Run linting

## Project Structure

- `src/app`: App router pages and global styles
- `src/components`: Portfolio sections and reusable UI components
- `public`: Static assets (logos, icons, 3D models)

## Contact Form Configuration

The contact form currently uses EmailJS. If you are forking this repository, replace the EmailJS service/template/public key values in `src/components/contactSection.tsx` with your own credentials.

## Deployment

This app can be deployed on Vercel or any platform that supports Next.js.

- Vercel quick start: [https://vercel.com/new](https://vercel.com/new)
- Next.js deployment docs: [https://nextjs.org/docs/app/building-your-application/deploying](https://nextjs.org/docs/app/building-your-application/deploying)
