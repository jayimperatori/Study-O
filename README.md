
  # Study-O

  This is a code bundle for Study-O. The original project is available at https://www.figma.com/design/NWxbRgXJ5KZ0TlIkQFWef8/Study-O.

  ## Running the code
  
  1) Install dependencies
  
  ```bash
  npm install
  ```
  
  2) Start the dev server (with hot reload)
  
  ```bash
  npm run dev
  ```
  
  3) Build for production
  
  ```bash
  npm run build
  ```
  
  4) Preview the production build locally
  
  ```bash
  npm run preview
  ```
  
  - Dev server: http://localhost:3000
  - Preview server: http://localhost:4173
  
  Prereqs: Node.js 18+ recommended.

  ## Leah's Newsletters (non-technical workflow)
  
  You can add a new weekly newsletter by creating a simple Markdown file.
  
  - Location: `src/newsletters/`
  - File name: `YYYY-MM-DD-your-title.md` (any name is fine)
  - Start the file with this header, then write your content:
  
  ```md
  ---
  title: "My Weekly Update"
  date: "2025-11-08"
  ---
  
  Write your newsletter here in plain text or Markdown.
  ```
  
  That's it. The site automatically detects new files and lists them under the “Newsletters” section. No code changes needed.
  
  Tips:
  - Use `##` for subheadings, `-` for bullet points.
  - Emojis are welcome 🐾
  - Preview locally with `npm run dev` and click the “Newsletters” link.
  
  ### Setting the main photo
  Place your preferred homepage/newsletters photo at:
  - `public/leah-hero.jpg`
  
  The site will automatically use `/leah-hero.jpg` for the homepage hero and the newsletters header. You can replace the file anytime without code changes.
  