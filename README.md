# Short URL
Project to shortening URL.

## Prerequisites

- Node.js
- Docker

## Install
1. **Setup Environment Variables**

Clone .env.template to .env with your own values.

```bash
cp .env.template .env
```

If you want to set the current URL output to a custom one, change the `URL_BASE` environment variable. If not, keep it as null.

2. **Install dependencies**
```bash
npm install
```

3. **Deploy database**

Use Docker to deploy the database.
```bash
docker-compose up -d
```

4. **Run the server**

```bash
npm run start:dev
```