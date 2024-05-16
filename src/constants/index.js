import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cpp,
  python,
  linux,
  mysql,
  postgresq,
  nextjs,
  postman,
  frontend,
  backend,
  cv,
  githuba,
  linkedin,
  linkedina,
  linkedinb,
  resume,
  banking,
  discord,
  githubmainpage,
  portfolio,
  twitter,
  whatsapp,
  airline,
  travelapp,
  sequelize,
} from "../assets";

export const resumeLink = resume;

export const social = [
  {
    name: "Github",
    icon: githuba,
    link: "https://github.com/grsendha",
  },
  {
    name: "Linkedin",
    icon: linkedinb,
    link: "https://www.linkedin.com/in/gyanaranjan-sendha",
  },
  {
    name: "Resume",
    icon: cv,
    link: resume,
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C++ Developer",
    icon: cpp,
  },
];

const languages = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "python",
    icon: python,
  },
];
const frameworks = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Express",
    icon: "https://icongr.am/devicon/express-original.svg?size=148&color=ffffff",
  },
  {
    name: "Next JS",
    icon: "https://devicon-website.vercel.app/api/nextjs/original.svg?color=%23FFFFFF",
  },
  {
    name: "Sequelize",
    icon: sequelize,
  },
];
const tools = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "VS Code",
    icon: "https://devicon-website.vercel.app/api/vscode/original.svg",
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Postman",
    icon: postman,
  },
];
const databases = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresq,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "C++ Backend Developer",
    company_name: "uTrade",
    iconBg: "#383E56",
    date: "July 2023 - June 2024",
    points: [
      "Collabrated in Implementation of TLS/SSL communication and symmteric Encrytion-Decryption of Interactive messages between our system and NSEs gateway server using OpenSSL APIs.",
      "Leading the development of new features for the company’s HFT system, elevating its capabilities.",
      "Demonstrated strong problem-solving skills by troubleshooting and resolving technical issues, ensuring uninterrupted system functionality.",
      "Bugfixing of several exchanges Implementation such as NSE , BSE and MCX",
    ],
  },
];

const projects = [
  {
    name: "Airline API",
    description:
      "This project is a microservice-based architecture designed to manage various functionalities of an airline booking system.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: airline,
    source_code_link: "https://github.com/grsendha/Airline-API",
  },
  {
    name: "Twitter API",
    description: "Twitter API for post and comments like and many more",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/grsendha/TwitterAPI",
  },
  {
    name: "Finance Banking App",
    description:
      "This app features ultra-secure SSR authentication and Plaid integration for linking bank accounts.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: banking,
    source_code_link: "https://github.com/grsendha/banking-app",
  },
  {
    name: "Whatsapp X Gemini",
    description: "This is a whatsapp like app which has feature of GEMINI AI",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "pink-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/grsendha/whatsapp",
  },
  {
    name: "Portfolio",
    description: "This is the Portfolio",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/grsendha/portfolio_website",
  },

  {
    name: "Github Like App",
    description:
      "This app use github app to fetch repo and show it in a beautiful way",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: githubmainpage,
    source_code_link: "https://github.com/grsendha/Github-App",
  },
  {
    name: "Discord Bot For Pdf Converter",
    description:
      "This bot help to convert pdf files and vice versa and other many features are there",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "discord.js",
        color: "pink-text-gradient",
      },
    ],
    image: discord,
    source_code_link: "https://github.com/grsendha/discord-bot-pdfConverter",
  },
  {
    name: "Travel Agency Landing Page",
    description: "Fully responsive landing page",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: travelapp,
    source_code_link: "https://github.com/grsendha/travel-app",
  },
];

export {
  services,
  databases,
  tools,
  frameworks,
  languages,
  experiences,
  projects,
};
