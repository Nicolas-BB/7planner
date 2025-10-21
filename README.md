# sevenday-planner

📦7planner
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂@types
 ┃ ┃ ┗ 📜jsx.d.ts
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜gemini.js
 ┃ ┃ ┗ 📜openmeteo.ts
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜app.png
 ┃ ┃ ┣ 📜appStore.png
 ┃ ┃ ┣ 📜assisIcon.png
 ┃ ┃ ┣ 📜calIcon.png
 ┃ ┃ ┣ 📜configIcon.png
 ┃ ┃ ┣ 📜facebook.png
 ┃ ┃ ┣ 📜gemini.png
 ┃ ┃ ┣ 📜googlePlay.png
 ┃ ┃ ┣ 📜houseIcon.png
 ┃ ┃ ┣ 📜instagram.png
 ┃ ┃ ┣ 📜linkedin.png
 ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┣ 📜notificon.png
 ┃ ┃ ┣ 📜plusIcon.png
 ┃ ┃ ┣ 📜profileIcon.png
 ┃ ┃ ┣ 📜tags.png
 ┃ ┃ ┣ 📜week.png
 ┃ ┃ ┗ 📜whatsapp.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂buttons
 ┃ ┃ ┃ ┗ 📜Buttons.jsx
 ┃ ┃ ┣ 📂landing
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┃ ┗ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📂main
 ┃ ┃ ┃ ┃ ┗ 📜Main.jsx
 ┃ ┃ ┗ 📂system
 ┃ ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Chat.jsx
 ┃ ┃ ┃ ┃ ┣ 📂tasks
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Tag.jsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜tagsData.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Task.jsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜tasksData.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜TasksList.jsx
 ┃ ┃ ┃ ┃ ┣ 📂week
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Day.jsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜daysData.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Week.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Assis.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Prof.jsx
 ┃ ┃ ┃ ┗ 📂nav
 ┃ ┃ ┃ ┃ ┣ 📜CreateTask.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Menu.jsx
 ┃ ┃ ┃ ┃ ┣ 📜menuData.js
 ┃ ┃ ┃ ┃ ┗ 📜Nav.jsx
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📂__dashboard
 ┃ ┃ ┃ ┣ 📜assistant.tsx
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜profile.tsx
 ┃ ┃ ┃ ┗ 📜route.tsx
 ┃ ┃ ┣ 📜landing.tsx
 ┃ ┃ ┗ 📜__root.tsx
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂landing
 ┃ ┃ ┃ ┣ 📜footer.module.css
 ┃ ┃ ┃ ┣ 📜header.module.css
 ┃ ┃ ┃ ┣ 📜landing.module.css
 ┃ ┃ ┃ ┗ 📜main.module.css
 ┃ ┃ ┣ 📂system
 ┃ ┃ ┃ ┣ 📜assis.module.css
 ┃ ┃ ┃ ┣ 📜chat.module.css
 ┃ ┃ ┃ ┣ 📜createTask.module.css
 ┃ ┃ ┃ ┣ 📜day.module.css
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┣ 📜main.module.css
 ┃ ┃ ┃ ┣ 📜menu.module.css
 ┃ ┃ ┃ ┣ 📜nav.module.css
 ┃ ┃ ┃ ┣ 📜prof.module.css
 ┃ ┃ ┃ ┣ 📜tag.module.css
 ┃ ┃ ┃ ┣ 📜task.module.css
 ┃ ┃ ┃ ┣ 📜tasksList.module.css
 ┃ ┃ ┃ ┗ 📜week.module.css
 ┃ ┃ ┗ 📜buttons.module.css
 ┃ ┣ 📜main.css
 ┃ ┣ 📜main.tsx
 ┃ ┣ 📜reportWebVitals.ts
 ┃ ┗ 📜routeTree.gen.ts
 ┣ 📜.cta.json
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜LICENSE
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.json
 ┗ 📜vite.config.ts