import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

// For tracking active section during scroll
export function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function highlightNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavLink);
  highlightNavLink(); // Run on page load
  
  return () => {
    window.removeEventListener('scroll', highlightNavLink);
  };
}
