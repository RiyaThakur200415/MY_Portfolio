export type ProjectCategory = 'All' | 'AI / ML' | 'Full Stack' | 'Frontend' | 'Interactive';

export interface WorkflowStep {
  title: string;
  desc: string;
  iconName?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline?: string;
  categoryTag: string;
  category: 'AI / ML' | 'Full Stack' | 'Frontend' | 'Interactive';
  techStack: string[];
  description: string;
  keyFeatures: string[];
  highlights: string[];
  architectureFlow: string[];
  image: string;
  fallbackImage?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  isProminent?: boolean;
  isSourceInactive?: boolean;
  isLiveDemoPending?: boolean;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architectureTitle: string;
    architectureDescription: string;
    workflowSteps: WorkflowStep[];
    engineeringHighlights: string[];
    interactiveType: 'swarm-orchestrator' | 'university-rag' | 'ledgerly-calc' | 'restaurant-menu' | 'cyber-honeypot' | 'music-player' | 'fashion-catalog';
  };
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface TechGroup {
  category: string;
  items: {
    name: string;
    category: string;
    context?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialInfo?: string;
  badge?: string;
}
