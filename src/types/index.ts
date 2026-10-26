export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  detail: string;
  status?: string;
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  duration: string;
  description: string;
  tasks: string[];
  systemHighlight?: string;
}

export interface SkillItem {
  name: string;
  category: 'farmasi' | 'sistem_informasi' | 'kesehatan_digital';
  categoryLabel: string;
  description: string;
  level: number;
}

export interface ContactInfo {
  name: string;
  tagline: string;
  quote: string;
  email: string;
  phone: string;
  instagram: string;
  location: string;
  heroImage: string;
  bio: string;
}
