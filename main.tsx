import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Font Awesome for icons
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
fontAwesomeScript.crossOrigin = 'anonymous';
document.head.appendChild(fontAwesomeScript);

// Add Google Fonts
const googleFontsLink = document.createElement('link');
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap';
googleFontsLink.rel = 'stylesheet';
document.head.appendChild(googleFontsLink);

// Add page title and meta tags
const title = document.createElement('title');
title.textContent = 'Manish Regar - Ethical Hacker & Tech Enthusiast';
document.head.appendChild(title);

const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = '14-year-old ethical hacker from Pune specializing in finding vulnerabilities, website development, OTP services, and social media growth.';
document.head.appendChild(metaDescription);

const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = 'ethical hacking, price glitches, website development, OTP services, social media growth, ManishCountryBall';
document.head.appendChild(metaKeywords);

createRoot(document.getElementById("root")!).render(<App />);
