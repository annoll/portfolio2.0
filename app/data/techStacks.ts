// src/data/techStack.ts
import { TechCategory } from '@/app/types/index';

export const techCategories: TechCategory[] = [
  {
    id: 'frontend-mobile',
    title: 'Frontend & Mobile',
    skills: [
      { name: 'TypeScript', iconName: 'typescript' },
      { name: 'JavaScript', iconName: 'javascript' },
      { name: 'React Native / Expo', iconName: 'react' },
      { name: 'Next.js (App Router)', iconName: 'nextjs' },
      { name: 'Tailwind CSS / NativeWind', iconName: 'tailwind' },
      { name: 'HTML5 / CSS3' },
    ],
  },
  {
    id: 'backend-db',
    title: 'Backend & Databases',
    skills: [
      { name: 'PHP / Laravel', iconName: 'laravel' },
      { name: 'SQLite', iconName: 'sqlite' },
      { name: 'Dexie.js' },
      { name: 'MySQL', iconName: 'mysql' },
      
    ],
  },
  {
    id: 'tools-ecosystem',
    title: 'Tools & Ecosystem',
    skills: [
      { name: 'Git / GitHub', iconName: 'github' },
      { name: 'Python', iconName: 'python' },
      { name: 'Canva' },
      { name: 'Vercel' },
      { name: 'Leaflet.js' },
    ],
  },
];