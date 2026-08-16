import { FaYoutube, FaLinkedin } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const skills = [
  {
    skill_name: "RESTful API Design",
    image: "rest.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Error Handling",
    image: "error.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "System Logging",
    image: "logging.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Workflow Automation",
    image: "automation.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "n8n",
    image: "n8n.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "System Design",
    image: "architecture.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Database Design",
    image: "database.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Security & Auth",
    image: "security.png",
    width: 80,
    height: 80,
  },
] as const;

export const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/sharjeelahmad/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/sharjeelahmad",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/sharjeel_dev",
  },
] as const;

export const frontend_skills = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Shopify",
    image: "shopify.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "WordPress",
    image: "wordpress.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
] as const;

export const backend_skills = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Laravel",
    image: "laravel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "n8n",
    image: "n8n.png",
    width: 80,
    height: 80,
  },
] as const;

export const projects = [
  {
    title: "E-commerce Platform with Real-time Inventory",
    image: "/projects/project1.jpg",
    link: "https://github.com/sharjeelahmad",
  },
  {
    title: "AI-Powered CRM with n8n Workflow Automation",
    image: "/projects/project2.jpg",
    link: "https://github.com/sharjeelahmad",
  },
  {
    title: "Stripe Payment Integration & Billing Dashboard",
    image: "/projects/project3.jpg",
    link: "https://github.com/sharjeelahmad",
  },
] as const;

export const navlinks = [
  {
    title: "About me",
    link: "#about",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
  {
    title: "Source Code",
    link: "https://github.com/pyKinsu/NextJs-Portfolio",
  },
  
] as const;
