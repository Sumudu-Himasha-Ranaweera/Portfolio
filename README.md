# Himasha Ranaweera - Portfolio

A modern, responsive personal portfolio website showcasing expertise in DevOps, Cloud Infrastructure, AI Automation, and Software Engineering.

![React](https://img.shields.io/badge/React-18.1.0-61DAFB?style=flat&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=flat&logo=bootstrap)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=nodedotjs)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 👤 About

**Sumudu Himasha Ranaweera**  
Senior DevOps Engineer & DevOps Lead | AWS & Azure Specialist

Senior DevOps Engineer with **5+ years** of experience in cloud infrastructure and **2+ years** leading AI-assisted development using Claude AI, GitHub Copilot, and Cursor IDE. Currently at IFS R&D International, driving DevOps excellence through CI/CD automation, Infrastructure as Code (Terraform), and pioneering Model Context Protocol (MCP) server implementations for team productivity.

## 🚀 Features

- **Animated Hero Section** - Dynamic typing effect showcasing roles
- **Technical Skills Showcase** - Interactive tabbed display across Cloud, DevOps, Programming, AI/ML, Databases, Security & Monitoring
- **Projects Gallery** - Categorized portfolio with Cloud & DevOps, AI & Automation, and Research & Innovation
- **Education & Certifications** - Academic background with AWS, Azure, and Oracle certifications
- **Awards Section** - NBQSA Bronze Award, Research Publications
- **Contact Form** - Functional email contact form powered by Express.js and Nodemailer
- **Smooth Animations** - Scroll-triggered animations using Animate.css
- **Fully Responsive** - Mobile-first design with Bootstrap 5

## 🛠️ Tech Stack

### Cloud & DevOps
- **Cloud Platforms:** Microsoft Azure (AKS, App Service, Functions, API Management), AWS, Oracle Cloud
- **Infrastructure as Code:** Terraform, ARM Templates, Azure Bicep, Ansible
- **CI/CD:** Azure DevOps, Jenkins, GitHub Actions
- **Containers:** Docker, Kubernetes (AKS/EKS)

### AI & Development
- **AI Tools:** Claude AI, GitHub Copilot, Cursor AI, MCP Servers
- **ML/DL:** TensorFlow, Keras, OpenCV, Scikit-learn
- **Languages:** Python, .NET, Node.js, TypeScript, Java, Bash

### Frontend
- React 18, React Bootstrap, Next.js
- Animate.css, React Router DOM

### Backend
- Node.js, Express.js
- Nodemailer, CORS

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
│   │   ├── NavBar.js      # Navigation bar with social links
│   │   ├── Technologies.js # Skills/Tech stack display
│   │   ├── Projects.js    # Project showcase
│   │   ├── ProjectCard.js # Individual project card
│   │   ├── Certifications.js # Education & Certifications
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
| **Technologies** | Categorized tech stack (Cloud, DevOps, Programming, AI/ML, Databases, Security, Monitoring) |
| **Projects** | Featured work in Cloud & DevOps, AI & Automation, Research |
| **Certifications** | Education, AWS/Azure/Oracle certifications, Awards |
| **Contact** | Get in touch form with email integration |

## 🏆 Certifications

- AWS Certified Solutions Architect
- AWS Certified Cloud Practitioner
- Microsoft Azure Fundamentals (AZ-900, SC-900, DP-900, AI-900, PL-900)
- Oracle Cloud Infrastructure 2023 Foundations Associate
- Oracle Cloud Data Management 2023 Foundations Associate

## 🎓 Education

- **BSc (Hons) in Information Technology** - SLIIT (First Class, GPA: 3.74)
- **Bachelor of Information Technology** - University of Moratuwa
- **Higher National Diploma in Computer Science** - University of Bedfordshire

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

## 📫 Contact

- **Email:** sumuranaweera@gmail.com
- **LinkedIn:** [linkedin.com/in/sumudu-ranaweera-23340b160](https://www.linkedin.com/in/sumudu-ranaweera-23340b160/)
- **GitHub:** [github.com/Sumudu-Himasha-Ranaweera](https://github.com/Sumudu-Himasha-Ranaweera)
- **Location:** Kadawatha, Sri Lanka

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ If you found this helpful, please star the repository!
