/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'html': "url('https://cdn-icons-png.flaticon.com/512/3291/3291670.png')",
        'c#': "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg')",
        'css': "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817')",
        "js": "url('https://cdn-icons-png.flaticon.com/512/5968/5968292.png')",
        "ts": "url('https://cdn-icons-png.flaticon.com/512/5968/5968381.png')",
        "git": "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg')",
        "github": "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg')",
        "react": "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg')",
        "docker": "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg')",
        "tailwindcss": "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg')",
        "node": "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg')",
        "next": "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg')",
        "nest": "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg')",
        "mysql": "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg')"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
