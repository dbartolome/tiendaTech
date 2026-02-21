# Welcome to your Lovable project

## Deploy manual a hosting PHP/Apache (rápido)

Este proyecto es una SPA estática. Puedes subirlo a un hosting normal con PHP sin problema.

### 1) Elegir base path de build

- Si publicas en raíz (`https://tudominio.com/`): `npm run build:root`
- Si publicas en subcarpeta (`https://tudominio.com/tiendaTech/`): `npm run build:subdir`

### 2) Compilar

```sh
npm ci
npm run build:root
```

### 3) Subir al hosting

Sube **todo el contenido de `dist/`** a `public_html/` (o a la subcarpeta correspondiente).

Importante:
- Mantén `dist/.htaccess` en el servidor para que rutas SPA como `/producto/...` no den 404.
- No necesitas backend PHP para esta app; PHP solo convive con los archivos estáticos.

## Deploy automático a Hostinger (FTP)

El repo está configurado para desplegar automáticamente al hacer push a `main` con:
- Workflow: `.github/workflows/deploy-hostinger-dev.yml`

Configura estos secrets en GitHub Actions:
- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PORT` (opcional, por defecto `21`)
- `FTP_SERVER_DIR` (opcional, por defecto `/public_html/`)
- `VITE_BASE_PATH` (opcional, usa `/` para raíz o `/subcarpeta/`)

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Deploy to production with GitHub + Hostinger (FTP)

This project is prepared for automatic deployment to Hostinger via GitHub Actions.

### Branch strategy

- `develop` -> automatic development deploy (`.github/workflows/deploy-hostinger-dev.yml`)
- `main` -> source branch for production promotion
- production deploy is manual from Actions (`.github/workflows/deploy-hostinger-ftp.yml`)

### 1) Add GitHub repository secrets

In your GitHub repo go to **Settings > Secrets and variables > Actions** and create:

- `FTP_SERVER` (example: `ftp.tudominio.com`)
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PORT` (optional, default `21`)
- `FTP_SERVER_DIR` (optional, default `/public_html/`)
- `VITE_BASE_PATH` (optional, default `/`; use `/subcarpeta/` if needed)

For **development** (`develop` branch), create these too:

- `DEV_FTP_SERVER`
- `DEV_FTP_USERNAME`
- `DEV_FTP_PASSWORD`
- `DEV_FTP_PORT` (optional, default `21`)
- `DEV_FTP_SERVER_DIR` (optional, default `/public_html/desarrollo/`)
- `DEV_VITE_BASE_PATH` (optional, default `/`; use `/desarrollo/` if your dev URL is in subfolder)

### 2) Development first (`develop`)

Every push to `develop` triggers development workflow:

1. Install dependencies
2. Run `lint` and `test`
3. Build `dist/`
4. Upload `dist/` by FTP to development folder

Workflow file:

- `.github/workflows/deploy-hostinger-dev.yml`

### 3) Promote to production (manual)

When development is validated, merge `develop` into `main`.
Then run workflow manually from **Actions**:

1. Open `Deploy to Hostinger (FTP)`
2. Click **Run workflow**
3. Use `ref=main` (or specific tag/SHA)

This production workflow will:

1. Install dependencies
2. Run `lint` and `test`
3. Build `dist/`
4. Upload `dist/` by FTP to Hostinger

Workflow file:

- `.github/workflows/deploy-hostinger-ftp.yml`

### 4) SPA routing in production

The file `public/.htaccess` is included so Apache serves `index.html` for SPA routes.
This avoids 404 when reloading routes like `/producto/1`.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
