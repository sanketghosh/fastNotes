<div align="center">
<h1>fastNotes</h1>
<p>A simple, quick and minimal note taking experince inside your web browser.</p>
</div>

<div align="center">
  <br />
    <a href="https://github.com/sanketghosh/ch88r" target="_blank">
      <img src="https://github.com/sanketghosh/fastNotes/blob/main/client/public/fastNotesDemo.png" alt="Project Banner">
    </a>
  <br />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=black&style=for-the-badge" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white&style=for-the-badge" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Sqlite-000000?logo=sqlite&logoColor=white&style=for-the-badge" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Markdown-2D3748?logo=markdown&logoColor=white&style=for-the-badge" height="40" alt="prisma logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white&style=for-the-badge" height="40" alt="prisma logo"  />
</div>

</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

fastNotes is a simple and easy-to-use note-taking app designed for those who appreciate clarity and speed. With its minimalist design, you can quickly jot down your thoughts without distractions. The app supports Markdown, allowing you to format your notes effortlessly, making it perfect for creating organized documents.

Whether you're taking notes in a meeting, brainstorming ideas, or writing longer texts, fastNotes offers a clean environment that boosts your productivity. You can access your notes from any device—be it your phone or computer—and thanks to seamless synchronization, all your notes are always up-to-date.

fastNotes is fully open-source, allowing users to customize and contribute to the app.

## <a name="tech-stack">Tech Stack</a>

- React (No meta framework)
- Tailwind
- ShadcnUI
- TypeScript
- Bun
- Markdown
- Express
- Sqlite
- PrismaORM

## <a name="features">Features</a>

- **Minimalist Design**: A clean and simple interface for distraction-free note-taking.
- **Markdown Support**: Easily format your notes with Markdown for structured documents.
- **Cross-Device Access**: Access your notes from any device, including mobile and desktop.
- **Seamless Synchronization**: Keep your notes updated across all devices in real-time.
- **Fully Open-Source**: Customize and contribute to the app, promoting community collaboration.
- **Quick Note Capture**: Effortlessly jot down ideas and thoughts without delays.
- **Search Functionality**: Quickly find specific notes or keywords within your content.
- **Offline Access**: Work on your notes even without an internet connection.
- **Lightweight Performance**: Fast loading times and minimal resource usage for a smooth experience.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Bun](https://bun.sh/)

**Cloning the Repository**

```bash
git clone https://github.com/sanketghosh/fastNotes.git
cd ch88r
```

Now we will install `client` dependencies and `api` dependencies separately one by one. Let's install the **client** dependencies first and then **api**:

**Client Installation**

Install the front-end / client dependencies using `bun`:

```bash
cd client
bun install
```

**Set Up Environment Variables**

Create a new file named `.env` inside the `client` directory and add the following content:

```env
VITE_API_BASE_URL=<set_your_api_base_url>
```

Replace the placeholder values with your actual API base URL. And in development if you are keeping your API PORT same as in this repository use `http://localhost:8000`

**Running the Client**

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

Well client setup is done now it's time for our back-end or `api`

**API installation**
Install the back-end / api dependencies using `bun`:

```bash
cd api (maybe `cd ../api` if you are already inside client)
bun install
```

**Set Up Environment Variables**

Create a new file named `.env` inside the `api` directory and add the following content:

```env
DATABASE_URL=
FRONTEND_URL=
JWT_SECRET_KEY=
PORT=
NODE_ENV=
```

Replace the placeholder values with your actual database URL and make sure to fill the others too. If you are in unix based system type `openssl rand -hex 64` to generate a random complex string for `JWT_SECRET_KEY`. For example check `.env.example` file.

**Prisma setup and schema migration**
If your prefer a data-source provider other than `Sqlite` and generate a prisma schema from scratch run `bunx prisma init --datasource-provider <your_datasource_provider>` change placeholder value with a data-source provider like `mysql` `postgres` etc and run the commands below.
If you are using Sqlite skip the previous step and paste the following command:

- Generate prisma client: `bunx prisma generate --datasource-provider sqlite`
- Migrate `bunx prisma migrate dev --name <any_migration_name>`

You have to run this migration command with every schema changes and if there is already a `migration` folder inside prisma directory delete that before running these commands.
To run prisma studio and visualize and edit you data in an interface just run : `bunx prisma studio`
Check prisma docs for more.

**Running the API**

```bash
bun run dev
```

You api is now running on `http://localhost:8000`.
