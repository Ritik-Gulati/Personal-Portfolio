# Deployment Strategy & CI/CD Pipeline Integration

This guide provides steps for deploying Ritik Gulati's Premium Personal Portfolio website to static cloud hosting engines. It is fully optimized for **Vercel**, **Netlifly**, or **AWS Amplify** with automated continuous integration (CI/CD) pipelines direct from your GitHub repository.

---

## 🚀 Recommended Approach: Vercel (Git-Backed)

Deploying via Vercel is the recommended method. It provides instant builds, an integrated global Edge Network, SSL certificates, and preview deployments for every pull request automatically.

### Step 1: Push Project to GitHub

Initialize git locally and push this codebase to a repository on your GitHub account:

```bash
git init
git add .
git commit -m "feat: initial commit of premium portfolio"
git branch -M main
git remote add origin https://github.com/RitikGulati/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Import Project to Vercel

1. Navigate to the [Vercel Dashboard](https://vercel.com/) and click **Add New** -> **Project**.
2. Connect your GitHub account and locate your repository name.
3. Click **Import**.

### Step 3: Configure Build Commands

Vercel automatically detects the Vite React TS framework and pre-fills perfect settings. Ensure the configuration reflects:

* **Framework Preset:** `Vite`
* **Build Command:** `npm run build`
* **Output Directory:** `dist`

### Step 4: Environment Variables (Optional)

If you scale your portfolio to use secure dynamic backends or APIs, add them in the project settings panel. If you prefer holding sensitive data on server lines, proxy those calls under local configurations first.

---

## 🛠️ GitHub Actions Alternative (Self-Managed CI/CD)

If you prefer deploying via your own build containers, you can use the following GitHub Actions workflow. Create the file `/git/workflows/deploy.yml` within your repo:

```yaml
name: Compile & Deploy Static Assets

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Lint TS Types
        run: npm run lint

      - name: Build Production Bundle
        run: npm run build

      # Add deployment step (e.g. S3 Upload or Vercel trigger) here
```

---

## 📦 Optimization Settings for Production

1. **Asset Optimization:** Heavy images or media assets are stored inside the `src/assets/images` folder. Vite automatically bundles them, base64-encodes miniature svgs, and compresses layout boundaries automatically.
2. **Bundle Chunking:** If additional dependencies are added later, Vite handles chunk-splitting automatically to preserve high lighthouse audit ratings.
