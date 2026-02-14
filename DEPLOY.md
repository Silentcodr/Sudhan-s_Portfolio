# 🌍 How to Deploy to Netlify

Netlify is a fantastic choice for hosting Vite/React applications because it is fast, free, and automatically updates whenever you push code to GitHub.

## Step-by-Step Guide

1.  **Push Code to GitHub**
    - Ensure your latest code is on GitHub (I have already pushed everything for you!).
    - Repo Link: [https://github.com/Silentcodr/Sudhan-s_Portfolio](https://github.com/Silentcodr/Sudhan-s_Portfolio)

2.  **Log in to Netlify**
    - Go to [netlify.com](https://www.netlify.com/).
    - Click **"Log in"** and sign in with **GitHub**.

3.  **Create a New Site**
    - In your Netlify dashboard, click **"Add new site"**.
    - Select **"Import from existing project"**.

4.  **Connect to GitHub**
    - Choose **GitHub** as your Git provider.
    - It may ask for permission to access your repositories. Grant it.
    - Search for and select your repository: `Sudhan-s_Portfolio`.

5.  **Configure Build Settings**
    - Netlify usually detects these automatically, but double-check:
        - **Build command**: `npm run build`
        - **Publish directory**: `dist`
    - Click **"Deploy Personal Site"**.

6.  **Done!**
    - Netlify will build your site (takes about 1 minute).
    - You will get a random URL (e.g., `silly-name-12345.netlify.app`).
    - You can change this in **Site Settings > Change site name**.

## ✅ Verification
Once the URL is live, visit it on your phone and laptop to ensure everything looks perfect!
