# Himasha Ranaweera - Portfolio

A modern, responsive personal portfolio website showcasing DevOps expertise, cloud infrastructure skills, and AI automation projects.

![React](https://img.shields.io/badge/React-18.1.0-61DAFB?style=flat&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=flat&logo=bootstrap)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=nodedotjs)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🚀 Features

- **Animated Hero Section** - Dynamic typing effect showcasing roles (DevOps Engineer, CI/CD Automation, Cloud Infrastructure, AI DevOps)
- **Technologies Showcase** - Interactive tabbed display of tech stack across Cloud, DevOps, Programming, AI & Security
- **Projects Gallery** - Categorized portfolio of projects with Cloud & DevOps, AI & Automation, and Research & Innovation tabs
- **Contact Form** - Functional email contact form powered by Express.js and Nodemailer
- **Smooth Animations** - Scroll-triggered animations using Animate.css and react-on-screen
- **Fully Responsive** - Mobile-first design with Bootstrap 5

## 🛠️ Tech Stack

### Frontend
- React 18
- React Bootstrap
- React Router DOM
- React Multi Carousel
- Animate.css

### Backend
- Node.js
- Express.js
- Nodemailer
- CORS

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sumudu-Himasha-Ranaweera/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure email (for contact form)**
   
   Update `server.js` with your email credentials:
   ```javascript
   const contactEmail = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: "your-email@gmail.com",
       pass: "your-app-password"
     },
   });
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Start the backend server (for contact form)**
   ```bash
   node server.js
   ```

The app runs on `http://localhost:3000` and the backend on `http://localhost:5000`.

## 📁 Project Structure

```
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── font/          # Custom fonts (CentraNo2)
│   │   └── img/           # Images and icons
│   ├── components/
│   │   ├── Banner.js      # Hero section with typing effect
│   │   ├── NavBar.js      # Navigation bar
│   │   ├── Technologies.js # Skills/Tech stack display
│   │   ├── Projects.js    # Project showcase
│   │   ├── ProjectCard.js # Individual project card
│   │   ├── Contact.js     # Contact form
│   │   └── Footer.js      # Footer section
│   ├── App.js
│   ├── App.css
│   └── index.js
├── server.js              # Express backend for contact form
└── package.json
```

## 🎨 Sections

| Section | Description |
|---------|-------------|
| **Overview** | Introduction with animated role titles |
| **Technologies** | Categorized tech stack (Cloud, DevOps, Programming, AI, Security) |
| **Projects** | Featured work in Cloud & DevOps, AI & Automation, Research |
| **Contact** | Get in touch form with email integration |

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App |

## 🌐 Deployment

Build the production version:
```bash
npm run build
```

The `build` folder will contain optimized static files ready for deployment on platforms like Vercel, Netlify, or AWS S3.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sumudu Himasha Ranaweera**

Senior DevOps Engineer with 5+ years of experience in CI/CD automation, cloud infrastructure (AWS, Azure, Oracle Cloud), and Kubernetes-based platforms.

---

⭐ If you found this helpful, please star the repository!
