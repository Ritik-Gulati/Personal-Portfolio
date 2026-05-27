export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100%
  category: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  achievements?: string[];
}
