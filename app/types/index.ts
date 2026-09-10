export type CategoryTheme = 'emerald' | 'blue' | 'amber' | 'neutral';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryTheme: CategoryTheme;
  description: string;
  tags: string[];
  imageSrc: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface TechSkill {
  name: string;
  iconName?: string;
}

export interface TechCategory {
  id: string;
  title: string;
  skills: TechSkill[];
}

export interface SocialLinks {
  label: string;
  url: string;
  iconName: string;
}