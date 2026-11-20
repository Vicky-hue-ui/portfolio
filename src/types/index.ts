export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack MERN' | 'Python & ML' | 'Frontend & APIs' | 'All';
  tags: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Internship' | 'Full-Time' | 'Virtual';
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  score?: string;
  details: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
  topics: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    highlight?: boolean;
  }[];
}
