export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack?: string[];
}

export interface Project {
  id: string;
  name: string;
  category: 'Web' | 'Flutter' | 'AI' | 'E-commerce';
  techStack: string[];
  description: string;
  keyAchievement: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  category: 'Web Development' | 'Flutter Development' | 'AI & Automation' | 'UI/UX Design' | 'Internships & Training' | 'Business Consulting';
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  bulletPoints: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tags: string[];
  content: string;
}

export interface QuickStat {
  label: string;
  value: string;
  suffix?: string;
  iconName: string;
}
