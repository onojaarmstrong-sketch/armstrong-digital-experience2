# ARMSTRONG — Law × Technology × Innovation

A standalone, static portfolio and knowledge website built with HTML, CSS, and JavaScript. No package installation or build step is required.

## Run locally

From this folder, run:

```powershell
python preview_server.py
```

Open [http://localhost:8766/](http://localhost:8766/) in a browser. The preview server supports direct page URLs such as `/projects` and `/knowledge`.

## Publish with GitHub and Vercel

1. Create a GitHub repository and upload all project files, including the complete `assets/` folder.
2. In Vercel, choose **Add New → Project** and import that GitHub repository.
3. Use the **Other** framework preset. Leave the Build Command empty and set the Output Directory to `.`.
4. Deploy. The included `vercel.json` routes the site's clean page URLs to the app.

The site has no backend or build dependencies. The contact links open an email application or phone dialer. Replace the labeled portrait and project-photo placeholders with images you have permission to publish.
