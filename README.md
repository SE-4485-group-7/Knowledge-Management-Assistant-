# Knowledge-Management-Assistant
Built with Next.js

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js**
- **npm**
- A **PostgreSQL** or **MySQL** database (or other supported database)
- **Docker or K8 installed**

### Configuration
1. `npm i` or `npm install`: Initializes your project by downloading all the required packages listed in your package.json file. It creates a node_modules directory where all the dependencies will be stored.
2. Run `docker compose up` to start the container or start it manually inside the docker desktop.
3. Run `npm run build` Build the project.
4. You can either `npm run start` or `npm run dev` to start the development server.

## Commands (to use during development)
- `npm run dev`: Start the development server.
- `npx prisma studio`: Start the database server and interact with your data in Prisma projects.
- `npm run build`: Build the project.(doing this can skip the step 4, 5, 6 above)
- `npm run start`: Start the production server.
- `npm run lint`: Lint the project.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
