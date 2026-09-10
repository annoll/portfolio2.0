import { Project } from "@/app/types/index";

export const projects: Project[] = [
    {
        id: 'expense-tracker',
        title: 'Nook',
        category: 'Mobile App',
        categoryTheme: 'emerald',
        description: 'A offline personal finance app designed to help users track expenses, manage budgets, and build better money habits.',
        tags: ['React Native', 'Expo SDK 55', 'SQLite', 'Nativewind'],
        imageSrc: '/images/nookapp.webp',
        githubUrl: 'https://github.com/annoll'
    },

    {
        id: 'deepwell system',
        title: 'Deep Well Water Source and Management System',
        category: 'GIS Dashboard',
        categoryTheme: 'blue',
        description: 'Interactive GIS web dashboard created to map, monitor, and manage community public deep well water sources with real-time status telemetry.',
        tags: ['PHP', 'JavaScript', 'MySQL', 'CSS', 'Leaflet.js'],
        imageSrc: '/images/deep-well.png',
        githubUrl: 'https://github.com/annoll'
    },

    {
        id: 'e-commerce',
        title: 'Multi-Role E-Commerce Web App',
        category: 'Full-Stack',
        categoryTheme: 'amber',
        description: 'Full-featured online store layout with custom product inventory management, cart workflows, user role authentication (Customer vs. Admin), and database seeders.',
        tags: ['PHP', 'JavaScript', 'MySQL', 'CSS'],
        imageSrc: '/images/elasora.png'
    }
]